"use client";

import { useEffect, useRef, useState } from "react";
import { Lock, KeyRound, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const cards: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Lock,
    title: "Шифрование данных",
    description: "Все данные шифруются при передаче и хранении.",
  },
  {
    icon: KeyRound,
    title: "Контроль доступа",
    description: "Гибкая система прав и ролей для разных уровней.",
  },
  {
    icon: ShieldCheck,
    title: "Оценка рисков",
    description: "Автоматическое выявление опасного поведения до убытков.",
  },
];

export default function Security() {
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="security" ref={ref} className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Overline */}
        <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-emerald-500">
          Безопасность
        </p>

        {/* Headline */}
        <h2 className="mx-auto mb-4 max-w-3xl text-center text-4xl font-bold leading-tight text-white md:text-5xl">
          Ваши данные под надёжной защитой.
        </h2>

        {/* Description */}
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-white/40">
          DataLock обеспечивает полную безопасность собранных данных и соответствует
          современным стандартам информационной безопасности.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`rounded-xl border border-white/[0.06] bg-white/[0.03] p-6 transition-all duration-500 hover:border-white/[0.12] ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: visible ? `${i * 120}ms` : "0ms" }}
              >
                <Icon
                  className="mb-4 h-6 w-6 text-emerald-400"
                  strokeWidth={1.5}
                />
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
