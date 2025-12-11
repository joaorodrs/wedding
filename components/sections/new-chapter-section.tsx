"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export const NewChapterSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.2, 1], [2, 2]);
  const translateY = useTransform(scrollYProgress, [0, 2.2], ["-80%", "50%"]);

  return (
    <section className="mt-16">
      <h1 className="font-serif text-4xl">E agora, um novo capítulo...</h1>

      <div className="relative">
        <div className="relative mt-12 aspect-[9/16] overflow-hidden rounded-full border border-black/10 md:aspect-[21/9]">
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
            20.06
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
    </section>
  );
};
