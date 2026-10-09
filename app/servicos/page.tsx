import type { Metadata } from "next";
import PageHero from "@/app/components/PageHero";
import PageHeroWheel from "@/app/components/PageHeroWheel";
import ServicesList from "@/app/components/ServicesList";
import Process from "@/app/components/Process";
import CallToAction from "@/app/components/CallToAction";
import { SITE } from "@/app/data/site";

export const metadata: Metadata = {
  title: "Serviços | Pneus Amorim Aricanduva",
  description:
    "Troca de pneus, alinhamento, balanceamento, calibragem, suspensão e freios com mais de 40 anos de experiência.",
};

export default function Servicos() {
  return (
    <div className="flex flex-col flex-1">
      <PageHero
        title="Nossos"
        highlight="Serviços"
        breadcrumb="Serviços"
        subtitle="Serviços automotivos completos com qualidade garantida."
      >
        <PageHeroWheel />
      </PageHero>
      <ServicesList />
      <Process />
      <CallToAction
        title="Agende seu serviço"
        description="Seg a Sex 08:00–18:00 · Sáb 08:00–13:00"
        buttons={[
          {
            label: "Chamar no WhatsApp",
            href: SITE.whatsappUrl,
            variant: "dark",
            icon: "whatsapp",
          },
        ]}
      />
    </div>
  );
}
