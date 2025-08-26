import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

type SupportData = {
  name: string
  email: string
  subject: string
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, subject, message }: SupportData = req.body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email address' })
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'AutoLens Support <support@autolens.net>',
      to: ['lucas@xhil.io'],
      reply_to: email,
      subject: `AutoLens Support: ${subject}`,
      html: `
        <h2>New Support Request</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent from AutoLens Support Form</em></p>
      `,
      text: `
        New Support Request
        
        From: ${name} (${email})
        Subject: ${subject}
        
        Message:
        ${message}
        
        ---
        Sent from AutoLens Support Form
      `
    })

    if (data.error) {
      console.error('Resend error:', data.error)
      throw new Error('Failed to send email')
    }

    res.status(200).json({ message: 'Support request sent successfully' })
  } catch (error) {
    console.error('Support form error:', error)
    res.status(500).json({ message: 'Failed to send support request' })
  }
}