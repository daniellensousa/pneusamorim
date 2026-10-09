import type { ReactNode } from "react";
import Link from "next/link";
import "@/app/css/page-hero.css";

type PageHeroProps = {
  title: string;
  highlight: string;
  breadcrumb: string;
  subtitle: string;
  /** Arte do lado direito (opcional): PageHeroPhoto ou PageHeroWheel. */
  children?: ReactNode;
};

export default function PageHero({
  title,
  highlight,
  breadcrumb,
  subtitle,
  children,
}: PageHeroProps) {
  return (
    <section className="page-hero grid-bg">
      <div className="page-hero-inner">
        <div className="page-hero-text">
          <span className="page-hero-crumbs">
            <Link href="/">Início</Link> /{" "}
            <span className="page-hero-current">{breadcrumb}</span>
          </span>
          <h1 className="page-hero-title">
            {title} <span className="page-hero-highlight">{highlight}</span>
          </h1>
          <p className="page-hero-subtitle">{subtitle}</p>
        </div>

        {children}
      </div>
    </section>
  );
}
