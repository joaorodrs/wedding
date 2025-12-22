import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function OurHistory() {
  const data = [
    {
      title: "2022",
      content: (
        <div>
          <h1 className="text-3xl font-serif">O momento que nos conhecemos</h1>
          <p className="mt-4 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            João e Thais estavam juntos na mesma turma de Administração na
            UNAMA, na segunda metade do ano de 2022.
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            Trocaram poucos olhares, o suficiente pra construir uma pequena
            amizade.
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            Que rapidamente escalou para algo maior, e pior. Sem propósito,
            começaram a se ver com outras intenções.
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            No final do ano, a Thais voltou para a igreja, depois de alguns anos
            afastada, o que fez de um relacionamento com o João algo muito
            improvável de acontecer.
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            E então cada um seguiu o seu próprio caminho.
          </p>
          <div className="my-4 h-[1px] w-full bg-black/10" />
          <div className="flex overflow-x-auto gap-x-2">
            <div className="relative min-w-[80px] aspect-[9/16] rounded-full md:min-w-[200px]">
              <Image
                src="/first-met.jpeg"
                alt="First met"
                fill
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023/2024",
      content: (
        <div>
          <h1 className="text-3xl font-serif">Um reencontro inesperado</h1>
          <p className="mt-4 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            Do final de 2022 para 2023 ambos tiveram em relacionamentos que
            acabaram mal.
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            No fim de 2023, os dois estavam trocando algumas mensagens, quando
            inesperadamente se encontram na orla.
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            Algumas conversas depois, sobre faculdade, vida e principalmente
            sobre Deus. Foi retomada uma antiga amizade.
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            Após João ter um verdadeiro encontro com Deus, ele convida a Thais
            para a nova célula Kairós.
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            A partir daí, em 2024, passam a se ver semanalmente.
          </p>
          <div className="my-4 h-[1px] w-full bg-black/10" />
          <div className="flex overflow-x-auto gap-x-2">
            <div className="relative min-w-[80px] aspect-[9/16] rounded-full md:min-w-[200px]">
              <Image
                src="/god-messages.jpeg"
                alt="God messages"
                fill
                className="rounded-full"
              />
            </div>
            <div className="relative min-w-[80px] aspect-[9/16] rounded-full md:min-w-[200px]">
              <Image
                src="/kairos.jpeg"
                alt="Kairos"
                fill
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h1 className="text-3xl font-serif">Dúvidas, sacrifícios, direção</h1>
          <p className="mt-4 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            Após algumas semanas, João já deixa claro que gostaria de orar sobre
            um compromisso com a Thais.
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            Porém a resposta não é tão simples assim. Thais tinha dúvidas e
            receios, continuaram orando.
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            Um dia, na sacada da casa de uma amiga, João deixou claro os seus
            sentimentos e que não aceitaria mais silêncio da parte dela.
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            Thais então se entregou ao sentimento mas se agarrou mais forte do
            que nunca em suas orações.
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            Em 08/07/2024, saímos para conversar pela primeira vez em quase 2
            anos. Agora com um propósito maior,{" "}
            <b>e com Jesus sentado à mesa</b>.
          </p>
          <div className="my-4 h-[1px] w-full bg-black/10" />
          <div className="flex overflow-x-auto gap-x-2">
            <div className="relative min-w-[80px] aspect-[9/16] rounded-full md:min-w-[200px]">
              <Image
                src="/varanda.jpg"
                alt="Varanda"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="relative min-w-[80px] aspect-[9/16] rounded-full md:min-w-[200px]">
              <Image
                src="/first-date.png"
                alt="First date"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
