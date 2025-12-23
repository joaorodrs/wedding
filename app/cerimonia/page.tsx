import { WeddingNav } from "@/components/wedding-nav";
import { Shirt, Users, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CerimonySection } from "@/components/sections/cerimony";

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

      <main className="container mx-auto px-6 pt-32 pb-16">
        <CerimonySection hideButton />

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="font-serif text-4xl lg:text-5xl text-center mb-12">
            Programação do Dia
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="font-serif text-2xl text-foreground/60 group-hover:text-foreground transition-colors">
                    {item.time}
                  </span>
                </div>
                <div className="flex-shrink-0 mt-3">
                  <div className="w-3 h-3 rounded-full bg-foreground/20 group-hover:bg-foreground/60 transition-colors" />
                </div>
                <div className="flex-1 pb-8 border-b border-border/50">
                  <h3 className="font-serif text-xl mb-1">{item.event}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dress Code Section */}
        <div className="mb-20 bg-muted/30 rounded-lg p-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shirt className="w-8 h-8 text-foreground/60" />
              <h2 className="font-serif text-4xl">Dress Code</h2>
            </div>
            <div className="text-center space-y-6">
              <p className="text-lg leading-relaxed">
                <strong>Traje Passeio Completo</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Para os cavalheiros, sugerimos terno completo ou blazer com
                calça social. Para as damas, vestido longo ou midi, ou conjunto
                elegante.
              </p>

              {/* Color Palette */}
              <div className="pt-6">
                <h3 className="font-serif text-2xl mb-4">
                  Paleta de Cores dos Padrinhos
                </h3>
                <div className="flex justify-center gap-4 mb-4">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-[#2C3E50] mx-auto mb-2 border-2 border-border" />
                    <p className="text-sm">Azul Marinho</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-[#C7A17A] mx-auto mb-2 border-2 border-border" />
                    <p className="text-sm">Champanhe</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-[#E8D5C4] mx-auto mb-2 border-2 border-border" />
                    <p className="text-sm">Nude</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Madrinhas: vestidos em tons de champanhe ou nude
                  <br />
                  Padrinhos: ternos azul marinho
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Wedding Party */}
          <div className="border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-foreground/60" />
              <h3 className="font-serif text-2xl">Informações Adicionais</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                Cerimônia ao ar livre com opção de área coberta
              </li>
              <li className="flex flex-col items-start">
                <span>
                  Sugerimos guardar os celulares durante todo o evento
                </span>
                <span className="text-xs">
                  Todas as fotos serão disponibilizadas aqui neste site
                </span>
              </li>
              <li className="flex items-start">
                Bar aberto durante toda a festa
              </li>
              <li className="flex items-start">Menu especial para crianças</li>
              <li className="flex items-start">Área kids com monitores</li>
            </ul>
          </div>

          {/* RSVP */}
          <div className="border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-8 h-8 text-foreground/60" />
              <h3 className="font-serif text-2xl">Confirme sua Presença</h3>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Por favor, confirme sua presença até o dia{" "}
              <strong>1 de Maio de 2024</strong> para que possamos organizar
              todos os detalhes com carinho.
            </p>
            <Link href="/rsvp">
              <Button className="w-full bg-foreground text-background hover:bg-foreground/90 font-serif text-lg py-6">
                Confirmar Presença
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Ou envie um e-mail para:{" "}
              <a
                href="mailto:rsvp@juntosparasempre.com"
                className="underline hover:opacity-70"
              >
                rsvp@juntosparasempre.com
              </a>
            </p>
          </div>
        </div>

        {/* Photo Section */}
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="Local da cerimônia"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="font-serif text-3xl mb-2">Villa Toscana</p>
            <p className="text-sm opacity-90">
              Um cenário perfeito para nosso grande dia
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
