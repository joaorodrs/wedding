import { Calendar, Clock, ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import * as motion from "motion/react-client";
import { Countdown } from "../countdown";

export const CerimonySection = ({ hideButton }: { hideButton?: boolean }) => (
  <section className="px-6">
    <div>
      <div className="flex flex-col space-y-6 md:flex-row md:justify-between">
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-serif text-5xl mb-8 underline decoration-dim-green decoration-[10px] uppercase lg:text-9xl"
          >
            Cerimônia
          </motion.h1>
          <div className="max-w-md space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="italic text-base">
              Um momento único, uma celebração eterna.
            </p>
            <p>
              Venha testemunhar o início de nossa jornada juntos em uma
              cerimônia que promete ser inesquecível.
            </p>
          </div>
        </div>

        <div className="w-full">
          <Countdown />
        </div>
      </div>

      <div className="space-y-8 md:flex md:items-center md:mt-12 md:h-[300px] md:space-y-0 md:gap-x-6">
        <div className="bg-olive-green text-background p-10 rounded-sm md:flex-1 md:h-full md:flex md:items-center">
          <div className="flex items-start gap-6 md:items-center">
            <Calendar
              className="w-12 h-12 flex-shrink-0 mt-1"
              strokeWidth={1}
            />
            <div>
              <p className="text-xs tracking-[0.4em] uppercase opacity-70 mb-3">
                Data
              </p>
              <p className="font-serif text-5xl mb-2 tracking-tight">20 Jun</p>
              <p className="text-xl opacity-90">2026 • Sábado</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-dim-green p-10 rounded-sm md:flex-1 md:h-full md:flex md:items-center">
          <div className="flex items-start gap-6">
            <Clock className="w-12 h-12 flex-shrink-0 mt-1" strokeWidth={1} />
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3">
                Horário
              </p>
              <p className="font-serif text-5xl mb-2 tracking-tight">16:00h</p>
              <p className="text-xl text-muted-foreground">
                Pontualidade apreciada
              </p>
            </div>
          </div>
        </div>

        <div className="bg-dim-green p-10 rounded-sm md:flex-1 md:h-full md:flex md:items-center">
          <div className="flex items-start gap-6">
            <MapPin className="w-12 h-12 flex-shrink-0 mt-1" strokeWidth={1} />
            <div className="flex-1">
              <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3">
                Local
              </p>
              <p className="font-serif text-4xl mb-3 tracking-tight">
                Espaço Garden Fest
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Av. Mal. Rondon, 3137 - Central
                <br />
                Santarém
              </p>
              <Link
                href="https://maps.app.goo.gl/MKqivXQmuHUhdAvWA"
                target="_blank"
                className="inline-block text-sm tracking-wider uppercase border-b-2 border-foreground hover:opacity-60 transition-opacity"
              >
                Ver no mapa →
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
