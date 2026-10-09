import Banner from "@/app/components/Banner";
import Stats from "@/app/components/Stats";
import HelpCards from "@/app/components/HelpCards";
import Services from "@/app/components/Services";
import Reviews from "@/app/components/Reviews";
import CallToAction from "@/app/components/CallToAction";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Banner />
      <Stats />
      <HelpCards />
      <Services />
      <Reviews />
      <CallToAction />
    </div>
  );
}
