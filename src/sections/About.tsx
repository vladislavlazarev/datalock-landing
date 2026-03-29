"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "2020", label: "на рынке с" },
  { value: "40+", label: "проектов" },
  { value: "15", label: "специалистов" },
];

export default function About() {
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
    <section id="about" ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Overline */}
        <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-emerald-500">
          О нас
        </p>

        {/* Headline */}
        <h2
          className={`mb-4 text-center text-3xl font-bold text-white transition-all duration-600 md:text-4xl ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Разработано командой Perfect System Solution.
        </h2>

        {/* Description */}
        <p
          className={`mx-auto mb-16 max-w-2xl text-center text-lg text-white/40 transition-all duration-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: visible ? "150ms" : "0ms" }}
        >
          Мы работаем на рынке с 2020 года и реализовали более 40 проектов.
          Команда из 15 специалистов гарантирует высокое качество и стабильную
          работу DataLock.
        </p>

        {/* Stats */}
        <div
          className={`mx-auto grid max-w-2xl grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0 transition-all duration-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: visible ? "300ms" : "0ms" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 py-6 md:py-0">
              <span className="text-4xl font-bold tracking-tight text-white">
                {stat.value}
              </span>
              <span className="text-sm text-white/50">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
