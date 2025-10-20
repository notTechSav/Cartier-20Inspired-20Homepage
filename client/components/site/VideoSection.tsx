import { useEffect, useRef } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video starts playing on mount
    const playVideo = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch (err) {
        console.log("VideoSection video play error:", err);
      }
    };

    playVideo();
  }, []);

  return (
    <section className="absolute inset-0 w-full h-full bg-luxury-black">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/katherine-taylor-escort-video/video/upload/f_auto,q_auto/golden_hour_opn5pm.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-luxury-black/55" />
    </section>
  );
};

export default VideoSection;
