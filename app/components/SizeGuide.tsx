import "@/app/css/size-guide.css";

const PARTS = [
  {
    value: "205",
    text: "Largura do pneu, em milímetros",
    accent: false,
  },
  {
    value: "55",
    text: "Altura do perfil, em % da largura",
    accent: true,
  },
  {
    value: "R16",
    text: "Construção radial e aro 16 polegadas",
    accent: false,
  },
];

const CORNERS = ["tl", "tr", "bl", "br"] as const;

export default function SizeGuide() {
  return (
    <section className="guide grid-bg">
      <div className="guide-inner">
        <div className="guide-text">
          <span className="guide-eyebrow">
            <span className="guide-eyebrow-dot" aria-hidden="true" />
            Guia rápido
          </span>
          <h2 className="guide-title">Como ler a medida do pneu</h2>
          <p className="guide-description">
            A medida fica escrita na lateral do pneu. Mande uma foto dela pelo
            WhatsApp e a gente encontra o pneu certo para você.
          </p>
        </div>

        <div className="guide-card">
          {CORNERS.map((c) => (
            <span key={c} className={`guide-corner guide-corner--${c}`} />
          ))}

          <span className="guide-label">LEITURA DA LATERAL</span>

          <div className="guide-size" aria-label="205/55 R16">
            <span>205</span>
            <span className="guide-size-slash">/</span>
            <span className="guide-size-accent">55</span>
            <span>R16</span>
          </div>

          <div className="guide-parts">
            {PARTS.map((part) => (
              <div
                key={part.value}
                className={`guide-part${part.accent ? " guide-part--accent" : ""}`}
              >
                <strong>{part.value}</strong>
                {part.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
