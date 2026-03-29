"use client";

import { useEffect, useRef, useState } from "react";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="demo"
      ref={ref}
      className="relative flex items-center justify-center overflow-hidden px-6 py-32 md:py-40"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Headline */}
        <h2
          className={`mb-6 max-w-3xl text-4xl font-bold leading-tight transition-all duration-600 md:text-6xl ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-white">Возьмите бизнес</span>{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            под&nbsp;контроль.
          </span>
        </h2>

        {/* Subtitle */}
        <p
          className={`mb-10 max-w-xl text-lg text-white/40 transition-all duration-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: visible ? "150ms" : "0ms" }}
        >
          Запросите демонстрацию и узнайте, как DataLock поможет вашей компании.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col gap-4 sm:flex-row transition-all duration-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: visible ? "300ms" : "0ms" }}
        >
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3.5 text-sm font-medium text-white transition-all hover:brightness-110 hover:shadow-[0_0_24px_rgba(16,185,129,0.4)]"
          >
            Запросить демо
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/5"
          >
            Связаться с нами
          </a>
        </div>
      </div>
    </section>
  );
}
