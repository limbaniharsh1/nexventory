// components/platform/Platform.tsx
import React from "react";
import PlatformGrid from "./PlatformGrid";
import { platform } from "@/data/landing";


const Platform = () => {
  return (
    <section
      aria-labelledby="platform-heading"
      className="relative overflow-hidden section-py  bg-[url('/images/bg-pricingtable.webp')] bg-cover bg-center bg-no-repeat bg-primary/5"
    >
      {/* background glow */}
      {/* <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" /> */}

      <div className="container relative z-10">
        {/* SEO CONTENT */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="white-badge">
            Platform
          </p>

          <h2
            id="platform-heading"
            className="mx-auto  max-w-3xl title"
          >
            Everything You Need to Fix Your PPC In One Dashboard
          </h2>

          <p className="mx-auto mt-6 max-w-2xl description">
            Centralize analytics, automation, optimization, and campaign
            intelligence from a unified AI-powered advertising platform.
          </p>
        </div>

        {/* CLIENT GRID */}
        <PlatformGrid platform={platform} />
      </div>
    </section>
  );
};

export default Platform;