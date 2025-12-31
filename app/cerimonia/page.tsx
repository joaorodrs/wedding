import { WeddingNav } from "@/components/wedding-nav";
import { Calendar, Clock, MapPin, Shirt, Users, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CerimoniaPage() {
  const timeline = [
    {
      time: "16:00",
      event: "Chegada dos Convidados",
      description: "Recepção com bebidas de boas-vindas",
    },
    {
      time: "16:30",
      event: "Início da Cerimônia",
      description: "Entrada dos noivos e cerimônia de casamento",
    },
    {
      time: "17:30",
      event: "Coquetel",
      description: "Drinks e canapés no jardim",
    },
    {
      time: "19:00",
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
      description: "Dança e celebração até às 2h",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <WeddingNav />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
            {/* Left side - Dramatic typography */}
            <div className="relative">
              <div className="absolute -left-8 top-0 w-1 h-32 bg-foreground/10" />
              <h1 className="font-serif text-[12vw] lg:text-[8rem] leading-[0.9] tracking-tight mb-8">
                Cerimô
                <br />
                nia
              </h1>
              <div className="max-w-md space-y-6 text-lg leading-relaxed text-muted-foreground border-l-2 border-foreground/20 pl-6">
                <p className="italic">
                  Um momento único, uma celebração eterna.
                </p>
                <p>
                  Venha testemunhar o início de nossa jornada juntos em uma
                  cerimônia que promete ser inesquecível.
                </p>
              </div>
            </div>

            {/* Right side - Essential info in elegant cards */}
            <div className="space-y-8">
              <div className="bg-foreground text-background p-10 rounded-sm">
                <div className="flex items-start gap-6">
                  <Calendar
                    className="w-12 h-12 flex-shrink-0 mt-1"
                    strokeWidth={1}
                  />
                  <div>
                    <p className="text-xs tracking-[0.4em] uppercase opacity-70 mb-3">
                      Data
                    </p>
                    <p className="font-serif text-5xl mb-2 tracking-tight">
                      15 Jun
                    </p>
                    <p className="text-xl opacity-90">2024 • Sábado</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-foreground/20 p-10 rounded-sm">
                <div className="flex items-start gap-6">
                  <Clock
                    className="w-12 h-12 flex-shrink-0 mt-1"
                    strokeWidth={1}
                  />
                  <div>
                    <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3">
                      Horário
                    </p>
                    <p className="font-serif text-5xl mb-2 tracking-tight">
                      16:00h
                    </p>
                    <p className="text-xl text-muted-foreground">
                      Pontualidade apreciada
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-10 rounded-sm">
                <div className="flex items-start gap-6">
                  <MapPin
                    className="w-12 h-12 flex-shrink-0 mt-1"
                    strokeWidth={1}
                  />
                  <div className="flex-1">
                    <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3">
                      Local
                    </p>
                    <p className="font-serif text-4xl mb-3 tracking-tight">
                      Villa Toscana
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Rua das Flores, 1234
                      <br />
                      Jardim Europa, São Paulo
                    </p>
                    <Link
                      href="/direction"
                      className="inline-block text-sm tracking-wider uppercase border-b-2 border-foreground hover:opacity-60 transition-opacity"
                    >
                      Ver no mapa →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-foreground text-background py-24 mb-32">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-[1fr,2fr] gap-16 items-start">
                <div className="lg:sticky lg:top-32">
                  <h2 className="font-serif text-6xl lg:text-7xl leading-none mb-6">
                    Progra
                    <br />
                    mação
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
                  Dress
                  <br />
                  Code
                </h2>
                <div className="space-y-6 text-lg leading-relaxed max-w-2xl">
                  <p className="text-2xl font-serif">Traje Passeio Completo</p>
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
                    <div className="w-20 h-20 rounded-full bg-[#2C3E50] flex-shrink-0 border-4 border-background shadow-lg" />
                    <div>
                      <p className="font-serif text-xl">Azul Marinho</p>
                      <p className="text-sm text-muted-foreground">Padrinhos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-[#C7A17A] flex-shrink-0 border-4 border-background shadow-lg" />
                    <div>
                      <p className="font-serif text-xl">Champanhe</p>
                      <p className="text-sm text-muted-foreground">Madrinhas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-[#E8D5C4] flex-shrink-0 border-4 border-background shadow-lg" />
                    <div>
                      <p className="font-serif text-xl">Nude</p>
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
            src="/elegant-wedding-venue-outdoor-garden-ceremony.jpg"
            alt="Local da cerimônia"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-6 pb-16">
              <div className="max-w-3xl">
                <p className="font-serif text-5xl lg:text-6xl text-white mb-4 leading-tight">
                  Villa Toscana
                </p>
                <p className="text-xl text-white/90 leading-relaxed">
                  Um cenário deslumbrante em meio a jardins e arquitetura
                  clássica italiana, o lugar perfeito para começarmos nossa
                  história.
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

              {/* RSVP */}
              <div className="bg-foreground text-background p-12 rounded-sm">
                <div className="flex items-center gap-4 mb-8">
                  <Mail className="w-10 h-10" strokeWidth={1} />
                  <h3 className="font-serif text-4xl tracking-tight">RSVP</h3>
                </div>
                <p className="text-lg mb-3 leading-relaxed opacity-90">
                  Confirme sua presença até
                </p>
                <p className="font-serif text-4xl mb-8">1 de Maio</p>
                <p className="mb-8 text-base leading-relaxed opacity-80">
                  Sua confirmação nos ajuda a preparar cada detalhe com o
                  cuidado que você merece.
                </p>
                <Link href="/rsvp" className="block mb-6">
                  <Button className="w-full bg-background text-foreground hover:bg-background/90 font-serif text-xl py-7 rounded-sm">
                    Confirmar Presença
                  </Button>
                </Link>
                <div className="pt-6 border-t border-background/20">
                  <p className="text-sm opacity-70 mb-2">
                    Ou envie um e-mail para:
                  </p>
                  <a
                    href="mailto:rsvp@casamento.com"
                    className="text-base border-b border-background/40 hover:border-background transition-colors"
                  >
                    rsvp@casamento.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
