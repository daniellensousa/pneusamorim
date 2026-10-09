import "@/app/css/process.css";
import { SITE } from "@/app/data/site";

const STEPS = [
  {
    number: "01",
    title: "Fale com a gente",
    text: `Chame no WhatsApp ${SITE.whatsappDisplay} ou ligue para ${SITE.phoneDisplay} e conte o que o seu carro precisa.`,
  },
  {
    number: "02",
    title: "Traga o veículo",
    text: "Venha até a loja na Penha, de segunda a sábado, no horário de funcionamento.",
  },
  {
    number: "03",
    title: "Saia rodando seguro",
    text: "Serviço feito por quem tem mais de 40 anos de experiência com pneus.",
  },
];

const CORNERS = ["tl", "tr", "bl", "br"] as const;

export default function Process() {
  return (
    <section className="process grid-bg">
      <div className="process-inner">
        <div className="process-head">
          <span className="process-eyebrow">
            <span className="process-eyebrow-dot" aria-hidden="true" />
            Simples assim
          </span>
          <h2 className="process-title">Como funciona</h2>
        </div>

        <div className="process-grid">
          {STEPS.map((step) => (
            <div key={step.number} className="process-card">
              {CORNERS.map((c) => (
                <span key={c} className={`process-corner process-corner--${c}`} />
              ))}
              <span className="process-number">{step.number}</span>
              <h3 className="process-card-title">{step.title}</h3>
              <p className="process-card-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
