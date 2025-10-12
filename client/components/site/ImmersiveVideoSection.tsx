import { useEffect, useRef, useState } from "react";

const VIDEO_SRC =
  "https://res.cloudinary.com/katherine-taylor-escort-video/video/upload/v1760237961/Maya_3_iyvftk.mp4";

const ImmersiveVideoSection = () => {
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
    <section className="relative min-h-screen w-full overflow-hidden bg-luxury-black">
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
      <div className="relative z-10 flex h-full min-h-screen flex-col justify-end px-8 pb-32">
        <div className="mx-auto flex w-full max-w-luxury flex-col items-start gap-8 text-luxury-white">
          <span className="text-xs font-light uppercase tracking-uppercase text-white/70">
            An Immersive Viewpoint
          </span>
          <h2 className="font-serif text-5xl font-extralight tracking-display leading-[1.1]">
            The Story Continues
          </h2>
          <p className="max-w-[65ch] text-base font-light leading-relaxed tracking-luxury text-white/85">
            Experience the LOVE collection in motion. Let the skyline mirror the
            timeless brilliance of every piece as the city awakens to golden
            light.
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={
                isPaused ? "Play immersive video" : "Pause immersive video"
              }
              className="inline-flex items-center justify-center rounded-[2px] border border-white/50 bg-white/10 px-6 py-3 text-xs font-light uppercase tracking-uppercase text-luxury-white transition-all duration-250 ease-out hover:border-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              {isPaused ? "Play" : "Pause"}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={
                isMuted ? "Unmute immersive video" : "Mute immersive video"
              }
              className="inline-flex items-center justify-center rounded-[2px] border border-white/50 bg-white/10 px-6 py-3 text-xs font-light uppercase tracking-uppercase text-luxury-white transition-all duration-250 ease-out hover:border-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              {isMuted ? "Unmute" : "Mute"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmersiveVideoSection;
