import { useState } from "react";
import "./gallery.css";

const images = Array.from(
  { length: 112 },
  (_, i) => `/gallery_k_12/${i + 1}.jpg`
);

export default function Gallery() {
  const [activeImage, setActiveImage] =
    useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="relative mt-12 overflow-hidden bg-gradient-to-br from-slate-950 via-[#07142b] to-slate-950 px-6 py-20 md:px-12"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />

        <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-blue-300">
          Memories & Moments
        </span>

        <h2 className="mt-5 text-center text-4xl font-black text-white md:text-6xl">
          PHOTO GALLERY
        </h2>

        <p className="mt-4 max-w-2xl text-center text-slate-400">
          Capturing achievements, celebrations and unforgettable
          moments from Medha Samman.
        </p>
      </div>

      <div className="gallery-container mt-14">
        {images.map((src, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => setActiveImage(src)}
          >
            <img src={src} alt="" />

            <div className="gallery-overlay">
              <span>View Photo</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}

      {activeImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            className="animate-[zoomIn_.3s_ease] max-h-[90vh] max-w-[90vw] rounded-2xl shadow-[0_0_60px_rgba(59,130,246,0.35)]"
          />

          <button
            className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}