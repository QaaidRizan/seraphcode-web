"use server";

export type ContactState = { ok: boolean; message: string };

export async function submitContact(
  _prev: ContactState | undefined,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill in all required fields." };
  }

  // Wire to email provider (e.g. Resend) in production.
  return {
    ok: true,
    message:
      "Thanks — your message was received. We’ll get back to you shortly.",
  };
}
