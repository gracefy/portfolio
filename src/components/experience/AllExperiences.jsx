import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa"
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/animation'
import ExperienceTopMiddle from './ExperienceTopMiddle'

// Experiences data
const experiences = [
  {
    job: "Software Developer",
    company: "Beijing Couplower Technology",
    date: "2024.01 - 2024.08",
    responsibilities: [
      "Developed and delivered core features for a 100,000+ user mobile app, including music playback, playlist management, along with various related features, enhancing user engagement and retention.",
      "Optimized UI/UX and app performance, reducing load time by 20% and improving overall user satisfaction.",
      "Technologies: WeChat DevTools (Vue.js-based), JavaScript, HTML, CSS."
    ]
  },
  {
    job: "Software Developer",
    company: "Conestoga College Smart Centre ",
    date: "2024.09 - 2024.12",
    responsibilities: [
      "Developed and delivered core features for a 100,000+ user mobile app, including music playback, playlist management, along with various related features, enhancing user engagement and retention.",
      "Optimized UI/UX and app performance, reducing load time by 20% and improving overall user satisfaction.",
      "Technologies: WeChat DevTools (Vue.js-based), JavaScript, HTML, CSS."
    ]
  }
]

// All experiences component
const AllExperiences = () => {
  return (
    <div className='relative flex flex-col md:flex-row justify-between items-center'>
      {experiences.map((experience, index) => (
        <>
          <SingleExperience key={index} experience={experience} />
          {index < experiences.length - 1 &&
            <motion.div
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
            >
              <ExperienceTopMiddle className='hidden lg:block' />

              {/* <FaArrowRight className='text-6xl text-lime-600 dark:text-lime-400 hidden lg:block' /> */}
            </motion.div>
          }
        </>
      ))}
    </div>
  )
}

export default AllExperiences