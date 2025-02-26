import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/animation'

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className='h-auto w-[90%] md:h-[350px] md:w-[440px] border-2 border-dashed border-lime-600 dark:border-lime-300 p-4 rounded-2xl mt-12'>
      <h3 className='font-bold text-lime-800 dark:text-lime-400'>{experience.job}</h3>
      <p className='text-lime-600'>{experience.company}</p>
      <p className='text-gray-400 dark:text-gray-300 '>{experience.date}</p>
      <ul className='list-disc mt-4 pl-4 dark:text-gray-100 space-y-3'>
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index} className=''>{responsibility}</li>
        ))}
      </ul>
    </motion.div>
  )
}

export default SingleExperience