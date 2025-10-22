import { Button } from "@/components/ui/button";
import { H2, H3 } from "@/components/ui/luxury-typography";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const HERO_VIDEO_SRC =
  "https://res.cloudinary.com/katherine-taylor-escort-video/video/upload/Sac_Escort_Kat_Taylor_pgdwvn.mp4";

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
      <div className="relative z-10 hidden md:flex w-full flex-1 flex-col items-center justify-end px-8 pb-20">
        <div className="flex w-full max-w-luxury flex-col items-center justify-end gap-6 text-center text-luxury-white">
          <h1 style={{ fontSize: "48px", fontWeight: 400, letterSpacing: "0.02em", color: "white" }}>Katherine Taylor</h1>
          <h3 style={{ fontSize: "18px", fontWeight: 300, letterSpacing: "0.02em", color: "rgba(255, 255, 255, 0.8)", maxWidth: "42rem" }}>Professional escort services in Sacramento and San Francisco—discretion, elegance, and genuine connection.</h3>
          <p>
            <a href="#about" style={{ color: "white", textDecoration: "underline", transition: "opacity 300ms var(--ease)" }}>Discover More →</a>
          </p>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="relative z-10 md:hidden flex w-full flex-1 flex-col items-center justify-end px-6 pb-12">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: "var(--spacer-xl)", textAlign: "center", color: "white" }}>
          <h1 style={{ fontSize: "36px", fontWeight: 400, letterSpacing: "0.02em", color: "white" }}>Katherine Taylor</h1>
          <h3 style={{ fontSize: "16px", fontWeight: 300, letterSpacing: "0.02em", color: "rgba(255, 255, 255, 0.8)" }}>Professional escort services in Sacramento and San Francisco—discretion, elegance, and genuine connection.</h3>
          <p>
            <a href="#about" style={{ color: "white", textDecoration: "underline", transition: "opacity 300ms var(--ease)" }}>Discover More →</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
