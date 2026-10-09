import type { ReactNode } from "react";
import { SITE } from "@/app/data/site";

const CARDS: { title: string; icon: ReactNode; content: ReactNode }[] = [
  {
    title: "Endereço",
    icon: (
      <>
        <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    content: (
      <>
        {SITE.streetAddress}
        <br />
        {SITE.neighborhood}, {SITE.city} – {SITE.state}
        <br />
        CEP {SITE.zipCode}
      </>
    ),
  },
  {
    title: "Telefone / WhatsApp",
    icon: <path d="M21 12a9 9 0 0 1-13.4 7.9L3 21l1.2-4.4A9 9 0 1 1 21 12z" />,
    content: (
      <span className="contact-phones">
        <a href={SITE.phoneHref} className="contact-phone">
          {SITE.phoneDisplay}
        </a>
        <a
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-phone"
        >
          {SITE.whatsappDisplay}
          <span className="contact-phone-tag"> WhatsApp</span>
        </a>
      </span>
    ),
  },
  {
    title: "E-mail",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
    content: (
      <a
        href={`mailto:${SITE.email}`}
        className="contact-email"
      >
        {SITE.email}
      </a>
    ),
  },
  {
    title: "Horário",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    content: (
      <span className="contact-hours">
        Segunda a Sexta · 08h às 18h
        <br />
        Sábado · 08h às 13h
        <br />
        Domingo · Fechado
      </span>
    ),
  },
];

export default function ContactCards() {
  return (
    <div className="contact-cards">
      {CARDS.map((card) => (
        <div key={card.title} className="contact-card">
          <span className="contact-card-icon">
            <svg
              width="26"
              height="26"
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
          <h3 className="contact-card-title">{card.title}</h3>
          <div className="contact-card-content">{card.content}</div>
        </div>
      ))}
    </div>
  );
}
