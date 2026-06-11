import EventCard, { EventCardProps } from "./event-card";

const eventProps: EventCardProps[] = [
  {
    imgUrl: "/dandiya.jpg",
    date: "SEPTEMBER 2026",
    title: "TAAZA DANDIYA",
    description:
      "Eastern India's largest Garba & Dandiya celebration attracting over 50,000 participants every year.",
    link: "https://taazadandiya.com/",
  },
  {
    imgUrl: "/kwizdom.png",
    date: "JULY 2026",
    title: "KWIZDOM 3.0",
    description:
      "Academic excellence platform reaching 115 schools and 50,000 students annually.",
    link: "https://kwizdom.com/",
  },
  {
    imgUrl: "/medha.jpg",
    date: "JUNE - JULY 2026",
    title: "MEDHA SAMMAN",
    description:
      "Recognizing academic excellence across 100+ schools and honoring over 20,000 toppers.",
    details:
      "This prestigious event is dedicated to recognizing and honoring exceptional academic achievements across Eastern India.",
  },
  {
    imgUrl: "/youngotsav.png",
    date: "MARCH 2026",
    title: "YOUNGOTSAV",
    description:
      "A youth festival connecting over 1,00,000 students through talent and innovation.",
    link: "https://youngotsav.com/",
  },
  {
    imgUrl: "/ladiessummercamp.png",
    date: "JUNE 2026",
    title: "LADIES SUMMER CAMP",
    description:
      "An engaging summer platform connecting 2,000+ women across Kolkata and Howrah.",
    details:
      "A large-scale women engagement initiative celebrating confidence, talent and community.",
  },
  {
    imgUrl: "/SUPER30.jpg",
    date: "JUNE 2026",
    title: "SUPER 30",
    description:
      "Celebrating outstanding academic achievers scoring 99%+ in board examinations.",
    link: "https://super30.taazatv.com/",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1700px] px-8">
        <div className="flex flex-col items-center">
          <div className="mb-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

          <span className="mb-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-blue-300">
            Our Flagship Events
          </span>

          <h2 className="text-center text-5xl font-black text-white md:text-6xl">
            TaazaTV Events
          </h2>

          <p className="mt-4 max-w-3xl text-center text-slate-400">
            Celebrating excellence through entertainment, education,
            youth engagement and cultural initiatives.
          </p>
        </div>

        <div className="mt-16 flex gap-8 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {eventProps.map((props, i) => (
            <EventCard {...props} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}