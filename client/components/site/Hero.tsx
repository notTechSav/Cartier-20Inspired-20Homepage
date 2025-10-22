import { Button } from "@/components/ui/button";
import { H2, H3 } from "@/components/ui/luxury-typography";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const HERO_VIDEO_SRC =
  "https://res.cloudinary.com/katherine-taylor-escort-video/video/upload/v1761027922/MAYA_2_yebhpf.mp4";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;

    // Abort any pending play requests
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    element.muted = isMuted;

    if (!element.paused) {
      return; // Video already playing, don't interfere
    }

    const signal = abortControllerRef.current.signal;

    const playVideo = async () => {
      try {
        if (!signal.aborted && element.parentElement) {
          await element.play();
        }
      } catch (error) {
        // Silently ignore errors from interrupted or removed elements
        if (signal.aborted) return;
        if (error instanceof DOMException && error.name === "NotAllowedError") {
          return; // Browser autoplay policy or removed element
        }
      }
    };

    playVideo();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [isMuted]);

  const toggleMute = () => {
    const element = videoRef.current;
    if (!element || !element.parentElement) return;

    const nextMuted = !isMuted;
    element.muted = nextMuted;
    setIsMuted(nextMuted);

    if (element.paused) {
      element.play().catch((error) => {
        // Silently ignore errors from removed elements or browser policy
        if (error instanceof DOMException && error.name === "NotAllowedError") {
          return;
        }
      });
    }
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
        preload="auto"
        poster="https://res.cloudinary.com/katherine-taylor-escort-video/image/upload/v1760237084/MAYA_2_cnpwna.jpg"
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Dark Overlay - Desktop: lighter, Mobile: darker for readability */}
      <div className="pointer-events-none absolute inset-0 bg-luxury-black/40 md:bg-luxury-black/50" />

      {/* Desktop Content */}
      <div className="relative z-10 hidden md:flex w-full flex-1 flex-col items-center justify-end px-8 pb-0">
        <div className="flex w-full max-w-luxury flex-col items-center justify-end gap-1 text-center text-luxury-white">
          <H3
            as="p"
            aria-hidden="true"
            className="text-center mb-0 text-luxury-white/70"
          >
            Love, Elevated
          </H3>
          <div className="flex flex-col items-center">
            <H2
              as="p"
              aria-hidden="true"
              className="text-center text-luxury-white"
            >
              An Experience That Reflects Your Highest Qualities
              <a
                href="/inquire"
                className="ysl-nav-item-light text-sm inline-block text-luxury-white block mt-2"
              >
                Reserve an Evening
              </a>
            </H2>
          </div>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="relative z-10 md:hidden flex w-full flex-1 flex-col items-center justify-end px-6 pb-0">
        <div className="flex w-full flex-col items-center justify-end text-center gap-1 text-luxury-white">
          <H3
            as="p"
            aria-hidden="true"
            className="text-center mb-0 text-luxury-white/75 text-xs tracking-wide uppercase"
          >
            Love, Elevated
          </H3>
          <div className="flex flex-col items-center">
            <H2
              as="p"
              aria-hidden="true"
              className="text-center text-luxury-white text-2xl leading-tight font-extralight"
            >
              An Experience That Reflects Your Highest Qualities
              <a
                href="/inquire"
                className="ysl-nav-item-light text-xs inline-block text-center text-luxury-white block mt-1"
              >
                Reserve an Evening
              </a>
            </H2>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
