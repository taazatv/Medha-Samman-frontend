import { useParams } from "react-router-dom";
import {
  MapPin,
  Building2,
  Award,
  Globe,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const params = useParams();
  const isRanchi = params.city === "ranchi";

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#020817] via-[#07142f] to-[#0f274f] text-white">
      {/* Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400" />

      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        {/* Main Footer Grid */}
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Logo Section */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/30" />

              <img
                src="/Medha-logo.png"
                alt="Medha Samman"
                className="relative z-10 w-72 object-contain transition-all duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-6 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
              🎓 Celebrating Academic Excellence
            </div>
          </div>

          {/* Venue Section */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <MapPin size={20} className="text-cyan-400" />
              <h3 className="text-xl font-bold">Event Venue</h3>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30">
              {!isRanchi ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.30373852717!2d88.33672057529921!3d22.530291979521916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027746475abbcd%3A0x97ab4cf0c716e313!2sDhono%20Dhanyo%20Auditorium!5e0!3m2!1sen!2sin!4v1749617914903!5m2!1sen!2sin"
                  className="aspect-[4/3] w-full rounded-2xl"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117217.82291185918!2d85.24887030557868!3d23.349950638250323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e197cf74b3a1%3A0x5b00668b712d81d6!2sAryabhatta%20Auditorium%2C%20Ranchi%20University!5e0!3m2!1sen!2sin!4v1749665048888!5m2!1sen!2sin"
                  className="aspect-[4/3] w-full rounded-2xl"
                  allowFullScreen
                  loading="lazy"
                />
              )}
            </div>
          </div>

          {/* About Section */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-2">
              <Building2 size={20} className="text-cyan-400" />
              <h3 className="text-2xl font-bold">
                About The Organiser
              </h3>
            </div>

            <p className="leading-8 text-slate-300">
              Taaza TV, the only National Hindi News Channel from
              Eastern India, actively connects with audiences through
              impactful events and large-scale public activations.
              Combining broadcasting excellence with experiential
              engagement, Taaza TV creates unmatched visibility for
              brands, institutions, and participants.
            </p>

            {/* Official Broadcaster Link */}
            <a
              href="https://taazatv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-3 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Globe size={18} className="text-cyan-400" />

              <div>
                <div className="text-sm text-slate-400">
                  Official Broadcaster
                </div>

                <div className="font-semibold text-white">
                  Taaza TV Network
                </div>
              </div>

              <ArrowUpRight
                className="ml-auto text-cyan-400"
                size={18}
              />
            </a>

            <img
              src="/taaza-tv.png"
              alt="Taaza TV"
              className="mt-8 w-52 transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30">
            <div className="text-4xl font-bold text-cyan-400">
              16+
            </div>
            <div className="mt-2 text-slate-300">
              Years of Excellence
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30">
            <div className="text-4xl font-bold text-cyan-400">
              100+
            </div>
            <div className="mt-2 text-slate-300">
              Partner Schools
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30">
            <div className="text-4xl font-bold text-cyan-400">
              20,000+
            </div>
            <div className="mt-2 text-slate-300">
              Students Honoured
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center text-slate-400">
            © 2026 Medha Samman. All Rights Reserved.
          </div>

          <a
            href="https://taazatv.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-500/20 bg-cyan-500/5 px-5 py-2 text-sm text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            Powered by Taaza TV Events
          </a>
        </div>
      </div>
    </footer>
  );
}