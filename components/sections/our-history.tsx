import { Timeline } from "@/components/ui/timeline";
import { Quote } from "lucide-react";
import Image from "next/image";

export default function OurHistory() {
  const data = [
    {
      title: "2022",
      content: (
        <div>
          <h1 className="text-3xl font-serif md:text-5xl">Eclesiastes 3:1</h1>
          <p className="mt-4 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            João e Thais se conheceram por acaso no curso de Administração da
            UNAMA, no final de 2022. Entre dúvidas sobre a matéria e trabalhos,
            um dia foram juntos para a parada de ônibus. E o que até aquele
            momento era apenas uma amizade, <u>se tornou algo especial</u>. Ali
            naquela esquina, debaixo de uma pequena árvore, aconteceu o primeiro
            beijo.
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            Mas o que parecia o início de uma bela história, acabou se tornando
            algo sem propósito, sem direção, e principalmente sem Deus,{" "}
            <u>e então Ele nos separou</u>. Após alguns encontros, Thais começou
            a conhecer outra pessoa, envolvida na igreja, que a chamou para
            participar.
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            Alguns meses depois, Thais voltou para a igreja, depois de alguns
            anos afastada, o que fez de um relacionamento com o João algo muito
            improvável de acontecer. E então cada um seguiu o seu próprio
            caminho.
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
      title: "2023",
      content: (
        <div>
          <h1 className="text-3xl font-serif md:text-5xl">João 6:37</h1>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            O ano de 2023 foi marcante para ambos. Thais se firmou na igreja, e
            João, pela primeira vez, conheceu o autor da fé. Ambos relataram
            sobre seus momentos nessa época:
          </p>
          <p className="flex mt-3 gap-x-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            <Quote /> Thais
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            Seu texto
          </p>
          <div className="my-4 h-[1px] w-full bg-black/10" />
          <p className="flex mt-2 gap-x-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            <Quote /> João Paulo
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            No final de 2023, eu vi um stories de uma amiga lendo a bíblia, e
            decidi responder perguntando por onde seria legal começar a ler.
            Sempre tive o interesse de ler mais sobre Deus, mas nunca o havia
            feito. Ela me indicou o livro de Colossenses. Após terminar de ler,
            no dia 22 de outubro desse mesmo ano, consegui sentir uma presença
            inexplicável, e um sentimento de gratidão muito grande. Foi meu
            primeiro encontro com Deus. A partir daí, comecei a orar e ler a
            bíblia, mesmo sem participar de nenhuma igreja. Um mês depois essa
            mesma amiga começou a me chamar para uma célula, e para os cultos
            também. Comecei frequentar a Igreja da Paz, e em fevereiro de 2024
            decidi viver para Aquele que morreu por mim, aceitando Jesus como
            meu Salvador e redentor.
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
      title: "2023/2024",
      content: (
        <div>
          <h1 className="text-3xl font-serif">Um reencontro inesperado</h1>
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
