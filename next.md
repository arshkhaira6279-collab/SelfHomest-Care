# 🚀 Website Contact Form + Email Integration (Final Implementation Prompt)

## 🎯 Goal

Build a fully working contact form in Next.js that sends all user inquiries from the website directly to:
**[info@safehomenestcare.com.au](mailto:info@safehomenestcare.com.au) (Zoho Mail Inbox)**

---

## ⚙️ Tech Stack

* Next.js (App Router)
* Tailwind CSS
* Nodemailer
* Gmail SMTP (App Password based)

---

## 🔄 Flow Overview

1. User fills contact form on website
2. Form data sent to Next.js API route
3. API uses Nodemailer with Gmail SMTP
4. Email delivered to Zoho business email inbox

---

## 🔐 Environment Setup

Create `.env.local` file:

EMAIL_USER=[yourgmail@gmail.com](mailto:yourgmail@gmail.com)
EMAIL_PASS=your_16_digit_app_password

---

## 📩 Email Configuration Rules

* Use Gmail SMTP (NOT Zoho SMTP)
* Reason: Zoho free plan does not allow SMTP access
* All emails will still be received in Zoho inbox

---

## 💻 Backend API (Next.js)

Create file:

`/app/api/contact/route.js`

Features:

* Accept POST request with:

  * name
  * email
  * message
* Send email using Nodemailer
* Return JSON response (success/error)

---

## 🧾 Email Format

Subject:
New Inquiry from Website

Body (HTML):

* Name
* Email
* Message

Optional:

* Add timestamp
* Add phone field if needed

---

## 🎨 Frontend Form (UI Requirements)

Create responsive form with:

* Name input
* Email input
* Message textarea
* Submit button

Use Tailwind CSS:

* Clean spacing
* Rounded inputs
* Focus states
* Loading state on submit

---

## 🔁 Form Submission Logic

* Use fetch API
* POST to `/api/contact`
* Show:

  * Success message (toast/alert)
  * Error handling

---

## 🔥 Pro Features (Optional but Recommended)

* Add "Reply-To" = user email
* Add loading spinner
* Disable button while sending
* Add validation (required fields)

---

## 🚨 Security Best Practices

* Never expose App Password in frontend
* Always use `.env.local`
* Add rate limiting (optional)
* Sanitize inputs

---

## ✅ Final Outcome

* Website form fully functional
* Emails sent via Gmail SMTP
* Emails received in Zoho business inbox
* No dependency on Zoho SMTP

---

## 💡 Future Upgrade Options

* Switch to Resend / SendGrid (for scalability)
* Store leads in database (Supabase)
* Add admin dashboard
* Auto-reply email to users

---

## 🧠 Notes

This setup is used because:
Zoho Free Plan → SMTP disabled
Gmail SMTP → Reliable + easy workaround

---

## 🎉 Result

Client gets:

* Professional inquiry system
* Business email receiving all leads
* Fully working backend integration

---
mail- arshkhaira6279@gmail.com
app 
password - vqxd oyjs dmjd ppaz
