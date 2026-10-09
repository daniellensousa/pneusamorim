import "@/app/css/values.css";

const VALUES = [
  {
    title: "Confiança",
    text: "Décadas atendendo famílias e motoristas da região com honestidade.",
    icon: (
      <>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: "Qualidade",
    text: "Os melhores pneus do mercado e serviços feitos com cuidado.",
    icon: (
      <path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z" />
    ),
  },
  {
    title: "Atendimento",
    text: "Excelência e satisfação de quem atendemos, sempre em primeiro lugar.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
        <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2.2.6 3.5 2.8 3.5 6" />
      </>
    ),
  },
];

export default function Values() {
  return (
    <section className="values">
      <div className="values-inner">
        <div className="values-head">
          <span className="values-eyebrow">
            <span className="values-eyebrow-dot" aria-hidden="true" />
            Nossos valores
          </span>
          <h2 className="values-title">O que nos move</h2>
        </div>

        <div className="values-grid">
          {VALUES.map((value) => (
            <div key={value.title} className="values-card">
              <span className="values-card-line" aria-hidden="true" />
              <span className="values-card-icon">
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
                  {value.icon}
                </svg>
              </span>
              <h3 className="values-card-title">{value.title}</h3>
              <p className="values-card-text">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
