import { HeroSection } from "@/components/sections/hero-section";
import OurHistory from "@/components/sections/our-history";
import { WeddingNav } from "@/components/wedding-nav";

export default function OurHistoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <WeddingNav />

      <main className="pb-16 pt-28 flex-1">
        <HeroSection hideButton />

        <OurHistory />
      </main>
    </div>
  );
}
