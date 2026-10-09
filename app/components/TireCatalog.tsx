"use client";

import { useState } from "react";
import {
  CATEGORIES,
  TIRES,
  WHATSAPP_URL,
  type TireCategory,
} from "@/app/data/tires";
import "@/app/css/tire-catalog.css";

export default function TireCatalog() {
  const [category, setCategory] = useState<"todos" | TireCategory>("todos");

  const tires = TIRES.filter(
    (tire) => category === "todos" || tire.category === category,
  );

  return (
    <section className="catalog">
      <div className="catalog-inner">
        <div className="catalog-head">
          <div className="catalog-head-text">
            <span className="catalog-eyebrow">
              <span className="catalog-eyebrow-dot" aria-hidden="true" />
              Encontre o seu
            </span>
            <h2 className="catalog-title">Pneus em estoque</h2>
          </div>
          <p className="catalog-intro">
            Estoque sujeito a alteração. Não achou a sua medida? Chame no
            WhatsApp que a gente consulta.
          </p>
        </div>

        <div className="catalog-filters">
          <div
            className="catalog-chips"
            role="group"
            aria-label="Filtrar por tipo de veículo"
          >
            {CATEGORIES.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`catalog-chip${item.id === category ? " catalog-chip--on" : ""}`}
                aria-pressed={item.id === category}
                onClick={() => setCategory(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <span className="catalog-count">
            {String(tires.length).padStart(2, "0")} opções
          </span>
        </div>

        <div className="catalog-grid">
          {tires.map((tire) => (
            <article key={`${tire.label}-${tire.size}`} className="tire-card">
              <div className="tire-card-media">
                <span className="tire-card-tag">{tire.label}</span>
                <svg
                  width="130"
                  height="130"
                  viewBox="0 0 120 120"
                  fill="none"
                  stroke="var(--color-tile-icon)"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <circle cx="60" cy="60" r="50" strokeWidth="12" />
                  <circle cx="60" cy="60" r="37" strokeWidth="2" />
                  <circle cx="60" cy="60" r="9" strokeWidth="3" />
                  <path
                    d="M60 51V25M68.6 57.2l24.7-8M65.3 67.3l15.3 21M54.7 67.3l-15.3 21M51.4 57.2l-24.7-8"
                    strokeWidth="4.5"
                  />
                </svg>
              </div>

              <div className="tire-card-body">
                <h3 className="tire-card-size">{tire.size}</h3>
                <div className="tire-card-use">
                  <span>APLICAÇÃO</span>
                  <span className="tire-card-use-value">{tire.use}</span>
                </div>
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                    `Olá! Gostaria de consultar: ${tire.label} ${tire.size}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tire-card-btn"
                >
                  Consultar preço
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
