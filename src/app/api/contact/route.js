import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, email, phone, message } = body;

    if (!fullName || !email || !phone || !message) {
      return Response.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Gmail SMTP — reliable workaround for Zoho free plan SMTP restrictions
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Safe Homenest Care Website" <${process.env.EMAIL_USER}>`,
      to: 'info@safehomenestcare.com.au',
      replyTo: email,
      subject: `New Enquiry from ${fullName} - Safe Homenest Care`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a6b5a;">New Website Enquiry</h2>
          <hr/>
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong><br/>${message}</p>
          <hr/>
          <p style="color: #888; font-size: 12px;">
            Sent from safehomenestcare.com.au contact form<br/>
            ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Perth' })}
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error.message, error.code);
    return Response.json(
      { error: `Failed to send email: ${error.message}` },
      { status: 500 }
    );
  }
}
