import React from 'react'
import ExperienceTopLeft from './ExperienceTopLeft'
import ExperienceTopMiddle from './ExperienceTopMiddle'
import ExperienceTopRight from './ExperienceTopRight'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/animation'

const ExperienceTop = () => {
  return (
    <motion.div
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className='flex flex-col lg:flex-row gap-4 justify-center items-center py-3'>
      <ExperienceTopLeft />
      <ExperienceTopMiddle />
      <ExperienceTopRight />
    </motion.div>
  )
}

export default ExperienceTop