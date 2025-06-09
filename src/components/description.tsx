import video from "@/assets/video.mp4";
export default function Description() {
  return (
    <section
      id="description"
      className="relative flex w-screen items-center justify-between gap-8 p-8 max-md:flex-col md:pl-48"
    >
      <div className="left-content flex flex-col gap-8">
        <hr className="border-primary w-16 border-t-4" />
        <div className="line w-full text-4xl/tight font-extrabold text-neutral-900 md:text-6xl/tight">
          MEDHA SAMMAN 2025
        </div>
        <div className="w-full max-w-2xl text-lg/loose">
          ✅ 2,000 Toppers | ✅ 21st June 2025 | ✅ Dhano Dhanyo
          <br />
          <br /> • Medha Samman 2025 will honor 2,000 top students from 100
          schools across Kolkata and Howrah for their outstanding achievements
          in the Class XII Board Exams. <br /> • The event will be held at the
          grand Dhano Dhanyo Main Auditorium on June 21, 2025, will feature
          speeches by eminent educationalists and industrialists. <br /> • In
          its 15th year the event has doubled its scale, grandeur and glory.
        </div>
      </div>
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
    </section>
  );
}
