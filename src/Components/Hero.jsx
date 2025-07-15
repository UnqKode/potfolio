import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import bg1 from "../assets/background/hero.jpg"; // background
import bg2 from "../assets/background/building.png"; // midground
import bg3 from "../assets/background/spiderMan.png"; // foreground

function Hero() {
  const { scrollY } = useScroll();

  // Scroll-based parallax

  return (
    <section className="relative top-0 left-0 w-full h-screen overflow-hidden z-10">

    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Animated Layer Container */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        {/* Background Layer */}
        <motion.img
          initial={{ opacity: 0, y: -100, scale: 1.2 }}
          animate={{ opacity: 0.6, y: 0, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.1 }}
          src={bg1}
          alt="Spider background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Midground Layer (Building) */}
        <motion.img
          initial={{ opacity: 0, y: -150, scale: 1.5 }}
          animate={{ opacity: 0.85, y: 0, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.3 }}
          src={bg2}
          alt="Building"
          className="absolute inset-0 w-full h-full object-cover z-30"
          />

        {/* Foreground Layer (Spider-Man) */}
        <motion.img
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.2, ease: "easeOut", delay: 0.7 }}
          src={bg3}
          alt="Spider-Man"
          className="absolute inset-0 w-full h-full object-cover z-40"
        />
      </motion.div>

      {/* Fog / Noise Overlay */}
      <motion.div
        initial={{
            background:
            "radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
        }}
        animate={{
            background:
            "radial-gradient(circle at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.9) 100%)",
        }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 }}
        className="absolute inset-0 z-50 pointer-events-none"
        />

      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light z-20 pointer-events-none" />

      {/* Centered Text */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-white text-center px-4 pb-40">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] tracking-wide"
          >
          Welcome to My Web
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="text-lg md:text-2xl text-purple-300 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        >
          Web - Developer • Creative Coder • Spider-Fan
        </motion.p>
      </div>
    </div>
            </section>
  );
}

export default Hero;
