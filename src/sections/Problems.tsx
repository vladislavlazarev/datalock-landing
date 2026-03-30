"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, EyeOff, ShieldAlert, CircleHelp, Wifi, UserX } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { translations } from "@/lib/i18n";

const icons = [Clock, EyeOff, ShieldAlert, CircleHelp, Wifi, UserX];

export default function Problems() {
  const { locale } = useLocale();
  const t = translations.problems;
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(Array(6).fill(false));

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        icons.forEach((_, i) => { setTimeout(() => { setVisibleCards((prev) => { const next = [...prev]; next[i] = true; return next; }); }, i * 100); });
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="problems" ref={sectionRef} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-emerald-500">{t.overline[locale]}</p>
        <h2 className="mx-auto mb-16 max-w-3xl text-center text-4xl font-bold leading-tight md:text-5xl">
          <span className="text-white">{t.headline1[locale]}</span><br />
          <span className="text-white/50">{t.headline2[locale]}</span>
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className={`rounded-xl border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-500 hover:border-white/[0.12] ${visibleCards[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                <Icon className="mb-4 h-6 w-6 text-red-500" strokeWidth={1.5} />
                <h3 className="mb-2 text-lg font-semibold text-white">{card.title[locale]}</h3>
                <p className="text-sm leading-relaxed text-white/50">{card.desc[locale]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
