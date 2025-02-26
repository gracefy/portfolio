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
        Feng Ye
      </motion.h1>
      <motion.p
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-4 text-lg text-primaryBlue dark:text-gray-300 leading-relaxed">
        A Software Developer skilled in <strong>React, Node.js, and Tailwind CSS</strong>.<br />
        With experience in **digital twins, machine learning, and backend API development**.
      </motion.p>
    </div>
  )
}

export default HeroText