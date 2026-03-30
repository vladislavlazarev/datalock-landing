"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import LangSwitch from "./LangSwitch";
import { useLocale } from "@/lib/locale-context";
import { translations } from "@/lib/i18n";

const navKeys = ["features", "technology", "security", "about"] as const;
const navHrefs = ["#features", "#technology", "#security", "#about"];

export default function Navbar() {
  const { locale } = useLocale();
  const t = translations.nav;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#030303]/70 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a href="#" className="relative z-10 flex items-center gap-0">
            <Logo size={68} />
            <span className="-ml-3 text-lg font-bold tracking-tight text-white">
              Data<span className="text-emerald-400">Lock</span>
            </span>
          </a>

          {/* Desktop nav — absolute center */}
          <div className="pointer-events-none absolute inset-0 hidden items-center justify-center md:flex">
            <div className="pointer-events-auto flex items-center gap-8">
              {navKeys.map((key, i) => (
                <a
                  key={key}
                  href={navHrefs[i]}
                  onClick={(e) => handleLinkClick(e, navHrefs[i])}
                  className="text-[15px] font-medium text-white/70 transition-colors hover:text-white"
                >
                  {t[key][locale]}
                </a>
              ))}
            </div>
          </div>

          {/* CTA + lang + burger */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="hidden md:flex">
              <LangSwitch />
            </div>
            <a
              href="#demo"
              onClick={(e) => handleLinkClick(e, "#demo")}
              className="hidden items-center rounded-full px-6 py-2.5 text-sm font-semibold text-white md:inline-flex"
              style={{
                background: "linear-gradient(165deg, #34d399 0%, #059669 50%, #047857 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 12px rgba(16,185,129,0.25)",
              }}
            >
              {t.requestDemo[locale]}
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-white/10 md:hidden"
              aria-label="Меню"
            >
              <div className="flex w-5 flex-col gap-[5px]">
                <span
                  className={`h-[1.5px] w-full bg-white transition-all duration-300 ${
                    mobileOpen ? "translate-y-[6.5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-full bg-white transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-full bg-white transition-all duration-300 ${
                    mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={`fixed top-16 right-0 z-40 h-[calc(100dvh-4rem)] w-72 border-l border-white/10 bg-[#030303]/95 backdrop-blur-xl transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-1 p-6">
          {navKeys.map((key, i) => (
            <a
              key={key}
              href={navHrefs[i]}
              onClick={(e) => handleLinkClick(e, navHrefs[i])}
              className="rounded-lg px-4 py-3 text-base font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {t[key][locale]}
            </a>
          ))}
          <div className="mt-3 flex justify-center">
            <LangSwitch />
          </div>
          <a
            href="#demo"
            onClick={(e) => handleLinkClick(e, "#demo")}
            className="mt-4 rounded-full px-5 py-3 text-center text-sm font-semibold text-white"
            style={{
              background: "linear-gradient(165deg, #34d399 0%, #059669 50%, #047857 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 12px rgba(16,185,129,0.25)",
            }}
          >
            {t.requestDemo[locale]}
          </a>
        </div>
      </div>
    </>
  );
}
