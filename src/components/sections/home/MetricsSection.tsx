'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Container } from '@/components/layout/Container';
import { SectionFrame } from '@/components/layout/SectionFrame';
import { Counter } from '@/components/shared/Counter';
import { ScrollRevealText } from '@/components/shared/ScrollRevealText';
import { Users } from 'lucide-react';

interface DraggableChipProps {
  label: string;
  className: string;
  bgGradient: string;
  shadowColor: string;
  initialRotation: number;
}

function DraggableChip({
  label,
  className,
  bgGradient,
  shadowColor,
  initialRotation,
}: DraggableChipProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setOffset({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      e.currentTarget.releasePointerCapture(e.pointerId);
      setIsDragging(false);
      setOffset({ x: 0, y: 0 });
    }
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0px) rotate(${
          initialRotation + (isDragging ? offset.x * 0.05 : 0)
        }deg) scale(${isDragging ? 1.08 : 1})`,
        transition: isDragging
          ? 'none'
          : 'transform 0.65s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        touchAction: 'none',
      }}
      className={`absolute z-20 select-none ${className}`}
    >
      <span
        className={`inline-block rounded-full ${bgGradient} px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg ${shadowColor} transition-shadow hover:shadow-xl`}
      >
        {label}
      </span>
    </div>
  );
}

const MANIFESTO_TEXT =
  'Interfaces that look pretty but are impossible for developers to actually deploy. Traditional agencies charge $15,000 and take five weeks just to draw wireframes. Tulip bridges the gap: strict, deterministic UI infrastructure in 48 hours.';

export function MetricsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className='relative overflow-hidden'>
      <SectionFrame
        showTopBorder={true}
        showBottomBorder={false}
        showCorners={true}
      >
        <Container className='py-14 md:py-20'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center'>
            {/* Left Content */}
            <div className='lg:col-span-8 flex flex-col'>
              {/* Badge */}
              <div className='inline-flex items-center gap-2 rounded-full border border-[rgba(30,13,1,0.08)] bg-white/90 backdrop-blur-md px-3.5 py-1 shadow-sm mb-8 w-fit'>
                <Users className='h-3.5 w-3.5 text-[#f97518]' />
                <span className='text-xs sm:text-sm font-medium text-[#1e0d01]/80'>
                  The frontend bottleneck
                </span>
              </div>

              {/* Scroll-Driven Text Reveal Manifesto */}
              <ScrollRevealText
                text={MANIFESTO_TEXT}
                className='text-2xl sm:text-3xl md:text-[32px] font-medium leading-[1.38] tracking-[-0.02em] font-heading mb-14'
              />

              {/* Animated Counters */}
              <div className='grid grid-cols-3 gap-6 sm:gap-10 pt-4'>
                <div>
                  <div className='text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-[#1e0d01] mb-2 tracking-tight'>
                    <Counter end={48} suffix='h' trigger={isInView} />
                  </div>
                  <p className='text-xs sm:text-sm font-medium text-[#1e0d01]/60'>
                    Garaunteed Delivery
                  </p>
                </div>

                <div>
                  <div className='text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-[#1e0d01] mb-2 tracking-tight'>
                    <Counter end={100} suffix='%' trigger={isInView} />
                  </div>
                  <p className='text-xs sm:text-sm font-medium text-[#1e0d01]/60'>
                    Native Components
                  </p>
                </div>

                <div>
                  <div className='text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-[#1e0d01] mb-2 tracking-tight'>
                    <span>0</span>
                  </div>
                  <p className='text-xs sm:text-sm font-medium text-[#1e0d01]/60'>
                    Hallucinated CSS
                  </p>
                </div>
              </div>
            </div>

            {/* Right Interactive Draggable Chips */}
            <div className='lg:col-span-4 relative h-[340px] sm:h-[400px] w-full flex items-center justify-center'>
              <DraggableChip
                label='Faster workflow'
                className='top-2 right-4 sm:right-8'
                bgGradient='bg-gradient-to-r from-[#b57bff] to-[#8d47fe]'
                shadowColor='shadow-[#8d47fe]/30'
                initialRotation={-16}
              />

              <DraggableChip
                label='B2B Platforms'
                className='top-24 right-2 sm:right-6'
                bgGradient='bg-gradient-to-r from-[#ffbd59] to-[#ff914d]'
                shadowColor='shadow-[#ff914d]/30'
                initialRotation={-8}
              />

              <DraggableChip
                label='No-Code Tools'
                className='top-44 right-6 sm:right-10'
                bgGradient='bg-gradient-to-r from-[#70d6ff] to-[#38b6ff]'
                shadowColor='shadow-[#38b6ff]/30'
                initialRotation={-6}
              />

              <DraggableChip
                label='Startup Studios'
                className='bottom-8 left-0 sm:left-2'
                bgGradient='bg-gradient-to-r from-[#b7eb50] to-[#95d52b]'
                shadowColor='shadow-[#95d52b]/30'
                initialRotation={-18}
              />

              <DraggableChip
                label='Lead Gen Tools'
                className='bottom-12 right-20 sm:right-28'
                bgGradient='bg-gradient-to-r from-[#ff9a62] to-[#ff7b54]'
                shadowColor='shadow-[#ff7b54]/30'
                initialRotation={14}
              />

              <DraggableChip
                label='AI - Startups'
                className='bottom-4 right-0 sm:right-4'
                bgGradient='bg-gradient-to-r from-[#4ef2bb] to-[#1fd1a5]'
                shadowColor='shadow-[#1fd1a5]/30'
                initialRotation={-8}
              />
            </div>
          </div>
        </Container>
      </SectionFrame>
    </section>
  );
}
