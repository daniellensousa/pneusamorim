"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import lojaImg from "@/app/assets/loja.png";
import seloImg from "@/app/assets/selo.png";
import "@/app/css/banner.css";
import { SITE } from "@/app/data/site";

type Tag = { label: string; x: number; y: number };

type Slide = {
  id: string;
  tabLabel: string;
  kicker: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  visual:
    | { type: "photo" }
    | { type: "wheel"; tags: Tag[] }
    | { type: "seal"; tags: Tag[] }
    | { type: "big"; top: string; main: string; tags: Tag[] };
};

const SLIDES: Slide[] = [
  {
    id: "tradicao",
    tabLabel: "Tradição",
    kicker: "Desde 1984",
    title: "40 anos rodando com você",
    text: "Tradição, confiança e qualidade no atendimento. Venda e troca de pneus com quem entende do assunto.",
    cta: "Pedir orçamento",
    href: SITE.whatsappUrl,
    visual: { type: "photo" },
  },
  {
    id: "servicos",
    tabLabel: "Serviços",
    kicker: "Precisão",
    title: "Alinhamento e balanceamento",
    text: "Alinhamento computadorizado e balanceamento para mais segurança e pneus que duram mais.",
    cta: "Ver serviços",
    href: "/servicos",
    visual: {
      type: "wheel",
      tags: [
        { label: "Alinhamento", x: 0, y: 70 },
        { label: "Balanceamento", x: 400, y: 20 },
        { label: "Calibragem", x: 430, y: 440 },
      ],
    },
  },
  {
    id: "pneus",
    tabLabel: "Pneus",
    kicker: "Estoque",
    title: "O pneu certo para o seu carro",
    text: "Trabalhamos com diversas marcas e medidas para todos os tipos de veículo. Consulte a sua.",
    cta: "Ver pneus",
    href: "/pneus",
    visual: {
      type: "seal",
      tags: [
        { label: "Passeio", x: 10, y: 90 },
        { label: "SUV · Caminhonete", x: 360, y: 30 },
        { label: "Utilitário", x: 20, y: 420 },
      ],
    },
  },
  {
    id: "horario",
    tabLabel: "Horário",
    kicker: "Horário",
    title: "Aberto também aos sábados",
    text: "Segunda a sexta das 08h às 18h e sábado das 08h às 13h, na Penha.",
    cta: "Chamar no WhatsApp",
    href: SITE.whatsappUrl,
    visual: {
      type: "big",
      top: "Sábado",
      main: "08—13h",
      tags: [
        { label: "Seg–Sex · 08:00–18:00", x: 0, y: 40 },
        { label: "Dom · Fechado", x: 400, y: 440 },
      ],
    },
  },
];

const SLIDE_INTERVAL = 7000;

