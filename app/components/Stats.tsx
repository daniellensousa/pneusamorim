import "@/app/css/stats.css";

const STATS = [
  { label: "DESDE", value: "1984", suffix: ".", unit: null },
  { label: "EXPERIÊNCIA", value: "40+", suffix: null, unit: "anos" },
  { label: "SERVIÇOS", value: "06", suffix: null, unit: "especialidades" },
  { label: "ATENDIMENTO", value: "SEG→SÁB", suffix: null, unit: null },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-inner">
        {STATS.map((stat) => (
          <div key={stat.label} className="stats-item">
            <span className="stats-label">{stat.label}</span>
            <span className="stats-value">
              {stat.value}
              {stat.suffix}
              {stat.unit && <span className="stats-unit"> {stat.unit}</span>}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
