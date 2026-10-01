import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, siteConfig } from "@/lib/site-config";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/ui/Button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return siteConfig.blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${siteConfig.name}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <SiteShell>
      <main id="main" className="bg-background pb-24 pt-28">
        <article className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link href="/" className="text-sm font-semibold text-bright hover:underline">
            ← Blog
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            {post.category} · {post.date}
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-primary">
            {post.title}
          </h1>
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-[1.75rem]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className="object-cover"
              sizes="768px"
              priority
            />
          </div>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 rounded-[1.5rem] bg-primary p-6 text-white">
            <p className="font-bold">Ready for a professionally clean home?</p>
            <Button href="/#quote" className="mt-4">
              Get a Free Quote
            </Button>
          </div>
        </article>
      </main>
    </SiteShell>
  );
}
