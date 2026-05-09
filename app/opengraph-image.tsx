import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "#0A0F14",
          color: "#FFFFFF",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            fontSize: 14,
            letterSpacing: "0.35em",
            color: "#00F5D4",
            textTransform: "uppercase",
          }}
        >
          SeraphCode
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 56,
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            lineHeight: 1.1,
            textShadow:
              "0 0 24px rgba(0,245,212,0.5), -2px 0 #A56CFF, 2px 0 #6FE7FF",
          }}
        >
          Build. Automate. Scale.
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 22,
            color: "#D1D5DB",
            maxWidth: 720,
            lineHeight: 1.4,
          }}
        >
          Custom software, mobile, AI, and cloud — Melbourne, Australia.
        </div>
      </div>
    ),
    { ...size },
  );
}
