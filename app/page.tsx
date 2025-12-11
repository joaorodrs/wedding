import { WeddingNav } from "@/components/wedding-nav";
import { HeroSection } from "@/components/sections/hero-section";
import { NewChapterSection } from "@/components/sections/new-chapter-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <WeddingNav />

      <main className="container mx-auto px-6 pt-32 pb-16">
        <HeroSection />

        <NewChapterSection />
      </main>
    </div>
  );
}
