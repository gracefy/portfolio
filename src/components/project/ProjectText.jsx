import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/animation'

const ProjectText = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className='flex flex-col justify-between items-center gap-12 mx-auto text-center md:text-left'>
      <h2 className="text-6xl text-lime-600 dark:text-lime-400">Projects</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        I’ve built a wide range of web solutions—from <span className='font-bold'>responsive smartphone applications to
          robust back-end systems</span> designed for deploying machine learning models. These projects have deepened
        my expertise in delivering scalable, user-centric, and high-performance web experiences.
      </p>
    </motion.div>
  )
}

export default ProjectText