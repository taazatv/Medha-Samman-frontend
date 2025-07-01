import EventCard, { EventCardProps } from "./MedhaEventsCard";

const eventProps: EventCardProps[] = [
  {
    imgUrl: "/medha.jpg",
    date: "JUNE - JULY 2025",
    location:"Kolkata",
    title: "MEDHA SAMMAN-CLASS X",
    description: "This prestigious event is dedicated to recognizing and honoring the exceptional academic achievements of young minds. With a perfect blend of tradition and contemporary excellence, Medha Samman promises to be an unforgettable celebration of brilliance and intellectual prowess. Already in its 15th year – Medha Samman reaches to 100+ schools and more than 20,000 toppers of the city have been honored.",
    link:"/"
  },
  {
    imgUrl: "/youngotsav.png",
    date: "MARCH 2026",
    location:"Kolkata",
    title: "MEDHA SAMMAN-CLASS XII",
    description: "Youngotsav 2025 united 1,00,000+ students across 17 colleges in Kolkata. From electrifying talent hunts to thrilling interactive brand experiences, it showcased the vibrant youth culture like never before! Televised on Taaza TV, this one-of-a-kind festival gave students a national platform to shine.",
    link: "/gallery-kolkata-12",
  },
  {
    imgUrl: "/ladiessummercamp.png",
    date: "JUNE 2025",
    location:"Ranchi",
    title: "MEDHA SAMMAN-CLASS X & XII",
    description: "Taaza TV presents Ladies Summer Camp 2025. A high-engagement, emotion-led platform curated for 2,000+ women across 10 women's clubs & sanstha's in Kolkata & Howrah. Summer Camp 2025 idea uses the fun and community spirit of a summer camp to showcase the beauty and confidence of women.",
    link:"/"

  
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