export default function Description() {
  return (
    <section
      id="description"
      className="flex w-screen items-center justify-between px-4 pt-4 max-md:flex-col md:pl-48"
    >
      <div className="left-content flex flex-col gap-8">
        <hr className="border-primary w-16 border-t-4" />
        <div className="line w-full text-4xl/tight font-extrabold text-neutral-900 md:text-6xl/tight">
          Marwari Education Conclave SUPER 30
        </div>
        <div className="w-full max-w-2xl text-lg/loose">
          ✅ Super 30 | ✅ 31st May 2025 | ✅ HOTEL ITC SONAR
          <br /> <br />
          The grand celebration of 30 Marwari students getting 99% or above
          marks in their board examinations.
        </div>
      </div>
      <div className="right-content flex w-full justify-center self-end">
        <img className="w-full max-w-2xl" src="/ph-2.jpg" />
      </div>
    </section>
  );
}
