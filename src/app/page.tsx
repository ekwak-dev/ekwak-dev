import { HeroSection } from "@/components/sections/hero";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <CTASection />
    </>
  );
}
