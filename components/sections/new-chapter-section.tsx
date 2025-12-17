"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export const NewChapterSection = () => {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1], ["-20%", "100%"]);

  return (
    <section>
      <div className="relative">
        <div className="relative aspect-[3/4] overflow-hidden md:aspect-[21/9]">
          <motion.div
            className="relative size-full h-[200vh]"
            style={{ translateY }}
          >
            <Image
              src="/noivado.jpeg"
              alt="Pre-wedding photo"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        {/* Number Overlay */}
        <div className="absolute bottom-0 right-0">
          <span className="font-serif text-8xl lg:text-[200px] text-white mix-blend-difference">
            20/06
          </span>
        </div>
      </div>

      <div className="text-center font-serif leading-[1.8rem] text-8xl mt-16 md:text-[180px] md:leading-normal md:flex md:items-center md:justify-center md:mt-8">
        <h1 className="">João</h1>
        <h1 className="text-black/20 text-9xl leading-[2.8rem] md:text-[200px] md:leading-normal">
          &
        </h1>
        <h1 className="">Thais</h1>
      </div>

      <p className="mt-12 text-center text-lg md:text-xl max-w-3xl mx-auto md:max-w-2xl md:mt-0">
        Uma nova história está sendo escrita pelas mãos de Deus, e somos
        honrados pela sua presença em um momento tão especial!
      </p>

      <div className="w-full flex items-center justify-center mt-12">
        <button className="cursor-pointer bg-foreground text-white py-3 px-4 font-serif text-2xl rounded-full md:mx-auto md:px-8 md:text-3xl hover:ring-1 hover:ring-black/10 hover:ring-offset-10 hover:ring-offset-background transition duration-200 focus:ring-foreground focus:ring-1">
          Confirme sua presença
        </button>
      </div>
    </section>
  );
};
