import Image from "next/image";
import React from "react";

type PlatformGridProps = {
  platform: any[];
};

const PlatformGrid = ({ platform }: PlatformGridProps) => {
  return (
    <div className="content-mt grid gap-4.5 md:grid-cols-2 xl:grid-cols-3">
      {platform.map((item, index) => {
        const Icon = item.icon; 

        return (
          <article
            key={index}
            className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white p-5 lg:p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/[0.05]"
          >
            {/* hover glow */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-10 blur-[80px]" />
            </div>

            <div className="relative z-10 flex items-start justify-between w-full">
              {/* ICON */}
              <div className="relative bg-vista-white z-10 flex h-12 lg:h-14 w-12 lg:w-14 text-xl lg:text-2xl shrink-0 items-center justify-center rounded-[14px] lg:rounded-2xl border border-white/10 text-primary">
                <Icon className="drop-shadow-[0_0_18px_rgba(139,92,246,0.9)]" />
              </div>

              {/* IMAGE */}
              <div className="relative z-10 rounded-2xl w-full aspect-8/5 flex justify-end p-1">
                <Image
                  width={336}
                  height={210}
                  src={item.img}
                  alt={item.title}
                  className="w-fit h-full object-contain transition-transform duration-700 drop-shadow-[0_0_8px_rgba(139,92,246,0.2)]"
                />
              </div>
            </div>

            {/* TITLE */}
            <h3 className="relative z-10 mt-6 text-xl font-semibold">
              {item.title}
            </h3>
          </article>
        );
      })}
    </div>
  );
};

export default PlatformGrid;
