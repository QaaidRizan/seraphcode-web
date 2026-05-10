import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/PrivacyPolicy",
        destination: "/privacy-policy",
        permanent: true,
      },
    ];
  },
  // Embedded Chrome previews (Cursor/VS Code “Simple Browser”, some Live Preview
  // extensions) cache aggressively; this avoids stale HTML/CSS during local dev.
  async headers() {
    if (!isDev) {
      return [];
    }
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value:
              "private, no-store, no-cache, max-age=0, must-revalidate, proxy-revalidate",
          },
          { key: "Pragma", value: "no-cache" },
        ],
      },
    ];
  },
};

export default nextConfig;
