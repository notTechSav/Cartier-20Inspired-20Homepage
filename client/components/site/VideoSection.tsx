import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;
    if (!isPaused && video.paused) {
      void video.play();
    }
  }, [isMuted, isPaused]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    if (video.paused) {
      void video.play();
      setIsPaused(false);
    }
    setIsMuted(nextMuted);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  return (
    <section className="absolute inset-0 w-full h-full overflow-hidden bg-luxury-black">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        poster="https://res.cloudinary.com/katherine-taylor-escort-video/image/upload/v1760237084/MAYA_2_cnpwna.jpg"
      >
        <source
          src="https://res.cloudinary.com/katherine-taylor-escort-video/video/upload/f_auto,q_auto/golden_hour_opn5pm.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-luxury-black/50" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 pb-16 md:px-8 md:pb-24 max-md:pb-12">
        <div className="mx-auto flex w-full max-w-luxury flex-col items-start gap-6 text-luxury-white max-md:gap-4">
          <span className="text-xs font-light uppercase tracking-wide text-white/70">
            Sophistication Unveiled
          </span>
          <h2 className="font-serif text-5xl font-extralight tracking-tight leading-[1.1] max-md:text-3xl">
            Every Moment Matters
          </h2>
          <p className="max-w-[65ch] text-base font-light leading-relaxed tracking-wide text-white/85">
            Discretion, elegance, and intention converge in every engagement.
            This is where anticipation meets experience.
          </p>
          <div className="flex items-center gap-3 max-md:gap-2">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPaused ? "Play video" : "Pause video"}
              className="ysl-nav-item-light inline-block text-luxury-white"
            >
              {isPaused ? "Play" : "Pause"}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="ysl-nav-item-light inline-block text-luxury-white"
            >
              {isMuted ? "Unmute" : "Mute"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
