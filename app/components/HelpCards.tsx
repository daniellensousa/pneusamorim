import Link from "next/link";
import "@/app/css/help.css";
import { SITE } from "@/app/data/site";

const CARDS = [
  {
    title: "Ligar agora",
    subtitle: SITE.phoneDisplay,
    href: SITE.phoneHref,
    icon: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  },
  {
    title: "Chamar no WhatsApp",
    subtitle: "Orçamento rápido",
    href: SITE.whatsappUrl,
    icon: <path d="M21 12a9 9 0 0 1-13.4 7.9L3 21l1.2-4.4A9 9 0 1 1 21 12z" />,
  },
  {
    title: "Como chegar",
    subtitle: SITE.streetAddress,
    href: "/contato",
    icon: (
      <>
        <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
  },
];

export default function HelpCards() {
  return (
    <section className="help" aria-label="Fale com a gente">
      <div className="help-inner">
        <h2 className="help-title">Como podemos te ajudar hoje?</h2>

        <div className="help-grid">
          {CARDS.map((card) => {
            const content = (
              <>
                <span className="help-icon">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {card.icon}
                  </svg>
                </span>
                <span className="help-text">
                  <strong className="help-card-title">{card.title}</strong>
                  <span className="help-card-subtitle">{card.subtitle}</span>
                </span>
              </>
            );

            return card.href.startsWith("/") ? (
              <Link key={card.title} href={card.href} className="help-card">
                {content}
              </Link>
            ) : (
              <a key={card.title} href={card.href} className="help-card">
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
