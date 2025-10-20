const VideoSection = () => {
  return (
    <section className="absolute inset-0 w-full h-full bg-luxury-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
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
