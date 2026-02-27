import { Footer } from "@/components/sections/footer";
import { WeddingNav } from "@/components/wedding-nav";
import Image from "next/image";
import Link from "next/link";

export default async function Convite({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-background">
      <WeddingNav />

      <main className="pt-32 bg-[url('/capa-inicio.webp')] bg-center pb-12 flex flex-col lg:flex-row">
        <div className="bg-[#f5f1ea]/50 lg:w-1/2 backdrop-blur-md rounded-t-full p-4 mx-2">
          <div className="font-serif flex flex-col gap-2 text-right px-6 border border-[#4e4f3d] pt-12 rounded-t-full pb-4">
            <Image
              src="/brazao.png"
              alt="J&T"
              width={100}
              height={300}
              className="mx-auto"
            />
            <h1 className="font-handwritten text-5xl text-center text-[#4e4f3d]">
              João <span className="text-xl">and</span> Thais
            </h1>
            <p className="font-handwritten text-xl mt-12">
              Celebrare l'amore e la dolce vita.
            </p>
            <p>
              Com a bênção de Deus e de nossas famílias, convidamos você para
              celebrar conosco o nosso casamento.
            </p>
            <h2 className="text-4xl">20.06.26</h2>
            <p>
              Em um cenário preparado com carinho, diremos o nosso "sim" e
              brindaremos à vida e ao amor.
            </p>
            <p>
              Sua presença tornará esse momento ainda mais especial para nós.
            </p>
            <h3 className="font-handwritten text-xl">
              Con amore, vi aspettiamo.
            </h3>
            <div>
              <p>Às 16:00</p>
              <p>Espaço Garden Fest</p>
              <p>Av. Mal. Rondon, 3137 – Santarém</p>
            </div>
          </div>
        </div>
        <div className="bg-[#99a285] lg:w-1/2 lg:rounded-b-full p-4 mx-2 text-white text-center font-serif flex flex-col gap-6 overflow-clip">
          <h1 className="font-handwritten text-4xl mt-4">Outros detalhes</h1>
          <p className="text-left">
            Preparamos um espaço especial com carinho para compartilhar mais
            detalhes do nosso casamento. No site você encontrará informações
            sobre o grande dia, nossa história, menu, traje, lista de presentes
            e outras orientações importantes.
          </p>
          <div className="mt-4">
            <Link href={`/rsvp?c=${id}`} className="block mb-6">
              <button className="w-full py-3 font-serif text-xl tracking-wider transition-all duration-300 bg-foreground text-background hover:opacity-90 cursor-pointer">
                Confirmar Presença
              </button>
            </Link>
            <Link href="/" className="block mb-6">
              <button className="w-full py-3 font-serif text-xl tracking-wider transition-all duration-300 bg-foreground text-background hover:opacity-90 cursor-pointer">
                Acessar site
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
