"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import rightFuture from "@/assets/right-future.png";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[min(calc(100vh-80px),800px)] flex items-center overflow-hidden bg-[#fafaff]  selection:bg-purple-600 selection:text-white">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#6b21a8 1px, transparent 1px), linear-gradient(90deg, #6b21a8 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full opacity-[0.1] blur-[120px]"
          style={{
            background: "radial-gradient(circle, #a651fb 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-[0.05] blur-[120px]"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
          }}
        />
        {/* Atmospheric center glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full opacity-[0.02] blur-[120px]"
          style={{
            background: "radial-gradient(circle, #a651fb 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 container py-18">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-24 lg:gap-32">
          {/* Left Side Content */}
          <div className="flex flex-col items-center xl:items-start text-center xl:text-left space-y-8 lg:max-w-[700px] shrink-0">
            {/* Top Badge */}
            <div
              data-aos="fade-up"
              className={cn(
                "group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 shadow-[0_0_20px_-5px_rgba(166,81,251,0.1)] hover:border-purple-200 hover:bg-purple-100/50",
              )}
            >
              <div className="relative size-2">
                <div className="absolute inset-0 rounded-full bg-[#a651fb] animate-ping opacity-75" />
                <div className="relative size-2 rounded-full bg-[#a651fb]" />
              </div>
              <span className="text-[10px] md:text-xs font-semibold text-purple-900 tracking-widest uppercase">
                AI-Powered Amazon Advertising Intelligence
              </span>
            </div>

            {/* Main Heading */}
            <div
              className={cn(
                "space-y-4",
              )}
            >
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.2]"
              >
                Scale Amazon Revenue <br />
                with Intelligent <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#a651fb] via-[#7c3aed] to-[#4338ca]">
                  Campaign Automation
                </span>
              </h1>
            </div>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className={cn(
                "text-slate-600 text-base md:text-lg max-w-[480px] leading-relaxed font-medium",
              )}
            >
              Monitor advertising performance, automate campaign decisions, and
              maximize ROAS using real-time analytics and AI-powered
              optimization workflows.
            </p>

            {/* Button Section */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className={cn(
                "flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2",
              )}
            >
              <Button
                variant="premium"
                className="w-full sm:w-auto"
              >
                {/* Shimmer effect */}
                {/* <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" /> */}
                <span className="relative z-10">Start Free Trial</span>
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto bg-white/50 border-slate-200 text-slate-700 backdrop-blur-md hover:bg-white/80 hover:border-slate-300 rounded-xl"
              >
                Watch Demo
              </Button>
            </div>

            {/* Bottom Trust Text */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className={cn(
                "pt-4 flex items-center gap-3",
              )}
            >
              <div className="h-[1px] w-10 bg-slate-200" />
              <p className="text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase">
                Trusted by modern Amazon growth teams
              </p>
            </div>
          </div>

          {/* Right Side - Image with Animation */}
          <div
          data-aos="zoom-in-up"
          data-aos-duration="1400"
            className={cn(
              "relative flex justify-center lg:justify-end items-center h-full w-full lg:flex-1",
            )}
          >
            {/* Soft Glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-[60px] animate-pulse" />

            <div className="relative animate-float z-20 w-full flex justify-center lg:justify-end">
              <Image
                src={rightFuture}
                alt="AI Future Dashboard"
                className="w-full max-w-[650px] lg:max-w-[800px] h-auto drop-shadow-[0_0px_10px_rgba(166,81,251,0.2)] rounded-3xl border border-purple-1 00"
                priority
              />

              {/* Decorative elements around image */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-2xl animate-pulse delay-700" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-2xl animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 right-[-5%] w-64 h-64 bg-[#a651fb]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-5%] w-64 h-64 bg-[#3b82f6]/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
