"use client";

import { useEffect, useRef, useState } from "react";
import {
  Database,
  BrainCircuit,
  BarChart3,
  Target,
  Puzzle,
  Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const steps: { icon: LucideIcon; number: string; title: string; description: string }[] = [
  {
    icon: Database,
    number: "01",
    title: "Сбор данных",
    description: "Агент на устройстве фиксирует все действия сотрудника",
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "Умная аналитика",
    description: "Алгоритмы находят отклонения и сигнализируют о рисках",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Визуализация",
    description: "Понятные графики и дашборды в реальном времени",
  },
  {
    icon: Target,
    number: "04",
    title: "Действия",
    description: "Руководитель принимает решения на основе данных",
  },
];

const bottomCards: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Puzzle,
    title: "Интеграция с инфраструктурой",
    description: "Легко подключается к существующим системам без перестройки IT.",
  },
  {
    icon: Globe,
    title: "Удалённый доступ",
    description: "Управление и мониторинг из любой точки мира.",
  },
];

export default function Technology() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="technology" ref={sectionRef} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Overline */}
        <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-emerald-500">
          Технологии
        </p>

        {/* Headline */}
        <h2 className="mx-auto mb-20 max-w-3xl text-center text-4xl font-bold leading-tight md:text-5xl">
          <span className="text-white">От данных к решениям</span>{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            за&nbsp;секунды.
          </span>
        </h2>

        {/* Pipeline — horizontal on desktop, vertical on mobile */}
        <div className="relative mb-16">
          {/* Desktop connector line */}
          <div className="pointer-events-none absolute top-10 right-[12%] left-[12%] hidden md:block">
            <div className="h-px w-full border-t border-dashed border-emerald-500/30" />
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col items-center text-center transition-all duration-600 ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: visible ? `${i * 150}ms` : "0ms" }}
                >
                  {/* Mobile connector line (between steps) */}
                  {i > 0 && (
                    <div className="absolute -top-6 left-1/2 h-3 w-px -translate-x-1/2 border-l border-dashed border-emerald-500/30 md:hidden" />
                  )}

                  {/* Icon circle */}
                  <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/[0.05]">
                    <Icon className="h-8 w-8 text-emerald-400" strokeWidth={1.5} />
                    {/* Step number badge */}
                    <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-semibold text-emerald-400">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mb-1 text-base font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="max-w-[200px] text-sm leading-relaxed text-white/40">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {bottomCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`rounded-xl border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-500 hover:border-white/[0.12] ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: visible ? `${600 + i * 120}ms` : "0ms" }}
              >
                <Icon className="mb-3 h-6 w-6 text-emerald-400" strokeWidth={1.5} />
                <h3 className="mb-1 text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
