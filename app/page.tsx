import { WeddingNav } from "@/components/wedding-nav";
import { HeroSection } from "@/components/sections/hero-section";
import { NewChapterSection } from "@/components/sections/new-chapter-section";
import { CerimonySection } from "@/components/sections/cerimony";
import { Footer } from "@/components/sections/footer";
import { GiftsSection } from "@/components/sections/gifts";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <WeddingNav />

      <main className="pb-16 flex-1">
        <NewChapterSection />

        <div className="h-[1px] w-full bg-black/10 my-20" />

        <HeroSection />

        <div className="h-[1px] w-full bg-black/10 mt-10 mb-20" />

        <GiftsSection />

        <div className="h-[1px] w-full bg-black/10 mt-10 mb-20" />

        <CerimonySection />

        <Footer />
      </main>
    </div>
  );
}
