import { HorizontalTicker } from "@/components/horizontal-ticker";

export default function Tickers() {
  const sponsors = [
      "/sponsors/Aakash_Logo.png",
    "/sponsors/Bhawanipur_Logo.png",
    "/sponsors/Biswa_Bangla_Logo.png",
    "/sponsors/iLead_Logo.png",
    "/sponsors/JIS_Logo.png",
    "/sponsors/LNB_Logo.png",
    "/sponsors/Medha_Samman_Logo.png",
    "/sponsors/Natural_Logo.png",
    "/sponsors/Pentonic_Logo.png",
    "/sponsors/RG_Logo.png",
    "/sponsors/innxt.jpg"
   ,

    "/sponsors/Aakash_Logo.png",
    "/sponsors/Bhawanipur_Logo.png",
    "/sponsors/Biswa_Bangla_Logo.png",
    "/sponsors/iLead_Logo.png",
    "/sponsors/JIS_Logo.png",
    "/sponsors/LNB_Logo.png",
    "/sponsors/Medha_Samman_Logo.png",
    "/sponsors/Natural_Logo.png",
    "/sponsors/Pentonic_Logo.png",
    "/sponsors/RG_Logo.png",
    "/sponsors/innxt.jpg"
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
