import { WeddingNav } from "@/components/wedding-nav";
import { HeroSection } from "@/components/sections/hero-section";
import { NewChapterSection } from "@/components/sections/new-chapter-section";
import OurHistory from "@/components/sections/our-history";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <WeddingNav />

      <main className="pb-16 flex-1">
        <NewChapterSection />

        <div className="h-[1px] w-full bg-black/10 my-20" />

        <HeroSection />

        <OurHistory />
      </main>
    </div>
  );
}
