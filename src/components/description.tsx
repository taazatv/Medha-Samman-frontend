import video from "@/assets/video.mp4";
import MedhaSamman from "./MedhaSamman";

const schoolNames = [
  "ABHINAV BHARATI HIGH SCHOOL",
  "ADAMAS INTERNATIONAL SCHOOL",
  "ADAMAS WORLD SCHOOL",
  "ADITYA ACADEMY SECONDARY",
  "ADITYA ACADEMY SR SEC, DUMDUM",
  "AGRASAIN BALIKA SIKSHA SADAN",
  "AGRASAIN BOYS' SCHOOL",
  "ARMY PUBLIC SCHOOL",
  "ASIAN INTERNATIONAL SCHOOL",
  "B.D.M. INTERNATIONAL",
  "BALIKA SIKSHA SADAN",
  "BIRLA HIGH SCHOOL",
  "CALCUTTA BOYS' SCHOOL",
  "CALCUTTA GIRLS HIGH SCHOOL",
  "DELHI PUBLIC SCHOOL MEGACITY",
  "DPS NEWTOWN",
  "DPS RUBY PARK",
  "HERITAGE SCHOOL",
  "LA MARTINIERE FOR GIRLS",
  "LORETO HOUSE",
  "MODERN HIGH SCHOOL",
  "SOUTH CITY INTERNATIONAL",
  "ST. XAVIERS COLLEGIATE SCHOOL",
  "THE NEWTOWN SCHOOL",
  "YOUNG HORIZONS SCHOOL",
];

export default function Description() {
  return (
    <>
      <style>
        {`
          @keyframes tickerMove {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          @keyframes floatCard {
            0%,100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }

          .ticker-animation {
            animation: tickerMove 80s linear infinite;
          }

          .floating-card {
            animation: floatCard 4s ease-in-out infinite;
          }
        `}
      </style>

      <section
        id="description"
        className="flex w-full flex-col gap-8 px-4 py-8 md:px-8"
      >
        <MedhaSamman />

        {/* Video */}
        <div className="overflow-hidden rounded-3xl border-4 border-amber-400 shadow-2xl">
          <video
            autoPlay
            muted
            loop
            playsInline
            src={video}
            className="w-full"
          />
        </div>

        {/* Premium School Ticker */}
        <div className="overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-5 shadow-2xl">
          <div className="ticker-animation flex w-max hover:[animation-play-state:paused]">
            {[...schoolNames, ...schoolNames].map(
              (school, index) => (
                <div
                  key={index}
                  className="mx-8 flex items-center whitespace-nowrap text-sm font-semibold uppercase tracking-wide text-slate-100"
                >
                  <span className="mr-3 h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
                  {school}
                </div>
              )
            )}
          </div>
        </div>

        {/* Achievement Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-2xl md:p-12">
          {/* Decorative Elements */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/10" />

          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-sm">
              Celebrating Academic Excellence Since 2011
            </span>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl">
              Medha Samman
            </h2>

            <p className="mt-5 max-w-5xl text-base leading-8 text-slate-300 md:text-lg">
              This prestigious event is dedicated to recognizing and honoring
              the exceptional academic achievements of young minds. With a
              perfect blend of tradition and contemporary excellence, Medha
              Samman continues to inspire and celebrate brilliance across
              schools while encouraging future leaders and achievers.
            </p>

            {/* Stats */}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="floating-card rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold text-amber-400">
                  16+
                </div>
                <div className="mt-2 text-slate-300">
                  Years of Excellence
                </div>
              </div>

              <div
                className="floating-card rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-4xl font-bold text-amber-400">
                  100+
                </div>
                <div className="mt-2 text-slate-300">
                  Participating Schools
                </div>
              </div>

              <div
                className="floating-card rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-4xl font-bold text-amber-400">
                  20,000+
                </div>
                <div className="mt-2 text-slate-300">
                  Toppers Honoured
                </div>
              </div>
            </div>

            {/* Highlight Banner */}
            <div className="mt-10 rounded-2xl border border-amber-400/20 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 p-5 backdrop-blur-sm">
              <p className="text-center text-sm font-medium text-slate-200 md:text-base">
                🏆 One of Eastern India's most prestigious academic recognition
                programs, connecting top-performing students from leading
                schools across the region.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}