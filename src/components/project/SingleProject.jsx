import React, { useState } from 'react'
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/animation'

// Single project component with props
const SingleProject = ({ project, index }) => {
  const [show, setShow] = useState(false)

  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className={`w-full flex flex-col-reverse items-center md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 justify-end`}>
      <div className={`text-center ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}>
        <h3 className='text-2xl md:text-3xl text-lime-600 dark:text-lime-400'>{project.title}</h3>
        {/* <p className='text-xl font-thin text-gray-600 dark:text-gray-300 font-roboto'>{project.year}</p> */}
        <p className='text-lg flex gap-2 items-center text-gray-700 dark:text-gray-300'>{project.techStack.join('/')}</p>

        <p
          onClick={() => setShow(!show)}
          className='mt-2 text-lime-600 hover:text-lime-500 transition-all duration-500 underline cursor-pointer'>
          {show ? 'Hide' : 'Show'} Details
        </p>

        {show && (
          <div className='text-left mt-4 border-l-2 border-lime-500 pl-4'>
            <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>{project.description}</p>
            <h4 className='text-lg text-gray-700 font-bold dark:text-lime-400 mt-4'>Key Contributions:</h4>
            <ul className='text-lg text-gray-700 dark:text-gray-300'>
              {project.responsibility.map((res, index) => (
                <li key={index} className='list-disc ml-4 leading-relaxed'>{res}</li>
              ))}
            </ul>
            {project.link && (
              <a href={project.link} target='_blank' rel='noreferrer' className='flex gap-2 items-center text-lg text-lime-500 hover:text-lime-400 transition-all duration-500 underline mt-3'>
                View Project <BiSolidRightTopArrowCircle />
              </a>
            )}
            {project.linkNote && (
              <p className='text-lg italic text-gray-500 dark:text-gray-400 mt-3'>* {project.linkNote}</p>
            )}
          </div>
        )}
      </div>
      <div className='relative max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 border border-gray-100'>
        <div className='w-full h-full bg-lime-800 opacity-50 dark:opacity-60 hover:opacity-0 absolute top-0 left-0 transition-all duration-500 hidden md:block'></div>
        <img src={`${import.meta.env.BASE_URL}images/${project.image}`} alt="Project image" className='w-full h-full' />
      </div>
    </motion.div>
  )
}

export default SingleProject