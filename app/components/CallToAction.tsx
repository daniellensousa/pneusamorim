import Link from "next/link";
import "@/app/css/cta.css";
import { SITE } from "@/app/data/site";

type CtaButton = {
  label: string;
  href: string;
  variant: "dark" | "light";
  icon: "whatsapp" | "arrow";
};

type CallToActionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttons?: CtaButton[];
};

const DEFAULT_BUTTONS: CtaButton[] = [
  {
    label: "Chamar no WhatsApp",
    href: SITE.whatsappUrl,
    variant: "dark",
    icon: "whatsapp",
  },
  { label: "Ver pneus", href: "/pneus", variant: "light", icon: "arrow" },
];

const WhatsappIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 12a9 9 0 0 1-13.4 7.9L3 21l1.2-4.4A9 9 0 1 1 21 12z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="square"
    aria-hidden="true"
  >
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

export default function CallToAction({
  eyebrow = "Atendimento rápido",
  title = "Hora de trocar os pneus?",
  description = "Mande a medida pelo WhatsApp e receba o orçamento na hora.",
  buttons = DEFAULT_BUTTONS,
}: CallToActionProps) {
  return (
    <section className="cta">
      <div className="cta-dots" aria-hidden="true" />

      <div className="cta-inner">
        <div className="cta-text">
          <span className="cta-eyebrow">{eyebrow}</span>
          <h2 className="cta-title">{title}</h2>
          <p className="cta-description">{description}</p>
        </div>

        <div className="cta-actions">
          {buttons.map((button) => {
            const external = button.href.startsWith("http");
            const className = `cta-btn cta-btn--${button.variant}`;
            const content = (
              <>
                {button.icon === "whatsapp" && <WhatsappIcon />}
                {button.label}
                {button.icon === "arrow" && <ArrowIcon />}
              </>
            );

            return external ? (
              <a
                key={button.label}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {content}
              </a>
            ) : (
              <Link key={button.label} href={button.href} className={className}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
