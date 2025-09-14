import { HeroSection } from "@/components/sections/hero";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects";
import { MarqueeBanner } from "@/components/sections/marquee-banner";
import { ExpertiseSection } from "@/components/sections/expertise";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <MarqueeBanner />
      <ExpertiseSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
