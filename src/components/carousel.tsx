import video from "@/assets/video.mp4";

export default function Carousel() {
  return (
    <section
      id="carousel"
      // className="bg-secondary flex w-screen flex-col items-center gap-8 bg-[url(https://picsum.photos/1600/900)] p-8 py-44 bg-blend-multiply md:py-56"
      className="relative flex aspect-video h-auto w-screen flex-col items-center gap-8 overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        src={video}
        className="bg-secondary absolute top-0 -z-20 h-full w-full bg-blend-multiply"
      />
    </section>
  );
}
