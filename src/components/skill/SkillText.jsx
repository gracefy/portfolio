import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/animation'

const SkillText = () => {
  return (
    <motion.div
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className='flex flex-col justify-between items-center gap-12  mx-auto text-center md:text-left'>
      <h2 className="text-6xl text-lime-600 dark:text-lime-400">My Skills</h2>
      <p className="text-lg text-primaryBlue dark:text-gray-300 leading-relaxed">
        I have a passion for building interactive web applications and optimizing user experience.
        With a background in **React, Node.js, and cloud computing**, I focus on performance, accessibility,
        and cutting-edge frontend technologies.
      </p>
    </motion.div>
  )
}

export default SkillText