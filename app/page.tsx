import { SiteShell } from "@/components/SiteShell";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { WhyMagicHome } from "@/components/WhyMagicHome";
import { HowItWorks } from "@/components/HowItWorks";
import { ServiceArea } from "@/components/ServiceArea";
import { ZipChecker } from "@/components/ZipChecker";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Testimonials } from "@/components/Testimonials";
import { Stats } from "@/components/Stats";
import { EstimateCalculator } from "@/components/EstimateCalculator";
import { BookingSection } from "@/components/BookingSection";
import { BlogSection } from "@/components/BlogSection";
import { CTASection } from "@/components/CTASection";
import { QuoteSection } from "@/components/QuoteSection";
import { FAQ } from "@/components/FAQ";

export default function HomePage() {
  return (
    <SiteShell>
      <main id="main" className="pb-20 md:pb-0">
        <Hero />
        <TrustBadges />
        <ServicesSection />
        <PricingSection />
        <WhyMagicHome />
        <HowItWorks />
        <ServiceArea />
        <ZipChecker />
        <BeforeAfter />
        <Testimonials />
        <Stats />
        <EstimateCalculator />
        <BookingSection />
        <BlogSection />
        <CTASection />
        <QuoteSection />
        <FAQ />
      </main>
    </SiteShell>
  );
}
