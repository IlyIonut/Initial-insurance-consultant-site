import test from 'node:test';
import assert from 'node:assert/strict';
import { createHmac, randomUUID } from 'node:crypto';
import { privacyVersion } from '../src/lib/contact-fields.mjs';
import { contactConfigured, submitContact } from '../src/lib/contact-server.mjs';

const env = { CONTACT_GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/test-deployment/exec', CONTACT_SHARED_SECRET: 'a'.repeat(64) };
const valid = () => ({ requestId: randomUUID(), audience: 'business', name: 'Test integrare', email: 'test@example.com', business: 'Atelier test', phone: '', city: 'Cluj', insuranceType: 'Bunuri și echipamente', renewal: '2027-01', message: 'Cerere de test', consent: 'accepted', noticeVersion: privacyVersion, website: '' });
const request = (data, origin = 'https://initial-insurance-consultant-site.vercel.app') => new Request('https://initial-insurance-consultant-site.vercel.app/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json', origin, 'x-vercel-forwarded-for': '192.0.2.1' }, body: JSON.stringify(data) });

test('A confirmed stored record is required; forwarding is signed and keeps the request ID', async () => {
  const data = valid();
  const response = await submitContact(request(data), { env, now: () => 1792843200000, fetcher: async (url, options) => {
    assert.equal(url, env.CONTACT_GOOGLE_SCRIPT_URL);
    const envelope = JSON.parse(options.body);
    assert.equal(envelope.signature, createHmac('sha256', env.CONTACT_SHARED_SECRET).update(`${envelope.issuedAt}.${envelope.payload}`).digest('base64url'));
    const payload = JSON.parse(envelope.payload);
    assert.equal(payload.data.requestId, data.requestId);
    assert.equal(payload.data.privacyVersion, privacyVersion);
    assert.match(payload.clientHash, /^[a-f0-9]{64}$/);
    assert.ok(!options.body.includes('192.0.2.1'));
    return Response.json({ ok: true, stored: true, requestId: data.requestId });
  }});
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true, stored: true, requestId: data.requestId });
  assert.equal(response.headers.get('cache-control'), 'no-store');
});

test('Configuration is private and missing configuration cannot report success', async () => {
  assert.equal(contactConfigured(env), true);
  assert.equal(contactConfigured({ ...env, CONTACT_GOOGLE_SCRIPT_URL: 'https://evil.example/exec' }), false);
  const response = await submitContact(request(valid()), { env: {}, fetcher: () => assert.fail('Must not send') });
  assert.equal(response.status, 503);
});

test('Validation rejects missing consent, mismatched insurance, malformed dates and header injection', async () => {
  for (const patch of [{ consent: '' }, { noticeVersion: '' }, { noticeVersion: '2026-10-24' }, { noticeVersion: '2026-10-25' }, { noticeVersion: '2026-10-25.1' }, { audience: 'other' }, { insuranceType: 'RCA' }, { renewal: '2027-99' }, { email: 'ok@example.com\nBcc: other@example.com' }, { message: 'x'.repeat(1801) }, { business: '' }, { website: 'bot.example' }]) {
    const response = await submitContact(request({ ...valid(), ...patch }), { env, fetcher: () => assert.fail('Must not forward invalid data') });
    assert.equal(response.status, 400, JSON.stringify(patch).slice(0, 90));
  }
});

test('Cross-site submissions are rejected', async () => {
  assert.equal((await submitContact(request(valid(), 'https://other.example'), { env })).status, 403);
});

test('Personal requests do not retain hidden business fields', async () => {
  const data = { ...valid(), audience: 'personal', insuranceType: 'RCA' };
  const response = await submitContact(request(data), { env, fetcher: async (_, options) => {
    const payload = JSON.parse(JSON.parse(options.body).payload);
    assert.equal(payload.data.business, '');
    assert.equal(payload.data.renewal, '');
    return Response.json({ ok: true, stored: true, requestId: data.requestId });
  }});
  assert.equal(response.status, 200);
});

test('Timeouts, HTML error pages and unconfirmed responses never become a successful submission', async () => {
  for (const fetcher of [async () => { throw new Error('timeout'); }, async () => new Response('<html>Login</html>'), async () => Response.json({ ok: true }), async () => Response.json({ ok: true, stored: true, requestId: randomUUID() })]) {
    assert.equal((await submitContact(request(valid()), { env, fetcher })).status, 502);
  }
});

test('Rate limits and duplicate-ID conflicts have explicit error responses', async () => {
  for (const [code, status] of [['rate_limited', 429], ['id_conflict', 409]]) {
    assert.equal((await submitContact(request(valid()), { env, fetcher: async () => Response.json({ ok: false, code }) })).status, status);
  }
});
