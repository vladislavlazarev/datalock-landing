"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { translations } from "@/lib/i18n";

export default function CTA() {
  const { locale } = useLocale();
  const t = translations.cta;
  const tNav = translations.nav;
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="demo" ref={ref} className="relative flex items-center justify-center overflow-hidden px-6 py-32 md:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className={`mb-6 max-w-3xl text-4xl font-bold leading-tight transition-all duration-600 md:text-6xl ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-white">{t.headline1[locale]}</span>{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">{t.headline2[locale]}</span>
        </h2>
        <p className={`mb-10 max-w-xl text-lg text-white/40 transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: visible ? "150ms" : "0ms" }}>{t.subtitle[locale]}</p>
        <div className={`flex flex-col gap-4 sm:flex-row transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: visible ? "300ms" : "0ms" }}>
          <a href="#demo" className="cta-btn inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white">{tNav.requestDemo[locale]}</a>
          <a href="#about" className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/5">{t.contact[locale]}</a>
        </div>
      </div>
    </section>
  );
}
