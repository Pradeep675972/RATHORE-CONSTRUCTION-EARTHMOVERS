"use client";

import { useState } from "react";

const steps = [
  "Site Survey",
  "Equipment Mobilization",
  "Excavation & Earthwork",
  "Pipeline & Road Support",
  "Project Completion",
];

export function InteractiveProjectMap() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: y * -6,
      y: x * 8,
    });
  };

  const handlePointerLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#070707] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#d9b679]">Project in motion</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
              Real excavation work, captured in motion.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-slate-300">
            We focus on dependable execution—from machine mobilization to trenching, pipeline support, and final project completion.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
          <div className="space-y-4">
            <div
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out"
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              style={{
                transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.002)`,
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${50 + tilt.y * 3}% ${50 + tilt.x * 3}%, rgba(217, 182, 121, 0.18), transparent 40%)`,
                }}
              />
              <video
                src="/equipment/v2.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[440px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                { label: "Project Type", value: "Excavation & Earthwork" },
                { label: "Equipment", value: "JCB / Heavy Earthmoving Equipment" },
                { label: "Work", value: "Excavation, Trenching & Earthwork" },
                { label: "Support", value: "Equipment + Operator Support" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-[#0b0b0b] p-3 sm:p-4">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#d9b679]">
                    {item.label}
                  </p>
                  <p className="mt-1.5 leading-5 text-slate-100">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-[1.75rem] border border-white/10 bg-[#0b0b0b] p-5 sm:p-6">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.38em] text-[#d9b679]">Execution Flow</p>

              <div className="mt-5 space-y-3">
                {steps.map((step, index) => (
                  <div key={step} className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#0c0c0c] px-4 py-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#d9b679] text-sm font-semibold text-[#111111]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <p className="text-sm font-medium text-slate-100 sm:text-base">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-300">
              From site preparation to excavation and infrastructure support, our equipment and operators are deployed
              with a focus on safe execution, reliable machinery and project timelines.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-[#d9b679] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#e5c98a]"
              >
                Discuss Your Project <span className="ml-2">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#d9b679]/50 hover:text-[#e5c98a]"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
