import { useNavigate } from "react-router-dom";
import EventCard, {
  EventCardProps,
} from "./MedhaEventsCard";

const eventProps: EventCardProps[] = [
  {
    imgUrl: "/kolkata_10.png",
    date: "JUNE - JULY 2025",
    location: "Kolkata",
    title: "MEDHA SAMMAN - CLASS X",
    description:
      "Celebrating outstanding academic excellence of Class X students.",
    link: "/gallery-kolkata-10",
  },
  {
    imgUrl: "/kolkata_12.png",
    date: "21 JUNE 2025",
    location: "Kolkata",
    title: "MEDHA SAMMAN - CLASS XII",
    description:
      "Honouring Class XII toppers for their remarkable achievements.",
    link: "/gallery-kolkata-12",
  },
  {
    imgUrl: "/ranchi_12_10_.png",
    date: "3 August 2025",
    location: "Ranchi",
    title: "MEDHA SAMMAN - CLASS X & XII",
    description:
      "Recognising talented students from Ranchi region.",
    link: "/gallery-rachi",
  },
];

export default function MedhaGallery() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#06152f] via-[#0b2f73] to-[#1565c0] px-6 py-12">

      {/* Background Effects */}

      <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-300/10 blur-[120px]" />

      {/* Back Button */}

      <button
        onClick={() => navigate(-1)}
        className="relative z-10 mb-10 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-blue-700"
      >
        ← Back
      </button>

      {/* Header */}

      <div className="relative z-10 text-center">

        <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
          📸 Gallery
        </span>

        <h1 className="mt-5 bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-5xl font-extrabold text-transparent">
          Medha Samman Events
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-white/70">
          Explore unforgettable moments from Medha Samman
          ceremonies across different cities.
        </p>
      </div>

      {/* Featured Banner */}

      <div className="relative z-10 mx-auto mt-10 max-w-6xl rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <div>
            <h2 className="text-2xl font-bold text-white">
              🎓 Student Achievement Gallery
            </h2>

            <p className="mt-2 text-white/70">
              Browse event photos, award ceremonies,
              student success stories and memorable moments.
            </p>
          </div>

          <button className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105">
            Explore Events
          </button>
        </div>
      </div>

      {/* Cards */}

      <div className="relative z-10 mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {eventProps.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>

      {/* Footer CTA */}

      <div className="relative z-10 mx-auto mt-16 max-w-4xl rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-xl">

        <h3 className="text-3xl font-bold text-white">
          More Events Coming Soon
        </h3>

        <p className="mt-4 text-white/75">
          Stay connected with Taaza TV for upcoming
          Medha Samman celebrations and student recognition
          programmes.
        </p>

        <button className="mt-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,180,255,0.45)]">
          Stay Updated
        </button>
      </div>
    </section>
  );
}