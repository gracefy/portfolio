import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/animation';
import { Link } from 'react-scroll';

// About text component with framer motion
const AboutText = () => {
  return (
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="max-w-[800px] text-center md:items-start md:text-left px-4"
    >
      <h2 className="text-6xl text-lime-600 mb-10 dark:text-lime-400">A Bit About Me</h2>
      <p className="text-lg mt-4 text-primaryBlue dark:text-gray-300 leading-relaxed">
        Hi, I’m Grace Ye—a full-stack developer with hands-on experience building interactive UIs, 
        scalable APIs, and AI/ML-integrated apps. I work across tools like
        <span className="text-gray-900 dark:text-white font-bold"> React, Node.js, 
          Python </span>and <span className="text-gray-900 dark:text-white font-bold"> C# </span>
        to deliver clean, practical solutions.
      </p>

      <p className="text-lg mt-4 text-primaryBlue dark:text-gray-300 leading-relaxed">
        I’ve led multiple real-world projects from concept to deployment, and I’m always learning 
        — whether it’s improving UX, optimizing code, or exploring new technologies. 
        Outside of work, I enjoy meditation and walking, which help me stay focused, manage stress, and keep a clear mind.
      </p>

      <p className="text-lg mt-4 text-primaryBlue dark:text-gray-300 leading-relaxed">
        I’m looking for a long-term opportunity where I can grow, contribute, and keep improving 
        — not just to fill a position, but to earn it and grow with the team.
      </p>
      <button
        className="mt-10 px-6 py-3 text-lg border border-lime-600 rounded-full text-primaryBlue dark:text-gray-300
             hover:shadow-[0_0_12px_3px_rgba(101,163,13,0.6)]
             dark:hover:shadow-[0_0_12px_3px_rgba(132,204,22,0.6)]
             transition-all duration-500 cursor-pointer"
      >
        <Link spy={true} smooth={true} duration={500} offset={-120} to="projects">
          View My Work
        </Link>
      </button>
    </motion.div>
  );
};

export default AboutText;
