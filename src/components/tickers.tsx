"use client";

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

    // Duplicate for seamless scrolling
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
    <>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marquee 28s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="relative overflow-hidden py-6">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />

        <div className="marquee-track">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="
                mx-4
                flex
                h-24
                min-w-[190px]
                items-center
                justify-center
                rounded-2xl
                border border-gray-100
                bg-white
                px-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:shadow-xl
              "
            >
              <img
                src={sponsor}
                alt={`Sponsor ${index}`}
                className="h-14 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}


/* HII COMMENT TESTING */