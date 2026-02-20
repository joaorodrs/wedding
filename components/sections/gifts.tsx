import { ArrowRight, Gift } from "lucide-react";
import Link from "next/link";

export const GiftsSection = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-foreground/[0.04]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full border border-foreground/[0.03]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] items-center gap-12 lg:gap-20">
          {/* Left: Editorial typography */}
          <div className="text-center md:text-right">
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6">
              Uma forma especial de
            </p>
            <h2 className="font-serif text-[3.5rem] lg:text-[5rem] leading-[0.85] tracking-tight text-foreground">
              <span className="block">Celebrar</span>
              <span className="block italic font-light text-foreground/70">
                Conosco
              </span>
            </h2>
          </div>

          {/* Center: Decorative divider with icon */}
          <div className="hidden lg:flex flex-col items-center gap-6">
            <div className="w-px h-20 bg-foreground/15" />
            <div className="w-16 h-16 rounded-full border border-foreground/20 flex items-center justify-center">
              <Gift className="w-6 h-6 text-foreground/50" strokeWidth={1} />
            </div>
            <div className="w-px h-20 bg-foreground/15" />
          </div>

          {/* Right: Description and CTA */}
          <div className="lg:text-left text-center">
            <p className="font-serif text-xl lg:text-2xl leading-relaxed text-muted-foreground max-w-md">
              Sua presença é o maior presente. Mas se desejar nos presentear,
              preparamos uma lista com carinho.
            </p>

            <Link
              href="/presentes"
              className="group inline-flex items-center gap-4 mt-10 pb-2 border-b border-foreground/20 hover:border-foreground/60 transition-all duration-500"
            >
              <span className="font-serif text-lg tracking-wide text-foreground">
                Ver Lista de Presentes
              </span>
              <ArrowRight
                className="w-5 h-5 text-foreground/60 group-hover:translate-x-2 transition-transform duration-500"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
