import React from 'react';
import { fadeIn } from '../../framerMotion/animation';
import { motion } from 'framer-motion';

// Contact text component
const ContactText = () => {
  return (
    <motion.div
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="flex flex-col justify-between items-center gap-12 mx-auto text-center md:text-left"
    >
      <h2 className="text-4xl md:text-5xl font-semibold text-lime-600 dark:text-lime-400 mb-3">
        Let's Connect
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
        If you’d like to collaborate, chat about projects, or just say hi — feel free to reach out.
      </p>
    </motion.div>
  );
};

export default ContactText;
