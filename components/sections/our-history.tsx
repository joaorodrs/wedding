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
                className="rounded-full object-cover"
              />
            </div>
            <div className="relative min-w-[80px] aspect-[9/16] rounded-full md:min-w-[200px]">
              <Image
                src="/unama.jpeg"
                alt="UNAMA"
                fill
                className="rounded-full object-cover"
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
            João, pela primeira vez, conheceu o autor da fé. Nesse ano eles não
            tiveram amizade nem nenhum tipo de contato. Pequenos relatos do ano
            de 2023:
          </p>
          <p className="flex mt-3 gap-x-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            <Quote /> Thais
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            Em 2023 eu estava decidida a voltar para os caminhos do Senhor, me
            sentia vazia e por mais que eu gostasse do João, não sentia que era
            o caminho certo a seguir. Eu nem imaginava o que Deus reservava para
            nós dois. Naquele ano eu voltei a buscar ao Senhor e me encontrei na
            Assembleia de Deus Congregação Nova Canaã, onde comecei um novo
            relacionamento com um rapaz que me aproximou da igreja.
            Relacionamento esse que no futuro acabou não dando certo. Mas tudo
            bem, porque o Senhor sempre teve o controle de tudo. Esse período me
            aproximou verdadeiramente do Senhor, me deu muitos amigos em Cristo
            e um lindo ministério para cuidar.
          </p>
          <div className="my-4 h-[1px] w-full bg-black/10" />
          <p className="flex mt-2 gap-x-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            <Quote /> João Paulo
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            No final de 2023, eu vi um stories de uma amiga lendo a bíblia, e
            decidi responder perguntando por onde seria legal começar a ler.
            Sempre tive o interesse de ler mais sobre Deus, mas nunca o havia
            feito. Essa amiga me indicou o livro de Colossenses. Após terminar
            de ler, no dia 22 de outubro desse mesmo ano, consegui sentir uma
            presença inexplicável, e um sentimento de gratidão muito grande. Foi
            meu primeiro encontro com Deus. A partir daí, comecei a orar e ler a
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
                src="/camp.jpg"
                alt="Camp"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="relative min-w-[80px] aspect-[9/16] rounded-full md:min-w-[200px]">
              <Image
                src="/nara.jpg"
                alt="Nara"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="relative min-w-[80px] aspect-[9/16] rounded-full md:min-w-[200px]">
              <Image
                src="/midia.jpg"
                alt="Midia"
                fill
                className="rounded-full object-cover"
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
          <h1 className="text-3xl font-serif md:text-5xl">Mateus 19:6b</h1>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            No final de 2023, João decide voltar a ter contato com a Thais. Após
            algum tempo conversando por mensagem, ambos estavam na orla quando
            "por destino" se encontraram (claramente João não andou a orla
            inteira procurando por ela).
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            Depois desse dia, continuaram conversando por mensagem, sobre
            faculdade, trabalho, vida e fé, compartilhando seus testemunhos e o
            que Deus havia feito em suas vidas.
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            No início de 2024, João convida Thais para visitar a sua célula que
            estava iniciando. Ela aceita o convite e a partir daí eles se
            aproximam, se encontrando todas as quintas às 22h na Av. Anísio
            Chaves (venha participar).
          </p>
          <div className="my-4 h-[1px] w-full bg-black/10" />
          <div className="flex overflow-x-auto gap-x-2">
            <div className="relative min-w-[80px] aspect-[9/16] rounded-full md:min-w-[200px]">
              <Image
                src="/kairos.jpeg"
                alt="Kairos"
                fill
                className="rounded-full object-cover"
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
          <h1 className="text-3xl font-serif md:text-5xl">1ª Coríntios 6:20</h1>
          <p className="mt-4 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            O ano de 2024 foi um ano de dúvidas, sacrifícios e direção. Marcado
            por momentos de mudanças bruscas de direção, muitas incertezas, mas
            principalmente pela mão de Deus no que seria nosso futuro
            relacionamento.
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            João já demonstrava interesse por Thais poucas semanas após o
            reencontro, desde abrir a porta do carro até pequenos gestos de
            cuidado e carinho. Thais por outro lado não estava segura do que
            sentia e acabava não dando aberturas para que eles pudessem se
            aproximar mais. Um dia, na sacada da casa de uma amiga, após meses
            esperando um sinal da Thais, João deixou claro os seus sentimentos e
            que não aceitaria mais silêncio da parte dela.
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            Após isso, os dois se afastaram e se aproximaram mais ainda de Deus,
            buscando uma resposta para o que fazer naquela situação. Ambos
            entendiam a necessidade de estarem em um relacionamento onde a base
            fosse os princípios de Deus. Eles queriam algo para a vida inteira,
            então decidiram calar seus corações e ouvir a voz do Senhor.
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            No dia 08/07/2024, eles saíram para conversar pela primeira vez em
            quase 2 anos. Agora com um propósito maior,{" "}
            <b>e com Jesus sentado à mesa</b>. A partir desse momento, se
            iniciou um propósito em nossas vidas, e através de muitas conversas
            difíceis e orações, fomos construindo o que Deus plantou em nossos
            corações.
          </p>
          <p className="mt-2 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            No fim do ano, no dia 20/12/2024, João decidiu pedir Thais em
            namoro, oficializando o relacionamento.
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
    {
      title: "2025",
      content: (
        <div>
          <h1 className="text-3xl font-serif md:text-5xl">João 15:7</h1>
          <p className="mt-4 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            Em 2025, o relacionamento de João e Thais se fortaleceu cada vez
            mais, criando raízes profundas no amor, e na rocha inabalável que é
            Jesus e Sua Palavra. Foi um ano onde puderam conhecer um ao outro
            ainda mais, já os preparando para tornarem-se um casal, e usando um
            para forjar a vida do outro.
          </p>
          <p className="mt-4 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            Crescendo em fé e em amor, foram recebendo confirmações de que de
            fato Deus tinha planos ainda maiores para serem cumpridos através da
            vida deles. Servindo cada um em sua igreja local, foi nesse ano que
            Thais decidiu se aproximar ainda mais da célula do João, se fazendo
            disponível para receber e servir com instrução, conselho e cuidado
            com todos.
          </p>
          <p className="mt-4 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            No aniversário de namoro dos dois, no dia 20/11/2025, João decidiu
            pedir Thais em casamento, oficializando o compromisso de ambos
            diante de Deus de subir no altar para se tornarem um só. E então, a
            partir desse momento, começaram a planejar o casamento, e a vida que
            teriam juntos, sempre buscando a direção de Deus para cada passo.
          </p>
          <div className="my-4 h-[1px] w-full bg-black/10" />
          <div className="flex overflow-x-auto gap-x-2">
            <div className="relative min-w-[80px] aspect-[9/16] rounded-full md:min-w-[200px]">
              <Image
                src="/camp-25.jpg"
                alt="Camp 2025"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="relative min-w-[80px] aspect-[9/16] rounded-full md:min-w-[200px]">
              <Image
                src="/take-risks.jpg"
                alt="Take Risks"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="relative min-w-[80px] aspect-[9/16] rounded-full md:min-w-[200px]">
              <Image
                src="/gala.jpg"
                alt="Aniversario Tia"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="relative min-w-[80px] aspect-[9/16] rounded-full md:min-w-[200px]">
              <Image
                src="/noivado.jpeg"
                alt="Noivado"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2026",
      content: (
        <div>
          <h1 className="text-3xl font-serif md:text-5xl">Apocalipse 19:7</h1>
          <p className="mt-4 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            O casamento é mais do que um simples documento, ou uma decisão
            tomada por um casal. Ele é uma aliança sagrada que aponta pra algo
            muito maior. Esse algo maior não é carro, não é casa, nem dinheiro e
            nem sequer filhos, esse algo maior é o próprio Deus.
          </p>
          <p className="mt-4 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            O casamento é um reflexo do relacionamento de Cristo com a igreja,
            onde Ele é o noivo e a igreja é a noiva. E assim como Cristo amou a
            igreja e se entregou por ela, dando sua própria vida, o marido deve
            amar sua esposa e se entregar sem ressalvas por ela. E assim como a
            igreja se submete a Cristo, a esposa deve se submeter ao seu marido.
            O casamento é uma oportunidade de viver um amor sacrificial, onde
            ambos os cônjuges se doam um ao outro, buscando sempre o bem do
            outro acima do seu próprio bem.
          </p>
          <p className="mt-4 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            O ano de 2026 é o início de uma nova estação na vida do João e da
            Thais, onde não serão mais dois, mas sim uma só carne. Assim como
            Cristo e a Igreja no fim dos tempos se unirão para sempre, João e
            Thais serão um reflexo ainda imperfeito dessa união, um vislumbre do
            que há de vir.
          </p>
          <p className="mt-4 text-xs font-normal text-muted-foreground tracking-widest md:text-base">
            Será uma honra ter você nesse dia tão especial, onde celebraremos o
            <b> amor, a fé e a união</b>.
          </p>
          <div className="my-4 h-[1px] w-full bg-black/10" />
          <div className="flex overflow-x-auto gap-x-2">
            <div className="relative min-w-[80px] aspect-[9/16] rounded-full md:min-w-[200px]">
              <Image
                src="/casamento-1.webp"
                alt="Pre-wedding 1"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="relative min-w-[80px] aspect-[9/16] rounded-full md:min-w-[200px]">
              <Image
                src="/casamento-2.webp"
                alt="Pre-wedding 2"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div className="relative min-w-[80px] aspect-[9/16] rounded-full md:min-w-[200px]">
              <Image
                src="/casamento-3.webp"
                alt="Pre-wedding 3"
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
