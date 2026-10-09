import Link from "next/link";
import { SERVICES } from "@/app/data/services";
import "@/app/css/services.css";

export default function Services() {
  return (
    <section className="services">
      <div className="services-inner">
        <div className="services-head">
          <div className="services-head-text">
            <span className="services-eyebrow">
              <span className="services-eyebrow-dot" aria-hidden="true" />
              O que fazemos
            </span>
            <h2 className="services-title">Serviços automotivos completos</h2>
          </div>
          <p className="services-intro">
            Qualidade garantida e mais de 40 anos de experiência cuidando da
            segurança de quem roda por São Paulo.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <Link key={service.title} href="/servicos" className="services-card">
              <span className="services-card-line" aria-hidden="true" />
              <span className="services-card-icon">
                <svg
                  width="32"
                  height="32"
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
              </span>
              <h3 className="services-card-title">{service.title}</h3>
              <p className="services-card-text">{service.text}</p>
              <span className="services-card-link">
                Ver detalhes
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
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
