export default function Footer() {
  return (
    <section
      id="footer"
      className="flex w-screen flex-col items-center gap-8 bg-[#dd1f58] p-8 md:p-4 md:px-20"
    >
      <div className="flex w-full justify-between gap-16 max-md:flex-col">
        <img
          src={"/Medha-logo.png"}
          className="h-min w-full max-w-sm object-contain"
        />
        <img src={"/poster.png"} className="aspect-[3/2] max-w-sm"></img>
        <div className="flex flex-col justify-center gap-4 text-white">
          <div className="text-xl font-bold">About the Organiser</div>
          <div className="max-w-md">
            Taaza TV the only National Hindi News Channel from Eastern India in
            a motive to interact with public holds a significant number of mass
            activations in the form of events at various cities. Combining
            broadcasting with events, brands and participants get an
            extraordinary exposure.
          </div>
          <img src="/taaza-tv.png" className="mt-12 w-[12rem] self-center" />
        </div>
      </div>
      <hr className="w-full rounded-full border-4 border-white" />
      <div className="text-neutral-200">
        © 2025 Medha-Samman. All rights reserved.{" "}
      </div>
    </section>
  );
}
