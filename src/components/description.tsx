/* eslint-disable @typescript-eslint/ban-ts-comment */
import video from "@/assets/video.mp4";
import Tickers from "./tickers";
import MedhaSamman from "./MedhaSamman";

const schoolNames = [
  "ABHINAV  BHARTI SCHOOL",
  "ADITYA ACADEMY SENIOR SECONDARY DUM DUM",
  "ADMIRE ENGLISH MEDIUM SCHOOL",
  "AGRASAIN BALIKA SIKSHA SADAN",
  "ARMY PUBLIC SCHOOL",
  "ASHOK HALL GIRLS SCHOOL",
  "ASIAN INTERNATIONAL SCHOOL",
  "ASSEMBLY OF GODS CHURCH SCHOOL",
  "BALIKA SHIKSHA SADAN",
  "BDM INTERNATIONAL SCHOOL",
  "BIHANI ACADEMY",
  "Birla High School",
  "BIRLA HIGH SCHOOL MUKUNDAPUR",
  "CALCUTTA ANGLO GUJRATI SCHOOL",
  "CALCUTTA BOYS SCHOOL",
  "CALCUTTA PUBLIC SCHOOL ASWININAGAR",
  "CALCUTTA PUBLIC SCHOOL BIDHAN PARK",
  "CALCUTTA PUBLIC SCHOOL JORAMANDIR",
  "CENTRAL MODERN SCHOOL",
  "DELHI PUBLIC SCHOOL HOWRAH",
  "DIPTI BRIDGEWELL SCHOOL",
  "DON BOSCO PARK CIRCUS",
  "DPS RUBY PARK",
  "ELIAS MEYER FS & TT SCHOOL",
  "G.D. BIRLA CENTRE FOR EDUCATION",
  "GURUKUL ENGLISH MEDIUM SCHOOL",
  "GYAN BHARATI BALIKA VIDYALAYA",
  "GYAN BHARTI ENGLISH MEDIUM",
  "GYAN BHARTI VIDYAPITH",
  "HARYANA VIDYAMANDIR",
  "HCK JAIN VIDYALAYA",
  "I.P. MEMORIAL SCHOOL",
  "JAGATDAL LALITA DEVI BALIKA VIDYALAYA",
  "JAGATDAL SHRI HARI UCHHA VIDYALAYA",
  "JAGDAL ANGLO INDIA HIGH SCHOOL",
  "JAGDAL KAMALA HIGH SCHOOL",
  "JIBREEL INTERNATIONAL SCHOOL",
  "KAKINARA HIMAYATUL GHURBA HIGH SCHOOL",
  "KAKINARA URDU HIGH SCHOOL",
  "KANKINARA ARYA VIDYALAYA",
  "KUSHWAHA HIGH SCHOOL",
  "LA MARTINIERE FOR BOYS",
  "LA MARTINIERE FOR GIRLS",
  "LABONYA PUBLIC SCHOOL",
  "M.P. BIRLA FOUNDATION HIGHER SECONDARY SCHOOL",
  "MAHESHWARI BALIKA VIDYALAYA",
  "MARWARI BALIKA  VIDYALAYA",
  "NATIONAL ENGLISH SCHOOL BAGUIHATI",
  "NATIONAL ENGLISH SCHOOL RAJARHAT",
  "NEWTOWN SCHOOL",
  "NOPANY HIGH SCHOOL",
  "SAIFEE HALL",
  "SALT LAKE SHIKHSA NIKETAN",
  "SHAM GOLDEN ACADEMY",
  "SHASTRI HINDI HIGH SCHOOL",
  "SHAW PUBLIC SCHOOL",
  "SHREE BALKRISHNA VITHAL NATH BALIKA VIDYALAYA",
  "SHREE BALKRISHNA VITHALNATH VIDYALAYA",
  "SHREE DIGAMBAR JAIN VIDYALAYA",
  "SHREE JAIN SWETAMBAR TERAPANTHI VIDYALAYA GIRLS",
  "SHREE JAIN SWETAMBER TERAPANTHI VIDYALAYA",
  "SHREE MAHESHWARI VIDYALAYA",
  "SOUTH POINT HIGH SCHOOL",
  "ST ANNS DAY SCHOOL",
  "ST. ANDREWS PUBLIC SCHOOL",
  "ST. DENIS SCHOOL HOWRAH",
  "ST. JOSEPH SCHOOL",
  "ST. MICHAELS ACADEMY",
  "ST. XAVIERS COLLEGIATE SCHOOL",
  "ST. XAVIERS INSTITUTION, RUIYA",
  "SUNRISE ENGLISH MEDIUM SCHOOL",
  "SUNSHINE ACADEMY",
  "SUSHILA BIRLA GIRLS SCHOOL",
  "THE BHAWANIPUR SCHOOL",
  "THE HERITAGE SCHOOL",
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
        <span>RESULTS PUBLISED FOR </span>
        {schoolNames.map((schoolName) => (
          <span> • {schoolName}</span>
        ))}
        {/* @ts-ignore */}
      </marquee>

      <Tickers></Tickers>
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
