import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/animation';
import clsx from 'clsx';

// Single experience component with props
const SingleExperience = ({ experience, index }) => {
  const direction = index % 2 === 0 ? 'left' : 'right';

  return (
    <motion.div
      variants={fadeIn(direction, index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
    >
      <div
        className={clsx(
          'h-auto w-[90%] md:w-[70%] mx-auto bg-white/50 dark:bg-gray-800/50',
          'border border-lime-400/30 shadow-md p-6 rounded-2xl ',
          'hover:shadow-lg hover:scale-105 dark:hover:shadow-lime-100/70 transition-all duration-500 ease-in-out'
        )}
      >
        <h3 className="text-lg font-semibold text-lime-800 dark:text-lime-400">{experience.job}</h3>
        <p className="text-sm text-lime-600 italic font-light mt-1">{experience.company}</p>
        <p className="text-xs text-gray-400 font-extralight dark:text-gray-400 italic mt-1">
          {experience.date}
        </p>
        <p className="text-xs uppercase font-light text-gray-400 dark:text-gray-500 mt-1 italic">
          {experience.tech.join(' · ')}
        </p>
        <ul className="list-disc mt-4 pl-5 dark:text-gray-200 space-y-2 text-base text-gray-800">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={index} className="">
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SingleExperience;
