import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/animation'

const AboutImage = () => {
  return (
    <motion.div
      variants={fadeIn('left', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="relative h-[500px] w-[300px]">
      <div className="absolute h-[500px] w-[300px] rounded-[100px] overflow-hidden z-2">
        <img
          src="/images/about.jpg"
          alt="About me image"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="absolute h-[500px] w-[250px] bg-lime-600 bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] z-1">
      </div>
    </motion.div>
  )
}

export default AboutImage