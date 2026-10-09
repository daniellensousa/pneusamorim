import "@/app/css/timeline.css";

const EVENTS = [
  {
    year: "1984",
    text: "Fundação da Pneus Amorim Aricanduva, iniciando uma história de tradição e confiança em São Paulo.",
  },
  {
    year: "1990s",
    text: "Expansão dos serviços automotivos, consolidando-se como referência regional em pneus.",
  },
  {
    year: "2000s",
    text: "Modernização dos equipamentos e ampliação do portfólio de marcas e modelos de pneus.",
  },
  {
    year: "2024+",
    text: "Presente no digital, continuamos atendendo com a mesma excelência de sempre, agora com mais canais de contato.",
  },
];

export default function Timeline() {
  return (
    <section className="timeline grid-bg">
      <div className="timeline-inner">
        <div className="timeline-head">
          <span className="timeline-eyebrow">
            <span className="timeline-eyebrow-dot" aria-hidden="true" />
            Linha do tempo
          </span>
          <h2 className="timeline-title">Nossa trajetória</h2>
        </div>

        <ol className="timeline-track">
          <span className="timeline-line" aria-hidden="true" />
          <span className="timeline-line-fill" aria-hidden="true" />

          {EVENTS.map((event) => (
            <li key={event.year} className="timeline-item">
              <span className="timeline-marker" aria-hidden="true" />
              <span className="timeline-year">{event.year}</span>
              <p className="timeline-text">{event.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
