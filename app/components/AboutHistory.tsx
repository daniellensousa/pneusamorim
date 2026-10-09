import Image from "next/image";
import lojaImg from "@/app/assets/loja.png";
import "@/app/css/about-history.css";

const CORNERS = ["tl", "tr", "bl", "br"] as const;

export default function AboutHistory() {
  return (
    <section className="history">
      <div className="history-inner">
        <div className="history-text">
          <span className="history-eyebrow">
            <span className="history-eyebrow-dot" aria-hidden="true" />
            Nossa história
          </span>
          <h2 className="history-title">Tradição e confiança desde 1984</h2>
          <p>
            A Pneus Amorim Aricanduva é uma loja tradicional com mais de 40 anos
            de experiência no mercado, reconhecida pela confiança e qualidade no
            atendimento.
          </p>
          <p>
            Especializada na venda e troca de pneus, a empresa também oferece
            uma variedade de serviços automotivos, garantindo segurança e
            desempenho para seus clientes.
          </p>
          <p>
            Ao longo das décadas, consolidou-se como referência na região,
            sempre prezando pela excelência e satisfação de quem atende.
          </p>
        </div>

        <div className="history-visual">
          <div className="history-backdrop grid-bg" aria-hidden="true" />

          <div className="history-photo-wrap">
            <div className="history-photo">
              <Image
                src={lojaImg}
                alt="Interior da loja com rodas e pneus expostos"
                className="history-photo-img"
              />
            </div>
            {CORNERS.map((c) => (
              <span key={c} className={`history-corner history-corner--${c}`} />
            ))}
          </div>

          <div className="history-badge">
            <span className="history-badge-label">EXPERIÊNCIA</span>
            <span className="history-badge-number">
              40<span className="history-badge-plus">+</span>
            </span>
            <span className="history-badge-unit">ANOS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
