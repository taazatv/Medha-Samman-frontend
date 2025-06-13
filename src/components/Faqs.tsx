import  { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'What is this event all about?',
    answer: 'This is an annual event in its 15th year organized by Taaza TV to honor students who have excelled in their Class X & XII Board Exams.',
  },
  {
    question: 'Who provided the contact details?',
    answer: 'The schools have provided your contact details as you are one of the toppers in your stream in school.',
  },
  {
    question: 'Is there any charge for the event?',
    answer: 'No. There are no charges or fees of any type for this event. It’s an honor for Taaza TV to felicitate the toppers.',
  },
  {
    question: 'When do we need to come?',
    answer: 'The Kolkata event for Class 12 is on 21 June 2025 at Dhanadhanyo Main Auditorium, Alipore, Kolkata-700027. The Kolkata event for Class 10 is on 12 July 2025 at Dhanadhanyo Auditorium. The Ranchi event for Class 10 & 12 is on 28 June 2025 at Aryabhatta Auditorium. You need to report at the time mentioned on call. For any issues, you can WhatsApp 9831669987 (WHATSAPP ONLY).',
  },
  {
    question: 'Do we need to carry any documents?',
    answer: 'No. There is no need to carry any documents. Please don’t carry any bags or eatables as they are not allowed inside the auditorium.',
  },
  {
    question: 'Can my parents or guests come with me?',
    answer: 'Sure. Any 3 people can come with the student.',
  },
  {
    question: 'Do we need to come in school uniform?',
    answer: 'It will be better if you come in school uniform.',
  },
  {
    question: 'I am not able to come, can someone else collect it on my behalf?',
    answer: 'Yes. Any of your friends attending the event can collect it on that day, or a family member can collect too.',
  },
  {
    question: 'Is there any car parking facility inside the premises?',
    answer: 'Yes. Your car can comfortably be parked inside the venue. Parking is available on a first-come, first-serve basis.',
  },
  {
    question: 'Till what time will the programme go on?',
    answer: 'You are supposed to reach the venue at the allotted time and can leave once you have received the trophy. It may take up to 2 hours for a student to receive the felicitation.',
  },
  {
    question: 'Will this be telecast LIVE on Taaza TV?',
    answer: 'No. This will not be telecast live. It will be shown on a later date on Taaza TV, the date and time for which will be announced at the event itself.',
  },
];

function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-4 sm:p-6 md:p-8">
      <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8 w-full max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-indigo-700 mb-6 sm:mb-8">
          Medha Samman FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-3 sm:py-4 text-left text-sm sm:text-base font-semibold text-gray-800 hover:text-indigo-600 focus:outline-none"
              >
                <span>{faq.question}</span>
                <span className="text-indigo-600">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-sm sm:text-base text-gray-600 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm sm:text-base text-center text-gray-600">
          For further queries, please send a WhatsApp to{' '}
          <a href="https://wa.me/9831669987" className="text-indigo-600 hover:underline">
            9831669987
          </a>{' '}
          (WhatsApp only). Save this number to receive all event communications. Visit{' '}
          <a href="http://www.taazatv.com" className="text-indigo-600 hover:underline">
            www.taazatv.com
          </a>{' '}
          and click on the top banner for Medha Samman to check your name and registration time.
        </p>
      </div>
    </div>
  );
}

export default Faqs;