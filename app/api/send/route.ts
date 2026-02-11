import { NextRequest, NextResponse } from "next/server"
import { resend } from "@/lib/resend"
import { leadFormSchema } from "@/lib/validations"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { fullName, companyName, designation, phone, email, serviceInterested, location } = leadFormSchema.parse(body)

    const adminEmail = process.env.ADMIN_EMAIL || "ashwinvarma15@gmail.com"

    // Email to Admin
    await resend.emails.send({
      from: "ApexCare360 <onboarding@apexcare360.com>", // Update with verified domain if available
      to: adminEmail,
      subject: `New Lead: ${companyName} - ${serviceInterested}`,
      html: `
        <h1>New Corporate Lead Received</h1>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Designation:</strong> ${designation}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${serviceInterested}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `,
    })

    // Auto-reply to User
    await resend.emails.send({
      from: "ApexCare360 <onboarding@apexcare360.com>",
      to: email,
      subject: "We received your request - ApexCare360",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #0E7490;">Thank you for contacting ApexCare360</h1>
          <p>Dear ${fullName},</p>
          <p>We have received your query regarding <strong>${serviceInterested}</strong> for <strong>${companyName}</strong>.</p>
          <p>Our corporate relations expert will get in touch with you shortly to discuss your requirements and provide the best customized quote.</p>
          <br>
          <p>Best Regards,</p>
          <p><strong>ApexCare360 Team</strong></p>
          <hr>
          <p style="font-size: 12px; color: #666;">
            Kamraj Nagar, Vikas Society Galli No 1<br>
            V.N Marg, Ghatkopar East<br>
            Mumbai - 400077
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Link submission error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
