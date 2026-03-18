Create a fully working contact form with Resend email integration for my Next.js 14 App Router project.

Requirements:
- Install the resend npm package
- Create API route at: app/api/contact/route.js
- Create a ContactForm component at: components/ContactForm.jsx
- Use 'use client' directive on the form component
- Form fields: Full Name, Email, Phone Number, Message
- On submit, send email to: info@safehomenestcare.com.au
- Use from address: onboarding@resend.dev
- Email subject: "New Inquiry from [name]"
- Email body should show all form fields in a clean HTML format
- Show loading state while submitting (disable button, show "Sending...")
- Show success message: "✅ Your message has been sent successfully!"
- Show error message: "❌ Something went wrong. Please try again."
- Clear form after successful submission
- Add basic validation - all fields required
- Use Tailwind CSS for styling
- Make it fully responsive

Environment variable to use:
RESEND_API_KEY=re_xxxxxxxxxx (I will add actual key in .env.local)

Do not use any form library like React Hook Form. Use simple useState only.
Create all files needed and show me what to add in .env.local file.