import { ArrowDown, ExternalLink } from "lucide-react";
import Image from "next/image";
import * as motion from "motion/react-client";
import { Variants } from "motion";
import { Button } from "../ui/button";
import Link from "next/link";

const milestones = [
  {
    number: "01",
    date: "08 JUL 2024",
    title: "NOSSO 1º SIM",
    desc: "O momento que decidirmos dar uma chance um para o outro. Iniciar um propósito de oração, e buscar se conhecer e conhecer a Deus juntos. Poucos, mas importantes encontros e várias conversas difíceis - uma delas sendo a decisão do primeiro beijo apenas no altar.",
    image: "/first-date.png",
    alt: "Nosso primeiro encontro",
  },
  {
    number: "02",
    date: "20 NOV 2024",
    title: `O INÍCIO DE "NÓS"`,
    desc: "Foi o momento em que tivemos a certeza do que havia um propósito maior para nossas vidas, e que estávamos prontos para buscar nos tornar uma família - uns dizem que foi quando finalmente o João criou coragem, pensem o que quiserem.",
    image: "/pedido-namoro.png",
    alt: "Noivado",
  },
  {
    number: "03",
    date: "20 NOV 2025",
    title: "A CONFIRMAÇÃO",
    desc: "Exatamente um ano depois do pedido de namoro, veio a confirmação daquilo que já sábíamos: estávamos prontos para dar o próximo passo juntos, rumo ao altar - ô muié ruim de fazer surpresa",
    image: "/noivado.jpeg",
    alt: "Noivado",
  },
];

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.3,
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const images = {
  hidden: {},
  show: {
    filter: "grayscale(0)",
    transition: {
      delay: 0.3,
      delayChildren: 0.3,
      staggerChildren: 2,
      repeat: Infinity,
    },
  },
};

const imagesContainer = {
  hidden: {},
  show: {
    filter: "grayscale(0)",
    transition: {
      delay: 0.3,
      delayChildren: 0.3,
      staggerChildren: 0.5,
      repeat: Infinity,
    },
  },
};

const imagesParent = {
  hidden: {},
  show: {
    filter: "grayscale(0)",
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
      repeat: Infinity,
    },
  },
};

const imagesItem: Variants = {
  hidden: {
    filter: "grayscale(1)",
  },
  show: {
    filter: "grayscale(0)",
    scale: 0.9,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      repeatDelay: 5,
    },
  },
};

export const HeroSection = ({ hideButton }: { hideButton?: boolean }) => {
  return (
    <section className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start mx-6">
      {/* Left Column: Title and Decorative Element */}
      <div className="relative space-y-12">
        {/* Large Title */}
        <h1 className="my-8 font-serif text-5xl lg:text-9xl font-light leading-[0.85] tracking-tight text-foreground">
          <motion.div variants={container} initial="hidden" whileInView="show">
            <motion.span variants={item}>
              NOSSA <br className="hidden lg:block" />
            </motion.span>
            <motion.span variants={item}>
              HISTÓRIA <br className="hidden lg:block" />
            </motion.span>
          </motion.div>
        </h1>

        {!hideButton && (
          <Link href="/nossa-historia" className="hidden md:flex">
            <Button
              className="rounded-full mt-4 text-3xl h-fit py-2 font-serif flex"
              size="lg"
            >
              Conheça nossa história <ExternalLink />
            </Button>
          </Link>
        )}

        <div className="absolute animate-bounce md:hidden">
          <ArrowDown />
        </div>

        <div className="absolute -top-3 right-0 w-32 h-32 md:static animate-spin animation-duration-[10s]">
          <svg viewBox="0 0 120 120" className="w-full h-full">
            <circle
              cx="60"
              cy="60"
              r="58"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-foreground/30"
            />

            <defs>
              <path
                id="circlePath"
                d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
              />
            </defs>
            <text className="text-[8px] tracking-[0.3em] uppercase fill-current">
              <textPath href="#circlePath">
                VOCÊ ESTÁ CONVIDADO VOCÊ ESTÁ CONVIDADO
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      <motion.div
        className="grid md:grid-cols-3 gap-6 mb-20 lg:gap-8 data-[hide=true]:max-md:hidden"
        data-hide={hideButton}
        variants={images}
        initial="hidden"
        whileInView="show"
      >
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className="group relative mb-20 md:mb-0 flex flex-col last-of-type:mb-0"
            variants={imagesContainer}
          >
            <motion.div
              className="relative aspect-[9/16] w-[250px] mx-auto overflow-visible rounded-full border border-black/10"
              variants={imagesParent}
            >
              <motion.div className="absolute size-full" variants={imagesItem}>
                <Image
                  src={milestone.image || "/placeholder.svg"}
                  alt={milestone.alt}
                  fill
                  className="object-cover rounded-full"
                />
              </motion.div>
            </motion.div>

            <div className="w-[2px] h-20 bg-linear-to-b from-foreground/20 rounded-full to-transparent mx-auto mt-4" />

            <div className="mt-2 text-center space-y-2">
              <p className="text-xs tracking-widest uppercase text-muted-foreground">
                {milestone.date}
              </p>
              <h3 className="font-serif text-3xl md:text-xl lg:text-2x xl:text-3xl tracking-wide">
                {milestone.title}
              </h3>
              <p className="text-xs tracking-widest text-muted-foreground text-">
                {milestone.desc}
              </p>
            </div>
          </motion.div>
        ))}

        {!hideButton && (
          <Link href="/nossa-historia" className="md:hidden w-full">
            <Button
              className="rounded-full mt-4 text-xl font-serif w-full"
              size="lg"
            >
              Conheça nossa história
            </Button>
          </Link>
        )}
      </motion.div>
    </section>
  );
};
