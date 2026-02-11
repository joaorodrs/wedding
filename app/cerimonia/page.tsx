import { WeddingNav } from "@/components/wedding-nav";
import { Calendar, Clock, MapPin, Shirt, Users, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CerimonySection } from "@/components/sections/cerimony";
import { Footer } from "@/components/sections/footer";

export default function CerimoniaPage() {
  const timeline = [
    {
      time: "16:00",
      event: "Chegada dos Convidados",
      description: "Recepção com bebidas de boas-vindas",
    },
    {
      time: "17:00",
      event: "Início da Cerimônia",
      description: "Entrada dos noivos e cerimônia de casamento",
    },
    {
      time: "19:00",
      event: "Coquetel Italiano",
      description: "Pizza e aperitivos para os convidados",
    },
    {
      time: "19:30",
      event: "Jantar",
      description: "Jantar servido aos convidados",
    },
    {
      time: "21:00",
      event: "Corte do Bolo",
      description: "Momento especial dos noivos",
    },
    {
      time: "21:30",
      event: "Festa",
      description: "Dança e celebração até às 1h",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <WeddingNav />

      <main className="pt-40 pb-16">
        <CerimonySection hideButton />

        <div className="bg-foreground text-background py-24 my-28">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-[1fr,2fr] gap-16 items-start">
                <div>
                  <h2 className="font-serif text-6xl lg:text-7xl leading-none mb-6">
                    Programação
                  </h2>
                  <p className="text-lg opacity-80 leading-relaxed">
                    Cada momento foi cuidadosamente planejado para celebrar amor
                    e união.
                  </p>
                </div>

                <div className="space-y-1">
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className="group border-t border-background/20 py-8 hover:bg-background/5 transition-colors px-6 -mx-6"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8">
                        <span className="font-serif text-4xl tracking-tight flex-shrink-0 group-hover:scale-110 transition-transform origin-left">
                          {item.time}
                        </span>
                        <div className="flex-1">
                          <h3 className="font-serif text-2xl mb-2 tracking-tight">
                            {item.event}
                          </h3>
                          <p className="text-base opacity-70 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 mb-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[2fr,1fr] gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-1 bg-foreground" />
                  <Shirt className="w-10 h-10" strokeWidth={1} />
                </div>
                <h2 className="font-serif text-6xl lg:text-7xl mb-8 leading-none">
                  Dress Code
                </h2>
                <div className="space-y-6 text-lg leading-relaxed max-w-2xl">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Cavalheiros:</strong>{" "}
                    Terno completo ou blazer com calça social.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Damas:</strong> Vestido
                    longo ou midi, ou conjunto elegante.
                  </p>
                </div>
              </div>

              <div className="bg-muted/30 p-10 rounded-sm">
                <h3 className="font-serif text-3xl mb-8 tracking-tight">
                  Paleta dos Padrinhos
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-olive-green flex-shrink-0 border-4 border-background shadow-lg" />
                    <div>
                      <p className="font-serif text-xl">Verde Oliva</p>
                      <p className="text-sm text-muted-foreground">Madrinhas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-swamp-green flex-shrink-0 border-4 border-background shadow-lg" />
                    <div>
                      <p className="font-serif text-xl">Verde Abacate</p>
                      <p className="text-sm text-muted-foreground">Padrinhos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-vanilla flex-shrink-0 border-4 border-background shadow-lg" />
                    <div>
                      <p className="font-serif text-xl">Baunilha</p>
                      <p className="text-sm text-muted-foreground">Madrinhas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[60vh] lg:h-[70vh] mb-32">
          <Image
            src="/gardenfest.png"
            alt="Local da cerimônia"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-foreground/20" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-6 pb-16">
              <div className="max-w-3xl">
                <p className="font-serif text-5xl lg:text-6xl text-white mb-4 leading-tight">
                  Espaço Garden Fest
                </p>
                <p className="text-xl text-white/90 leading-relaxed">
                  Um espaço verde amplo deslumbrante para o encontro das nossas
                  grandes famílias e dos mais próximos amigos, o lugar perfeito
                  para começarmos nossa história.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1fr,1.5fr] gap-16">
              {/* Additional Info */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <Users className="w-10 h-10" strokeWidth={1} />
                  <h3 className="font-serif text-4xl tracking-tight">
                    Informações
                  </h3>
                </div>
                <ul className="space-y-4 text-base">
                  <li className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span className="text-foreground flex-shrink-0">→</span>
                    <span>
                      Cerimônia ao ar livre com área coberta disponível
                    </span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span className="text-foreground flex-shrink-0">→</span>
                    <span>Estacionamento disponível no local</span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span className="text-foreground flex-shrink-0">→</span>
                    <span>Bar aberto durante toda a celebração</span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span className="text-foreground flex-shrink-0">→</span>
                    <span>Menu especial para crianças</span>
                  </li>
                  <li className="flex gap-3 leading-relaxed text-muted-foreground">
                    <span className="text-foreground flex-shrink-0">→</span>
                    <span>Área kids com monitores especializados</span>
                  </li>
                </ul>
              </div>

              <div className="bg-foreground text-background p-12 rounded-sm">
                <div className="flex items-center gap-4 mb-8">
                  <Mail className="w-10 h-10" strokeWidth={1} />
                  <h3 className="font-serif text-4xl tracking-tight">RSVP</h3>
                </div>
                <p className="text-lg mb-3 leading-relaxed opacity-90">
                  Confirme sua presença até
                </p>
                <p className="font-serif text-4xl mb-8">20 de Maio</p>
                <p className="mb-8 text-base leading-relaxed opacity-80">
                  Sua confirmação nos ajuda a preparar cada detalhe com o
                  cuidado que você merece.
                </p>
                <Link href="/rsvp" className="block mb-6">
                  <Button className="w-full bg-background text-foreground hover:bg-background/90 font-serif text-xl py-7 rounded-sm">
                    Confirmar Presença
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
