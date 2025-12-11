import { ArrowDown } from "lucide-react";
import Image from "next/image";
import * as motion from "motion/react-client";
import { Variants } from "motion";

const milestones = [
  {
    number: "01",
    date: "08 JUL 2024",
    title: "NOSSO 1º SIM",
    image: "/first-date.png",
    alt: "Nosso primeiro encontro",
  },
  {
    number: "02",
    date: "20 NOV 2024",
    title: `O INÍCIO DE "NÓS"`,
    image: "/pedido-namoro.png",
    alt: "Noivado",
  },
  {
    number: "03",
    date: "20 NOV 2025",
    title: "A CONFIRMAÇÃO",
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

export const HeroSection = () => {
  return (
    <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
      {/* Left Column: Title and Decorative Element */}
      <div className="relative space-y-12">
        {/* Large Title */}
        <h1 className="my-8 font-serif text-5xl lg:text-9xl font-light leading-[0.85] tracking-tight text-foreground">
          <motion.div variants={container} initial="hidden" whileInView="show">
            <motion.span variants={item}>
              SAVE <br className="hidden lg:block" />
            </motion.span>
            <motion.span variants={item}>
              THE <br className="hidden lg:block" />
            </motion.span>
            <motion.span variants={item}>DATES</motion.span>
          </motion.div>
        </h1>

        <div className="absolute animate-bounce md:hidden">
          <ArrowDown />
        </div>

        {/* Decorative Circular Monogram */}
        <div className="absolute -top-3 right-0 w-32 h-32 md:static animate-spin animation-duration-[10s]">
          <svg viewBox="0 0 120 120" className="w-full h-full">
            {/* Outer circle */}
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

            {/* Center dots */}
            <circle
              cx="60"
              cy="55"
              r="1.5"
              fill="currentColor"
              className="hidden md:block"
            />
            <circle
              cx="60"
              cy="65"
              r="1.5"
              fill="currentColor"
              className="hidden md:block"
            />
          </svg>
        </div>
      </div>

      {/* Right Column: Timeline Cards */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 lg:gap-8"
        variants={images}
        initial="hidden"
        whileInView="show"
      >
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className="group relative"
            variants={imagesContainer}
          >
            {/* Oval Image Container */}
            <motion.div
              className="relative aspect-[9/16] overflow-visible rounded-full border border-black/10"
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

              {/* Number Overlay */}
              <div className="absolute bottom-0 right-0">
                <span className="font-serif text-8xl lg:text-8xl text-white mix-blend-difference">
                  {milestone.number}
                </span>
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="mt-6 text-center space-y-2">
              <p className="text-xs tracking-widest uppercase text-muted-foreground">
                {milestone.date}
              </p>
              <h3 className="font-serif text-3xl md:text-xl lg:text-2x xl:text-3xl tracking-wide">
                {milestone.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
