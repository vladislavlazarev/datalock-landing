"use client";

import { useEffect, useRef, useState } from "react";
import {
  Clock,
  EyeOff,
  ShieldAlert,
  CircleHelp,
  Wifi,
  UserX,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const cards: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Clock,
    title: "Потери продуктивности",
    description:
      "Сотрудники тратят до 45% рабочего времени на личные задачи, соцсети и отвлечения. Это напрямую снижает прибыль.",
  },
  {
    icon: EyeOff,
    title: "Нет прозрачности",
    description:
      "Руководители не видят реальную загрузку и оценивают людей субъективно. Сильные недооценены, слабые незамечены.",
  },
  {
    icon: ShieldAlert,
    title: "Внутренние утечки данных",
    description:
      "Основной риск исходит не извне, а от самих сотрудников. Компании теряют деньги, клиентов и репутацию.",
  },
  {
    icon: CircleHelp,
    title: "Решения вслепую",
    description:
      "Отсутствие точных данных приводит к ошибочным управленческим решениям. Это тормозит рост.",
  },
  {
    icon: Wifi,
    title: "Удалёнка без контроля",
    description:
      "Компания не понимает, чем реально занят удалённый сотрудник в рабочее время.",
  },
  {
    icon: UserX,
    title: "Инсайдерские угрозы",
    description:
      "Без систем контроля сложно выявить мошенничество и саботаж на ранней стадии.",
  },
];

export default function Problems() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    Array(cards.length).fill(false)
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cards.forEach((_, i) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="problems" ref={sectionRef} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Overline */}
        <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-emerald-500">
          Проблемы
        </p>

        {/* Headline */}
        <h2 className="mx-auto mb-16 max-w-3xl text-center text-4xl font-bold leading-tight md:text-5xl">
          <span className="text-white">Бизнес теряет деньги каждый день.</span>
          <br />
          <span className="text-white/50">И вот почему.</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`rounded-xl border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-500 hover:border-white/[0.12] ${
                  visibleCards[i]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <Icon className="mb-4 h-6 w-6 text-red-500" strokeWidth={1.5} />
                <h3 className="mb-2 text-lg font-semibold text-white">
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
