import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { FaLocationDot } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";
import { Button } from "./ui/button";
import { faX } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={imgUrl}
          alt={title}
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2">
          <FontAwesomeIcon
            icon={faCalendarCheck}
            className="text-secondary h-4 w-4"
          />
          <span className="text-xs font-bold tracking-widest text-gray-600 uppercase">
            {date}
          </span>
        </div>

        <div className="mb-3 flex items-center gap-2">
          <FaLocationDot />
          <span className="text-xs font-bold tracking-widest text-gray-600 uppercase">
            {location}
          </span>
        </div>

        <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mb-6 line-clamp-4 flex-1 text-sm text-gray-600">
          {description}
        </p>

        <button
          disabled={!(link || children || details)}
          className="border-secondary text-secondary hover:bg-secondary mt-auto w-full rounded-full border-2 bg-white px-6 py-3 text-sm font-bold tracking-widest uppercase transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => {
            if (link) window.location.href = link; // Navigate to the link in the same tab
            else if (details) setShowDetails(true);
          }}
        >
          {link || children || details ? "Gallery" : "Coming Soon..."}
        </button>
      </div>

      {/* Details overlay */}
      <div
        className={`absolute inset-0 z-10 flex flex-col bg-white/95 backdrop-blur-sm transition-all duration-300 ${showDetails ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-20"
          onClick={() => setShowDetails(false)}
        >
          <FontAwesomeIcon icon={faX} className="h-5 w-5" />
        </Button>

        <div className="flex h-full flex-col overflow-y-auto p-6">
          <div className="mb-6 aspect-[4/3] w-full overflow-hidden rounded-lg">
            <img
              className="h-full w-full object-cover"
              src={imgUrl}
              alt={title}
            />
          </div>

          <div className="mb-4 flex items-center gap-2">
            <FontAwesomeIcon
              icon={faCalendarCheck}
              className="text-secondary h-4 w-4"
            />
            <span className="text-xs font-bold tracking-widest text-gray-600 uppercase">
              {date}
            </span>
          </div>

          <h3 className="mb-4 text-2xl font-bold text-gray-900">{title}</h3>

          <div className="prose text-gray-600">
            {children ? children : <p>{details}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
