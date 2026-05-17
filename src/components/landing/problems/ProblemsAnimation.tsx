// components/problems/ProblemsAnimation.tsx
"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProblemCard from "./ProblemCard";

gsap.registerPlugin(ScrollTrigger);

type ProblemsAnimationProps = {
  problems: any[];
};

const ProblemsAnimation = ({
  problems,
}: ProblemsAnimationProps) => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
     if (window.innerWidth < 1280) return;
    const sections = sectionsRef.current;

    sections.forEach((section, i) => {
      if (!section) return;

      const prev = sections[i - 1];

      if (prev) {
        gsap.to(prev, {
          scale: 0.92,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 20%",
            scrub: 1.2,
          },
        });
      }

      gsap.fromTo(
        section,
        {
          y: 80,
          opacity: 1,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="mt-16 flex flex-col gap-10">
      {problems.map((item, index) => (
        <ProblemCard
          key={index}
          item={item}
          index={index}
          sectionRef={(el) => {
            sectionsRef.current[index] = el;
          }}
        />
      ))}
    </div>
  );
};

export default ProblemsAnimation;