import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  siteConfig,
} from "@/lib/site-config";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return siteConfig.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | ${siteConfig.name}`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <SiteShell>
      <main id="main" className="bg-background pb-24 pt-28">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <Link href="/#services" className="text-sm font-semibold text-bright hover:underline">
              ← All services
            </Link>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-primary">
              {service.title}
            </h1>
            <p className="mt-4 text-lg text-muted">{service.description}</p>
            <p className="mt-3 text-sm text-muted">{service.details}</p>
            <p className="mt-6 text-3xl font-extrabold text-primary">
              From ${service.startingPrice}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/#quote" magnetic>
                Get a Free Quote
              </Button>
              <Button href="/#estimate" variant="secondary">
                Estimate Price
              </Button>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <h2 className="font-bold text-primary">What’s included</h2>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {service.included.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Icon name="check" className="h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-bold text-primary">Not included</h2>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {service.notIncluded.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Icon name="close" className="h-4 w-4 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
