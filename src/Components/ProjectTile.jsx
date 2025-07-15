import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectDetails from "./ProjectDetails";
import { FaArrowRightLong } from "react-icons/fa6";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="flex-wrap items-center justify-between px-5 py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <p className="text-2xl font-semibold">{title}</p>
          <motion.div
            className="flex gap-5 mt-2 text-sand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {tags.map((tag) => (
              <span key={tag.id} className="text-sm bg-neutral-200 px-2 py-1 rounded">
                {tag.name}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Button */}
        <motion.button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-3 cursor-pointer hover:underline"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Read More <FaArrowRightLong />
        </motion.button>
      </div>

      {/* Line */}
      <motion.div
        className="bg-gradient-to-r from-neutral-700 to-transparent h-[1px] w-full"
        initial={{ width: 0, opacity: 1 }}
        whileInView={{ width: "100%", opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      />

      {/* Details Popup */}
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
