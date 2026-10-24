import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import fs from 'node:fs';
import { createHash, createHmac, randomUUID } from 'node:crypto';

const source = fs.readFileSync(new URL('../google-apps-script/Code.gs', import.meta.url), 'utf8');
const secret = 's'.repeat(64);
function harness() {
  const rows = [], emails = [], cache = new Map();
  const state = { failEmail: false, failStorage: false, capacity: 5000 };
  function range(row, col, height = 1, width = 1) {
    return {
      getValues: () => Array.from({ length: height }, (_, r) => Array.from({ length: width }, (_, c) => rows[row - 1 + r]?.[col - 1 + c] ?? '')),
      setValues: values => { if (state.failStorage) throw new Error('storage'); values.forEach((valuesRow, r) => valuesRow.forEach((v, c) => { rows[row - 1 + r] ||= []; rows[row - 1 + r][col - 1 + c] = v; })); },
      getValue: () => rows[row - 1]?.[col - 1] ?? '',
      setValue: value => { rows[row - 1] ||= []; rows[row - 1][col - 1] = value; },
      createTextFinder: id => { const finder = { matchEntireCell: () => finder, useRegularExpression: () => finder, findNext: () => { const index = rows.findIndex((v, i) => i > 0 && v[0] === id); return index < 0 ? null : { getRow: () => index + 1 }; } }; return finder; },
    };
  }
  const sheet = { getRange: range, getLastRow: () => rows.length, getMaxRows: () => state.capacity, insertRowsAfter: (_, n) => state.capacity += n, getSheetId: () => 123 };
  const lock = { tryLock: () => true, hasLock: () => true, releaseLock: () => {} };
  const context = vm.createContext({ console, Date, JSON, Number, String, Math,
    PropertiesService: { getScriptProperties: () => ({ getProperties: () => ({ SPREADSHEET_ID: 'private-test-registry', NOTIFICATION_EMAIL: 'owner@example.com', CONTACT_SHARED_SECRET: secret }) }) },
    SpreadsheetApp: { openById: () => ({ getSheetByName: () => sheet }), flush: () => {} },
    ContentService: { MimeType: { JSON: 'json' }, createTextOutput: text => ({ setMimeType: () => JSON.parse(text) }) },
    CacheService: { getScriptCache: () => ({ get: key => cache.get(key), put: (key, value) => cache.set(key, value) }) },
    LockService: { getScriptLock: () => lock },
    Utilities: { Charset: { UTF_8: 'utf8' }, DigestAlgorithm: { SHA_256: 'sha256' }, computeDigest: (_, value) => createHash('sha256').update(value).digest(), computeHmacSha256Signature: (value, key) => createHmac('sha256', key).update(value).digest(), base64EncodeWebSafe: value => Buffer.from(value).toString('base64url'), formatDate: d => new Date(d).toISOString() },
    MailApp: { getRemainingDailyQuota: () => 100, sendEmail: value => { if (state.failEmail) throw new Error('email'); emails.push(value); } },
  });
  vm.runInContext(source, context);
  rows.push(Array.from(context.HEADERS));
  return { context, rows, emails, state };
}
const data = () => ({ requestId: randomUUID(), audience: 'business', name: 'Test integrare', email: 'test@example.com', phone: '', business: 'Atelier test', city: 'Cluj', insuranceType: 'Bunuri și echipamente', renewal: '', message: 'Test', consent: 'accepted', privacyVersion: '2026-10-24' });
function event(value, offset = 0) {
  const issuedAt = Date.now() + offset;
  const payload = JSON.stringify({ action: 'submit', data: value, clientHash: 'a'.repeat(64) });
  return { postData: { contents: JSON.stringify({ issuedAt, payload, signature: createHmac('sha256', secret).update(`${issuedAt}.${payload}`).digest('base64url') }) } };
}

test('Store first, notify owner, and retry a request without duplicate rows or duplicate successful emails', () => {
  const h = harness(), d = data();
  assert.equal(h.context.doPost(event(d)).stored, true);
  assert.equal(h.rows.length, 2);
  assert.equal(h.emails.length, 1);
  assert.equal(h.emails[0].to, 'owner@example.com');
  assert.equal(h.emails[0].replyTo, d.email);
  assert.equal(h.rows[1][11], 'Nouă');
  assert.equal(h.rows[1][13], 'Trimisă');
  assert.equal(h.context.doPost(event(d)).stored, true);
  assert.equal(h.rows.length, 2);
  assert.equal(h.emails.length, 1);
  assert.equal(h.context.doPost(event({ ...d, message: 'Different content' })).code, 'id_conflict');
});

test('Email failure preserves the request and the private retry processes it later', () => {
  const h = harness(); h.state.failEmail = true;
  assert.equal(h.context.doPost(event(data())).stored, true);
  assert.equal(h.rows[1][13], 'În așteptare');
  assert.equal(h.rows[1][15], 1);
  h.state.failEmail = false;
  h.context.retryPendingNotifications();
  assert.equal(h.rows.length, 2);
  assert.equal(h.emails.length, 1);
  assert.equal(h.rows[1][13], 'Trimisă');
});

test('Storage failure never sends an email or claims that a request was stored', () => {
  const h = harness(); h.state.failStorage = true;
  assert.equal(h.context.doPost(event(data())).ok, false);
  assert.equal(h.emails.length, 0);
});

test('Expired and forged signatures cannot write or send email', () => {
  const h = harness();
  assert.equal(h.context.doPost(event(data(), -600000)).ok, false);
  const forged = event(data()); const body = JSON.parse(forged.postData.contents); body.signature = 'bad'; forged.postData.contents = JSON.stringify(body);
  assert.equal(h.context.doPost(forged).ok, false);
  assert.equal(h.rows.length, 1);
  assert.equal(h.emails.length, 0);
});

test('Rate limiting applies to new requests and does not block retries', () => {
  const h = harness(), first = data();
  for (let i = 0; i < 5; i++) assert.equal(h.context.doPost(event(i ? data() : first)).stored, true);
  assert.equal(h.context.doPost(event(data())).code, 'rate_limited');
  assert.equal(h.context.doPost(event(first)).stored, true);
  assert.equal(h.rows.length, 6);
});

test('User-entered spreadsheet formulas are stored as inert text', () => {
  const h = harness();
  h.context.doPost(event({ ...data(), name: '=IMPORTXML("https://invalid.example")', phone: '+40700000000' }));
  assert.equal(h.rows[1][3][0], '\u200b');
  assert.equal(h.rows[1][5][0], '\u200b');
});
