"use client";

import { useLocale } from "@/lib/locale-context";
import type { Locale } from "@/lib/i18n";

const langs: { code: Locale; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "uz", label: "UZ" },
];

export default function LangSwitch() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-0.5">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code)}
          className={`cursor-pointer rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
            locale === l.code
              ? "bg-emerald-500/20 text-emerald-400"
              : "text-white/40 hover:text-white/70"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
