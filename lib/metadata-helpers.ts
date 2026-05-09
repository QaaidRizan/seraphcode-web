import type { Metadata } from "next";
import { SITE } from "./constants";

export function pageMetadata({
  title,
  description,
  keywords,
  path = "",
  ogType = "website",
}: {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  ogType?: "website" | "article";
}): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    ...(keywords ? { keywords: keywords.split(",").map((k) => k.trim()) } : {}),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: "en_AU",
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
