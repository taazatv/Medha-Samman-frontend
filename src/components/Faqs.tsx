import { useNavigate } from "react-router-dom";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is this event all about?",
    answer:
      "This is an annual event in its 16th year organized by Taaza TV to honor students who have excelled in their Class X & XII Board Exams.",
  },
  {
    question: "Who provided the contact details?",
    answer:
      "The schools have provided your contact details as you are one of the toppers in your stream in school.",
  },
  {
    question: "Is there any charge for the event?",
    answer:
      "No. There are no charges or fees of any type for this event. It’s an honor for Taaza TV to felicitate the toppers.",
  },
  {
    question: "When do we need to come?",
    answer:
      "The Kolkata event for Class 12 is on 24th June 2026 at Dhono Dhanyo Auditorium, Kolkata. You need to report at the time mentioned on call. For any issues, WhatsApp 9831669987 (WhatsApp only).",
  },
  {
    question: "Do we need to carry any documents?",
    answer:
      "No. There is no need to carry any documents. Please don’t carry any bags or eatables as they are not allowed inside the auditorium.",
  },
  {
    question: "Can my parents or guests come with me?",
    answer: "Yes. One accompanying person can come with the student.",
  },
  {
    question: "Do we need to come in school uniform?",
    answer: "It is preferable to come in your school uniform.",
  },
  {
    question: "Can someone else collect the award on my behalf?",
    answer:
      "Yes. A friend attending the event or a family member can collect it on your behalf.",
  },
  {
    question: "Is there parking available inside the venue?",
    answer:
      "Yes. Parking is available inside the venue on a first-come, first-served basis.",
  },
  {
    question: "How long will the programme take?",
    answer:
      "Students may leave after receiving their trophy. The process may take up to 2 hours.",
  },
  {
    question: "Will the event be telecast live on Taaza TV?",
    answer:
      "No. The event will not be telecast live. Broadcast details will be announced during the event.",
  },
];

function Faqs() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#06152f] via-[#0b2f73] to-[#1565c0] px-5 py-10 md:px-10 md:py-16">

      {/* Background Effects */}
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-cyan-300/10 blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-white/10 blur-[120px]" />

      {/* Back Button */}
      <div className="relative z-10 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-blue-700 hover:shadow-2xl"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back
        </button>
      </div>

      {/* Header */}
      <div className="relative z-10 mb-14 text-center">
        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
          💡 Help Center
        </span>

        <h2 className="mt-5 bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-lg text-white/70">
          Everything you need to know about Medha Samman 2026
        </p>
      </div>

      {/* FAQ Cards */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-cyan-300/40
              hover:bg-white/10
              hover:shadow-[0_20px_60px_rgba(0,180,255,0.25)]
            "
          >
            <div
              className="
                mb-4
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-cyan-400
                to-blue-600
                text-2xl
                font-bold
                text-white
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-6
              "
            >
              ?
            </div>

            <h3
              className="
                mb-3
                text-lg
                font-bold
                text-white
                transition-colors
                duration-300
                group-hover:text-cyan-300
              "
            >
              {faq.question}
            </h3>

            <p className="leading-7 text-white/75">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Card */}
      <div
        className="
          relative
          z-10
          mx-auto
          mt-14
          max-w-4xl
          rounded-3xl
          border
          border-white/10
          bg-white/10
          p-8
          text-center
          backdrop-blur-md
          transition-all
          duration-500
          hover:-translate-y-2
          hover:bg-white/15
          hover:shadow-[0_20px_60px_rgba(0,180,255,0.25)]
        "
      >
        <h3 className="text-3xl font-bold text-white">
          Need More Help?
        </h3>

        <p className="mt-4 text-white/80">
          For any event-related queries, contact us on WhatsApp
        </p>

        <p className="mt-4 text-4xl font-extrabold text-cyan-300">
          9831669987
        </p>

        <p className="mt-2 text-sm text-white/60">
          WhatsApp Only
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">

          <a
            href="https://wa.me/919831669987"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full
              bg-gradient-to-r
              from-green-500
              to-green-600
              px-8
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-xl
            "
          >
            WhatsApp Us
          </a>

          <a
            href="https://www.taazatv.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-blue-600
              px-8
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-[0_10px_40px_rgba(0,180,255,0.45)]
            "
          >
            Visit Taaza TV
          </a>

        </div>
      </div>
    </section>
  );
}

export default Faqs;