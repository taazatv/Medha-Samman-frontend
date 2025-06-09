import { useState } from "react";
import "./gallery.css";

const images = [
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
  "/gallery/5.png",
  "/gallery/6.png",
  "/gallery/7.png",
  "/gallery/8.png",
  "/gallery/9.png",
  "/gallery/10.png",
  "/gallery/11.png",
  "/gallery/12.png",
  "/gallery/13.png",
  "/gallery/14.png",
  "/gallery/15.png",
  "/gallery/16.png",
  "/gallery/17.png",
  "/gallery/18.png",
  "/gallery/19.png",
  "/gallery/20.png",
  "/gallery/21.png",
  "/gallery/22.png",
  "/gallery/23.png",
  "/gallery/24.png",
  "/gallery/25.png",
  "/gallery/26.png",
  "/gallery/27.png",
  "/gallery/28.png",
  "/gallery/29.png",
  "/gallery/30.png",
  "/gallery/31.png",
  "/gallery/32.png",
  "/gallery/33.png",
  "/gallery/34.png",
  "/gallery/35.png",
  "/gallery/36.png",
  "/gallery/37.png",
  "/gallery/38.png",
  "/gallery/39.png",
  "/gallery/40.png",
  "/gallery/41.png",
  "/gallery/42.png",
  "/gallery/43.png",
  "/gallery/44.png",
  "/gallery/45.png",
  "/gallery/46.png",
  "/gallery/47.png",
  "/gallery/48.png",
  "/gallery/49.png",
  "/gallery/50.JPG",
  "/gallery/51.JPG",
  "/gallery/52.JPG",
  "/gallery/53.JPG",
  "/gallery/54.JPG",
  "/gallery/55.JPG",
  "/gallery/56.JPG",
  "/gallery/57.JPG",
  "/gallery/58.JPG",
  "/gallery/59.JPG",
  "/gallery/60.JPG",
  "/gallery/61.JPG",
  "/gallery/62.JPG",
  "/gallery/65.JPG",
  "/gallery/66.JPG",
  "/gallery/67.JPG",
  "/gallery/68.JPG",
  "/gallery/69.JPG",
  "/gallery/70.JPG",
  "/gallery/71.JPG",
  "/gallery/72.JPG",
  "/gallery/72.JPG",
  "/gallery/73.JPG",
  "/gallery/74.JPG",
  "/gallery/76.JPG",
  "/gallery/77.JPG",
  "/gallery/78.JPG",
  "/gallery/79.JPG",
  "/gallery/80.JPG",
  "/gallery/81.JPG",
  "/gallery/82.JPG",
  "/gallery/83.JPG",
  "/gallery/84.JPG",
  "/gallery/85.JPG",
  "/gallery/86.JPG",
  "/gallery/87.JPG",
  "/gallery/88.JPG",
  "/gallery/89.JPG",
  "/gallery/90.JPG",
  "/gallery/91.JPG",
  "/gallery/92.JPG",
  "/gallery/93.JPG",
  "/gallery/94.JPG",
  "/gallery/95.JPG",
  "/gallery/96.JPG",
  "/gallery/97.JPG",
  "/gallery/98.JPG",

  // Add more paths as needed
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  return (
    <section
      id="gallery"
      className="flex w-screen flex-col items-center p-8 md:p-16 [&_img]:object-cover"
    >
      <hr className="border-secondary mb-8 w-16 border-t-4" />
      <div className="mb-12 text-4xl font-bold md:text-6xl">PHOTO GALLERY</div>
      <div className="gallery-container max-h-[60vh] overflow-y-scroll">
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
        className={`fixed top-0 left-0 z-50 h-screen w-screen items-center justify-center bg-neutral-950/50 ${activeImage === null ? "hidden" : "flex"}`}
        onClick={() => {
          setActiveImage(null);
        }}
      >
        <img className={`max-h-[90vh] max-w-[90vw]`} src={activeImage!} />
      </div>
    </section>
  );
}
