import test from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { submitContact } from '../src/lib/contact-server.mjs';
import { createContactRateLimiter } from '../src/lib/contact-rate-limit.mjs';
import { resolveContactType, privacyVersion } from '../src/lib/contact-fields.mjs';
import { securityHeaders } from '../src/lib/security-headers.mjs';

const env = { VERCEL_ENV: 'production', CONTACT_GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/test-deployment/exec', CONTACT_SHARED_SECRET: 'b'.repeat(64) };
const valid = () => ({ requestId: randomUUID(), audience: 'personal', name: 'Test', email: 'test@example.com', insuranceType: 'Locuință', consent: 'accepted', noticeVersion: privacyVersion });
const request = (data = valid(), headers = {}, url = 'https://ilyasig.ro/api/contact') => new Request(url, { method: 'POST', headers: { origin: 'https://ilyasig.ro', 'content-type': 'application/json', ...headers }, body: JSON.stringify(data) });
const noForward = () => assert.fail('Rejected requests must not reach Google');

test('Production rejects a forged Host as an allowed Origin and cross-site browser requests without Origin', async () => {
  const forged = request(valid(), { origin: 'https://attacker.example' }, 'https://attacker.example/api/contact');
  assert.equal((await submitContact(forged, { env, fetcher: noForward })).status, 403);
  const crossSite = request();
  crossSite.headers.delete('origin');
  crossSite.headers.set('sec-fetch-site', 'cross-site');
  assert.equal((await submitContact(crossSite, { env, fetcher: noForward })).status, 403);
});

test('Oversized streamed bodies are cancelled before they can be fully buffered', async () => {
  let pulled = 0;
  let cancelled = false;
  const body = new ReadableStream({
    pull(controller) { pulled += 1; controller.enqueue(new Uint8Array(8000)); },
    cancel() { cancelled = true; },
  });
  const streamed = new Request('https://ilyasig.ro/api/contact', { method: 'POST', headers: { origin: 'https://ilyasig.ro', 'content-type': 'application/json' }, body, duplex: 'half' });
  const response = await submitContact(streamed, { env, fetcher: noForward });
  assert.equal(response.status, 413);
  assert.equal(cancelled, true);
  assert.ok(pulled <= 3, `Unexpected buffered chunks: ${pulled}`);
});

test('JSON lookalike content types and line breaks in single-line fields are rejected', async () => {
  assert.equal((await submitContact(request(valid(), { 'content-type': 'application/jsonp' }), { env, fetcher: noForward })).status, 415);
  for (const name of ['Test\nAlt nume', 'Test\tAlt nume', 'Test\x7f']) {
    assert.equal((await submitContact(request({ ...valid(), name }), { env, fetcher: noForward })).status, 400);
  }
});

test('Burst limits return Retry-After without forwarding; the window then resets', async () => {
  const limiter = createContactRateLimiter({ limit: 2, windowMs: 60000 });
  let timestamp = 1000;
  let forwarded = 0;
  const options = { env, now: () => timestamp, rateLimiter: limiter, fetcher: async (_, init) => {
    forwarded += 1;
    const { data } = JSON.parse(JSON.parse(init.body).payload);
    return Response.json({ ok: true, stored: true, requestId: data.requestId });
  } };
  assert.equal((await submitContact(request(), options)).status, 200);
  assert.equal((await submitContact(request(), options)).status, 200);
  const limited = await submitContact(request(), options);
  assert.equal(limited.status, 429);
  assert.equal(limited.headers.get('retry-after'), '60');
  assert.equal(forwarded, 2);
  timestamp += 60000;
  assert.equal((await submitContact(request(), options)).status, 200);
});

test('The limiter has bounded storage and cannot be bypassed by evicting active entries', () => {
  const limiter = createContactRateLimiter({ limit: 1, capacity: 2, windowMs: 1000 });
  assert.equal(limiter('one', 0).allowed, true);
  assert.equal(limiter('two', 0).allowed, true);
  assert.equal(limiter('three', 1).allowed, false);
  assert.equal(limiter('one', 1).allowed, false);
  assert.equal(limiter('three', 1000).allowed, true);
});

test('Product links resolve the correct form options, including accents and uncertain personal needs', () => {
  assert.equal(resolveContactType('personal', 'locuinta'), 'Locuință');
  assert.equal(resolveContactType('business', 'Răspundere civilă și profesională'), 'Răspundere civilă / profesională');
  assert.equal(resolveContactType('business', '', 'analiza'), 'Analiza polițelor existente');
  assert.equal(resolveContactType('personal', '', 'analiza'), '');
  assert.equal(resolveContactType('personal', 'no-such-product'), '');
  assert.equal(resolveContactType('personal', 'Nu știu încă ce mi se potrivește'), 'Nu știu încă ce mi se potrivește');
});

test('Production browser protections block framing, external connections and plugins without eval', () => {
  const headers = Object.fromEntries(securityHeaders().map(header => [header.key, header.value]));
  assert.equal(headers['X-Frame-Options'], 'DENY');
  assert.equal(headers['X-Content-Type-Options'], 'nosniff');
  const csp = headers['Content-Security-Policy'];
  for (const directive of ["frame-ancestors 'none'", "object-src 'none'", "base-uri 'none'", "form-action 'self'", "connect-src 'self'"]) assert.ok(csp.includes(directive));
  assert.ok(!csp.includes('unsafe-eval'));
  assert.ok(!csp.includes('https:'));
});
