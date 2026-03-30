"use client";

import { useEffect, useRef, useState } from "react";
import { Database, BrainCircuit, BarChart3, Target, Puzzle, Globe } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { translations } from "@/lib/i18n";

const stepIcons = [Database, BrainCircuit, BarChart3, Target];
const bottomIcons = [Puzzle, Globe];

export default function Technology() {
  const { locale } = useLocale();
  const t = translations.technology;
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="technology" ref={sectionRef} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-emerald-500">{t.overline[locale]}</p>
        <h2 className="mx-auto mb-20 max-w-3xl text-center text-4xl font-bold leading-tight md:text-5xl">
          <span className="text-white">{t.headline1[locale]}</span>{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">{t.headline2[locale]}</span>
        </h2>

        <div className="relative mb-16">
          <div className="pointer-events-none absolute top-10 right-[12%] left-[12%] hidden md:block">
            <div className="h-px w-full border-t border-dashed border-emerald-500/30" />
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {t.steps.map((step, i) => {
              const Icon = stepIcons[i];
              const num = String(i + 1).padStart(2, "0");
              return (
                <div key={i} className={`relative flex flex-col items-center text-center transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: visible ? `${i * 150}ms` : "0ms" }}>
                  {i > 0 && <div className="absolute -top-6 left-1/2 h-3 w-px -translate-x-1/2 border-l border-dashed border-emerald-500/30 md:hidden" />}
                  <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/[0.05]">
                    <Icon className="h-8 w-8 text-emerald-400" strokeWidth={1.5} />
                    <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-semibold text-emerald-400">{num}</span>
                  </div>
                  <h3 className="mb-1 text-base font-semibold text-white">{step.title[locale]}</h3>
                  <p className="max-w-[200px] text-sm leading-relaxed text-white/40">{step.desc[locale]}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {t.bottomCards.map((card, i) => {
            const Icon = bottomIcons[i];
            return (
              <div key={i} className={`rounded-xl border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-500 hover:border-white/[0.12] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: visible ? `${600 + i * 120}ms` : "0ms" }}>
                <Icon className="mb-3 h-6 w-6 text-emerald-400" strokeWidth={1.5} />
                <h3 className="mb-1 text-lg font-semibold text-white">{card.title[locale]}</h3>
                <p className="text-sm leading-relaxed text-white/50">{card.desc[locale]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
