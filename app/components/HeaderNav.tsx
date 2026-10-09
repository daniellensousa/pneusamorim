"use client";

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

  return (
    <nav className="header-nav">
      {NAV_LINKS.map(({ label, href }) => {
        const active =
          href === "/" ? pathname === "/" : pathname.startsWith(href);

        return (
          <Link
            key={href}
            href={href}
            className="header-nav-link"
            aria-current={active ? "page" : undefined}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
