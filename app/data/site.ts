// Dados de contato da loja. Altere aqui e o site inteiro é atualizado.

export const SITE = {
  name: "Pneus Amorim Aricanduva",

  phoneDisplay: "(11) 2294-1159",
  phoneHref: "tel:+551122941159",

  whatsappDisplay: "(11) 94872-5084",
  whatsappUrl: "https://wa.me/5511948725084",

  email: "pneusamorim@yahoo.com",

  streetAddress: "Rua Padre Benedito de Camargo, 122",
  neighborhood: "Penha",
  city: "São Paulo",
  state: "SP",
  zipCode: "03604-010",
} as const;

/** "Rua Padre Benedito de Camargo, 122 · Penha · SP" */
export const ADDRESS_SHORT = `${SITE.streetAddress} · ${SITE.neighborhood} · ${SITE.state}`;

/** "Rua Padre Benedito de Camargo, 122 · Penha" */
export const ADDRESS_NEIGHBORHOOD = `${SITE.streetAddress} · ${SITE.neighborhood}`;

/** Texto de busca para o Google Maps. */
export const ADDRESS_MAPS_QUERY = `${SITE.streetAddress}, ${SITE.neighborhood}, ${SITE.city}`;
