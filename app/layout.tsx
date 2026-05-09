import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Orbitron, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTABanner } from "@/components/shared/CTABanner";
import { SITE } from "@/lib/constants";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const shareTech = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-share-tech",
  display: "swap",
});

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Seraph Code Pty Ltd",
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    postalCode: "3000",
    addressCountry: "AU",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Custom Software Melbourne`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Custom software development in Melbourne: web, mobile, AI automation, cloud, and enterprise solutions. Australian-owned, compliance-first.",
  openGraph: {
    siteName: SITE.name,
    locale: "en_AU",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  authors: [{ name: SITE.name }],
  other: {
    "geo.placename": "Melbourne",
    "geo.region": "AU-VIC",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0F14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${orbitron.variable} ${jetbrains.variable} ${shareTech.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([orgJsonLd, websiteJsonLd]),
          }}
        />
        {/* App shell above body::before/::after (scanlines + mesh) so UI stays visible */}
        <div className="relative z-10 flex min-h-full flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <CTABanner />
          <Footer />
        </div>
      </body>
    </html>
  );
}
