"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "INÍCIO", href: "/" },
  { label: "QUEM SOMOS", href: "/quem-somos" },
  { label: "SERVIÇOS", href: "/servicos" },
  { label: "PNEUS", href: "/pneus" },
  { label: "CONTATO", href: "/contato" },
];

export default function HeaderNav() {
  const pathname = usePathname();
  // Guarda em qual página o menu foi aberto: ao navegar, ele fecha sozinho.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  // Fecha com a tecla Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenOn(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav className="header-nav" aria-label="Principal">
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="header-nav-link"
            aria-current={isActive(href) ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        className="header-menu-toggle"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="header-mobile-menu"
        onClick={() => setOpenOn(open ? null : pathname)}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="square"
          aria-hidden="true"
        >
          {open ? (
            <path d="M5 5l14 14M19 5L5 19" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      <nav
        id="header-mobile-menu"
        className={`header-mobile-menu${open ? " header-mobile-menu--open" : ""}`}
        aria-label="Menu"
      >
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="header-mobile-link"
            aria-current={isActive(href) ? "page" : undefined}
            tabIndex={open ? 0 : -1}
          >
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
}
