import "@/app/css/location-map.css";
import { ADDRESS_MAPS_QUERY, SITE } from "@/app/data/site";

export default function LocationMap() {
  return (
    <section className="map">
      <iframe
        className="map-frame"
        title="Mapa da loja Pneus Amorim Aricanduva"
        src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_MAPS_QUERY)}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="map-card">
        <span className="map-card-label">LOCALIZAÇÃO</span>
        <strong className="map-card-title">Pneus Amorim Aricanduva</strong>
        <span className="map-card-address">
          {SITE.streetAddress} · {SITE.neighborhood}
        </span>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_MAPS_QUERY)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="map-card-link"
        >
          Traçar rota no Google Maps →
        </a>
      </div>
    </section>
  );
}
