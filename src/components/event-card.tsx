import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";

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
    <>
      <div className="group min-w-[360px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-400/50 hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]">
        {/* Image */}

        <div className="overflow-hidden">
          <img
            src={imgUrl}
            className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>

        {/* Content */}

        <div className="p-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-widest text-blue-300">
            <FontAwesomeIcon icon={faCalendarCheck} />
            {date}
          </div>

          <h3 className="mt-5 text-2xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-4 line-clamp-5 text-sm leading-7 text-slate-400">
            {description}
          </p>

          <button
            disabled={!(link || details || children)}
            onClick={() => {
              if (link) {
                window.open(link, "_blank");
              } else {
                setShowDetails(true);
              }
            }}
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-semibold text-white transition duration-300 hover:scale-[1.02]"
          >
            Know More
            <FontAwesomeIcon
              icon={faArrowRight}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>

      {/* Modal */}

      {showDetails && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-900 p-10 text-white shadow-2xl">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-red-500"
            >
              <FontAwesomeIcon icon={faX} />
            </button>

            <h2 className="mb-6 text-3xl font-bold">
              {title}
            </h2>

            {children ? (
              children
            ) : (
              <p className="leading-8 text-slate-300">
                {details}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}