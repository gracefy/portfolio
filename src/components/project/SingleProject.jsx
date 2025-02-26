import React from 'react'
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/animation'

const SingleProject = ({ project, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className={`w-full flex flex-col-reverse items-center md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 justify-end`}>
      <div className={`text-center ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
        <h3 className='text-2xl md:text-3xl text-lime-600 dark:text-lime-400'>{project.title}</h3>
        <p className='text-xl font-thin text-gray-600 dark:text-gray-300 font-roboto'>{project.year}</p>
        <p className='text-lg flex gap-2 items-center text-gray-700'>{project.techStack.join('/')}</p>

        {/* <a href={project.link} className={`text-lg flex gap-2 items-center text-lime-500 hover:text-lime-400 transition-all duration-500 cursor-pointer justify-self-center ${index % 2 !== 0 ? 'md:justify-self-end' : 'md:justify-self-start'}`}>
          View <BiSolidRightTopArrowCircle />
        </a> */}
      </div>
      <div className='relative max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 border border-gray-100'>
        <div className='w-full h-full bg-lime-800 opacity-50 dark:opacity-60 hover:opacity-0 absolute top-0 left-0 transition-all duration-500 hidden md:block'></div>
        <img src={project.image} alt="Project image" className='w-full h-full' />
      </div>
    </motion.div>
  )
}

export default SingleProject