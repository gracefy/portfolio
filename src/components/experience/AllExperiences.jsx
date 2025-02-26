import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";

const experiences = [
  {
    job: "Software Developer",
    company: "Conestoga College",
    date: "2022 - 2023",
    responsibilities: [
      "Developed a web application for the college",
      "Worked on the front-end and back-end",
      "Used React and Node.js"
    ]
  },
  {
    job: "Software Developer",
    company: "Google",
    date: "2021 - 2022",
    responsibilities: [
      "Developed a web application for the company",
      "Worked on the front-end and back-end",
      "Used React and Node.js"
    ]
  },
  {
    job: "Software Developer",
    company: "Facebook",
    date: "2020 - 2021",
    responsibilities: [
      "Developed a web application for the company",
      "Worked on the front-end and back-end",
      "Used React and Node.js"
    ]
  }
]

const AllExperiences = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center'>
      {experiences.map((experience, index) => (
        <>
          <SingleExperience key={index} experience={experience} />
          {index < experiences.length - 1 && <FaArrowRight className='text-6xl text-lime-600 dark:text-lime-400 hidden lg:block' />}
        </>
      ))}
    </div>
  )
}

export default AllExperiences