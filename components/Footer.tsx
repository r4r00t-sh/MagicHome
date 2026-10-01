"use client";

import { siteConfig } from "@/lib/site-config";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-primary-dark text-white">
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-mint/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 organic-blob bg-accent/10 blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {siteConfig.footer.blurb}
            </p>
            <div className="mt-6 flex gap-3">
              {siteConfig.social.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-accent hover:text-accent"
                >
                  <Icon
                    name={
                      item.id === "instagram"
                        ? "instagram"
                        : item.id === "facebook"
                          ? "facebook"
                          : "google"
                    }
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.footer.serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <Icon name="phone" className="mt-0.5 h-4 w-4 text-accent" />
                <a href={siteConfig.phoneHref} className="hover:text-accent">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="mail" className="mt-0.5 h-4 w-4 text-accent" />
                <a href={siteConfig.emailHref} className="hover:text-accent">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="map" className="mt-0.5 h-4 w-4 text-accent" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="clock" className="mt-0.5 h-4 w-4 text-accent" />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>

            <form
              className="mt-6"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const email = new FormData(form).get("email");
                await fetch("/api/quote", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name: "Newsletter",
                    email,
                    phone: "n/a",
                    zip: "78701",
                    service: "newsletter",
                    notes: "Newsletter signup",
                  }),
                });
                form.reset();
                alert("Thanks for joining our newsletter!");
              }}
              aria-label="Newsletter signup"
            >
              <label htmlFor="newsletter" className="sr-only">
                Email for newsletter
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  id="newsletter"
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
                />
                <Button type="submit" className="shrink-0 !px-5 !py-2.5">
                  Join
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Magic Home. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-accent">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-accent">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
