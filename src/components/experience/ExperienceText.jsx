import { div } from 'framer-motion/client'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/animation'

const ExperienceText = () => {
  return (
    <motion.div
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className='flex flex-col items-center mt-xl'>
      <h2 className="text-6xl text-lime-600 dark:text-lime-300 mb-10">Experience</h2>
    </motion.div>
  )
}

export default ExperienceText