"use client";

import { useState } from "react";
import { WHATSAPP_URL } from "@/app/data/tires";
import "@/app/css/quote.css";

const CORNERS = ["tl", "tr", "bl", "br"] as const;

export default function QuoteForm() {
  const [size, setSize] = useState("");
  const [qty, setQty] = useState("4");
  const [car, setCar] = useState("");

  const message =
    `Olá! Gostaria de um orçamento: ${qty || 1} pneu(s)` +
    (size ? ` ${size}` : "") +
    (car ? ` para ${car}` : "") +
    ".";

  return (
    <section className="quote">
      <div className="quote-inner">
        <div className="quote-text">
          <span className="quote-eyebrow">
            <span className="quote-eyebrow-dot" aria-hidden="true" />
            Orçamento rápido
          </span>
          <h2 className="quote-title">Peça seu orçamento pelo WhatsApp</h2>
          <p className="quote-description">
            Preencha os dados e a mensagem já vai pronta para a nossa equipe.
          </p>
          <div className="quote-preview">
            <span className="quote-preview-label">Mensagem:</span> {message}
          </div>
        </div>

        <form
          className="quote-form"
          onSubmit={(event) => event.preventDefault()}
        >
          {CORNERS.map((c) => (
            <span key={c} className={`quote-corner quote-corner--${c}`} />
          ))}

          <label className="quote-field">
            Medida do pneu
            <input
              type="text"
              placeholder="Ex.: 175/70 R14"
              value={size}
              onChange={(event) => setSize(event.target.value)}
            />
          </label>

          <label className="quote-field">
            Quantidade
            <input
              type="number"
              min="1"
              max="8"
              value={qty}
              onChange={(event) => setQty(event.target.value)}
            />
          </label>

          <label className="quote-field quote-field--wide">
            Veículo (modelo e ano)
            <input
              type="text"
              placeholder="Ex.: Onix 2020"
              value={car}
              onChange={(event) => setCar(event.target.value)}
            />
          </label>

          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="quote-submit"
          >
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
            Enviar pelo WhatsApp
          </a>
        </form>
      </div>
    </section>
  );
}
