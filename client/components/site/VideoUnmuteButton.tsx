interface VideoUnmuteButtonProps {
  isMuted: boolean;
  onClick: () => void;
}

const VideoUnmuteButton: React.FC<VideoUnmuteButtonProps> = ({
  isMuted,
  onClick,
}) => {
  if (!isMuted) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Unmute video"
      className="absolute bottom-6 right-6 z-20 inline-flex items-center justify-center rounded-[2px] border border-white/50 bg-white/10 px-6 py-3 text-xs font-light uppercase tracking-uppercase text-luxury-white transition-all duration-250 ease-out hover:border-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 md:bottom-8 md:right-8"
    >
      Unmute →
    </button>
  );
};

export default VideoUnmuteButton;
