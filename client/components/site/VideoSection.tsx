import { useEffect, useRef, useState } from "react";
import VideoUnmuteButton from "@/components/site/VideoUnmuteButton";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = isMuted;
    if (!isMuted && video.paused) {
      video.play().catch((err) => {
        console.log("VideoSection play error:", err);
      });
    }
  }, [isMuted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video starts playing on mount (muted)
    const playVideo = async () => {
      try {
        video.muted = true;
        await video.play();
        setIsMuted(true);
      } catch (err) {
        console.log("VideoSection play error:", err);
      }
    };

    playVideo();
  }, []);

  const toggleUnmute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    if (video.paused) {
      video.play().catch((err) => {
        console.log("VideoSection play error:", err);
      });
    }
    setIsMuted(false);
  };

  return (
    <section className="relative h-full min-h-screen w-full bg-luxury-black">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted={isMuted}
        loop
        playsInline
        preload="auto"
        poster="https://res.cloudinary.com/katherine-taylor-escort-video/image/upload/v1760237961/golden_hour_opn5pm.jpg"
      >
        <source
          src="https://res.cloudinary.com/katherine-taylor-escort-video/video/upload/f_auto,q_auto,w_1920,h_1080,c_fill/golden_hour_opn5pm.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-luxury-black/55" />
      <VideoUnmuteButton isMuted={isMuted} onClick={toggleUnmute} />
    </section>
  );
};

export default VideoSection;
