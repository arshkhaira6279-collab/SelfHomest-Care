Meri Next.js website hai: https://www.safehomenestcare.com.au

Yeh ek NDIS disability support service website hai.
Brand colors: Deep teal/green tones with white.

==============================================
TASK 1: CONTACT FORM EMAIL SETUP
==============================================

Contact page (/contact) mein yeh fields hain:
- Full Name
- Email Address  
- Phone Number
- How can we help? (textarea)
- "Send Message" button

Yeh karo:

1. Install: npm install nodemailer

2. File banao: app/api/contact/route.js

   import nodemailer from 'nodemailer';
   
   export async function POST(req) {
     const body = await req.json();
     const { fullName, email, phone, message } = body;

     const transporter = nodemailer.createTransport({
       host: 'smtp.zoho.com',
       port: 465,
       secure: true,
       auth: {
         user: process.env.ZOHO_EMAIL,
         pass: process.env.ZOHO_PASSWORD,
       },
     });

     await transporter.sendMail({
       from: process.env.ZOHO_EMAIL,
       to: 'info@safehomenestcare.com.au',
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
             Sent from safehomenestcare.com.au contact form
           </p>
         </div>
       `,
       replyTo: email,
     });

     return Response.json({ success: true });
   }

3. .env.local file mein daalo:
   ZOHO_EMAIL=info@safehomenestcare.com.au
   ZOHO_PASSWORD=your_app_password_here

4. .gitignore mein add karo:
   .env.local

5. Contact form component update karo:
   - 'use client' add karo
   - useState se form state manage karo
   - handleSubmit async function banao
   - fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
   - Loading state: button pe "Sending..." dikhao
   - Success: Green toast/message dikhao
   - Error: Red error message dikhao
   - Success hone par form fields clear karo

==============================================
TASK 2: UI POLISHING - CONTACT PAGE
==============================================

Contact page ko premium aur trustworthy banao:

1. FORM CARD:
   - White card with subtle shadow: 
     box-shadow: 0 20px 60px rgba(0,0,0,0.08)
   - Border radius: 16px
   - Padding: 40px
   - Left side mein contact info cards
   - Right side mein form

2. INPUT FIELDS:
   - Border: 1.5px solid #e2e8f0
   - On focus: border-color teal/brand color
   - Border radius: 10px
   - Padding: 14px 16px
   - Smooth transition on focus
   - Label above each field (floating or static)
   - Required fields star (*) mark karo

3. SUBMIT BUTTON:
   - Full width
   - Background: brand teal color
   - Hover pe: slightly darker + translateY(-2px) effect
   - Loading spinner SVG dikhao jab submit ho raha ho
   - Disabled state jab loading ho

4. SUCCESS STATE:
   - Green checkmark animation
   - Message: "Thank you! We'll get back to you within 24 hours."
   - Form hide karo success hone ke baad

5. CONTACT INFO CARDS (Left Side):
   - 📞 Call Us: +61 493 012 435
   - ✉️ Email: info@safehomenestcare.com.au
   - 📍 Location: Aveley, Perth WA
   - 🕐 Hours: Mon-Fri 9am-5pm
   - Har card pe icon, title aur value
   - Hover pe subtle background change

6. PAGE HERO SECTION:
   - "Let's Start The Conversation" heading
   - Subtext: "Our friendly team typically responds within 24 hours"
   - Subtle background pattern ya gradient

==============================================
TASK 3: UI POLISHING - HOME PAGE FORM
==============================================

Home page pe bhi ek contact form section hai.
Woh bhi same /api/contact endpoint use kare.
Same validation aur success/error handling lagao.

==============================================
TASK 4: GENERAL WEBSITE POLISH
==============================================

1. NAVBAR:
   - Scroll hone par: white background + shadow add ho
   - Active page link: underline ya color change
   - Smooth transitions

2. BUTTONS:
   - Saare CTA buttons consistent hon
   - Hover animations smooth hon
   - "Enquire Now" button prominent ho

3. LOADING & TRANSITIONS:
   - Page transitions smooth hon
   - Images lazy load hon properly

4. MOBILE:
   - Contact form mobile pe full width ho
   - Touch-friendly input sizes (min 44px height)
   - Form properly padded on small screens

==============================================
IMPORTANT NOTES:
==============================================

- Website: Next.js (App Router)
- Email goes to: info@safehomenestcare.com.au
- SMTP: Zoho (smtp.zoho.com port 465)
- Brand feel: Professional, caring, trustworthy
- Colors: Teal/green tones — match existing website
- .env.local mein ZOHO_PASSWORD = Zoho App Password
  (accounts.zoho.com se generate karo)
- .env.local kabhi GitHub pe push mat karo!