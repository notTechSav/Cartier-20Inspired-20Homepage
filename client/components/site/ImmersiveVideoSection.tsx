import { useEffect, useRef, useState } from "react";

const VIDEO_SRC =
  "https://res.cloudinary.com/katherine-taylor-escort-video/video/upload/v1760312600/The_Story_Continues_Katherine_Taylor_Escort_slmfra.mov";

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
    <section className="absolute inset-0 w-full overflow-hidden bg-luxury-black">
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
      <div className="absolute inset-0 flex flex-col justify-end px-6 pb-16 md:px-8 md:pb-24 max-md:pb-12">
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
          <div className="flex items-center gap-3 max-md:gap-2">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={
                isPaused ? "Play immersive video" : "Pause immersive video"
              }
              className="ysl-nav-item inline-flex items-center justify-center max-md:px-4 max-md:py-2"
            >
              {isPaused ? "Play" : "Pause"}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={
                isMuted ? "Unmute immersive video" : "Mute immersive video"
              }
              className="ysl-nav-item inline-flex items-center justify-center max-md:px-4 max-md:py-2"
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
