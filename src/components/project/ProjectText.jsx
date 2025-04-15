import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/animation';

// Project text component with framer motion
const ProjectText = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="flex flex-col justify-between items-center gap-12 mx-auto text-center md:text-left"
    >
      <h2 className="text-6xl text-lime-600 dark:text-lime-400">What I’ve Built</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-[70%] mx-auto text-center leading-relaxed">
        My portfolio includes mobile-friendly interfaces, AI-powered tools, and scalable backend
        services. Each project is an opportunity to explore technical depth—from UI animations to
        API performance—while delivering real value to users.
      </p>
    </motion.div>
  );
};

export default ProjectText;
