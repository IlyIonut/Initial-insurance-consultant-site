import { contactConfigured, submitContact } from '@/lib/contact-server.mjs';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 30;
export async function GET() {
  return Response.json({ available: contactConfigured() }, { headers: { 'Cache-Control': 'no-store' } });
}
export async function POST(request: Request) { return submitContact(request); }
