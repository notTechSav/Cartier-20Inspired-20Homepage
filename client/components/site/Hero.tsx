import { Button } from "@/components/ui/button";
import { H2, H3 } from "@/components/ui/luxury-typography";
import { useEffect, useRef, useState } from "react";
import VideoUnmuteButton from "@/components/site/VideoUnmuteButton";

const HERO_VIDEO_SRC =
  "https://res.cloudinary.com/katherine-taylor-escort-video/video/upload/v1760237084/MAYA_2_cnpwna.mp4";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;

    element.muted = isMuted;
    if (!isMuted && element.paused) {
      element.play().catch((err) => {
        console.log("Hero video play error:", err);
      });
    }
  }, [isMuted]);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;

    // Ensure video starts playing on mount (muted)
    const playVideo = async () => {
      try {
        element.muted = true;
        await element.play();
        setIsMuted(true);
      } catch (err) {
        console.log("Hero video play error:", err);
      }
    };

    playVideo();
  }, []);

  const toggleUnmute = () => {
    const element = videoRef.current;
    if (!element) return;
    element.muted = false;
    if (element.paused) {
      element.play().catch((err) => {
        console.log("Hero video play error:", err);
      });
    }
    setIsMuted(false);
  };

  return (
    <section className="relative isolate flex h-full min-h-screen w-full overflow-hidden bg-luxury-black">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        poster="https://res.cloudinary.com/katherine-taylor-escort-video/image/upload/v1760237084/MAYA_2_cnpwna.jpg"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-luxury-black/60" />
      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-end px-6 pb-16 pt-24 md:px-8 md:pb-32 md:pt-32 max-md:items-start">
        <div className="flex w-full max-w-luxury flex-col items-start gap-6 text-luxury-white md:gap-8">
          <H3
            as="p"
            aria-hidden="true"
            className="mb-0 text-luxury-white/70 max-md:text-center"
          >
            Love, Elevated
          </H3>
          <H2
            as="p"
            aria-hidden="true"
            className="text-luxury-white max-md:text-center"
          >
            An Experience That Reflects Your Highest Qualities
          </H2>
          <Button
            asChild
            variant="ctaPrimary"
            className="max-md:w-full max-md:text-center"
          >
            <a href="/inquire">Reserve an Evening</a>
          </Button>
        </div>
      </div>
      <VideoUnmuteButton isMuted={isMuted} onClick={toggleUnmute} />
    </section>
  );
};

export default Hero;
