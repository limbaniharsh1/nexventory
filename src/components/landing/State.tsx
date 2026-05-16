// components/State.tsx
import React from "react";

import Counter from "./Counter";
import { statesData } from "../../data/landing";

function State() {
  return (
    <section
      aria-labelledby="platform-stats-heading"
      className="bg-white container section-py"
    >
      <div className="container mx-auto px-4">
        {/* SEO Content */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-purple-600">
            AI Marketing Analytics
          </p>

          <h2 id="platform-stats-heading" className="mt-4 title">
            Real-World Use Cases and Applications
          </h2>

          <p className="mt-5 description">
            Track marketing performance in real time with automated campaign
            optimization, AI-driven recommendations, audience intelligence, and
            advanced analytics dashboards designed for modern businesses.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {statesData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 150}
                key={index}
              >
                <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl text-purple-700">
                    <Icon />
                  </div>

                  <div className="mt-6">
                    <h3 className="text-4xl font-bold text-gray-900">
                      <Counter value={item.count} />
                    </h3>
                    <p className="mt-3 text-base leading-6 text-gray-600">
                      {item.title}
                    </p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default State;
