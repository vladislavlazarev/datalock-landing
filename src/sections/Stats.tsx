"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { translations } from "@/lib/i18n";

const statsData = [
  { value: 45, suffix: "%", key: "s1" as const },
  { value: 48, suffix: "%", key: "s2" as const },
  { value: 40, suffix: "+", key: "s3" as const },
];

function useCountUp(target: number, isVisible: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, isVisible }: { value: number; suffix: string; label: string; isVisible: boolean }) {
  const count = useCountUp(value, isVisible);
  return (
    <div className="flex flex-col items-center gap-2 py-6 md:py-0">
      <div className="text-5xl font-bold tracking-tight">
        <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">{count}</span>
        <span className="text-emerald-500">{suffix}</span>
      </div>
      <p className="max-w-[220px] text-center text-sm leading-relaxed text-white/50">{label}</p>
    </div>
  );
}

export default function Stats() {
  const { locale } = useLocale();
  const t = translations.stats;
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`border-y border-white/10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-white/10 px-6 py-16 md:grid-cols-3 md:divide-x md:divide-y-0">
        {statsData.map((stat) => (
          <StatItem key={stat.key} value={stat.value} suffix={stat.suffix} label={t[stat.key][locale]} isVisible={isVisible} />
        ))}
      </div>
    </section>
  );
}
