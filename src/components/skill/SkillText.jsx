import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/animation';

// Skill text component with framer motion
const SkillText = () => {
  return (
    <motion.div
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col justify-between items-center gap-12  mx-auto text-center md:text-left"
    >
      <h2 className="text-6xl text-lime-600 dark:text-lime-400">What I Use</h2>
      <p className="text-lg text-primaryBlue dark:text-gray-300 leading-relaxed">
        I use these technologies to build clean, scalable, and practical solutions. My portfolio
        includes real-world projects where I’ve solved actual problems—from front-end interfaces to
        back-end systems.
      </p>
    </motion.div>
  );
};

export default SkillText;
