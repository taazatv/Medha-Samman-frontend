import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";
import { Button } from "./ui/button";
import { faX } from "@fortawesome/free-solid-svg-icons";

export type EventCardProps = {
  imgUrl: string;
  date: string;
  title: string;
  description: string;
  link?: string;
  details?: string;
  children?: ReactNode;
};

export default function EventCard({
  imgUrl,
  date,
  title,
  description,
  link = "",
  details = "",
  children,
}: EventCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="event-card relative h-full space-y-4 border-amber-950 max-sm:border-b-4 sm:min-w-sm">
      <img className="aspect-[3/2] w-full object-fill" src={imgUrl} />
      <div className="date mt-8 flex items-center gap-2 text-sm font-bold uppercase">
        <FontAwesomeIcon icon={faCalendarCheck} className="text-secondary" />
        <div className="text-xs tracking-widest text-neutral-600">{date}</div>
      </div>
      <div className="title text-2xl/tight font-bold">{title}</div>
      <div className="desciption h-[12rem] text-sm/snug text-neutral-600">
        {description}
      </div>
      <button
        disabled={!(link || children || details)}
        className="know-more not-disabled:hover:bg-secondary text-secondary border-secondary flex w-full justify-center rounded-full border-2 bg-white py-4 text-sm font-bold tracking-widest uppercase not-disabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        onClick={() => {
          if (link) window.location.assign(link);
          else if (details) setShowDetails(true);
        }}
      >
        {link || children || details ? "Know More" : "Coming Soon..."}
      </button>

      <div
        className={`absolute top-0 left-0 ${showDetails ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-16 opacity-0"} h-full w-full bg-white/75 backdrop-blur-sm`}
      >
        <Button
          variant={"ghost"}
          size={"icon"}
          className="absolute top-2 right-2"
          onClick={() => {
            setShowDetails(false);
          }}
        >
          <FontAwesomeIcon icon={faX} />
        </Button>
        {children ? (
          children
        ) : (
          <div className="flex h-full w-full items-center justify-center p-8 text-center font-medium text-neutral-600">
            {details}
          </div>
        )}
      </div>
    </div>
  );
}
