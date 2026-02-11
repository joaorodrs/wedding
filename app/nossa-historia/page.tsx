import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import OurHistory from "@/components/sections/our-history";
import { Button } from "@/components/ui/button";
import { WeddingNav } from "@/components/wedding-nav";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function OurHistoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <WeddingNav />

      <main className="pb-16 pt-28 flex-1">
        <HeroSection hideButton />

        <OurHistory />

        <section className="max-w-6xl mx-auto mt-12">
          <div className="bg-foreground text-background p-12 rounded-sm">
            <div className="flex items-center gap-4 mb-8">
              <Mail className="w-10 h-10" strokeWidth={1} />
              <h3 className="font-serif text-4xl tracking-tight">RSVP</h3>
            </div>
            <p className="text-lg mb-3 leading-relaxed opacity-90">
              Confirme sua presença até
            </p>
            <p className="font-serif text-4xl mb-8">05 de Maio</p>
            <p className="mb-8 text-base leading-relaxed opacity-80">
              Sua confirmação nos ajuda a preparar cada detalhe com o cuidado
              que você merece.
            </p>
            <Link href="/rsvp" className="block mb-6">
              <Button className="w-full bg-background text-foreground hover:bg-background/90 font-serif text-xl py-7 rounded-sm">
                Confirmar Presença
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
