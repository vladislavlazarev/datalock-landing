"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const navLinks = [
  { label: "Возможности", href: "#features" },
  { label: "Технологии", href: "#technology" },
  { label: "Безопасность", href: "#security" },
  { label: "О нас", href: "#about" },
];

export default function Navbar() {
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
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Logo size={34} />
            <span className="text-lg font-bold tracking-tight text-white">
              Data<span className="text-emerald-400">Lock</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[15px] font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + burger */}
          <div className="flex items-center gap-4">
            <a
              href="#demo"
              onClick={(e) => handleLinkClick(e, "#demo")}
              className="hidden rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_2px_16px_rgba(16,185,129,0.3),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all hover:shadow-[0_2px_24px_rgba(16,185,129,0.5)] md:inline-flex"
            >
              Запросить демо
            </a>

            {/* Burger button */}
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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="rounded-lg px-4 py-3 text-base font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#demo"
            onClick={(e) => handleLinkClick(e, "#demo")}
            className="mt-4 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_2px_16px_rgba(16,185,129,0.3)] transition-all hover:shadow-[0_2px_24px_rgba(16,185,129,0.5)]"
          >
            Запросить демо
          </a>
        </div>
      </div>
    </>
  );
}
