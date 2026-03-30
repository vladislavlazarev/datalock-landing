"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { translations } from "@/lib/i18n";

function DataStreams() {
  return (
    <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-500/[0.04] to-transparent">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#030303] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#030303] to-transparent" />
      <div className="flex w-full flex-col gap-3 px-8">
        {[{ color: "bg-emerald-500/30", width: "w-[85%]", delay: "0s" }, { color: "bg-teal-500/20", width: "w-[70%]", delay: "0.8s" }, { color: "bg-emerald-400/25", width: "w-[92%]", delay: "1.6s" }, { color: "bg-cyan-500/15", width: "w-[60%]", delay: "2.4s" }, { color: "bg-teal-400/20", width: "w-[78%]", delay: "3.2s" }].map((line, i) => (
          <div key={i} className={`h-[2px] ${line.width} overflow-hidden rounded-full`}>
            <div className={`h-full w-1/3 ${line.color} animate-[streamLine_4s_ease-in-out_infinite] rounded-full blur-[1px]`} style={{ animationDelay: line.delay }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function BarChart() {
  const bars = [40, 65, 50, 80, 55, 90, 70, 85, 60, 75];
  return (
    <div className="relative flex h-48 items-end justify-center gap-[6px] overflow-hidden bg-gradient-to-b from-emerald-500/[0.04] to-transparent px-8 pb-8 pt-12">
      {bars.map((height, i) => (
        <div key={i} className="flex-1 animate-[barGrow_1.2s_ease-out_forwards] rounded-t-sm bg-gradient-to-t from-emerald-500/40 to-emerald-500/10" style={{ height: 0, maxHeight: `${height}%`, animationDelay: `${i * 0.08}s` }} />
      ))}
    </div>
  );
}

function ShieldPulse() {
  return (
    <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-b from-emerald-500/[0.04] to-transparent">
      <div className="absolute h-32 w-32 animate-ping rounded-full bg-emerald-500/[0.06]" style={{ animationDuration: "3s" }} />
      <div className="absolute h-24 w-24 animate-ping rounded-full bg-emerald-500/[0.08]" style={{ animationDuration: "3s", animationDelay: "0.5s" }} />
      <div className="relative rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">
        <ShieldCheck className="h-10 w-10 text-emerald-400" strokeWidth={1.5} />
      </div>
    </div>
  );
}

const visuals = [DataStreams, BarChart, ShieldPulse];

export default function Features() {
  const { locale } = useLocale();
  const t = translations.features;
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
    <section id="features" ref={sectionRef} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-emerald-500">{t.overline[locale]}</p>
        <h2 className="mx-auto mb-4 max-w-3xl text-center text-4xl font-bold leading-tight md:text-5xl">
          <span className="text-white">{t.headline1[locale]}</span><br />
          <span className="text-white/50">{t.headline2[locale]}</span>
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-white/40">{t.subtitle[locale]}</p>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {t.cards.map((card, i) => {
            const Visual = visuals[i];
            return (
              <div key={i} className={`group overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:-translate-y-0.5 hover:border-white/[0.14] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: visible ? `${i * 120}ms` : "0ms" }}>
                <Visual />
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">{card.title[locale]}</h3>
                    <span className="text-white/30 transition-transform group-hover:translate-x-1">&rarr;</span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/50">{card.desc[locale]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
