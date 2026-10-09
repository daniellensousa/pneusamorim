import Image from "next/image";
import Link from "next/link";
import logoClara from "@/app/assets/logo-clara.png";
import "@/app/css/footer.css";
import { SITE } from "@/app/data/site";

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Serviços", href: "/servicos" },
  { label: "Pneus", href: "/pneus" },
  { label: "Contato", href: "/contato" },
];

const HOURS = [
  { days: "Segunda a Sexta", hours: "08:00 – 18:00" },
  { days: "Sábado", hours: "08:00 – 13:00" },
  { days: "Domingo", hours: "Fechado" },
];

export default function Footer() {
  return (
    <footer className="footer grid-bg">
      <div className="footer-inner">
        <span className="footer-glow" aria-hidden="true" />

        <div className="footer-columns">
          <div className="footer-brand">
            <Link href="/" aria-label="Pneus Amorim Aricanduva — início">
              <Image
                src={logoClara}
                alt="Pneus Amorim Aricanduva"
                className="footer-logo"
              />
            </Link>
            <p className="footer-about">
              Venda e troca de pneus e serviços automotivos com mais de 40 anos
              de tradição em São Paulo.
            </p>
          </div>

          <nav className="footer-col" aria-label="Navegue">
            <div className="footer-heading">Navegue</div>
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href} className="footer-link">
                {label}
              </Link>
            ))}
          </nav>

          <div className="footer-col">
            <div className="footer-heading">Horário</div>
            {HOURS.map(({ days, hours }) => (
              <span key={days} className="footer-hours">
                {days}
                <br />
                <strong>{hours}</strong>
              </span>
            ))}
          </div>

          <div className="footer-col footer-col--contact">
            <div className="footer-heading">Contato</div>
            <span>
              {SITE.streetAddress}
              <br />
              {SITE.neighborhood}, {SITE.city} – {SITE.state}
              <br />
              CEP {SITE.zipCode}
            </span>
            <a href={SITE.phoneHref} className="footer-phone">
              {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-phone"
            >
              {SITE.whatsappDisplay} · WhatsApp
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="footer-link"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Pneus Amorim Aricanduva · Todos os
            direitos reservados
          </span>
        </div>
      </div>
    </footer>
  );
}
