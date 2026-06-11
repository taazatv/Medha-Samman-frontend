import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faBars,
  faPhone,
  faRocket,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isBackHidden, setIsBackHidden] = useState(true);

  useEffect(() => {
    setIsBackHidden(location.pathname === "/");
  }, [location.pathname]);

  return (
    <section
      id="navbar"
      className="
        sticky top-0 z-50
        w-full
        border-b border-blue-500/10
        bg-[#07142E]/95
        backdrop-blur-xl
        shadow-[0_8px_30px_rgba(0,0,0,0.25)]
      "
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="mx-auto flex h-24 max-w-[1500px] items-center justify-between px-6 lg:px-12">
        {/* Back Button */}
        {!isBackHidden && (
          <Button
            size="icon"
            variant="ghost"
            className="absolute left-4 text-white hover:bg-white/10 md:left-8"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={18} />
          </Button>
        )}

        {/* Logo */}
        <a
          href="https://taazatv.com/"
          className="group flex items-center"
        >
          <img
            src="/taaza-tv.png"
            alt="Taaza TV"
            className="
              h-16
              transition-all
              duration-500
              group-hover:scale-105
              drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]
            "
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 lg:flex">
          <Link
            to="/medha-gallery"
            className="relative font-semibold text-slate-200 transition-all duration-300 hover:text-cyan-300"
          >
            Gallery
          </Link>

          <Link
            to="/faqs"
            className="relative font-semibold text-slate-200 transition-all duration-300 hover:text-cyan-300"
          >
            FAQs
          </Link>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/taazatv.events?igsh=bGNoNTFvczQyd3lo"
            className="
              flex h-11 w-11 items-center justify-center
              rounded-full
              border border-cyan-400/20
              bg-cyan-500/10
              text-cyan-300
              transition-all duration-300
              hover:scale-110
              hover:bg-cyan-400
              hover:text-slate-900
            "
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <Drawer>
            <DrawerTrigger
              className="
                flex h-11 w-11 items-center justify-center
                rounded-xl
                border border-white/10
                bg-white/5
                text-white
                transition-all duration-300
                hover:border-cyan-400
                hover:bg-cyan-400/10
              "
            >
              <FontAwesomeIcon icon={faBars} />
            </DrawerTrigger>

            <DrawerContent
              data-vaul-drawer-direction="right"
              className="
                border-l border-blue-500/20
                bg-gradient-to-b
                from-[#07142E]
                via-[#0A1938]
                to-[#050D1D]
                p-8
                text-white
              "
            >
              <DrawerHeader className="border-b border-white/10 pb-6">
                <DrawerClose className="absolute right-4 top-4">
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </Button>
                </DrawerClose>

                <img
                  src="/Medha-logo.png"
                  className="mx-auto w-52"
                  alt="Medha Samman"
                />
              </DrawerHeader>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold text-cyan-300">
                  About Us
                </h3>

                <p className="leading-7 text-slate-300">
                  Taaza TV is Eastern India's leading Hindi News Channel,
                  creating impactful events, academic initiatives, youth
                  festivals and brand activations across major cities.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold text-cyan-300">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-4">
                      <FontAwesomeIcon
                        icon={faRocket}
                        className="text-cyan-300"
                      />
                      <span>37 Shakespeare Sarani, Kolkata - 700017</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-4">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-cyan-300"
                      />
                      <span>+91 9831669987</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-4">
                      <FontAwesomeIcon
                        icon={faAt}
                        className="text-cyan-300"
                      />
                      <span>events@taazatv.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/taazatv.events?igsh=bGNoNTFvczQyd3lo"
                  className="
                    flex h-14 w-14 items-center justify-center
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                    text-white
                    shadow-lg
                    transition-all duration-300
                    hover:scale-110
                  "
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-3 lg:hidden">
          <Drawer>
            <DrawerTrigger className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
              <FontAwesomeIcon icon={faBars} />
            </DrawerTrigger>

            <DrawerContent className="bg-[#07142E] p-6 text-white">
              <DrawerHeader>
                <DrawerClose className="absolute right-4 top-4">
                  <Button variant="ghost">
                    <FontAwesomeIcon icon={faXmark} />
                  </Button>
                </DrawerClose>

                <img
                  src="/Medha-logo.png"
                  className="mx-auto w-40"
                  alt="Medha Samman"
                />
              </DrawerHeader>

              <div className="mt-6 flex flex-col gap-4">
                <Link
                  to="/medha-gallery"
                  className="rounded-xl bg-white/5 p-4 text-center"
                >
                  Gallery
                </Link>

                <Link
                  to="/faqs"
                  className="rounded-xl bg-white/5 p-4 text-center"
                >
                  FAQs
                </Link>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>

      {/* Animated Bottom Glow Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
    </section>
  );
}