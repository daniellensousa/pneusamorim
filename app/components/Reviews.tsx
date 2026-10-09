import "@/app/css/reviews.css";

// Dados do perfil da loja no Google (Pneus Amorim, Penha).
// Atualize aqui quando a nota ou o número de avaliações mudar.
const GOOGLE_RATING = "4,6";
const GOOGLE_REVIEW_COUNT = 416;
const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps/search/?api=1&query=Pneus+Amorim+Penha";

const REVIEWS = [
  {
    text: "Ótimo atendimento. Ótimos preços. Estacionamento espaçoso. Diversidade de produtos.",
  },
  {
    text: "Menor preço de toda região, serviço de alinhamento e balanceamento e nota 💯",
  },
  {
    text: "E isso é raridade no mercado de venda de pneus e suspensão.",
  },
];

const CORNERS = ["tl", "tr", "bl", "br"] as const;

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z" />
  </svg>
);

const Stars = () => (
  <div className="reviews-stars" role="img" aria-label="5 estrelas">
    {[1, 2, 3, 4, 5].map((n) => (
      <StarIcon key={n} />
    ))}
  </div>
);

export default function Reviews() {
  return (
    <section className="reviews grid-bg" aria-labelledby="avaliacoes">
      <div className="reviews-inner">
        <div className="reviews-head">
          <div className="reviews-head-text">
            <span className="reviews-eyebrow">
              <span className="reviews-eyebrow-dot" aria-hidden="true" />
              Quem confia, recomenda
            </span>
            <h2 id="avaliacoes" className="reviews-title">
              O que nossos clientes dizem
            </h2>
          </div>

          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-btn"
          >
            Ver todas no Google
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

        <div className="reviews-body">
          <div className="reviews-score">
            {CORNERS.map((c) => (
              <span key={c} className={`reviews-score-corner reviews-score-corner--${c}`} />
            ))}

            <div className="reviews-ring">
              <svg width="132" height="132" viewBox="0 0 132 132" fill="none" aria-hidden="true">
                <circle cx="66" cy="66" r="58" stroke="rgb(var(--white-rgb) / 0.08)" strokeWidth="8" />
                <circle
                  cx="66"
                  cy="66"
                  r="58"
                  stroke="var(--color-red-light)"
                  strokeWidth="8"
                  strokeDasharray="4 4"
                  transform="rotate(-90 66 66)"
                />
              </svg>
              <svg className="reviews-ring-spin" width="132" height="132" viewBox="0 0 132 132" fill="none" aria-hidden="true">
                <circle cx="66" cy="66" r="46" stroke="rgb(var(--white-rgb) / 0.25)" strokeWidth="1" strokeDasharray="2 6" />
              </svg>
            </div>

            <div className="reviews-score-text">
              <span className="reviews-score-label">NOTA GOOGLE</span>
              <span className="reviews-score-value">
                {GOOGLE_RATING}
                <span className="reviews-score-max"> /5</span>
              </span>
              <Stars />
              <span className="reviews-score-count">
                {GOOGLE_REVIEW_COUNT} avaliações
              </span>
            </div>
          </div>

          <div className="reviews-list">
            {REVIEWS.map((review) => (
              <article key={review.text} className="reviews-card">
                <div className="reviews-card-top">
                  <Stars />
                  <span className="reviews-card-source">VIA GOOGLE</span>
                </div>

                <p className="reviews-card-text">&ldquo;{review.text}&rdquo;</p>

                <div className="reviews-card-author">
                  <span className="reviews-card-avatar" aria-hidden="true">
                    G
                  </span>
                  <span className="reviews-card-name">Cliente do Google</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
