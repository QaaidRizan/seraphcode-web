import type { Metadata } from "next";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { pageMetadata } from "@/lib/metadata-helpers";

export const metadata: Metadata = pageMetadata({
  title: "Blog | SeraphCode - IT Company Australia | Software Development Melbourne",
  description:
    "Read our latest insights on IT services, software development, AI automation, and technology trends from SeraphCode, a leading IT company in Australia.",
  keywords:
    "IT company Australia, software development blog, Melbourne IT company, technology insights, Australian IT services",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <BlogHero />
      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
