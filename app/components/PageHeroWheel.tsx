/** Roda com anéis girando, usada no topo da página de serviços. */
export default function PageHeroWheel() {
  return (
    <div className="page-hero-visual page-hero-visual--wheel" aria-hidden="true">
      <svg
        className="page-hero-ring page-hero-spin"
        viewBox="0 0 360 360"
        fill="none"
      >
        <circle cx="180" cy="180" r="176" stroke="rgb(var(--white-rgb) / 0.22)" strokeWidth="1.5" strokeDasharray="3 9" />
        <circle cx="180" cy="180" r="176" stroke="var(--color-red)" strokeWidth="3" strokeDasharray="120 1108" />
      </svg>
      <svg
        className="page-hero-ring page-hero-spin-rev"
        viewBox="0 0 360 360"
        fill="none"
      >
        <circle cx="180" cy="180" r="140" stroke="rgb(var(--white-rgb) / 0.14)" strokeWidth="1" strokeDasharray="40 14" />
        <circle cx="180" cy="180" r="140" stroke="var(--color-white)" strokeWidth="2" strokeDasharray="18 882" />
      </svg>
      <div className="page-hero-wheel">
        <svg
          width="210"
          height="210"
          viewBox="0 0 120 120"
          fill="none"
          stroke="var(--color-white)"
          strokeLinecap="round"
        >
          <circle cx="60" cy="60" r="50" strokeWidth="12" />
          <circle cx="60" cy="60" r="37" strokeWidth="2" />
          <circle cx="60" cy="60" r="9" strokeWidth="3" />
          <path
            d="M60 51V25M68.6 57.2l24.7-8M65.3 67.3l15.3 21M54.7 67.3l-15.3 21M51.4 57.2l-24.7-8"
            strokeWidth="4.5"
          />
        </svg>
      </div>
    </div>
  );
}
