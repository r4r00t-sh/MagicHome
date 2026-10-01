import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAreaBySlug, siteConfig } from "@/lib/site-config";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/ui/Button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return siteConfig.areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  return {
    title: `House Cleaning in ${area.name} | ${siteConfig.name}`,
    description: area.blurb,
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  return (
    <SiteShell>
      <main id="main" className="bg-background pb-24 pt-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link href="/#areas" className="text-sm font-semibold text-bright hover:underline">
            ← All areas
          </Link>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-primary">
            House Cleaning in {area.name}
          </h1>
          <p className="mt-4 text-lg text-muted">{area.blurb}</p>
          <p className="mt-4 text-sm text-muted">
            ZIP coverage includes prefixes like{" "}
            {area.zipPrefixes.join(", ")}. Confirm your exact ZIP on the quote form.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#quote" magnetic>
              Get a Free Quote
            </Button>
            <Button href="/pricing" variant="secondary">
              View Pricing
            </Button>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
