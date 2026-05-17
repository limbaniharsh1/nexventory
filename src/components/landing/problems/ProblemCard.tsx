// components/problems/ProblemCard.tsx
"use client";

import Image from "next/image";
import React from "react";

type ProblemCardProps = {
  item: any;
  index: number;
  sectionRef: (el: HTMLDivElement | null) => void;
};

const ProblemCard = ({ item, index, sectionRef }: ProblemCardProps) => {
  const MainIcon = item.icon;

  return (
    <article
      ref={sectionRef}
      className="xl:sticky top-24 overflow-hidden rounded-[32px] border border-black/10 bg-vista-white"
    >
      <div className="grid items-center gap-10 xl:grid-cols-2">
        {/* CONTENT */}
        <div className={`p-6 md:p-10 lg:p-13 ${index % 2 ? "lg:order-1" : ""}`}>
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/20 text-xl text-primary mb-4">
            <MainIcon size={32} />
          </div>
          <div className="max-w-xl">
            <h3 className="title relative after:absolute after:-bottom-3 after:left-0 after:h-1 after:w-20 after:rounded-full after:bg-primary/50">
              {item.title}
            </h3>

            <p className="mt-7 description">{item.description}</p>

            <div className="mt-8 space-y-3">
              {item.feature.map((feature: any, i: number) => {
                const FeatureIcon = feature.icon;

                return (
                  <div key={i} className="flex items-center gap-4">
                    <div className="mt-1 flex h-11 w-11 min-w-[44px] items-center justify-center rounded-full bg-primary/20 text-xl text-primary">
                      <FeatureIcon />
                    </div>

                    <p className="text-sm text-gray-600 md:text-base">
                      {feature.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div
          className={`relative h-full hidden xl:block ${index % 2 ? "lg:order-2" : ""}`}
        >
          <div className="relative h-full min-h-[420px] overflow-hidden">
            <Image
              width={660}
              height={542}
              src={item.img}
              alt={item.title}
              className="w-full h-full max-w-150 mx-auto xl:max-w-full object-contain drop-shadow-[5px_35px_20px_rgba(139,92,246,0.25)]"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProblemCard;
