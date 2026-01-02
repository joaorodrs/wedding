"use client";

import { useEffect, useState } from "react";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date("2026-06-20T16:00:00");
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);

        setTimeLeft({ days, hours, minutes });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000 * 60); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative py-12 md:py-24 px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="size-[250px] md:size-[500px] border border-foreground rounded-full" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Section Title */}
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
          Contando os dias para o
        </p>

        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-16 tracking-tight">
          Nosso Grande Dia
        </h2>

        <div className="grid grid-cols-3 gap-y-8 md:gap-y-16 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="relative">
              <span className="font-serif text-6xl md:text-8xl lg:text-9xl block leading-none">
                {timeLeft.days}
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-foreground/5" />
            </div>
            <p className="text-sm md:text-base tracking-[0.2em] uppercase text-muted-foreground">
              Dia{timeLeft.days !== 1 && "s"}
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <span className="font-serif text-6xl md:text-8xl lg:text-9xl block leading-none">
                {timeLeft.hours}
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-foreground/5" />
            </div>
            <p className="text-sm md:text-base tracking-[0.2em] uppercase text-muted-foreground">
              Hora{timeLeft.hours !== 1 && "s"}
            </p>
          </div>
          <div className="space-y-4">
            <div className="relative">
              <span className="font-serif text-6xl md:text-8xl lg:text-9xl block leading-none">
                {timeLeft.minutes}
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-foreground/5" />
            </div>
            <p className="text-sm md:text-base tracking-[0.2em] uppercase text-muted-foreground">
              Minuto{timeLeft.minutes !== 1 && "s"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
