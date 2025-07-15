import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaInstagram, FaReddit, FaTwitter, FaEnvelope } from "react-icons/fa";

const Connect = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const FloatingCircle = ({ size, delay, position }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: [0.1, 0.3, 0.1],
        y: [0, -15, 0],
      }}
      transition={{
        duration: 5 + delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute rounded-full bg-blue-500 mix-blend-multiply filter blur-xl opacity-20"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    />
  );

  const circles = [
    { size: 200, delay: 0, position: { x: 10, y: 20 } },
    { size: 150, delay: 1, position: { x: 80, y: 40 } },
    { size: 250, delay: 2, position: { x: 30, y: 70 } },
    { size: 180, delay: 0.5, position: { x: 70, y: 80 } },
  ];

  const socialIcons = [
    { icon: <FaGithub size={24} />, name: "GitHub", url: "https://github.com/mycodeunq" },
    { icon: <FaLinkedin size={24} />, name: "LinkedIn", url: "https://linkedin.com/in/mycodeunq" },
    { icon: <FaInstagram size={24} />, name: "Instagram", url: "https://instagram.com/mycodeunq" },
    { icon: <FaReddit size={24} />, name: "Reddit", url: "https://reddit.com/u/mycodeunq" },
    { icon: <FaTwitter size={24} />, name: "Reddit", url: "https://reddit.com/u/mycodeunq" },
    { icon: <FaEnvelope size={24} />, name: "Reddit", url: "https://reddit.com/u/mycodeunq" },
  ];

  return (
    <section
      id="connect"
      ref={ref}
      data-scroll-section
      className="relative py-16 h-screen flex flex-col items-center justify-center z-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {circles.map((circle, index) => (
          <FloatingCircle key={index} {...circle} />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          whileHover={{ scale: 1.02 }}
        >
          Happy to connect.
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-10"
          whileHover={{ scale: 1.01 }}
        >
          Let's build something awesome together.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=mycodeunq@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-5 px-8 py-4 bg-black text-white rounded-full text-lg font-medium transition-colors hover:bg-gray-800"
          >
            Say Hello
            <FaArrowRightLong />
          </a>
        </motion.div>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.5,
            },
          },
        }}
        className="flex flex-col items-center gap-6 mt-10 relative z-10"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          className="text-xl font-medium text-gray-700"
        >
          My Socials
        </motion.div>

        <motion.div className="flex justify-center items-center gap-8">
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "backOut" },
                },
              }}
              whileHover={{
                y: -5,
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              className="text-gray-600 hover:text-gray-900 transition-colors p-2 rounded-full"
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Connect;
