import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/animation';

// Experience title component
const ExperienceText = () => {
  return (
    <motion.div
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="flex flex-col items-center mt-xl"
    >
      <h2 className="text-6xl text-lime-600 dark:text-lime-400 mb-10">Where I’ve Worked</h2>
    </motion.div>
  );
};

export default ExperienceText;
