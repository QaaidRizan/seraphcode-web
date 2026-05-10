"use server";

import { SITE } from "@/lib/constants";
import { sendViaGmailApi } from "@/lib/gmail-send";

export type ContactState = { ok: boolean; message: string };

function contactRecipients(): string[] {
  const raw = process.env.CONTACT_TO_EMAIL?.trim();
  if (raw) {
    return [...new Set(raw.split(/[,;]+/).map((a) => a.trim()).filter(Boolean))];
  }
  return [SITE.email];
}

export async function submitContact(
  _prev: ContactState | undefined,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill in all required fields." };
  }

  const clientId = process.env.GOOGLE_CLIENT_ID?.trim();
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim();
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN?.trim();
  const senderEmail = process.env.GMAIL_SENDER_EMAIL?.trim();

  const to = contactRecipients();

  if (!clientId || !clientSecret || !refreshToken || !senderEmail) {
    return {
      ok: false,
      message:
        process.env.NODE_ENV === "development"
          ? "Add GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN, and GMAIL_SENDER_EMAIL to .env.local (see .env.example for Google Cloud + Gmail API setup), then restart the dev server."
          : "Contact form is not configured. Please try again later or email us directly.",
    };
  }

  const from =
    process.env.GMAIL_FROM?.trim() ||
    `${SITE.name} Website <${senderEmail}>`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    phone ? `Phone: ${phone}` : null,
    service ? `Service: ${service}` : null,
    "",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    await sendViaGmailApi({
      from,
      to,
      replyTo: email,
      subject: `Website contact: ${name}`,
      text,
    });
  } catch (err) {
    console.error("Gmail API send:", err);
    const hint =
      process.env.NODE_ENV === "development" && err instanceof Error
        ? ` (${err.message})`
        : "";
    return {
      ok: false,
      message:
        process.env.NODE_ENV === "development"
          ? `Could not send via Gmail API${hint}. Check OAuth client, refresh token scope gmail.send, and that Gmail API is enabled in Google Cloud.`
          : "Could not send your message. Please try again in a moment.",
    };
  }

  return {
    ok: true,
    message:
      "Thanks — your message was received. We’ll get back to you shortly.",
  };
}
