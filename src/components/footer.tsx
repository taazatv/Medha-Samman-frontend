export default function Footer() {
  return (
    <section
      id="footer"
      className="flex w-screen flex-col items-center gap-8 bg-[#552126] p-8 md:p-20"
    >
      <div className="flex w-full justify-between gap-16 max-md:flex-col">
        <img
          src={"/super30.jpg"}
          className="h-min w-full max-w-md object-contain"
        />
        <img src={"/poster.jpg"} className="w-full max-w-3xs"></img>
        <div className="flex flex-col gap-4 text-neutral-300">
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
      <hr className="w-full border-neutral-600" />
      <div className="text-neutral-400">
        © 2025 Super30. All rights reserved.{" "}
      </div>
    </section>
  );
}
