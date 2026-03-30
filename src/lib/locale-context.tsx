"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { type Locale, detectLocale } from "./i18n";

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
}>({ locale: "en", setLocale: () => {} });

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    setLocale(detectLocale());
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function useT<T extends Record<string, unknown>>(obj: T): T[Locale] {
  const { locale } = useLocale();
  return (obj as Record<string, unknown>)[locale] as T[Locale];
}
