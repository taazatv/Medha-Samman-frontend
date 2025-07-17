import { useState } from "react";
import "./gallery.css";

const images = Array.from({ length: 79 }, (_, i) => `/gallery_k_10/${i + 1}.JPG`);

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  return (
    <section
      id="gallery"
      className="mt-8 flex w-screen flex-col items-center bg-slate-900 p-8 md:p-16 [&_img]:object-cover"
    >
      <hr className="border-secondary mb-8 w-16 border-t-4" />
      <div className="md:text-w6xl mb-12 text-4xl font-bold text-white">
        PHOTO GALLERY
      </div>
      <div className="gallery-container max-h-[60vh] w-full overflow-y-scroll">
        {images.map((src, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => setActiveImage(src)}
          >
            <img src={src} />
          </div>
        ))}
      </div>

      <div
        className={`fixed top-0 left-0 z-50 h-screen w-screen items-center justify-center bg-neutral-950/50 backdrop-blur ${activeImage === null ? "hidden" : "flex"}`}
        onClick={() => {
          setActiveImage(null);
        }}
      >
        <img className="max-h-[90vh] max-w-[90vw]" src={activeImage!} />
      </div>
    </section>
  );
}
