import { useEffect, useRef, useState } from "react";
import VideoUnmuteButton from "@/components/site/VideoUnmuteButton";

const VIDEO_SRC =
  "https://res.cloudinary.com/katherine-taylor-escort-video/video/upload/v1760237961/Maya_3_iyvftk.mp4";

const ImmersiveVideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;
    if (!isMuted && video.paused) {
      video.play().catch((err) => {
        console.log("Immersive video play error:", err);
      });
    }
  }, [isMuted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video starts playing on mount (muted)
    const playVideo = async () => {
      try {
        video.muted = true;
        await video.play();
        setIsMuted(true);
      } catch (err) {
        console.log("Immersive video play error:", err);
      }
    };

    playVideo();
  }, []);

  const toggleUnmute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    if (video.paused) {
      video.play().catch((err) => {
        console.log("Immersive video play error:", err);
      });
    }
    setIsMuted(false);
  };

  return (
    <section className="relative h-full min-h-screen w-full overflow-hidden bg-luxury-black">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        poster="https://res.cloudinary.com/katherine-taylor-escort-video/video/upload/v1760237961/Maya_3_iyvftk.jpg"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-luxury-black/55" />
      <div className="relative z-10 flex h-full min-h-screen flex-col justify-end px-6 pb-16 md:px-8 md:pb-24 max-md:pb-12">
        <div className="mx-auto flex w-full max-w-luxury flex-col items-start gap-6 text-luxury-white max-md:gap-4">
          <span className="text-xs font-light uppercase tracking-uppercase text-white/70">
            An Immersive Viewpoint
          </span>
          <h2 className="font-serif text-5xl font-extralight tracking-display leading-[1.1] max-md:text-3xl">
            The Story Continues
          </h2>
          <p className="max-w-[65ch] text-base font-light leading-relaxed tracking-luxury text-white/85">
            Experience the LOVE collection in motion. Let the skyline mirror the
            timeless brilliance of every piece as the city awakens to golden
            light.
          </p>
        </div>
      </div>
      <VideoUnmuteButton isMuted={isMuted} onClick={toggleUnmute} />
    </section>
  );
};

export default ImmersiveVideoSection;
