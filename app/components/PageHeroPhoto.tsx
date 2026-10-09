import Image, { type StaticImageData } from "next/image";

type PageHeroPhotoProps = {
  image: StaticImageData;
  alt: string;
};

const CORNERS = ["tl", "tr", "bl", "br"] as const;

export default function PageHeroPhoto({ image, alt }: PageHeroPhotoProps) {
  return (
    <div className="page-hero-visual page-hero-visual--photo">
      <div className="page-hero-photo">
        <Image src={image} alt={alt} className="page-hero-img" priority />
        <div className="page-hero-scan" />
      </div>
      {CORNERS.map((c) => (
        <span key={c} className={`page-hero-corner page-hero-corner--${c}`} />
      ))}
    </div>
  );
}
