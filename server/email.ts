import nodemailer from 'nodemailer';
import type { ContactMessage } from '@shared/schema';

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Email templates
export const emailTemplates = {
  // Email to company when new contact is received
  newContactNotification: (contact: ContactMessage) => ({
    subject: `New Contact Form Submission - ${contact.subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 30px; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { margin-bottom: 30px; }
          .field { margin-bottom: 15px; padding: 10px; background: #f8f9fa; border-left: 4px solid #3b82f6; }
          .field strong { color: #1e40af; display: inline-block; width: 120px; }
          .message-box { background: #f8f9fa; padding: 20px; border-radius: 5px; border-left: 4px solid #10b981; margin: 20px 0; }
          .footer { text-align: center; color: #666; font-size: 12px; border-top: 1px solid #eee; padding-top: 20px; }
          .logo { font-size: 20px; font-weight: bold; color: #1e40af; margin-bottom: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">ALLOY CRAFT</div>
            <h1>New Contact Form Submission</h1>
            <p>Received from your website contact form</p>
          </div>
          
          <div class="content">
            <h2 style="color: #1e40af; margin-bottom: 20px;">Contact Details</h2>
            
            <div class="field">
              <strong>Name:</strong> ${contact.firstName} ${contact.lastName}
            </div>
            
            <div class="field">
              <strong>Email:</strong> <a href="mailto:${contact.email}" style="color: #3b82f6; text-decoration: none;">${contact.email}</a>
            </div>
            
            ${contact.phone ? `
            <div class="field">
              <strong>Phone:</strong> <a href="tel:${contact.phone}" style="color: #3b82f6; text-decoration: none;">${contact.phone}</a>
            </div>
            ` : ''}
            
            ${contact.company ? `
            <div class="field">
              <strong>Company:</strong> ${contact.company}
            </div>
            ` : ''}
            
            <div class="field">
              <strong>Subject:</strong> ${contact.subject}
            </div>
            
            <div class="field">
              <strong>Submitted:</strong> ${new Date(contact.createdAt).toLocaleString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
            
            <h2 style="color: #1e40af; margin: 30px 0 15px 0;">Message</h2>
            <div class="message-box">
              ${contact.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div class="footer">
            <p><strong>Alloy Craft Manufacturing</strong></p>
            <p>#404-01, IGC Saha, Ambala 133104, Haryana, India</p>
            <p>Phone: +91-9896032299 | Email: info@alloycraft.in</p>
            <p style="margin-top: 15px; font-size: 11px;">
              This email was automatically generated from your website contact form.
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
New Contact Form Submission

Name: ${contact.firstName} ${contact.lastName}
Email: ${contact.email}
${contact.phone ? `Phone: ${contact.phone}` : ''}
${contact.company ? `Company: ${contact.company}` : ''}
Subject: ${contact.subject}
Submitted: ${new Date(contact.createdAt).toLocaleString()}

Message:
${contact.message}

---
Alloy Craft Manufacturing
#404-01, IGC Saha, Ambala 133104, Haryana, India
Phone: +91-9896032299 | Email: info@alloycraft.in
    `
  }),

  // Auto-reply email to the person who submitted the form
  autoReply: (contact: ContactMessage) => ({
    subject: `Thank you for contacting Alloy Craft - We'll be in touch soon!`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for contacting Alloy Craft</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 30px; border-radius: 8px; text-align: center; margin-bottom: 30px; }
          .header h1 { margin: 0; font-size: 28px; margin-bottom: 10px; }
          .content { margin-bottom: 30px; }
          .highlight-box { background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 20px 0; }
          .contact-info { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .contact-info h3 { color: #1e40af; margin-top: 0; }
          .footer { text-align: center; color: #666; font-size: 12px; border-top: 1px solid #eee; padding-top: 20px; }
          .logo { font-size: 24px; font-weight: bold; color: white; margin-bottom: 5px; }
          .services { display: flex; flex-wrap: wrap; gap: 10px; margin: 20px 0; }
          .service { background: #e0f2fe; padding: 8px 12px; border-radius: 5px; font-size: 14px; color: #0369a1; }
          @media (max-width: 600px) {
            .container { padding: 20px; }
            .header { padding: 20px; }
            .services { flex-direction: column; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">ALLOY CRAFT</div>
            <h1>Thank You for Your Inquiry!</h1>
            <p>We've received your message and will respond promptly</p>
          </div>
          
          <div class="content">
            <p>Dear ${contact.firstName},</p>
            
            <p>Thank you for contacting <strong>Alloy Craft Manufacturing</strong>. We have successfully received your inquiry regarding "<em>${contact.subject}</em>" and truly appreciate your interest in our precision aluminum manufacturing services.</p>
            
            <div class="highlight-box">
              <h3 style="margin-top: 0; color: #1e40af;">What happens next?</h3>
              <ul style="margin: 0; padding-left: 20px;">
                <li>Our team will review your inquiry within 24 hours</li>
                <li>A technical expert will contact you to discuss your specific requirements</li>
                <li>We'll provide a detailed quote and timeline for your project</li>
                <li>Our engineering team will assist with design optimization if needed</li>
              </ul>
            </div>
            
            <h3 style="color: #1e40af;">Our Specialties</h3>
            <div class="services">
              <span class="service">Aluminum Die Casting</span>
              <span class="service">CNC Machining</span>
              <span class="service">Precision Manufacturing</span>
              <span class="service">Automotive Components</span>
              <span class="service">Agricultural Parts</span>
              <span class="service">Engineering Solutions</span>
            </div>
            
            <div class="contact-info">
              <h3>Get in Touch Directly</h3>
              <p><strong>Mr. Amrit Pal</strong> - Managing Director</p>
              <p>📞 <a href="tel:+919896032299" style="color: #3b82f6; text-decoration: none;">+91-9896032299</a></p>
              <p>📧 <a href="mailto:info@alloycraft.in" style="color: #3b82f6; text-decoration: none;">info@alloycraft.in</a></p>
              <p>📍 #404-01, IGC Saha, Ambala 133104, Haryana, India</p>
              <p><strong>Facility:</strong> 44,000 sq ft state-of-the-art manufacturing facility</p>
            </div>
            
            <p>With over <strong>17 years of experience</strong> since 2007, Alloy Craft has been delivering precision aluminum solutions to industries across India. Our commitment to quality, innovation, and customer satisfaction makes us the preferred choice for complex manufacturing requirements.</p>
            
            <p>We look forward to the opportunity to serve you and exceed your expectations.</p>
            
            <p>Best regards,<br>
            <strong>The Alloy Craft Team</strong></p>
          </div>
          
          <div class="footer">
            <p><strong>Alloy Craft Manufacturing Private Limited</strong></p>
            <p>Precision Aluminum Die Casting & CNC Machining Since 2007</p>
            <p>#404-01, IGC Saha, Ambala 133104, Haryana, India</p>
            <p>Phone: +91-9896032299 | Email: info@alloycraft.in</p>
            <p style="margin-top: 15px; font-size: 11px;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Dear ${contact.firstName},

Thank you for contacting Alloy Craft Manufacturing. We have successfully received your inquiry regarding "${contact.subject}" and appreciate your interest in our precision aluminum manufacturing services.

What happens next?
• Our team will review your inquiry within 24 hours
• A technical expert will contact you to discuss your requirements
• We'll provide a detailed quote and timeline for your project
• Our engineering team will assist with design optimization if needed

Our Specialties:
• Aluminum Die Casting
• CNC Machining
• Precision Manufacturing
• Automotive Components
• Agricultural Parts
• Engineering Solutions

Contact Information:
Mr. Amrit Pal - Managing Director
Phone: +91-9896032299
Email: info@alloycraft.in
Address: #404-01, IGC Saha, Ambala 133104, Haryana, India
Facility: 44,000 sq ft state-of-the-art manufacturing facility

With over 17 years of experience since 2007, Alloy Craft has been delivering precision aluminum solutions to industries across India.

We look forward to serving you.

Best regards,
The Alloy Craft Team

---
Alloy Craft Manufacturing Private Limited
Precision Aluminum Die Casting & CNC Machining Since 2007
Phone: +91-9896032299 | Email: info@alloycraft.in
    `
  })
};

export class EmailService {
  async sendContactNotification(contact: ContactMessage): Promise<void> {
    try {
      const template = emailTemplates.newContactNotification(contact);
      
      await transporter.sendMail({
        from: `"Alloy Craft Website" <${process.env.SMTP_EMAIL}>`,
        to: process.env.SMTP_EMAIL, // Send to your email
        subject: template.subject,
        html: template.html,
        text: template.text,
      });
      
      console.log('Contact notification email sent successfully');
    } catch (error) {
      console.error('Failed to send contact notification email:', error);
      throw error;
    }
  }

  async sendAutoReply(contact: ContactMessage): Promise<void> {
    try {
      const template = emailTemplates.autoReply(contact);
      
      await transporter.sendMail({
        from: `"Alloy Craft Manufacturing" <${process.env.SMTP_EMAIL}>`,
        to: contact.email, // Send to the person who submitted the form
        subject: template.subject,
        html: template.html,
        text: template.text,
      });
      
      console.log(`Auto-reply email sent to ${contact.email}`);
    } catch (error) {
      console.error('Failed to send auto-reply email:', error);
      throw error;
    }
  }

  async testEmailConnection(): Promise<boolean> {
    try {
      await transporter.verify();
      console.log('Email service is ready');
      return true;
    } catch (error) {
      console.error('Email service connection failed:', error);
      return false;
    }
  }
}