const ArrowIcon = ({ d, size = 20 }: { d: string; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="square"
    aria-hidden="true"
  >
    <path d={d} />
  </svg>
);

const CORNERS = ["tl", "tr", "bl", "br"] as const;

export default function Banner() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (paused || hover) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      SLIDE_INTERVAL,
    );
    return () => clearInterval(timer);
  }, [paused, hover, index]);

  const goTo = (i: number) => setIndex((i + SLIDES.length) % SLIDES.length);

  return (
    <section
      className="banner grid-bg"
      aria-label="Destaques"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="banner-inner">
        <div className="banner-slides">
          {SLIDES.map((slide, i) => {
            const active = i === index;
            const { visual } = slide;
            return (
              <div
                key={slide.id}
                className={`banner-layer${active ? " banner-layer--on" : ""}`}
                aria-hidden={!active}
              >
                <div className="banner-content">
                  <span className="banner-kicker">
                    <span className="banner-num">
                      {String(i + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
                    </span>
                    {slide.kicker}
                  </span>

                  <h1 className="banner-title">{slide.title}</h1>
                  <p className="banner-text">{slide.text}</p>

                  <div className="banner-actions">
                    <a href={slide.href} className="banner-btn banner-btn--primary">
                      {slide.cta}
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
                    <a href="/contato" className="banner-btn banner-btn--secondary">
                      Como chegar
                    </a>
                  </div>

                  <span className="banner-phone">
                    Prefere ligar? <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
                  </span>
                </div>
                <div className="banner-visual">
                  {visual.type === "photo" && (
                    <>
                      <div className="banner-photo">
                        <Image
                          src={lojaImg}
                          alt="Fachada da loja Pneus Amorim com rodas e pneus expostos"
                          className="banner-photo-img"
                          priority={i === 0}
                        />
                        <div className="banner-photo-shade" />
                        <div className="banner-scan" />
                      </div>
                      {CORNERS.map((c) => (
                        <span key={c} className={`banner-corner banner-corner--${c}`} />
                      ))}
                      <span className="banner-photo-caption">
                        ● Loja Penha · São Paulo, SP
                      </span>
                    </>
                  )}

                  {visual.type !== "photo" && (
                    <>
                      <div className="banner-graphic">
                        <svg
                          className="banner-spin"
                          width="520"
                          height="520"
                          viewBox="0 0 520 520"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle cx="260" cy="260" r="256" stroke="rgb(var(--white-rgb) / 0.22)" strokeWidth="1.5" strokeDasharray="3 9" />
                          <circle cx="260" cy="260" r="256" stroke="var(--color-red)" strokeWidth="3" strokeDasharray="120 1612" />
                        </svg>
                        <svg
                          className="banner-spin-rev"
                          width="520"
                          height="520"
                          viewBox="0 0 520 520"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle cx="260" cy="260" r="220" stroke="rgb(var(--white-rgb) / 0.14)" strokeWidth="1" strokeDasharray="40 14" />
                          <circle cx="260" cy="260" r="220" stroke="var(--color-white)" strokeWidth="2" strokeDasharray="18 1386" />
                        </svg>

                        <div className="banner-graphic-center">
                          {visual.type === "wheel" && (
                            <svg
                              width="300"
                              height="300"
                              viewBox="0 0 120 120"
                              fill="none"
                              stroke="var(--color-white)"
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
                          )}
                          {visual.type === "seal" && (
                            <Image src={seloImg} alt="" className="banner-seal" />
                          )}
                          {visual.type === "big" && (
                            <div className="banner-big">
                              <span className="banner-big-top">{visual.top}</span>
                              <span className="banner-big-main">{visual.main}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {visual.tags.map((tag) => (
                        <span
                          key={tag.label}
                          className="banner-tag"
                          style={{ left: tag.x, top: tag.y }}
                        >
                          <span className="banner-tag-dot" aria-hidden="true" />
                          {tag.label}
                        </span>
                      ))}
                    </>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        <div className="banner-nav">
          <div className="banner-tabs">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                className={`banner-tab${i === index ? " banner-tab--on" : ""}`}
                aria-label={`Ir para o slide ${i + 1}: ${s.tabLabel}`}
                onClick={() => goTo(i)}
              >
                <span className="banner-tab-label">
                  {String(i + 1).padStart(2, "0")} {s.tabLabel}
                </span>
                <span className="banner-tab-bar" />
              </button>
            ))}
          </div>

          <div className="banner-controls">
            <button
              type="button"
              className="banner-control banner-control--text"
              onClick={() => setPaused((p) => !p)}
            >
              {paused ? "Continuar" : "Pausar"}
            </button>
            <button
              type="button"
              className="banner-control"
              aria-label="Slide anterior"
              onClick={() => goTo(index - 1)}
            >
              <ArrowIcon d="M15 6l-6 6 6 6" />
            </button>
            <button
              type="button"
              className="banner-control banner-control--primary"
              aria-label="Próximo slide"
              onClick={() => goTo(index + 1)}
            >
              <ArrowIcon d="M9 6l6 6-6 6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
