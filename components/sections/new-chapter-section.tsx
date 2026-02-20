"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

export const NewChapterSection = () => {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0, 1.5], ["-20%", "100%"]);

  return (
    <section>
      <div className="relative">
        <div className="relative aspect-[3/4] overflow-hidden md:aspect-[21/9] pt-40">
          <motion.div
            className="relative size-full h-[100vh] md:h-[140vh]"
            style={{ translateY }}
          >
            <Image
              src="/capa-inicio.webp"
              alt="Pre-wedding photo"
              fill
              className="object-cover object-top"
              unoptimized
            />
          </motion.div>
        </div>
        {/* Number Overlay */}
        <div id="rsvp" className="absolute bottom-0 right-0">
          <span className="font-serif text-8xl lg:text-[200px] text-white mix-blend-difference">
            20/06
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center mt-16 md:mt-8">
        <Image src="/brazao.png" alt="J&T" width={150} height={150} />
        <div className="mt-12 text-center md:mt-0 font-serif leading-[1.8rem] text-8xl md:text-[180px] md:leading-normal md:flex md:items-center md:justify-center">
          <h1 className="">João</h1>
          <h1 className="text-swamp-green text-9xl leading-[2.8rem] md:text-[200px] md:leading-normal">
            &
          </h1>
          <h1 className="">Thais</h1>
        </div>
      </div>

      <p className="mt-12 px-2 text-center text-lg md:text-xl max-w-3xl mx-auto md:max-w-2xl md:mt-0">
        Uma nova história está sendo escrita pelas mãos de Deus, e somos
        honrados pela sua presença em um momento tão especial!
      </p>

      <div className="w-full flex items-center justify-center mt-12">
        <Link href="/rsvp" className="block mb-6">
          <button className="cursor-pointer bg-foreground text-white py-3 px-4 font-serif text-2xl rounded-full md:mx-auto md:px-8 md:text-3xl hover:ring-1 hover:ring-black/10 hover:ring-offset-10 hover:ring-offset-background transition duration-200 focus:ring-foreground focus:ring-1">
            Confirme sua presença
          </button>
        </Link>
      </div>
    </section>
  );
};
