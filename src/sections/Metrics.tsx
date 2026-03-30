"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { translations } from "@/lib/i18n";

export default function Metrics() {
  const { locale } = useLocale();
  const t = translations.metrics;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-gradient-to-b from-transparent via-emerald-500/[0.03] to-transparent px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className={`mb-16 text-center text-3xl font-bold text-white transition-all duration-600 md:text-4xl ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {t.headline[locale]}
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {t.items.map((m, i) => (
            <div key={i} className={`flex flex-col items-center text-center transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: visible ? `${200 + i * 100}ms` : "0ms" }}>
              <span className="mb-2 text-4xl font-bold tracking-tight text-emerald-400 md:text-5xl">{m.value[locale]}</span>
              <span className="text-sm leading-relaxed text-white/50">{m.label[locale]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
