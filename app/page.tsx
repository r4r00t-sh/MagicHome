import { SiteShell } from "@/components/SiteShell";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { HowItWorks } from "@/components/HowItWorks";
import { ServiceArea } from "@/components/ServiceArea";
import { Testimonials } from "@/components/Testimonials";
import { QuoteSection } from "@/components/QuoteSection";

export default function HomePage() {
  return (
    <SiteShell>
      <main id="main" className="pb-20 md:pb-0">
        <Hero />
        <TrustBadges />
        <ServicesSection />
        <PricingSection />
        <HowItWorks />
        <ServiceArea />
        <Testimonials />
        <QuoteSection />
      </main>
    </SiteShell>
  );
}
