import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/animation';
import { BiSolidRightTopArrowCircle } from 'react-icons/bi';
import { HiMiniSparkles } from 'react-icons/hi2';
import { SiGithub } from 'react-icons/si';

import { FaGithub, FaRobot, FaLinkedin } from 'react-icons/fa';
import { MdSmartToy } from 'react-icons/md';

// Hero text component with framer motion
const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center text-center md:text-left pt-8">
      <motion.h2
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl text-xl uppercase text-primaryBlue dark:text-gray-200"
      >
        Software Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn('left', 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-6xl text-4xl uppercase text-lime-600 dark:text-lime-400"
      >
        Grace Ye
      </motion.h1>

      <motion.p
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-4 text-lg text-primaryBlue dark:text-gray-300 leading-relaxed"
      >
        Full-stack developer focused on building{' '}
        <span className="text-gray-900 dark:text-white font-bold">intuitive UIs</span>, 
        <span className="text-gray-900 dark:text-white font-bold"> scalable APIs </span>
        and <span className="text-gray-900 dark:text-white font-bold">AI/ML-integrated </span>apps.
  
        <br />I look for teams that truly value
        <span className="text-gray-900 dark:text-white font-bold"> collaboration, clean code </span>
        and <span className="text-gray-900 dark:text-white font-bold">thoughtful design</span>.
      </motion.p>

      <motion.div
        variants={fadeIn('right', 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mx-auto md:mx-0 mt-2"
      >
        <a
          href="https://github.com/gracefy"
          target="_blank"
          className="group flex gap-1 items-center text-md text-lime-600 dark:text-lime-300 underline cursor-pointer hover:text-lime-400 dark:hover:text-lime-500"
        >
          <FaGithub className="w-5 h-5" />
          <span className="group-hover:transition-all group-hover:duration-500">View GitHub</span>
          <BiSolidRightTopArrowCircle className="w-4 h-4 group-hover:transition-all group-hover:duration-500" />
        </a>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mx-auto md:mx-0 mt-2"
      >
        <a
          href="https://www.linkedin.com/in/gracefengye/"
          target="_blank"
          className="group flex gap-1 items-center text-md text-lime-600 dark:text-lime-300 underline cursor-pointer hover:text-lime-400 dark:hover:text-lime-500"
        >
          <FaLinkedin className="w-5 h-5" />
          <span className="group-hover:transition-all group-hover:duration-500">View LinkedIn</span>
          <BiSolidRightTopArrowCircle className="w-4 h-4 group-hover:transition-all group-hover:duration-500" />
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;
