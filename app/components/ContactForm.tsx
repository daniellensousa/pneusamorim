"use client";

import { useState } from "react";
import { SITE } from "@/app/data/site";

const TOPICS = [
  "Orçamento de pneus",
  "Agendar serviço",
  "Alinhamento e balanceamento",
  "Suspensão ou freios",
  "Outro assunto",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState("");

  const text =
    "Olá! " +
    (name ? `Sou ${name}. ` : "") +
    `Assunto: ${topic}.` +
    (message ? ` ${message}` : "") +
    (phone ? ` Meu telefone: ${phone}` : "");

  return (
    <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
      <span className="contact-form-line" aria-hidden="true" />

      <span className="contact-form-eyebrow">
        <span className="contact-form-eyebrow-dot" aria-hidden="true" />
        Canal direto
      </span>
      <h2 className="contact-form-title">Envie uma mensagem</h2>
      <p className="contact-form-description">
        Respondemos pelo WhatsApp no horário de funcionamento.
      </p>

      <label className="contact-field">
        Nome
        <input
          type="text"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <label className="contact-field">
        Telefone
        <input
          type="tel"
          autoComplete="tel"
          placeholder="(11) 90000-0000"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </label>

      <label className="contact-field">
        Assunto
        <select value={topic} onChange={(event) => setTopic(event.target.value)}>
          {TOPICS.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>

      <label className="contact-field">
        Mensagem
        <textarea
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>

      <a
        href={`${SITE.whatsappUrl}?text=${encodeURIComponent(text)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-submit"
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
  );
}
