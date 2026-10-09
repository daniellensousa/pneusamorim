import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import ContactSection from "@/app/components/ContactSection";
import LocationMap from "@/app/components/LocationMap";

export const metadata: Metadata = {
  title: "Contato | Pneus Amorim Aricanduva",
  description:
    "Endereço, telefone, WhatsApp, e-mail e horário de atendimento da Pneus Amorim Aricanduva.",
};

export default function Contato() {
  return (
    <div className="flex flex-col flex-1">
      <PageHero
        title="Estamos aqui"
        highlight="para você"
        breadcrumb="Contato"
        subtitle="Fale com a gente pelo canal que preferir."
      />
      <ContactSection />
      <LocationMap />
    </div>
  );
}
