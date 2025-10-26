import { Button } from "@/components/ui/button";
import { H2, H3 } from "@/components/ui/luxury-typography";
import { useEffect, useRef, useState } from "react";

const HERO_VIDEO_SRC =
  "https://cdn.coverr.co/videos/coverr-macro-shot-of-a-golden-watch-1665503983791?download=1";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) {
      return;
    }

    element.muted = isMuted;
    if (element.paused) {
      void element.play();
    }
  }, [isMuted]);

  const toggleMute = () => {
    const element = videoRef.current;
    if (!element) {
      return;
    }

    const nextMuted = !isMuted;
    element.muted = nextMuted;
    if (element.paused) {
      void element.play();
    }
    setIsMuted(nextMuted);
  };

  return (
    <section className="relative isolate flex min-h-screen w-full overflow-hidden bg-luxury-black">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        poster="https://images.pexels.com/photos/15969264/pexels-photo-15969264.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1260"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-luxury-black/60" />
      <div className="relative z-10 flex w-full flex-1 flex-col items-center justify-end px-8 pb-24 pt-32 sm:justify-center sm:pb-32">
        <div className="flex w-full max-w-luxury flex-col items-start gap-8 text-luxury-white">
          <H3 as="p" aria-hidden="true" className="mb-0 text-luxury-white/70">
            Love, Elevated
          </H3>
          <H2 as="p" aria-hidden="true" className="text-luxury-white">
            An Experience That Reflects Your Highest Qualities
          </H2>
          <Button asChild variant="ctaPrimary">
            <a href="/inquire">Reserve an Evening</a>
          </Button>
        </div>
      </div>
      <button
        type="button"
        onClick={toggleMute}
        aria-pressed={!isMuted}
        aria-label={isMuted ? "Unmute hero video" : "Mute hero video"}
        className="absolute left-8 top-8 inline-flex items-center justify-center gap-2 rounded-[2px] border border-white/60 bg-white/85 px-5 py-3 text-xs font-light uppercase tracking-uppercase text-luxury-black shadow-luxury-sm backdrop-blur transition-all duration-250 ease-out hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 md:left-10 md:top-auto md:bottom-10 md:text-sm"
      >
        <span>{isMuted ? "Unmute" : "Mute"}</span>
      </button>
    </section>
  );
};

export default Hero;
