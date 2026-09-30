import { NextResponse } from 'next/server';

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export async function POST(req) {
  let b;
  try { b = await req.json(); } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }); }
  if (b.website) return NextResponse.json({ ok: true }); // honeypot
  const name = String(b.name || '').trim(), email = String(b.email || '').trim(), message = String(b.message || '').trim();
  if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: 'Please enter your name, a valid email and a message.' }, { status: 400 });
  if (message.length > 5000) return NextResponse.json({ error: 'Message is too long.' }, { status: 400 });
  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) return NextResponse.json({ error: 'Email is not set up yet. Please email directly instead.' }, { status: 503 });
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL, to: [CONTACT_TO_EMAIL], reply_to: email,
      subject: `New enquiry from ${name.slice(0, 80)}`,
      html: `<p><b>${esc(name)}</b> (${esc(email)})</p><p>Type: ${esc(b.type || '')}<br>Budget: ${esc(b.budget || '')}</p><p>${esc(message).replace(/\n/g, '<br>')}</p>`,
    }),
  });
  if (!res.ok) return NextResponse.json({ error: 'Could not send your message. Please try again.' }, { status: 502 });
  return NextResponse.json({ ok: true });
}
