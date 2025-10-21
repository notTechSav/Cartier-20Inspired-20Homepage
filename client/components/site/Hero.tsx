import { Button } from "@/components/ui/button";
import { H2, H3 } from "@/components/ui/luxury-typography";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const HERO_VIDEO_SRC =
  "https://res.cloudinary.com/katherine-taylor-escort-video/video/upload/v1761027922/MAYA_2_yebhpf.mp4";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;

    element.muted = isMuted;

    const playVideo = async () => {
      try {
        if (element.paused) {
          await element.play();
        }
      } catch (error) {
        console.error("Video playback failed:", error);
      }
    };

    playVideo();
  }, [isMuted]);

  const toggleMute = () => {
    const element = videoRef.current;
    if (!element) return;

    const nextMuted = !isMuted;
    element.muted = nextMuted;
    setIsMuted(nextMuted);

    if (element.paused) {
      element.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }
  };

  const handleVideoLoadedData = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen w-full overflow-hidden bg-luxury-black"
      data-hero="true"
      data-section="hero"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        onLoadedData={handleVideoLoadedData}
        poster="https://res.cloudinary.com/katherine-taylor-escort-video/image/upload/v1760237084/MAYA_2_cnpwna.jpg"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Dark Overlay - Desktop: lighter, Mobile: darker for readability */}
      <div className="pointer-events-none absolute inset-0 bg-luxury-black/40 md:bg-luxury-black/50" />

      {/* Desktop Content */}
      <div className="relative z-10 hidden md:flex w-full flex-1 flex-col items-center justify-end px-8 pb-32 pt-32">
        <div className="flex w-full max-w-luxury flex-col items-start gap-8 text-luxury-white">
          <H3
            as="p"
            aria-hidden="true"
            className="mb-0 text-luxury-white/70 text-sm tracking-wide"
          >
            Love, Elevated
          </H3>
          <H2
            as="p"
            aria-hidden="true"
            className="text-luxury-white text-5xl md:text-6xl leading-tight"
          >
            An Experience That Reflects Your Highest Qualities
          </H2>
          <Button asChild variant="ctaPrimary" className="mt-4 text-sm">
            <a href="/inquire">Reserve an Evening</a>
          </Button>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="relative z-10 md:hidden flex w-full flex-1 flex-col items-start justify-end px-6 pb-16 pt-24">
        <div className="flex w-full flex-col items-start gap-6 text-luxury-white">
          <H3
            as="p"
            aria-hidden="true"
            className="mb-0 text-luxury-white/75 text-xs tracking-wide uppercase"
          >
            Love, Elevated
          </H3>
          <H2
            as="p"
            aria-hidden="true"
            className="text-luxury-white text-2xl leading-tight font-extralight"
          >
            An Experience That Reflects Your Highest Qualities
          </H2>
          <Button asChild variant="ctaPrimary" className="w-full text-xs mt-6">
            <a href="/inquire">Reserve an Evening</a>
          </Button>
        </div>
      </div>

      {/* Mute/Unmute Button */}
      {isVideoLoaded && (
        <button
          type="button"
          onClick={toggleMute}
          aria-pressed={!isMuted}
          aria-label={isMuted ? "Unmute hero video" : "Mute hero video"}
          className="absolute right-6 bottom-6 md:right-8 md:bottom-8 z-20 inline-flex items-center justify-center gap-2 rounded-sm border border-white/60 bg-white/90 backdrop-blur px-4 py-2 md:px-5 md:py-3 text-xs font-light uppercase tracking-wider text-luxury-black transition-all duration-250 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-luxury-black/50"
        >
          {isMuted ? (
            <>
              <VolumeX className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">Unmute</span>
            </>
          ) : (
            <>
              <Volume2 className="h-3 w-3 md:h-4 md:w-4" />
              <span className="hidden sm:inline">Mute</span>
            </>
          )}
        </button>
      )}
    </section>
  );
};

export default Hero;
