import React, { useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import bg1 from "../assets/background/about.png";
import bg2 from "../assets/background/about2.png";
import bg3 from "../assets/background/about3.png"

function About() {


  const containerRef = useRef(null);
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-100px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const moveBackground = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `translate(${x / 20}px, ${y / 20}px)`
  );
  const moveForeground = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `translate(${x / 10}px, ${y / 10}px)`
  );

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section data-scroll-section className="relative z-20 h-screen" >
    <div
  ref={(el) => {
    containerRef.current = el;
    inViewRef.current = el;
  }}
  onMouseMove={handleMouseMove}
  
  className="  min-h-screen flex flex-col justify-center text-black px-6 sm:px-12 py-24 overflow-visible"
>

      {/* 🔴 bg1: zoom-out entrance */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg1})` }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        loading="lazy"
        
      />

      {/* 🔵 bg2: sliding in from right */}
      <motion.div
        className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${bg2})` }}
        initial={{ x: "10%", opacity: 0 }}
        animate={isInView ? { x: "0%", opacity: 1 } : {}}
        transition={{ duration: 2.0, ease: "easeOut", delay: 0.3 }}
        loading="lazy"
      />
      <motion.div
        className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${bg3})` }}
        initial={{ x: "10%", opacity: 0 }}
        animate={isInView ? { x: "0%", opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        loading="lazy"
      />

      {/* Floating blurred background elements */}
      {isInView && (
        <motion.div
          style={{ transform: moveBackground }}
          className="absolute inset-0 z-20 pointer-events-none"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full bg-grid-pattern bg-[length:50px_50px]" />
          </div>
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500 opacity-20 blur-xl"
            animate={{ scale: [1, 1.2, 1], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-red-500 opacity-20 blur-xl"
            animate={{ scale: [1, 1.3, 1], y: [0, 40, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      )}

      {/* Foreground floating circles */}
      {isInView && (
        <motion.div
          style={{ transform: moveForeground }}
          className="absolute inset-0 z-30 pointer-events-none"
        >
          <motion.div
            className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-purple-600 opacity-10"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-4 h-4 rounded-full bg-red-600 opacity-10"
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.div>
      )}

      {/* Main Content */}
      <div className="relative z-40 max-w-4xl mx-auto lg:ml-12 xl:ml-24">
        <div className="mb-12 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ margin: "-100px", once: true }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600"
          >
            About Me
          </motion.h2>
        </div>

        <div className="space-y-8 max-w-2xl">
          {[
            "Hey, I'm Manas Yadav (MaYa) a creative web developer and a freelancer from India crafting immersive digital experiences with code and motion.",
            "I blend design and development to build interfaces that not only work but feel alive.",
            "My work blends art, animation, and code.",
            "I design Web Pages where creativity meets interactivity.",
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl leading-relaxed relative z-10"
            >
              {text}
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex gap-6 items-center">
          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-700 hover:text-blue-700 transition-colors text-2xl"
          >
            <FaLinkedin />
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-700 hover:text-black transition-colors text-2xl"
          >
            <FaGithub />
          </motion.a>

          {/* Gmail */}
          <motion.a
            href="mailto:yourmail@gmail.com"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-700 hover:text-red-600 transition-colors text-2xl"
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </div>
      </div>
    </section>
  );
}

export default About;
