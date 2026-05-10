import { OAuth2Client } from "google-auth-library";

function toBase64UrlUtf8(text: string): string {
  return Buffer.from(text, "utf8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function buildRfc822Message(opts: {
  from: string;
  to: string[];
  replyTo: string;
  subject: string;
  body: string;
}): string {
  const subject = opts.subject.replace(/\r?\n/g, " ").trim();
  return [
    `From: ${opts.from}`,
    `To: ${opts.to.join(", ")}`,
    `Reply-To: ${opts.replyTo}`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "",
    opts.body,
  ].join("\r\n");
}

async function getAccessToken(): Promise<string> {
  const clientId = process.env.GOOGLE_CLIENT_ID?.trim();
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim();
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN?.trim();

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      "Missing GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, or GOOGLE_REFRESH_TOKEN",
    );
  }

  const client = new OAuth2Client(clientId, clientSecret);
  client.setCredentials({ refresh_token: refreshToken });
  const { token } = await client.getAccessToken();
  if (!token) {
    throw new Error("Google OAuth returned no access token (check refresh token).");
  }
  return token;
}

/** Send mail via Gmail API (Google Cloud project + OAuth). */
export async function sendViaGmailApi(opts: {
  from: string;
  to: string[];
  replyTo: string;
  subject: string;
  text: string;
}): Promise<void> {
  const accessToken = await getAccessToken();
  const raw = toBase64UrlUtf8(
    buildRfc822Message({
      from: opts.from,
      to: opts.to,
      replyTo: opts.replyTo,
      subject: opts.subject,
      body: opts.text,
    }),
  );

  const res = await fetch(
    "https://gmail.googleapis.com/gmail/v1/users/me/messages/send",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw }),
    },
  );

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`Gmail API ${res.status}: ${errBody}`);
  }
}
