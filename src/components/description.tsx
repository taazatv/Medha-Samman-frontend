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
  "BHAVANS GANAGBUX KANORIA VIDYAMANDIR",
  "BIRLA HIGH SCHOOL",
  "CALCUTTA BOYS' SCHOOL",
  "CALCUTTA GIRLS HIGH SCHOOL",
  "CALCUTTA PUBLIC SCHOOL BAGUIATI",
  "CALCUTTA PUBLIC SCHOOL BIDHAN PARK",
  "CENTRAL MODERN SCHOOL",
  "DELHI PUBLIC SCHOOL MEGACITY",
  "DELHI PUBLIC SCHOOLHOWRAH",
  "DON BOSCO SCHOOL, PARK CIRCUS",
  "DPS NEWTOWN",
  "DPS RUBY PARK",
  "FUTURE FOUNDATION SCHOOL",
  "G D BIRLA CENTRE FOR EDUCATION",
  "HARIYANA VIDYA MANDIR",
  "HERITAGE SCHOOL",
  "INDUS VALLEY WORLD SCHOOL",
  "KHALSA MODEL SENIOR SECONDARY SCHOOL",
  "LA MARTINIERE FOR GIRLS",
  "LAKSHMIPAT SINGHANIA ACADEMY",
  "LIONS CALCUTTA GREATER VIDYA MANDIR",
  "LITTLE STAR HIGH SCHOOL",
  "LORETO CONVENT ENTALLY",
  "LORETO HOUSE",
  "M.P. BIRLA FOUNDATION HS SCHOOL",
  "MAHADEVI BIRLA WORLD ACADEMY",
  "MAHESHWARI BALIKA VIDYALAYA",
  "MARWARI BALIKA VIDYALAYA",
  "MC KEJRIWAL VIDYAPEETH",
  "MODERN HIGH SCHOOL",
  "NATIONAL ENGLISH SCHOOL",
  "NATIONAL ENGLISH SCHOOL,RAJARHAT",
  "NOPANY HIGH",
  "PRAMILA MEMORIAL ADVANCED SCHOOL",
  "PURWANCHAL VIDYAMANDIR",
  "SAIFEE GOLDEN JUBILEE ENGLISH PUBLIC SCHOOL",
  "SALT LAKE POINT SCHOOL",
  "SALT LAKE SHIKSHA NIKETAN",
  "SHRI SIKSHAYATAN SCHOOL",
  "SOUTH CITY INTERNATIONAL",
  "SRI SRI ACADEMY KOLKATA",
  "ST.  JOSEPH'S  COLLEGE",
  "ST. AGNES' CONVENT SCHOOL, HOWRAH",
  "ST. DENIS SCHOOL",
  "ST. PAUL'S BOARDING & DAY SCHOOL",
  "ST. XAVIERS COLLEGIATE SCHOOL",
  "ST. XAVIER'S INSTITUTION",
  "SUNRISE (ENG. MED.) SCHOOL",
  "SUSHILA BIRLA GIRLS' SCHOOL",
  "THE ARYANS SCHOOL",
  "THE BGES SCHOOL",
  "THE BSS SCHOOL",
  "THE CALCUTTA ANGLO GUJARATI SCHOOL",
  "THE FRANK ANTHONY PUB.SCHOOL",
  "THE NEWTOWN SCHOOL",
  "UNION CHAPEL SCHOOL",
  "XAVIER'S ENGLISH SCHOOL KONNAGAR",
  "YOUNG HORIZONS SCHOOL",
];

export default function Description() {
  return (
    <section
      id="description"
      className="relative flex w-screen flex-col items-center justify-between gap-8 p-8 max-md:flex-col"
    >
      <MedhaSamman></MedhaSamman>
      <div className="right-content flex w-full justify-center self-end">
        <video
          autoPlay
          muted
          loop
          playsInline
          src={video}
          className="h-full w-full rounded-xl border-8 border-[#eec40b]"
        />
      </div>
      {/* @ts-ignore */}
      <marquee className="bg-amber-400 py-4 font-bold">
        <span>LIST OF SCHOOLS:</span>
        {schoolNames.map((schoolName) => (
          <span> • {schoolName}</span>
        ))}
        {/* @ts-ignore */}
      </marquee>

      
      <div className="left-content flex flex-col gap-8">
        {/* <hr className="border-primary w-16 border-t-4" /> */}
        {/* <div className="line w-full text-4xl/tight font-extrabold text-neutral-900 md:text-6xl/tight"> */}
        {/* MEDHA SAMMAN 2025 */}
        {/* </div> */}
        <div className="w-full rounded-xl bg-[#ec183c] px-16 py-8 text-base font-bold text-white max-md:p-4">
          This prestigious event is dedicated to recognizing and honoring the
          exceptional academic achievements of young minds. With a perfect blend
          of tradition and contemporary excellence, Medha Samman promises to be
          an unforgettable celebration of brilliance and intellectual prowess.
          Already in its 15th year – Medha Samman reaches to 100+ schools and
          more than 20,000 toppers of the city have been honored.
        </div>
      </div>
    </section>
  );
}
