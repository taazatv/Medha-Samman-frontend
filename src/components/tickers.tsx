import { HorizontalTicker } from "@/components/horizontal-ticker";

export default function Tickers() {
  const sponsors = [
    "/sponsors/snakker.png",
    "/sponsors/sah.png",
    "/sponsors/oshea-herbals.png",
    "/sponsors/royal-enfield.jpg",
    "/sponsors/win-pens.png",
    "/sponsors/wild-stone.png",
    "/sponsors/bhagwati.png",
    "/sponsors/impakto.avif",
    "/sponsors/nicco-park.jpg",

    "/sponsors/snakker.png",
    "/sponsors/sah.png",
    "/sponsors/oshea-herbals.png",
    "/sponsors/royal-enfield.jpg",
    "/sponsors/win-pens.png",
    "/sponsors/wild-stone.png",
    "/sponsors/bhagwati.png",
    "/sponsors/impakto.avif",
    "/sponsors/nicco-park.jpg",
  ];
  return (
    <HorizontalTicker
      duration={24000}
      easing={"linear"}
      delay={0}
      reverse={true}
      className="relative w-full self-end bg-[#c21256] py-2"
    >
      {sponsors.map((sponsor, i) => (
        <div key={i} className="w-max px-4 font-bold text-black">
          <img className="h-12" src={sponsor} />
        </div>
      ))}
    </HorizontalTicker>
  );
}
