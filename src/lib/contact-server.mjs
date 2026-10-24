import { createHmac } from 'node:crypto';
import { businessTypes, personalTypes, privacyVersion } from './contact-fields.mjs';

const headers = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' };
const uuid = /^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i;

export function contactConfigured(env = process.env) {
  return Boolean(env.CONTACT_GOOGLE_SCRIPT_URL && env.CONTACT_SHARED_SECRET?.length >= 32
    && /^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(env.CONTACT_GOOGLE_SCRIPT_URL));
}

export function validateContact(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('Verifică datele din formular.');
  const text = (key, max, required = false) => {
    const value = body[key] ?? '';
    if (typeof value !== 'string' || value.length > max || /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(value)) throw new Error('Verifică lungimea și formatul câmpurilor.');
    const clean = value.trim();
    if (required && !clean) throw new Error('Completează toate câmpurile obligatorii.');
    return clean;
  };
  const audience = text('audience', 10, true);
  if (!['business', 'personal'].includes(audience)) throw new Error('Alege pentru cine soliciți consultanță.');
  const requestId = text('requestId', 36, true);
  if (!uuid.test(requestId)) throw new Error('Reîncarcă pagina și încearcă din nou.');
  const name = text('name', 100, true);
  const email = text('email', 180, true);
  if (!/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(email)) throw new Error('Introdu o adresă de email validă.');
  const phone = text('phone', 30);
  if (phone && !/^[+\d() .-]{5,30}$/.test(phone)) throw new Error('Verifică numărul de telefon.');
  const business = audience === 'business' ? text('business', 180, true) : '';
  const insuranceType = text('insuranceType', 100, true);
  if (!(audience === 'business' ? businessTypes : personalTypes).includes(insuranceType)) throw new Error('Alege o asigurare din listă.');
  const renewal = audience === 'business' ? text('renewal', 7) : '';
  if (renewal && !/^20\d{2}-(0[1-9]|1[0-2])$/.test(renewal)) throw new Error('Verifică luna reînnoirii.');
  if (body.consent !== 'accepted') throw new Error('Este necesar acordul pentru a te contacta despre cerere.');
  return { requestId, audience, name, email, phone, business, city: text('city', 100), insuranceType, renewal, message: text('message', 1800), consent: 'accepted', privacyVersion };
}

function json(body, status = 200) { return Response.json(body, { status, headers }); }

export async function submitContact(request, { env = process.env, fetcher = fetch, now = Date.now } = {}) {
  const origin = request.headers.get('origin');
  const allowed = new Set([new URL(request.url).origin, env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')].filter(Boolean));
  if (origin && !allowed.has(origin)) return json({ ok: false, error: 'Cererea trebuie trimisă din formularul site-ului.' }, 403);
  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) return json({ ok: false, error: 'Format de cerere invalid.' }, 415);
  if (Number(request.headers.get('content-length') || 0) > 12000) return json({ ok: false, error: 'Cererea este prea mare.' }, 413);
  let body;
  try {
    const raw = await request.text();
    if (Buffer.byteLength(raw, 'utf8') > 12000) return json({ ok: false, error: 'Cererea este prea mare.' }, 413);
    body = JSON.parse(raw);
  } catch { return json({ ok: false, error: 'Verifică datele din formular.' }, 400); }
  if (body?.website) return json({ ok: false, error: 'Cererea nu a putut fi validată.' }, 400);
  let data;
  try { data = validateContact(body); }
  catch (error) { return json({ ok: false, error: error.message }, 400); }
  if (!contactConfigured(env)) return json({ ok: false, error: 'Trimiterea nu este disponibilă momentan. Poți salva cererea și reveni mai târziu.' }, 503);
  const issuedAt = now();
  const ip = request.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim()
    || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const clientHash = createHmac('sha256', env.CONTACT_SHARED_SECRET).update(ip).digest('hex');
  const payload = JSON.stringify({ action: 'submit', data, receivedAt: new Date(issuedAt).toISOString(), clientHash });
  const signature = createHmac('sha256', env.CONTACT_SHARED_SECRET).update(`${issuedAt}.${payload}`).digest('base64url');
  try {
    const response = await fetcher(env.CONTACT_GOOGLE_SCRIPT_URL, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ issuedAt, payload, signature }), signal: AbortSignal.timeout(22000), redirect: 'follow', cache: 'no-store',
    });
    if (!response.ok) throw new Error('backend');
    const result = await response.json();
    if (result.ok === true && result.stored === true && result.requestId === data.requestId) {
      return json({ ok: true, stored: true, requestId: data.requestId });
    }
    if (result.code === 'rate_limited') return json({ ok: false, error: 'Ai trimis mai multe solicitări într-un interval scurt. Încearcă din nou puțin mai târziu.' }, 429);
    if (result.code === 'id_conflict') return json({ ok: false, error: 'Datele diferă de cererea trimisă anterior. Reîncarcă pagina pentru o cerere nouă.' }, 409);
    throw new Error('unconfirmed');
  } catch {
    // Do not log client details, backend URLs or shared credentials.
    return json({ ok: false, error: 'Înregistrarea nu a putut fi confirmată. Încearcă din nou; aceeași cerere nu va fi adăugată de două ori.' }, 502);
  }
}
