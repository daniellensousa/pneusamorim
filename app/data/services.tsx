import type { ReactNode } from "react";

export type ServiceItem = {
  title: string;
  text: string;
  icon: ReactNode;
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Troca de Pneus",
    text: "Troca rápida e segura com os melhores pneus do mercado, para todos os tipos de veículo.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 3v5.5M12 15.5V21M3 12h5.5M15.5 12H21" />
      </>
    ),
  },
  {
    title: "Alinhamento",
    text: "Alinhamento computadorizado para maior segurança e durabilidade dos seus pneus.",
    icon: (
      <>
        <path d="M4 12h16M4 12l3-3M4 12l3 3M20 12l-3-3M20 12l-3 3" />
        <path d="M12 4v4M12 16v4" />
      </>
    ),
  },
  {
    title: "Balanceamento",
    text: "Eliminação de vibrações e desgaste irregular para uma direção suave e confortável.",
    icon: (
      <>
        <path d="M12 4v16M5 20h14" />
        <path d="M4 8h16" />
        <path d="M4 8l-2 6h6L6 8M20 8l-2 6h6l-2-6" />
      </>
    ),
  },
  {
    title: "Calibragem",
    text: "Calibragem de pneus com nitrogênio ou ar comprimido, aumentando a vida útil.",
    icon: (
      <>
        <path d="M4.5 16a8 8 0 1 1 15 0" />
        <path d="M12 16l4-6" />
        <circle cx="12" cy="16" r="1.5" />
      </>
    ),
  },
  {
    title: "Suspensão",
    text: "Revisão e manutenção completa da suspensão para maior segurança no trânsito.",
    icon: (
      <>
        <path d="M12 2v3M12 19v3" />
        <path d="M8 5h8M8 19h8" />
        <path d="M9 7l6 2-6 2 6 2-6 2 6 2" />
      </>
    ),
  },
  {
    title: "Sistema de Freios",
    text: "Revisão completa de freios, pastilhas e discos para sua segurança total.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M4.5 9a8 8 0 0 1 5-4.5" />
        <path d="M16 5.5a8 8 0 0 1 3 3" />
      </>
    ),
  },
];
