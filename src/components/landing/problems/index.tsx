// components/problems/Problems.tsx
"use client";

import React from "react";

import { problems } from "@/data/landing";
import ProblemsAnimation from "./ProblemsAnimation";

const Problems = () => {
  return (
    <section
      aria-labelledby="problems-heading"
      className="container section-pb"
    >
      <div className="container mx-auto px-4">
        {/* SEO CONTENT */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Marketing Problems
          </p>

          <h2
            id="problems-heading"
            className="mt-4 title"
          >
            Common Digital Advertising Challenges Businesses Face
          </h2>

          <p className="mt-6 description">
            Rising advertising costs, poor campaign targeting, inefficient
            bidding strategies, and declining ROI are major problems affecting
            modern digital marketing performance.
          </p>
        </div>

        <ProblemsAnimation problems={problems} />
      </div>
    </section>
  );
};

export default Problems;