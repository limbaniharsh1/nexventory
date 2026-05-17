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
      <div className="">
        {/* SEO CONTENT */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="badge">Amazon PPC Challenges</div>

          <h2 id="problems-heading" className="mt-4 title">
            Why Most Amazon Sellers Waste Money on PPC
          </h2>

          <p className="mt-6 description">
            From climbing CPCs eating your margins to 24-hour data lags burning
            cash overnight — Amazon PPC has gotten harder to manage manually.
            Most sellers lose 20-30% of ad spend to inefficiencies they can't
            see until it's too late.
          </p>
        </div>

        <ProblemsAnimation problems={problems} />
      </div>
    </section>
  );
};

export default Problems;
