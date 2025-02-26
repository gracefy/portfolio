import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa"
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/animation'
import ExperienceTopMiddle from './ExperienceTopMiddle'

const experiences = [
  {
    job: "Software Developer",
    company: "Beijing Couplower Technology",
    date: "2024.01 - 2024.05",
    responsibilities: [
      "Developed music playback, playlist looping, and other key features for a WeChat Mini Program.",
      "Optimized the user interface and app performance to enhance the overall user experience.",
      "Used WeChat DevTools and JavaScript."
    ]
  },
  {
    job: "Software Developer",
    company: "Conestoga College Smart Centre ",
    date: "2024.09 - 2024.12",
    responsibilities: [
      "Implement robust pipelines to integrate machine learning models into a digital twin application, optimizing real-time predictions.",
      "Scheduled and automated recurring tasks, including data retrieval, preprocessing, prediction, and model training, ensuring seamless operations.",
      "Used Python and FastAPI."
    ]
  }
]

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