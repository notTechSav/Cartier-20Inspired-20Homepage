import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AIConcierge from "@/components/ai/AIConcierge";

export default function LuxuryHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textY = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden luxury-texture">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-pearl via-transparent to-luxury-cream/50 z-10" />
      
      {/* Animated background */}
      <motion.div 
        style={{ y: heroY, opacity: heroOpacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-luxury-black/5" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
          poster="/assets/luxury-hero-poster.jpg"
        >
          <source src="/assets/luxury-ambiance.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center min-h-screen px-6 py-20">
        <motion.div 
          style={{ y: textY }}
          className="text-center max-w-luxury-wide mx-auto"
        >
          {/* Subtle accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-luxury-sm"
          >
            <span className="text-micro uppercase tracking-luxury-wider text-luxury-gray-600 luxury-thin">
              Established Excellence Since 1847
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="mb-luxury-md"
          >
            <span className="block text-display-lg font-serif font-light tracking-luxury-tight leading-none mb-4">
              Quiet
            </span>
            <span className="block text-display font-serif italic font-normal tracking-luxury luxury-gradient-text">
              Authority
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-body-lg luxury-thin text-luxury-gray-700 max-w-2xl mx-auto mb-luxury-lg leading-relaxed tracking-luxury"
          >
            Where heritage meets innovation. Experience bespoke luxury 
            crafted with meticulous attention to detail and powered by 
            artificial intelligence.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="group relative px-12 py-4 overflow-hidden">
              <span className="relative z-10 text-body tracking-luxury-wide uppercase luxury-thin">
                Explore Collection
              </span>
              <div className="absolute inset-0 border border-luxury-black transition-all duration-luxury group-hover:border-luxury-gold" />
              <div className="absolute inset-0 bg-luxury-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-luxury origin-left" />
              <span className="absolute inset-0 flex items-center justify-center text-luxury-white opacity-0 group-hover:opacity-100 transition-opacity duration-luxury delay-100 text-body tracking-luxury-wide uppercase">
                Explore Collection
              </span>
            </button>

            <button className="group px-12 py-4 bg-luxury-black text-luxury-white hover:bg-luxury-gray-900 transition-all duration-luxury luxury-hover">
              <span className="text-body tracking-luxury-wide uppercase luxury-thin">
                AI Concierge
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 0.5 : 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-6 h-6 text-luxury-gray-600" strokeWidth={1} />
          </motion.div>
        </motion.div>
      </div>

      {/* AI Concierge floating component */}
      <AIConcierge />

      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 z-30 pointer-events-none opacity-[0.02]">
        <svg width="100%" height="100%">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}
