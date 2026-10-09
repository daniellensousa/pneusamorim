import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Chakra_Petch } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "@/app/css/root.css";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pneus Amorim Aricanduva | Venda e troca de pneus em São Paulo",
  description:
    "Mais de 40 anos de tradição na venda e troca de pneus, alinhamento, balanceamento, suspensão e freios. Peça seu orçamento pelo WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${barlowCondensed.variable} ${barlow.variable} ${chakraPetch.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
