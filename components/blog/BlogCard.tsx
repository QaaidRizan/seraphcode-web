import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block h-full"
    >
      <article className="cyber-chamfer cyber-interactive-card flex h-full flex-col border border-border bg-[color:var(--surface-card-50)] p-6 hover:-translate-y-px hover:border-accent hover:shadow-[var(--box-shadow-neon-sm)]">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
          <span className="text-accent">{post.category}</span>
          <span aria-hidden>·</span>
          <time dateTime={post.dateIso}>{post.date}</time>
          <span aria-hidden>·</span>
          <span>{post.readTime}</span>
        </div>
        <h2 className="font-heading mt-4 text-lg font-bold uppercase tracking-wide text-foreground group-hover:text-accent">
          {post.title}
        </h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.description}
        </p>
        <span className="mt-6 font-mono text-xs uppercase tracking-widest text-accent">
          Read article →
        </span>
      </article>
    </Link>
  );
}
