"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import homeData from "@/data/home.json";
import { Container } from "@/components/layout/Container";
import { SectionFrame } from "@/components/layout/SectionFrame";
import { Zap, Layers, Palette, ChevronRight, Laptop, Sparkles } from "lucide-react";

export function SprintWorkflow() {
  const { sprintWorkflow } = homeData;
  const [card1InView, setCard1InView] = useState(false);
  const [card2InView, setCard2InView] = useState(false);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer1 = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCard1InView(true);
      }
    }, observerOptions);

    const observer2 = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCard2InView(true);
      }
    }, observerOptions);

    if (card1Ref.current) observer1.observe(card1Ref.current);
    if (card2Ref.current) observer2.observe(card2Ref.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  const card1Data = sprintWorkflow.cards[0];
  const card2Data = sprintWorkflow.cards[1];

  return (
    <section className="relative overflow-hidden">
      <SectionFrame showTopBorder={true} showBottomBorder={false} showCorners={true}>
        <Container className="py-14 md:py-20">
          {/* Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(30,13,1,0.08)] bg-white px-3.5 py-1 shadow-sm mb-6">
              <Zap className="h-3.5 w-3.5 text-[#f97518] fill-[#f97518]" />
              <span className="text-xs sm:text-sm font-medium text-[#1e0d01]/80">
                {sprintWorkflow.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1e0d01] font-heading mb-4 leading-tight">
              {sprintWorkflow.title}
            </h2>
            <p className="text-base sm:text-lg text-[#1e0d01]/70 leading-relaxed max-w-2xl">
              {sprintWorkflow.description}
            </p>
          </div>

          {/* Cards Stack */}
          <div className="flex flex-col gap-8 md:gap-12">
            {/* Card 1: Minute Zero */}
            <div
              ref={card1Ref}
              className={`rounded-[2rem] bg-[#edf2f8] p-6 sm:p-10 lg:p-14 border border-[#d8e4f1] transition-all duration-700 ease-out ${
                card1InView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Left: Interactive Wireframe Mockup */}
                <div className="lg:col-span-6 w-full flex items-center justify-center">
                  <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-2xl bg-white/90 p-5 shadow-sm border border-white/80 overflow-hidden flex flex-col justify-between">
                    <div
                      className="absolute inset-0 opacity-[0.04] pointer-events-none"
                      style={{
                        backgroundImage:
                          "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    <div className="flex items-center gap-1.5 mb-4">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </div>

                    <div className="relative flex-1 rounded-xl bg-neutral-50/80 p-4 border border-neutral-200/50 flex flex-col justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-neutral-200" />
                        <div className="h-2 w-20 rounded-full bg-neutral-200" />
                      </div>

                      <div className="relative my-auto h-20 w-full rounded-lg bg-neutral-100 border border-neutral-200/40 flex items-center justify-center">
                        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-neutral-200/70 py-1 px-2">
                          <svg
                            className="h-3 w-3 fill-[#f97518] text-[#f97518]"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4 0l16 12-7 2-4 9z" />
                          </svg>
                          <div className="relative h-4 w-4 rounded-full overflow-hidden border border-white">
                            <Image
                              src="/assets/SqNwL1Tw7L1E0WNkpyNItGDs.png"
                              alt="Avatar"
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 border border-neutral-200/60 shadow-xs w-fit">
                      <Laptop className="h-4 w-4 text-neutral-500" />
                      <span className="text-xs font-medium text-neutral-700">
                        Set-up your webiste
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Content & Action */}
                <div className="lg:col-span-6 flex flex-col items-start">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f97518] mb-4">
                    <Layers className="h-4 w-4" />
                    <span>{card1Data.phase}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1e0d01] font-heading mb-4 leading-tight">
                    {card1Data.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#1e0d01]/70 leading-relaxed mb-8">
                    {card1Data.description}
                  </p>

                  <Link
                    href={card1Data.cta.href}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-[#1e0d01] shadow-sm hover:shadow-md transition-all border border-[rgba(30,13,1,0.06)]"
                  >
                    <span>{card1Data.cta.label}</span>
                    <ChevronRight className="h-4 w-4 text-neutral-600" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: HOUR 48 */}
            <div
              ref={card2Ref}
              className={`rounded-[2rem] bg-[#ebe8f7] p-6 sm:p-10 lg:p-14 border border-[#ddd9f2] transition-all duration-700 ease-out delay-100 ${
                card2InView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f97518] mb-4">
                    <Palette className="h-4 w-4" />
                    <span>{card2Data.phase}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#1e0d01] font-heading mb-4 leading-tight">
                    {card2Data.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#1e0d01]/70 leading-relaxed mb-8">
                    {card2Data.description}
                  </p>

                  <Link
                    href={card2Data.cta.href}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-semibold text-[#1e0d01] shadow-sm hover:shadow-md transition-all border border-[rgba(30,13,1,0.06)]"
                  >
                    <span>{card2Data.cta.label}</span>
                    <ChevronRight className="h-4 w-4 text-neutral-600" />
                  </Link>
                </div>

                <div className="lg:col-span-6 w-full flex items-center justify-center order-1 lg:order-2">
                  <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-2xl bg-white/90 p-5 shadow-sm border border-white/80 overflow-hidden flex items-center justify-center">
                    <div
                      className="absolute inset-0 opacity-[0.04] pointer-events-none"
                      style={{
                        backgroundImage:
                          "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    <div className="absolute left-6 top-6 bottom-6 right-16 rounded-xl bg-white border border-neutral-200/60 p-3 flex flex-col justify-between shadow-xs">
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                      </div>
                      <div className="space-y-2">
                        {[
                          "/assets/SqNwL1Tw7L1E0WNkpyNItGDs.png",
                          "/assets/FaQR5JopfGvV9PdVkQKdqdkM4Y.png",
                          "/assets/j5beBC8E1nADaydjfFw27YLtUyQ.png",
                        ].map((src, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="relative h-4 w-4 rounded-full overflow-hidden">
                              <Image src={src} alt="User" fill className="object-cover" />
                            </div>
                            <div className="h-1.5 w-16 rounded-full bg-neutral-200" />
                          </div>
                        ))}
                      </div>
                      <div className="pt-2 border-t border-neutral-100 flex items-center gap-2">
                        <span className="text-xs font-bold text-neutral-400 font-serif">Aa</span>
                        <div className="h-1.5 w-12 rounded-full bg-neutral-200" />
                      </div>
                    </div>

                    <div className="relative z-10 w-[210px] rounded-xl bg-white p-3.5 shadow-xl border border-neutral-200/80 ml-auto mr-2">
                      <div className="h-2.5 w-14 rounded-full bg-neutral-200 mb-2" />
                      <div className="h-1.5 w-24 rounded-full bg-neutral-100 mb-4" />

                      <div className="grid grid-cols-3 gap-1.5 mb-4">
                        <div className="h-6 rounded-md bg-gradient-to-r from-[#ff5e62] to-[#ff9966]" />
                        <div className="h-6 rounded-md bg-gradient-to-r from-[#00f2fe] to-[#4facfe]" />
                        <div className="h-6 rounded-md bg-gradient-to-r from-[#b57bff] to-[#ff758c]" />
                      </div>

                      <div className="flex items-center justify-center gap-1 rounded-lg border border-purple-200 bg-purple-50/50 py-1.5 text-[11px] font-semibold text-purple-700">
                        <Sparkles className="h-3 w-3 text-purple-600" />
                        <span>Create style</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </SectionFrame>
    </section>
  );
}
