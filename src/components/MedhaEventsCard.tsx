import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLocationDot } from "react-icons/fa6";
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export type EventCardProps = {
  imgUrl: string;
  date: string;
  location: string;
  title: string;
  description: string;
  link?: string;
  details?: string;
  children?: ReactNode;
};

export default function EventCard({
  imgUrl,
  date,
  location,
  title,
  description,
  link = "",
  details = "",
  children,
}: EventCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    } else if (details) {
      setShowDetails(true);
    }
  };

  return (
    <>
      <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-300/40 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(0,180,255,0.25)]">

        <div className="relative overflow-hidden">
          <img
            src={imgUrl}
            alt={title}
            className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute left-4 top-4 rounded-full bg-cyan-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
            EVENT
          </div>
        </div>

        <div className="p-6">

          <div className="mb-3 flex items-center gap-2">
            <FontAwesomeIcon
              icon={faCalendarCheck}
              className="text-cyan-400"
            />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              {date}
            </span>
          </div>

          <div className="mb-4 flex items-center gap-2">
            <FaLocationDot className="text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              {location}
            </span>
          </div>

          <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
            {title}
          </h3>

          <p className="mb-6 line-clamp-3 text-sm text-gray-300">
            {description}
          </p>

          <button
            disabled={!(link || details || children)}
            onClick={handleClick}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,180,255,0.45)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {link || details || children
              ? "View Gallery"
              : "Coming Soon"}

            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      {/* Details Modal */}

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm transition-all duration-300 ${
          showDetails
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-[#071b3d]">

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-20 text-white"
            onClick={() => setShowDetails(false)}
          >
            <FontAwesomeIcon icon={faX} />
          </Button>

          <div className="overflow-y-auto max-h-[90vh]">

            <img
              src={imgUrl}
              alt={title}
              className="h-80 w-full object-cover"
            />

            <div className="p-8">
              <h2 className="mb-4 text-3xl font-bold text-white">
                {title}
              </h2>

              <div className="prose prose-invert max-w-none">
                {children ? children : <p>{details}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}