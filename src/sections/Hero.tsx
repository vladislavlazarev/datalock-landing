"use client";

import { useRef, useCallback } from "react";

const floatingShapes = [
  {
    width: "w-64",
    height: "h-44",
    top: "top-[12%]",
    left: "left-[5%]",
    rotate: "rotate-[12deg]",
    delay: "0s",
    bobDelay: "0s",
  },
  {
    width: "w-52",
    height: "h-36",
    top: "top-[58%]",
    left: "left-[78%]",
    rotate: "rotate-[-8deg]",
    delay: "0.3s",
    bobDelay: "-2s",
  },
  {
    width: "w-56",
    height: "h-40",
    top: "top-[22%]",
    left: "left-[72%]",
    rotate: "rotate-[20deg]",
    delay: "0.6s",
    bobDelay: "-4s",
  },
  {
    width: "w-44",
    height: "h-32",
    top: "top-[68%]",
    left: "left-[10%]",
    rotate: "rotate-[-15deg]",
    delay: "0.9s",
    bobDelay: "-6s",
  },
  {
    width: "w-36",
    height: "h-28",
    top: "top-[8%]",
    left: "left-[44%]",
    rotate: "rotate-[6deg]",
    delay: "1.2s",
    bobDelay: "-8s",
  },
];

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!glowRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, rgba(16,185,129,0.07), transparent 60%)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!glowRef.current) return;
    glowRef.current.style.background = "transparent";
  }, []);

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cursor glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-[1] transition-[background] duration-300"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(16,185,129,0.15)_0%,transparent_70%)]" />

      {/* Floating shapes — hover: scale + glow */}
      {floatingShapes.map((shape, i) => (
        <div
          key={i}
          className={`absolute ${shape.width} ${shape.height} ${shape.top} ${shape.left} ${shape.rotate} rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.07] to-teal-500/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md transition-[transform,box-shadow] duration-500 hover:scale-110 hover:border-emerald-500/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_0_30px_rgba(16,185,129,0.12)] animate-[shapeIn_0.8s_ease-out_forwards,bob_12s_ease-in-out_infinite]`}
          style={{
            opacity: 0,
            animationDelay: `${shape.delay}, ${shape.bobDelay}`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Badge */}
        <p className="mb-10 text-[13px] font-medium uppercase tracking-[0.2em] text-emerald-400 opacity-0 animate-[fadeUp_0.6s_ease-out_0.2s_forwards]">
          &#x25C8;&ensp;Контроль&ensp;&middot;&ensp;Аналитика&ensp;&middot;&ensp;Безопасность
        </p>

        {/* Headline */}
        <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.08] tracking-tight md:text-8xl">
          <span className="block text-white opacity-0 animate-[fadeUp_0.6s_ease-out_0.4s_forwards]">
            Полный контроль.
          </span>
          <span className="block bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent opacity-0 animate-[fadeUp_0.6s_ease-out_0.6s_forwards]">
            Абсолютная прозрачность.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-2xl text-lg font-normal leading-relaxed text-[#a1a1aa] opacity-0 animate-[fadeUp_0.6s_ease-out_0.8s_forwards] md:text-xl">
          Единая платформа для мониторинга сотрудников, защиты данных
          и&nbsp;аналитики эффективности бизнеса в&nbsp;реальном времени.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col gap-5 opacity-0 animate-[fadeUp_0.6s_ease-out_1s_forwards] sm:flex-row">
          {/* Animated gradient border CTA */}
          <a
            href="#demo"
            className="cta-btn group relative inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-base font-semibold text-white transition-shadow hover:shadow-[0_2px_36px_rgba(16,185,129,0.5)]"
          >
            <span className="relative z-10 inline-flex items-center gap-2">
              Запросить демо
              <svg
                width="18"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M6 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-10 py-4 text-base font-semibold text-neutral-300 transition-all hover:border-neutral-500 hover:text-white"
          >
            Узнать больше
          </a>
        </div>
      </div>
    </section>
  );
}
