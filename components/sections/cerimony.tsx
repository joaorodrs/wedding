import { Calendar, Clock, ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export const CerimonySection = ({ hideButton }: { hideButton?: boolean }) => (
  <section className="max-w-5xl mx-auto mb-28">
    <div className="text-center max-w-4xl mx-auto mb-20">
      <h1 className="font-serif text-6xl lg:text-8xl mb-6 tracking-tight">
        Cerimônia
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
        Venha celebrar conosco o início de nossa jornada juntos. Será uma honra
        compartilhar este momento especial com você.
      </p>
    </div>

    <div className="relative">
      <div className="grid md:grid-cols-3 gap-12 relative">
        {/* Date Card */}
        <div className="relative">
          <div className="flex flex-col items-center">
            <div className="relative mb-6 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-2 border-foreground/20 flex items-center justify-center bg-background">
                <Calendar
                  className="w-10 h-10 text-foreground/60"
                  strokeWidth={1.5}
                />
              </div>
              <div className="w-px h-8 bg-foreground/10" />
            </div>
            <div className="text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Data
              </p>
              <p className="font-serif text-3xl mb-1 tracking-tight">
                20 de Junho
              </p>
              <p className="text-lg text-muted-foreground">2026</p>
              <p className="text-sm text-muted-foreground mt-2 italic">
                Sábado
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col items-center">
            <div className="relative mb-6 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-2 border-foreground/20 flex items-center justify-center bg-background">
                <Clock
                  className="w-10 h-10 text-foreground/60"
                  strokeWidth={1.5}
                />
              </div>
              <div className="w-px h-8 bg-foreground/10" />
            </div>
            <div className="text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Horário
              </p>
              <p className="font-serif text-3xl mb-1 tracking-tight">16:00</p>
              <p className="text-lg text-muted-foreground">horas</p>
              <p className="text-sm text-muted-foreground mt-2 italic">
                Pontualidade apreciada
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col items-center">
            <div className="relative mb-6 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-2 border-foreground/20 flex items-center justify-center bg-background">
                <MapPin
                  className="w-10 h-10 text-foreground/60"
                  strokeWidth={1.5}
                />
              </div>
              <div className="w-px h-8 bg-foreground/10" />
            </div>
            <div className="text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Local
              </p>
              <p className="font-serif text-3xl mb-1 tracking-tight">
                Chácara Villa Rica
              </p>
              <p className="text-sm text-muted-foreground max-w-[200px] leading-relaxed">
                Rod. Everaldo Martins 135 km 7
                <br />
                Santarém - PA
              </p>
              <Link
                href="/direction"
                className="inline-block mt-3 text-xs tracking-wider uppercase text-foreground/60 hover:text-foreground transition-colors border-b border-foreground/20 hover:border-foreground/60"
              >
                Ver no mapa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    {!hideButton && (
      <div className="w-full flex mt-16">
        <Link href="/cerimonia" className="mx-auto">
          <Button
            className="rounded-full mt-4 text-xl md:text-3xl h-fit py-2 font-serif flex mx-auto"
            size="lg"
          >
            Veja a programação completa <ExternalLink />
          </Button>
        </Link>
      </div>
    )}
  </section>
);
