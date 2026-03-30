"use client";

import { useRef, useCallback } from "react";
import { Zap } from "lucide-react";
import { useLocale } from "@/lib/locale-context";
import { translations } from "@/lib/i18n";

const floatingShapes = [
  { cls: "w-40 h-28 md:w-52 md:h-36 lg:w-64 lg:h-44", top: "top-[12%]", left: "left-[5%]", rotate: "rotate-[12deg]", delay: "0s", bobDelay: "0s" },
  { cls: "w-36 h-24 md:w-44 md:h-30 lg:w-52 lg:h-36", top: "top-[58%]", left: "left-[78%]", rotate: "rotate-[-8deg]", delay: "0.3s", bobDelay: "-2s" },
  { cls: "w-36 h-26 md:w-48 md:h-32 lg:w-56 lg:h-40", top: "top-[22%]", left: "left-[72%]", rotate: "rotate-[20deg]", delay: "0.6s", bobDelay: "-4s" },
  { cls: "w-28 h-20 md:w-36 md:h-24 lg:w-44 lg:h-32", top: "top-[68%]", left: "left-[10%]", rotate: "rotate-[-15deg]", delay: "0.9s", bobDelay: "-6s" },
  { cls: "hidden md:block w-32 h-24 lg:w-36 lg:h-28", top: "top-[8%]", left: "left-[44%]", rotate: "rotate-[6deg]", delay: "1.2s", bobDelay: "-8s" },
];

export default function Hero() {
  const { locale } = useLocale();
  const t = translations.hero;
  const tNav = translations.nav;
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!glowRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, rgba(16,185,129,0.09), transparent 60%)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!glowRef.current) return;
    glowRef.current.style.background = "transparent";
  }, []);

  return (
    <section
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-5 py-24 md:px-6"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={glowRef} className="pointer-events-none absolute inset-0 z-[1] transition-[background] duration-300" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(16,185,129,0.15)_0%,transparent_70%)]" />

      {floatingShapes.map((shape, i) => (
        <div
          key={i}
          className={`absolute ${shape.cls} ${shape.top} ${shape.left} ${shape.rotate} rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.07] to-teal-500/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md transition-[transform,box-shadow] duration-500 hover:scale-110 hover:border-emerald-500/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_30px_rgba(16,185,129,0.12)] animate-[shapeIn_0.8s_ease-out_forwards,bob_12s_ease-in-out_infinite]`}
          style={{ opacity: 0, animationDelay: `${shape.delay}, ${shape.bobDelay}` }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Badge with icon */}
        <div className="mb-6 flex items-center gap-2 opacity-0 animate-[fadeUp_0.6s_ease-out_0.2s_forwards] md:mb-10">
          <Zap className="h-3.5 w-3.5 fill-emerald-400 text-emerald-400" />
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-emerald-400 md:text-[13px]">
            {t.badge[locale]}
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight opacity-0 animate-[fadeUp_0.6s_ease-out_0.4s_forwards] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <span className="block text-white">{t.headline1[locale]}</span>
          <span className="block bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
            {t.headline2[locale]}
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-base font-normal leading-relaxed text-[#a1a1aa] opacity-0 animate-[fadeUp_0.6s_ease-out_0.6s_forwards] md:mt-8 md:max-w-2xl md:text-lg lg:text-xl">
          {t.subtitle[locale]}
        </p>

        <div className="mt-8 flex flex-col gap-4 opacity-0 animate-[fadeUp_0.6s_ease-out_0.8s_forwards] sm:flex-row sm:gap-5 md:mt-12">
          <a
            href="#demo"
            className="cta-btn group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white sm:px-10 sm:py-4 sm:text-base"
            style={{
              background: "linear-gradient(165deg, #34d399 0%, #059669 50%, #047857 100%)",
              boxShadow: "0 4px 20px rgba(16,185,129,0.3), 0 1px 3px rgba(0,0,0,0.3)",
            }}
          >
            {tNav.requestDemo[locale]}
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-7 py-3.5 text-sm font-semibold text-neutral-300 transition-all hover:border-neutral-500 hover:text-white sm:px-10 sm:py-4 sm:text-base"
          >
            {t.learnMore[locale]}
          </a>
        </div>
      </div>
    </section>
  );
}
