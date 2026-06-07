"use server";

import { Resend } from "resend";

export async function submitBriefing(formData: FormData) {
  const fullName = formData.get("fullName") as string || "";
  const email = formData.get("email") as string || "";
  const company = formData.get("company") as string || "";
  const scale = formData.get("scale") as string || "";
  const bottleneck = formData.get("bottleneck") as string || "";
  const timeline = formData.get("timeline") as string || "";
  const phone = formData.get("phone") as string || "";

  const displayPhone = phone.trim() !== "" ? phone : "Not Provided";
  const firstName = fullName ? fullName.split(' ')[0] : 'there';

  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "re_your_api_key_here") {
    console.warn("⚠️ RESEND_API_KEY is missing. Simulating email delivery to aidistild@gmail.com for local development.");
    // Simulate network delay to show loading state
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const internalEmailPromise = resend.emails.send({
      from: "DISTILD Intake <intake@distild.ai>",
      to: "aidistild@gmail.com",
      subject: `🚨 New Executive Briefing Request: ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0f172a;">
          <h2 style="color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">New Executive Briefing Request</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 24px;">
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; width: 140px; color: #64748b;"><strong>Full Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${fullName}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Corporate Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${email}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Phone Number:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${displayPhone}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Company:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${company}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Current Scale:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${scale}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><strong>Target Timeline:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9;">${timeline}</td></tr>
          </table>
          <h3 style="margin-top: 32px; color: #0f172a;">Primary AI Bottleneck:</h3>
          <p style="background: #f8fafc; padding: 16px; border-radius: 6px; border: 1px solid #e2e8f0; line-height: 1.6;">${bottleneck}</p>
        </div>
      `,
    });

    const autoResponderPromise = resend.emails.send({
      from: "DISTILD Advisory <Advisory@distild.ai>",
      to: email,
      subject: "Briefing Initiated | Distild Strategy",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #334155; line-height: 1.6;">
          <p>Hello ${firstName},</p>
          <p>We have received your request for an Executive Briefing.</p>
          <p>A principal advisor from our team is currently reviewing your operational profile and the specific structural bottlenecks you highlighted. We will contact you directly within 24 hours to coordinate a dedicated strategy consultation.</p>
          <p>In the meantime, you can review our latest enterprise insights on structural execution directly on our website.</p>
          <p style="margin-top: 32px;">
            Regards,<br/>
            <strong>The Distild Advisory Team</strong>
          </p>
        </div>
      `,
    });

    const results = await Promise.allSettled([internalEmailPromise, autoResponderPromise]);
    
    // Log failures if any without breaking the client response
    results.forEach((result, index) => {
      if (result.status === 'rejected') {
        console.error(`Email Dispatch Failed [Index ${index}]:`, result.reason);
      }
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send briefing email:", error);
    return { success: false, error: "Failed to submit request" };
  }
}
