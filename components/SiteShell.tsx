import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { ScrollProgress } from "@/components/ScrollProgress";

export function SiteShell({
  children,
  withMobileBar = true,
}: {
  children: React.ReactNode;
  withMobileBar?: boolean;
}) {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      {children}
      <Footer />
      {withMobileBar ? <MobileStickyBar /> : null}
    </>
  );
}
