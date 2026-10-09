import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import PageHeroPhoto from "@/app/components/PageHeroPhoto";
import AboutHistory from "@/app/components/AboutHistory";
import Timeline from "@/app/components/Timeline";
import Values from "@/app/components/Values";
import CallToAction from "@/app/components/CallToAction";
import lojaImg from "@/app/assets/loja.png";
import { ADDRESS_NEIGHBORHOOD, SITE } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Quem Somos | Pneus Amorim Aricanduva",
  description:
    "Mais de 40 anos de tradição e confiança na venda e troca de pneus e serviços automotivos em São Paulo.",
};

export default function QuemSomos() {
  return (
    <div className="flex flex-col flex-1">
      <PageHero
        title="Quem"
        highlight="Somos"
        breadcrumb="Quem Somos"
        subtitle="40 anos rodando com você."
      >
        <PageHeroPhoto image={lojaImg} alt="Fachada da loja Pneus Amorim" />
      </PageHero>
      <AboutHistory />
      <Timeline />
      <Values />
      <CallToAction
        title="Venha nos conhecer"
        description={ADDRESS_NEIGHBORHOOD}
        buttons={[
          { label: "Como chegar", href: "/contato", variant: "dark", icon: "arrow" },
          {
            label: "WhatsApp",
            href: SITE.whatsappUrl,
            variant: "light",
            icon: "whatsapp",
          },
        ]}
      />
    </div>
  );
}
