import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/animation'
import { Link } from "react-scroll"

// About text component with framer motion
const AboutText = () => {
  return (
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="max-w-[800px] text-center md:items-start md:text-left px-4">
      <h2 className="text-6xl text-lime-600 mb-10 dark:text-lime-400">About Me</h2>
      <p className="text-lg mt-4 text-primaryBlue dark:text-gray-300 leading-relaxed">
        I'm Grace Ye, a web developer passionate about building interactive applications and optimizing user experiences.
        Proficient in <span className='text-gray-900 dark:text-white font-bold'>JavaScript, Node.js, and React</span>,
        I specialize in creating efficient, scalable, and user-friendly solutions.
      </p>
      <p className="text-lg mt-4 text-primaryBlue dark:text-gray-300 leading-relaxed">
        As a quick learner and team player, I thrive on adopting new technologies and solving complex problems.
        With a <span className='text-gray-900 dark:text-white font-bold'>Master’s in Structural Engineering</span> and
        a <span className='text-gray-900 dark:text-white font-bold'>4.0 GPA in Computer Application Development</span>, I
        bring a unique blend of analytical and technical skills.
      </p>

      <p className="text-lg mt-4 text-primaryBlue dark:text-gray-300 leading-relaxed">
        I am seeking a <span className='font-semibold text-lime-600 dark:text-lime-300'>Backend / Frontend / Fullstack Developer</span> role
        where I can contribute my skills to innovative projects and deliver impactful results.
      </p>
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