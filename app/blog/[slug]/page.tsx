import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata-helpers";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return pageMetadata({
    title: `${post.title} | SeraphCode`,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogType: "article",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  return <BlogPostLayout post={post} />;
}
