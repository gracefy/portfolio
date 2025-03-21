import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/animation'
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

// Hero text component with framer motion
const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center text-center md:text-left pt-8">
      <motion.h2
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl text-xl uppercase text-primaryBlue dark:text-gray-200">
        Software Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn('left', 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-6xl text-4xl font-bold uppercase text-lime-600 dark:text-lime-400">
        Grace Ye
      </motion.h1>
      <motion.p
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-4 text-lg text-primaryBlue dark:text-gray-300 leading-relaxed">
        A passionate Software Developer skilled in <span className='text-gray-900 dark:text-white font-bold'>JavaScript, Node.js, and React</span>.<br />
        Seeking a <span className='text-gray-900 dark:text-white font-bold'>Backend / Frontend / Fullstack Developer</span> role.
      </motion.p>
      <motion.a
        variants={fadeIn('left', 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="group flex gap-2 items-center mt-4 text-md text-lime-600 dark:text-lime-300 leading-relaxed underline cursor-pointer hover:text-lime-400 dark:hover:text-lime-500"
        href="https://github.com/gracefy/portfolio"
        target="_blank"
      >
        <span className="group-hover:transition-all group-hover:duration-500">View GitHub</span>
        <BiSolidRightTopArrowCircle className="group-hover:transition-all group-hover:duration-500" />
      </motion.a>
    </div>
  )
}

export default HeroText