import Logo from "./Logo";

const navLinks = [
  { label: "Возможности", href: "#features" },
  { label: "Технологии", href: "#technology" },
  { label: "Безопасность", href: "#security" },
  { label: "О нас", href: "#about" },
];

const contacts = [
  { label: "mr.ubaydullaev@gmail.com", href: "mailto:mr.ubaydullaev@gmail.com" },
  { label: "+998 (90) 904-39-93", href: "tel:+998909043993" },
  { label: "@karim_pss", href: "https://t.me/karim_pss" },
  { label: "datalock.uz", href: "https://datalock.uz" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <Logo size={28} />
              <span className="text-lg font-bold text-white">
                Data<span className="text-emerald-400">Lock</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/40">
              Единая система контроля и аналитики бизнеса
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/60">
              Навигация
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/60">
              Контакты
            </p>
            <ul className="flex flex-col gap-2">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/30">
          &copy; 2025 DataLock by Perfect System Solution. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
