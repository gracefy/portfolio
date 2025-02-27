import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/animation'

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
        A passionate Software Developer skilled in <span className='text-gray-900 dark:text-white font-bold'>Node.js, React and Python</span>.<br />
        Seeking a <span className='text-gray-900 dark:text-white font-bold'>Backend / Frontend / Fullstack Developer</span> role.
      </motion.p>
    </div>
  )
}

export default HeroText