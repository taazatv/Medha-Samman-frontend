import "./ticker.css";

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
    "/sponsors/innxt.jpg",

    // Duplicate for seamless looping
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
    "/sponsors/innxt.jpg",
  ];

  return (
    <section className="relative overflow-hidden py-4 bg-transparent">
      <div className="ticker-track">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="
              mx-3
              flex
              h-20
              min-w-[180px]
              items-center
              justify-center
              rounded-xl
              bg-white
              px-6
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            <img
              src={sponsor}
              alt={`Sponsor ${index}`}
              className="h-12 w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}