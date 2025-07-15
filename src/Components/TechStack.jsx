import React from "react";
import { motion } from "framer-motion";
import { IconCloudDemo } from "./CloudElement";

function TechStack() {
  const stackItems = [
    { name: "React.js", color: "from-cyan-400 to-blue-600" },
    { name: "Tailwind CSS", color: "from-teal-400 to-blue-500" },
    { name: "Node.js", color: "from-green-400 to-emerald-600" },
    { name: "Express.js", color: "from-gray-400 to-gray-700" },
    { name: "MongoDB", color: "from-green-500 to-green-700" },
    { name: "TypeScript", color: "from-blue-400 to-blue-700" },
    { name: "Framer Motion", color: "from-purple-400 to-purple-700" },
    { name: "Next.js", color: "from-gray-600 to-black" },
    { name: "GraphQL", color: "from-pink-500 to-purple-700" },
    { name: "Vercel", color: "from-gray-300 to-black" },
    { name: "REST APIs", color: "from-indigo-400 to-indigo-700" },
    { name: "Socket.io", color: "from-gray-400 to-black" }
  ];

  return (
    <section 
      data-scroll-section 
      className="h-full bg-white relative z-20 overflow-hidden p-16 py-24"
    >
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Text content */}
        <motion.div 
          className="w-full lg:w-1/2 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 }
            }
          }}
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600"
          >
            My Tech Stack
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 max-w-lg"
          >
            Tools and technologies I use to build exceptional digital experiences
          </motion.p>

          <motion.ul 
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            {stackItems.map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center"
              >
                <span className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${item.color}`} />
                <span className="text-lg font-medium text-gray-800">{item.name}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Cloud visualization */}
        <motion.div 
          className="w-full lg:w-1/2 h-[300px] lg:h-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <IconCloudDemo />
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;