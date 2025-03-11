import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/animation'

// Project text component with framer motion
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
        I have developed a diverse portfolio of web solutions, ranging
        from <span className='text-gray-900 dark:text-white font-bold'>responsive mobile applications to scalable
          back-end systems</span> for deploying machine learning models.
        These experiences have honed my ability to deliver high-performance, user-centric, and scalable web experiences
        that meet both technical and business needs.
      </p>
    </motion.div>
  )
}

export default ProjectText