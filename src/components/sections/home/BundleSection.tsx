"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionFrame } from "@/components/layout/SectionFrame";
import { Smile } from "lucide-react";

export function BundleSection() {
  const cards = [
    {
      id: "figma",
      title: "Master Figma System",
      description:
        "A pristine file pre-configured with strict local variables, semantic color tokens, and locked-in typography.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#1e0d01]"
        >
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      id: "react",
      title: "Production React Repo",
      description:
        "Your exact 1:1 engineering mirror. Clean, accessible components ready to drop into any Next.js environment.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#1e0d01]"
        >
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      ),
    },
    {
      id: "typography",
      title: "High-Legibility Typography",
      description:
        "Standardized text for maximum readability across dense financial or analytical dashboards.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#1e0d01]"
        >
          <polyline points="4 7 4 4 20 4 20 7" />
          <line x1="9" y1="20" x2="15" y2="20" />
          <line x1="12" y1="4" x2="12" y2="20" />
        </svg>
      ),
    },
    {
      id: "iconography",
      title: "Native Iconography",
      description:
        "We strip out generic open-source icons and embed proprietary, sharp SVGs directly into your UI blocks.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#1e0d01]"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      ),
    },
    {
      id: "handoff",
      title: "The 48-Hour Handoff",
      description:
        "You receive a complete UI bundle. Download your Master Figma file, your synchronized GitHub repository, and your custom coded layouts, ready for your backend engineers.",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-[#1e0d01]"
        >
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="M8.5 8.5 15.5 15.5" />
          <path d="M12 2v4" />
          <path d="M22 12h-4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="bundle" className="relative overflow-hidden">
      {/* Blurred Radial Gradient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1300px] h-[750px] opacity-95"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 40%, rgba(249, 117, 24, 0.13) 0%, rgba(250, 132, 132, 0.12) 35%, rgba(254, 131, 241, 0.07) 65%, transparent 85%)",
          }}
        />
        <div className="absolute top-20 -right-20 w-[850px] h-[400px] ambient-glow-coral opacity-25 rotate-[34deg]" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[420px] ambient-glow-white opacity-70" />
        <div className="absolute bottom-10 -left-20 w-[750px] h-[380px] ambient-glow-pink opacity-20" />
      </div>

      <SectionFrame showTopBorder={true} showBottomBorder={false} showCorners={true}>
        <Container className="py-14 md:py-20">
          {/* Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 md:mb-18">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(30,13,1,0.08)] bg-white px-3.5 py-1 shadow-sm mb-6">
              <Smile className="h-3.5 w-3.5 text-[#f97518]" />
              <span className="text-xs sm:text-sm font-medium text-[#1e0d01]/80">
                The Bundle
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1e0d01] font-heading mb-4 leading-tight">
              The ultimate technical handoff
            </h2>
            <p className="text-base sm:text-lg text-[#1e0d01]/70 leading-relaxed max-w-2xl">
              Everything your engineering team needs to start hooking up the backend today
            </p>
          </div>

          {/* Cards Grid: 3 cards top, 2 cards bottom */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.slice(0, 3).map((card) => (
                <div
                  key={card.id}
                  className="rounded-[22px] bg-white/90 p-7 sm:p-9 border border-[rgba(30,13,1,0.08)] shadow-xs flex flex-col justify-start"
                >
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#f8f8f8] to-white border border-[rgba(30,13,1,0.12)] flex items-center justify-center mb-6 shrink-0 shadow-xs">
                    {card.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#1e0d01] font-heading mb-3 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-sm text-[#1e0d01]/70 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-5 rounded-[22px] bg-white/90 p-7 sm:p-9 border border-[rgba(30,13,1,0.08)] shadow-xs flex flex-col justify-start">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#f8f8f8] to-white border border-[rgba(30,13,1,0.12)] flex items-center justify-center mb-6 shrink-0 shadow-xs">
                  {cards[3].icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#1e0d01] font-heading mb-3 leading-snug">
                  {cards[3].title}
                </h3>

                <p className="text-sm text-[#1e0d01]/70 leading-relaxed">
                  {cards[3].description}
                </p>
              </div>

              <div className="md:col-span-7 rounded-[22px] bg-white/90 p-7 sm:p-9 border border-[rgba(30,13,1,0.08)] shadow-xs flex flex-col justify-start">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#f8f8f8] to-white border border-[rgba(30,13,1,0.12)] flex items-center justify-center mb-6 shrink-0 shadow-xs">
                  {cards[4].icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#1e0d01] font-heading mb-3 leading-snug">
                  {cards[4].title}
                </h3>

                <p className="text-sm text-[#1e0d01]/70 leading-relaxed">
                  {cards[4].description}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionFrame>
    </section>
  );
}
