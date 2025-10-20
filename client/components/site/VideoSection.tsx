const VideoSection = () => {
  return (
    <section className="w-full bg-luxury-black">
      <div className="mx-auto max-w-luxury px-6 py-12 md:py-24 max-md:py-12">
        <video
          className="w-full h-auto"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
        >
          <source
            src="https://res.cloudinary.com/katherine-taylor-escort-video/video/upload/f_auto,q_auto/golden_hour_opn5pm.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
