import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useSpring, useMotionValue } from "motion/react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.3 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const applySlowMotion = () => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.9;
      }
    };
    applySlowMotion();
    const interval = setInterval(applySlowMotion, 300);
    const timeout = setTimeout(() => clearInterval(interval), 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const setSlowMotion = () => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 0.25;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Cursor Follower */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand rounded-full pointer-events-none z-[100] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-[#010104]">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={setSlowMotion}
          onCanPlay={setSlowMotion}
          onPlay={setSlowMotion}
          onPlaying={setSlowMotion}
          className="w-full h-full object-cover opacity-60"
          style={{ objectPosition: "50% 50%" }}
        >
          <source
            src="https://framerusercontent.com/assets/t247SfNjAnKGGOfumRH8njZw.mp4"
            type="video/mp4"
          />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#010104]/40 to-[#010104]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010104]/20 via-transparent to-[#010104]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-8 md:pt-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-fit mx-auto mb-5 rounded-lg border border-white/10 backdrop-blur-2xs py-3 px-4 bg-black/30 flex items-center justify-center"
        >
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse shrink-0" />
            <span
              className="text-[13px] md:text-sm font-medium tracking-normal font-sans"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) 28%, #CFFE25 52%, rgba(255,255,255,0.85) 76%, rgba(255,255,255,0.85) 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "badge-glow-sweep 3s ease-in-out infinite",
              }}
            >
              New: AI-powered website design tool
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-3 pb-3">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] font-display bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/55"
          >
            Stunning website for <br className="hidden md:block" />
            <span className="text-white">your business</span>
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm md:text-base text-white/70 max-w-2xl mx-auto mb-9 leading-relaxed font-normal font-sans"
        >
          Modern websites for Australian businesses. We design and build from
          UI/UX to back-end, so you get fast, reliable products that scale.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-brand text-black py-2.5 px-6 rounded-full font-medium font-sans flex items-center justify-center gap-2 text-sm transition-all duration-500 ease-out hover:bg-[#f3ff9b] hover:shadow-[0_0_30px_rgba(243,255,155,0.5)]"
          >
            <ArrowRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
            <span>Get started</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-black py-2.5 px-6 rounded-full text-sm font-medium font-sans transition-all duration-500 ease-out hover:bg-[#f3ff9b] hover:shadow-[0_0_20px_rgba(243,255,155,0.4)]"
          >
            View pricing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
