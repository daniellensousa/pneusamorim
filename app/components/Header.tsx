import Image from "next/image";
import Link from "next/link";
import logoClara from "@/app/assets/logo-clara.png";
import HeaderNav from "@/app/components/HeaderNav";
import "@/app/css/header.css";
import { ADDRESS_SHORT, SITE } from "@/app/data/site";

const WEEKDAY_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

function getStoreStatus() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const map = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const day = WEEKDAY_INDEX[map.weekday];
  const minutes = (Number(map.hour) % 24) * 60 + Number(map.minute);
  const closesAt = day >= 1 && day <= 5 ? 18 * 60 : day === 6 ? 13 * 60 : 0;

  if (closesAt > 0 && minutes >= 8 * 60 && minutes < closesAt) {
    return {
      open: true,
      text: `Aberto agora · fecha às ${closesAt === 18 * 60 ? "18:00" : "13:00"}`,
    };
  }

  const opensAt =
    (day === 6 && minutes >= 13 * 60) || day === 0
      ? "segunda 08:00"
      : minutes < 8 * 60
        ? "hoje 08:00"
        : "amanhã 08:00";

  return { open: false, text: `Fechado agora · abre ${opensAt}` };
}

export default function Header() {
  const status = getStoreStatus();

  return (
    <header>
      <div className="header-topbar">
        <div className="header-topbar-inner">
          <div className="header-topbar-status">
            <span
              className={`header-topbar-state${status.open ? "" : " header-topbar-state--closed"}`}
            >
              <span className="header-topbar-dot" />
              {status.text}
            </span>
            <span className="header-topbar-address">
              {ADDRESS_SHORT}
            </span>
          </div>
          <span>Seg–Sex 08:00–18:00 · Sáb 08:00–13:00</span>
        </div>
      </div>

      <div className="header-main">
        <div className="header-main-inner">
          <Link href="/" className="header-logo">
            <Image
              src={logoClara}
              alt="Pneus Amorim Aricanduva"
              className="header-logo-img"
              priority
            />
          </Link>

          <HeaderNav />

          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="header-phone"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="header-phone-icon"
              aria-hidden="true"
            >
              <path d="M21 12a9 9 0 0 1-13.4 7.9L3 21l1.2-4.4A9 9 0 1 1 21 12z" />
            </svg>
            {SITE.whatsappDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
