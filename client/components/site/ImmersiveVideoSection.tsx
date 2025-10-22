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
        <div className="mx-auto flex w-full max-w-luxury flex-col items-center gap-6 text-center text-luxury-white max-md:gap-4">
        </div>
      </div>
    </section>
  );
};

export default ImmersiveVideoSection;
