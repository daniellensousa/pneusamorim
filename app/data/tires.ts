import { SITE } from "@/app/data/site";

// Pneus em destaque na página /pneus.
// ATENÇÃO: lista de exemplo vinda do design. Troque pelas medidas reais em estoque.

export const WHATSAPP_URL = SITE.whatsappUrl;

export type TireCategory = "passeio" | "suv" | "utilitario" | "rodas";

export const CATEGORIES: { id: "todos" | TireCategory; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "passeio", label: "Passeio" },
  { id: "suv", label: "SUV e Caminhonete" },
  { id: "utilitario", label: "Utilitário e Van" },
  { id: "rodas", label: "Rodas" },
];

export type Tire = {
  category: TireCategory;
  label: string;
  size: string;
  use: string;
};

export const TIRES: Tire[] = [
  { category: "passeio", label: "Passeio", size: "175/70 R14", use: "Hatch e sedã" },
  { category: "passeio", label: "Passeio", size: "185/65 R15", use: "Hatch e sedã" },
  { category: "passeio", label: "Passeio", size: "205/55 R16", use: "Sedã médio" },
  { category: "suv", label: "SUV", size: "215/60 R17", use: "SUV compacto" },
  { category: "suv", label: "Caminhonete", size: "265/65 R17", use: "Picape" },
  { category: "utilitario", label: "Utilitário", size: "195/75 R16C", use: "Van e carga" },
  { category: "rodas", label: "Rodas", size: "Aro 15", use: "Liga leve" },
  { category: "rodas", label: "Rodas", size: "Aro 17", use: "Liga leve" },
];
