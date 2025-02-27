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
        I am proficient in leveraging these technologies to deliver high-quality solutions,
        consistently applying best practices to ensure optimal results.
        Through my portfolio projects, I have demonstrated my ability to effectively utilize these skills
        to create impactful and scalable applications.
      </p>
    </motion.div>
  )
}

export default SkillText