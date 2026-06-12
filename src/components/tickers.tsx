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

    // duplicate for smooth loop
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
    <div className="overflow-hidden py-4">
      <div className="flex w-max animate-pulse gap-4">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="
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
              hover:scale-105
              hover:shadow-xl
            "
          >
            <img
              src={sponsor}
              alt={`Sponsor ${index}`}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}