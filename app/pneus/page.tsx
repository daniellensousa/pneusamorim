import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import PageHeroPhoto from "@/app/components/PageHeroPhoto";
import TireCatalog from "@/app/components/TireCatalog";
import SizeGuide from "@/app/components/SizeGuide";
import QuoteForm from "@/app/components/QuoteForm";
import lojaImg from "@/app/assets/loja.png";

export const metadata: Metadata = {
  title: "Pneus | Pneus Amorim Aricanduva",
  description:
    "Diversas marcas e medidas de pneus para todos os tipos de veículo. Peça seu orçamento pelo WhatsApp.",
};

export default function Pneus() {
  return (
    <div className="flex flex-col flex-1">
      <PageHero
        title="Nossos"
        highlight="Pneus"
        breadcrumb="Pneus"
        subtitle="Diversas marcas e medidas para todos os tipos de veículo."
      >
        <PageHeroPhoto image={lojaImg} alt="Fachada da loja Pneus Amorim" />
      </PageHero>
      <TireCatalog />
      <SizeGuide />
      <QuoteForm />
    </div>
  );
}
