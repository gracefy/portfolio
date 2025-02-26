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
        I not only work with these technologies but excellent in using them with
        best practices to deliver high-quality results, I have been working with
        all these skills to build my portfolio projects
      </p>
    </motion.div>
  )
}

export default SkillText