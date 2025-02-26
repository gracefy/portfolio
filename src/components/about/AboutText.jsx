import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/animation'
import { Link } from "react-scroll"
import { HiOutlineLightBulb } from "react-icons/hi";

const AboutText = () => {
  return (
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="max-w-[800px] text-center md:items-start md:text-left">
      <h2 className="text-6xl text-lime-600 mb-10 dark:text-lime-400">About Me</h2>
      <p className="text-lg mt-4 text-primaryBlue dark:text-gray-300 leading-relaxed">
        I'm Grace (Feng Ye), a web developer passionate about building interactive applications and optimizing user experiences.
        Proficient in <span className='text-black'>Node.js, React, and ASP.NET</span>, I excel at creating efficient and user-friendly solutions.
      </p>
      <p className="text-lg mt-4 text-primaryBlue dark:text-gray-300 leading-relaxed">
        I'm a quick learner and a team player, I thrive on adopting new technologies.
        With a <span className='text-black'>Master’s in Structural Engineering </span>
        and got a <span className='text-black'>4.0 GPA</span> in Computer Application Development, I bring a unique blend of analytical and technical skills.
      </p>
      <div className="flex items-start">
        <HiOutlineLightBulb className=" text-xl text-lime-600 mr-2 mt-4" />
        <p className="text-lg mt-4 text-primaryBlue dark:text-gray-300 leading-relaxed">
          Seeking a <span className='font-semibold text-lime-600'>Backend / Frontend / Fullstack Developer</span> role to contribute my expertise to innovative projects.
        </p>
      </div>
      <button className="mt-10 px-6 py-3 text-lg border border-lime-600 rounded-full text-primaryBlue hover:bg-lime-600 hover:text-gray-100 dark:text-gray-300 transition-all duration-500 cursor-pointer">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
        >
          My Projects
        </Link>
      </button>
    </motion.div>
  )
}

export default AboutText