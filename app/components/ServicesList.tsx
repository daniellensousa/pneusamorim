import { SERVICES } from "@/app/data/services";
import "@/app/css/services-list.css";
import { SITE } from "@/app/data/site";

const CORNERS = ["tl", "tr", "bl", "br"] as const;

export default function ServicesList() {
  return (
    <section className="svc-list">
      <div className="svc-list-inner">
        <div className="svc-list-head">
          <div className="svc-list-head-text">
            <span className="svc-list-eyebrow">
              <span className="svc-list-eyebrow-dot" aria-hidden="true" />
              O que fazemos
            </span>
            <h2 className="svc-list-title">Tudo para seu carro rodar seguro</h2>
          </div>
          <p className="svc-list-intro">
            Mais de 40 anos de experiência em pneus, alinhamento, suspensão e
            freios — tudo em um só lugar.
          </p>
        </div>

        <div className="svc-list-grid">
          {SERVICES.map((service) => (
            <article key={service.title} className="svc-card">
              <span className="svc-card-line" aria-hidden="true" />

              <div className="svc-card-icon">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {service.icon}
                </svg>
                {CORNERS.map((c) => (
                  <span key={c} className={`svc-card-corner svc-card-corner--${c}`} />
                ))}
              </div>

              <div className="svc-card-body">
                <h3 className="svc-card-title">{service.title}</h3>
                <p className="svc-card-text">{service.text}</p>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="svc-card-link"
                >
                  Agendar pelo WhatsApp
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
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
