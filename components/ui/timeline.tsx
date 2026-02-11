"use client";
import React, { useRef } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full" ref={containerRef}>
      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item) => (
          <div
            key={item.title}
            className="flex justify-start pt-10 md:gap-10 not-first:md:pt-40"
          >
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-[13px] flex size-10 items-center justify-center rounded-full border border-swamp-green md:left-3">
                <div className="size-4 rounded-full bg-swamp-green p-2" />
              </div>
              <h3 className="hidden text-xl font-serif text-swamp-green md:block md:pl-20 md:text-6xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block text-left text-4xl font-serif text-neutral-500 md:hidden">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
