import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, program, enrollmentDate, message } = body

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: 'First name, last name, and email are required.' }, { status: 400 })
    }

    const fullName = `${firstName} ${lastName}`

    await resend.emails.send({
      from: 'Ohana Montessori <info@ohanamontessori.com>',
      to: 'info@ohanamontessori.com',
      subject: `New Inquiry from ${fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #6B8F71; padding: 20px 30px;">
            <h1 style="margin: 0; font-size: 20px; color: #fff;">New Inquiry — Ohana Montessori</h1>
          </div>
          <div style="background: #f9f5ef; padding: 30px; color: #1C1C18;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #6B6B5E; width: 150px;">Name</td><td style="padding: 8px 0;">${fullName}</td></tr>
              <tr><td style="padding: 8px 0; color: #6B6B5E;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #6B8F71;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #6B6B5E;">Phone</td><td style="padding: 8px 0;">${phone || '—'}</td></tr>
              <tr><td style="padding: 8px 0; color: #6B6B5E;">Program</td><td style="padding: 8px 0;">${program || '—'}</td></tr>
              <tr><td style="padding: 8px 0; color: #6B6B5E;">Start Date</td><td style="padding: 8px 0;">${enrollmentDate || '—'}</td></tr>
              <tr><td style="padding: 8px 0; color: #6B6B5E; vertical-align: top;">Message</td><td style="padding: 8px 0;">${message ? message.replace(/\n/g, '<br>') : '—'}</td></tr>
            </table>
          </div>
        </div>
      `,
    })

    await resend.emails.send({
      from: 'Ohana Montessori <info@ohanamontessori.com>',
      to: email,
      subject: 'Thank you for reaching out — Ohana Montessori',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #6B8F71; padding: 20px 30px;">
            <h1 style="margin: 0; font-size: 20px; color: #fff;">Ohana Montessori</h1>
          </div>
          <div style="background: #f9f5ef; padding: 30px; color: #1C1C18;">
            <p style="font-size: 16px;">Hi ${firstName},</p>
            <p style="color: #6B6B5E; line-height: 1.6;">Thank you for reaching out to Ohana Montessori! We've received your message and will get back to you within 1 business day.</p>
            <p style="color: #6B6B5E; line-height: 1.6;">We look forward to welcoming your family to our community.</p>
            <p style="color: #6B6B5E; line-height: 1.6;">Warmly,<br/><strong style="color: #1C1C18;">The Ohana Montessori Team</strong><br/><span style="color: #9A9A8E;">(714) 942-7135</span></p>
          </div>
          <div style="background: #1E2820; padding: 16px 30px; text-align: center;">
            <p style="color: #6b6b5e; font-size: 12px; margin: 0;">Ohana Montessori · 2102 N. Tustin Ave, Santa Ana, CA 92705 · <a href="https://ohanamontessori.com" style="color: #6b6b5e;">ohanamontessori.com</a></p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
