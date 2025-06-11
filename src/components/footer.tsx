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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.30373852717!2d88.33672057529921!3d22.530291979521916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027746475abbcd%3A0x97ab4cf0c716e313!2sDhono%20Dhanyo%20Auditorium!5e0!3m2!1sen!2sin!4v1749617914903!5m2!1sen!2sin"
          className="aspect-[3/2] w-full max-w-sm"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117217.82291185918!2d85.24887030557868!3d23.349950638250323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e197cf74b3a1%3A0x5b00668b712d81d6!2sAryabhatta%20Auditorium%2C%20Ranchi%20University!5e0!3m2!1sen!2sin!4v1749665048888!5m2!1sen!2sin"
          className="aspect-[3/2] w-full max-w-sm"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
