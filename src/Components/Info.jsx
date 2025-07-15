import React from "react";
import { motion } from "framer-motion";
import Projects from "./Projects";
import Sp from "../assets/background/peakpx.png";

function Info() {
  return (
    <section
      data-scroll-section
      className="relative z-20 min-h-screen bg-white px-4 md:px-12 py-16 overflow-hidden"
    >
      <motion.img
        src={Sp}
        alt="Background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute hidden md:block left-0 top-0 h-full object-cover z-0 pointer-events-none"
        loading="lazy"
      />
      <div className="grid grid-cols-1 md:grid-cols-10 gap-8 p-24 z-20" >
        {/* Tech Stack - 3/10 columns (30%) */}
        <div className="md:col-span-4 flex items-start justify-start">
          
        </div>

        {/* Projects or Other Content - 7/10 columns (70%) */}
        <div className="md:col-span-6 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ margin: "-100px", once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent z-20 bg-clip-text bg-gradient-to-r from-blue-600 to-red-600"
          >
            Projects
          </motion.h2>
          <Projects />
        </div>
      </div>
    </section>
  );
}

export default Info;
