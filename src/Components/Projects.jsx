import React, { useState } from "react";
import ProjectTile from "./ProjectTile";
import { motion, useMotionValue, useSpring } from "framer-motion";
import VoxcImage from "../assets/Projects/voxc.png";
import chat from "../assets/Projects/voxc.png";
import gd from "../assets/Projects/gd.png";
import viva from "../assets/Projects/viva.png";
import App from "../assets/Projects/app.png"

const myProjects = [
  {
    id: 1,
    title: "VOXC: Instant AI Access",
    description:
      "A Chrome extension offering instant AI assistance through voice commands and smart actions.",
    subDescription: [
      "Built with Chrome Extensions API, Web Speech API, and Gemini 2.0 Flash API for real-time AI access.",
      "Enabled voice interaction on any webpage using the Web Speech API.",
      "Implemented AI-powered summarization, translation, and contextual replies for improved productivity.",
    ],
    href: "",
    logo: "",
    image: VoxcImage,
    tags: [
      { id: 1, name: "Chrome API", path: "/assets/logos/chrome.svg" },
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Web Speech API", path: "/assets/logos/microphone.svg" },
      { id: 4, name: "Gemini API", path: "/assets/logos/gemini.svg" },
    ],
  },
  {
    id: 2,
    title: "Campus App",
    description:
      "An interactive campus app providing real-time chat, event updates, and campus resources for students and faculty.",
    subDescription: [
      "Built with React for a responsive and intuitive frontend experience.",
      "Implemented real-time chat using Socket.io and Express backend.",
      "Integrated MongoDB for scalable data storage of users, messages, and events.",
      "Features include instant messaging, notifications, campus map, and announcements.",
      "Optimized for both desktop and mobile users with a clean UI.",
    ],
    href: "", // add link if you have a live demo or repo
    logo: "", // optional logo path
    image: App, // update with actual image path
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Socket.io", path: "/assets/logos/socketio.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 4, name: "Express", path: "/assets/logos/express.svg" },
      { id: 5, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },

  {
    id: 3,
    title: "Vivacity Website",
    description:
      "A high-performance event site built for 20,000+ monthly users with animation and responsiveness.",
    subDescription: [
      "Designed a modern, performant frontend using React and TailwindCSS.",
      "Built a dynamic carousel component boosting user engagement by 15%.",
      "Implemented responsive layouts and sticky footer with navigation/contact links.",
    ],
    href: "",
    logo: "",
    image: viva,
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "HTML5", path: "/assets/logos/html5.svg" },
    ],
  },
  {
    id: 4,
    title: "Spacify Website",
    description:
      "An interactive, minimal website built without libraries — pure HTML, CSS, JS.",
    subDescription: [
      "Showcases strong core frontend development skills without any frameworks.",
      "Animated sections, interactive transitions, and responsive layout.",
      "Accessed by over 100 users in its first week of launch.",
    ],
    href: "",
    logo: "",
    image: gd,
    tags: [
      { id: 1, name: "HTML", path: "/assets/logos/html5.svg" },
      { id: 2, name: "CSS", path: "/assets/logos/css3.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
];

function Projects() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const [preview, setPreview] = useState(null);

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  return (
    <section className="relative" onMouseMove={handleMouseMove}>
      <div className="bg-gradient-to-r from-black to-transparent mt-2 h-[1px] w-full overflow-hidden"></div>
      {myProjects.map((project) => (
        <ProjectTile key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
}

export default Projects;
