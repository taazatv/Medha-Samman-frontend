import { useState } from "react";
import "./gallery.css";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
  "/gallery/9.jpg",
  "/gallery/10.jpg",
  "/gallery/12.jpg",
  "/gallery/13.jpg",
  "/gallery/14.jpg",
  "/gallery/15.jpg",
  "/gallery/16.jpg",
  "/gallery/17.jpg",
  "/gallery/18.jpg",
  "/gallery/19.jpg",
  "/gallery/20.jpg",
  "/gallery/21.jpg",
  "/gallery/22.jpg",
  "/gallery/23.jpg",
  "/gallery/24.jpg",
  "/gallery/25.jpg",
  "/gallery/26.jpg",
  "/gallery/27.jpg",
  "/gallery/28.jpg",
  "/gallery/29.jpg",
  "/gallery/30.jpg",
  "/gallery/31.jpg",
  "/gallery/32.jpg",
  "/gallery/33.jpg",
  "/gallery/34.jpg",
  "/gallery/35.jpg",
  "/gallery/36.jpg",
  "/gallery/37.jpg",
  "/gallery/38.jpg",
  "/gallery/39.jpg",
  "/gallery/40.jpg",
  "/gallery/41.jpg",
  "/gallery/42.jpg",
  "/gallery/22.jpg",

  // Add more paths as needed
];

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
        <img className={`max-h-[90vh] max-w-[90vw]`} src={activeImage!} />
      </div>
    </section>
  );
}
