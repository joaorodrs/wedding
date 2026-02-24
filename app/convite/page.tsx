import { Footer } from "@/components/sections/footer";
import { WeddingNav } from "@/components/wedding-nav";
import Image from "next/image";

export default function Convite() {
  return (
    <div className="min-h-screen bg-background">
      <WeddingNav />

      <main className="pt-32 bg-[url('/capa-inicio.webp')] bg-center pb-12">
        <div className="bg-[#f5f1ea]/50 backdrop-blur-md rounded-t-full p-4 mx-2">
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
      </main>

      <Footer />
    </div>
  );
}
