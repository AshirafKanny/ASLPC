"use server";

import { SITE } from "@/lib/constants";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, name: string, max: number) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see or fill this field, bots usually do.
  if (field(formData, "company", 200)) {
    return { status: "success", message: "Thank you. Your message has been sent." };
  }

  const name = field(formData, "name", 120);
  const email = field(formData, "email", 200);
  const message = field(formData, "message", 5000);

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email and message." };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || SITE.contactEmail;

  if (!apiKey || !from) {
    console.error("Contact form is not configured: set RESEND_API_KEY and CONTACT_FROM_EMAIL.");
    return {
      status: "error",
      message: `Sorry, the form is unavailable right now. Please email us at ${SITE.contactEmail}.`,
    };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Website enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(email)}</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return {
      status: "error",
      message: `Sorry, something went wrong. Please try again or email us at ${SITE.contactEmail}.`,
    };
  }

  return { status: "success", message: "Thank you. Your message has been sent and we will be in touch soon." };
}
