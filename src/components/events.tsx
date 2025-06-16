import EventCard, { EventCardProps } from "./event-card";

const eventProps: EventCardProps[] = [
  {
    imgUrl: "/dandiya.jpg",
    date: "30th Sep to 1 Oct, 2025",
    title: "TAAZA DANDIYA",
    description:
      "It’s the largest and most prestigious Dandiya and Garba celebration in Eastern India. Over the years, it has earned a reputation for delivering high-energy performances, cultural inclusivity, and memorable experiences. With record-breaking crowd of over 50,000 participants each year, entire Kolkata is a part of this grand festivity.",
    link: "https://dandiya.taazatv.com/",
  },
  {
    imgUrl: "/kwizdom.png",
    date: "JULY 2025",
    title: "KWIZDOM 3.0",
    description:
      "Taaza TV has officially started its flagship quiz competition, KWIZDOM aimed at fostering academic excellence and national pride among students in Kolkata. This unique initiative was started with GRSE (Ministry of Defence) and now reached to 115 schools of Kolkata, where in each student of a class has to give this examination in the school by compulsion. With this activity we reach 50,000 students each year.",
    link: "https://kwizdom.taazatv.com/",
  },
  {
    imgUrl: "/medha.jpg",
    date: "JUNE - JULY 2025",
    title: "MEDHA SAMMAN-CLASS X ",
    description:
      "This prestigious event is dedicated to recognizing and honoring the exceptional academic achievements of young minds. With a perfect blend of tradition and contemporary excellence, Medha Samman promises to be an unforgettable celebration of brilliance and intellectual prowess. Already in its 15th year – Medha Samman reaches to 100+ schools and more than 20,000 toppers of the city have been honored.",
    details:
      "This prestigious event is dedicated to recognizing and honoring the exceptional academic achievements of young minds. With a perfect blend of tradition and contemporary excellence, Medha Samman promises to be an unforgettable celebration of brilliance and intellectual prowess. Already in its 15th year – Medha Samman reaches to 100+ schools and more than 20,000 toppers of the city have been honored.",
  },

  {
    imgUrl: "/youngotsav.png",
    date: "MARCH 2026",
    title: "YOUNGOTSAV",
    description:
      "Youngotsav 2025 united 1,00,000+ students across 17 colleges in Kolkata. From electrifying talent hunts to thrilling interactive brand experiences, it showcased the vibrant youth culture like never before! Televised on Taaza TV, this one-of-a-kind festival gave students a national platform to shine.",
    link: "https://youngotsav.com/",
  },

  {
    imgUrl: "/ladiessummercamp.png",
    date: "JUNE 2025",
    title: "LADIES SUMMER CAMP",
    description:
      "Taaza TV presents Ladies Summer Camp 2025. A high-engagement, emotion-led platform curated for 2,000+ women across 10 women’s clubs & sanstha’s in Kolkata & Howrah.Summer Camp 2025 idea uses the fun and community spirit of a summer camp to showcase the beauty and confidence of women. It's more than just womanhood; it's about creating an engaging and memorable experience for thousands of women.",
    details:
      "Taaza TV presents Ladies Summer Camp 2025. A high-engagement, emotion-led platform curated for 2,000+ women across 10 women’s clubs & sanstha’s in Kolkata & Howrah.Summer Camp 2025 idea uses the fun and community spirit of a summer camp to showcase the beauty and confidence of women. It's more than just womanhood; it's about creating an engaging and memorable experience for thousands of women.",
  },

  // {
  //   imgUrl: "/aadhiduniya.png",
  //   date: "JUNE 2025",
  //   title: "AADHI DUNIYA",
  //   description:
  //     "Aadhi Duniya by Taaza TV is a bold and insightful initiative that brings forward the unheard voices and untold stories of half the world — the women, youth, and marginalized communities that shape our society every day. This segment aims to spotlight real issues, and question the status quo with fearless journalism and authentic storytelling.",
  //   details:
  //     "Aadhi Duniya by Taaza TV is a bold and insightful initiative that brings forward the unheard voices and untold stories of half the world — the women, youth, and marginalized communities that shape our society every day. This segment aims to spotlight real issues, celebrate achievements, and question the status quo with fearless journalism and authentic storytelling. From social movements to everyday struggles and successes, Aadhi Duniya creates a powerful platform for dialogue, change, and empowerment. Tune in to experience stories that matter — raw, real, and relevant — only on **Taaza TV**, where every voice counts.",
  // },
  {
    imgUrl: "/SUPER30.jpg",
    date: "JUNE 2025",
    title: "SUPER 30",
    description:
      " Marwari Education Conclave SUPER 30 At HOTEL ITC SONAR - The grand celebration of 30 Marwari students getting 99% or above marks in their board examinations.",
    link: "https://super30.taazatv.comS/",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="flex w-screen flex-col items-center gap-8 px-8 py-16"
    >
      <hr className="border-secondary w-16 border-t-4" />
      <div className="mb-8 text-4xl font-bold md:text-6xl">Taazatv Events</div>
      <div className="flex w-[80vw] justify-start gap-8 overflow-x-scroll overflow-y-hidden max-md:flex-col">
        {eventProps.map((props, i) => (
          <EventCard {...props} key={i} />
        ))}
      </div>
    </section>
  );
}
