import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { Button } from "@/components/shared/Button";

export function BlogPostLayout({ post }: { post: BlogPost }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="font-mono text-xs uppercase tracking-widest text-accent hover:text-accent-tertiary"
      >
        ← Back to Blog
      </Link>
      <div className="mt-6 inline-flex border border-border bg-muted/30 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
        {post.category}
      </div>
      <h1 className="font-heading mt-4 text-3xl font-black uppercase tracking-wide text-foreground md:text-4xl">
        {post.title}
      </h1>
      <p className="mt-3 font-mono text-xs text-muted-foreground">
        <time dateTime={post.dateIso}>{post.date}</time>
        <span className="mx-2">·</span>
        {post.readTime} read
      </p>
      <div className="cyber-chamfer relative mt-8 overflow-hidden border border-border">
        <Image
          src="/assets/1213.jpg"
          alt=""
          width={1200}
          height={630}
          className="h-auto w-full object-cover"
          priority
        />
      </div>
      <div className="prose prose-invert mt-10 max-w-none space-y-8">
        {post.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-heading text-lg font-bold uppercase tracking-wide text-accent">
              {s.heading}
            </h2>
            {s.paragraphs.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="mt-3 text-base leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
      <div className="mt-12 border-t border-border pt-8">
        <Button variant="outline" href="/contact">
          Get in Touch
        </Button>
      </div>
    </article>
  );
}
