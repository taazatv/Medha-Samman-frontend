import EventCard, { EventCardProps } from "./MedhaEventsCard";

const eventProps: EventCardProps[] = [
  {
    imgUrl: "/kolkata_10.png",
    date: "JUNE - JULY 2025",
    location:"Kolkata",
    title: "MEDHA SAMMAN-CLASS X",
    description: "",
    link:"/gallery-kolkata-10"
  },
  {
    imgUrl: "/kolkata_12.png",
    date: "21 JUNE 2025",
    location:"Kolkata",
    title: "MEDHA SAMMAN-CLASS XII",
    description: "",
    link: "/gallery-kolkata-12",
  },
  {
    imgUrl: "/ranchi_12_10_.png",
    date: "3rd August 2025",
    location:"Ranchi",
    title: "MEDHA SAMMAN-CLASS X & XII",
    description: "",
    link:"/gallery-rachi",

  
  },
];

export default function Events() {
  return (
    <section id="events" className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <hr className="mx-auto h-1 w-16 bg-secondary border-0" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Taazatv Events
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {eventProps.map((props, i) => (
            <EventCard {...props} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

