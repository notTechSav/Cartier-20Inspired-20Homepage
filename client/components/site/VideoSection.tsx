import { useEffect, useRef, useState } from "react";

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
        <div className="mx-auto flex w-full max-w-luxury flex-col items-center gap-6 text-center text-luxury-white max-md:gap-4"></div>
      </div>
    </section>
  );
};

export default VideoSection;
