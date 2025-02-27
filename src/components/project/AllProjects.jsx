import React from 'react'
import SingleProject from './SingleProject'

const projects = [
  {
    title: "ML Model Deployment",
    year: "Sep 2024",
    image: "${import.meta.env.BASE_URL}images/factory.jpg",
    description: "Integration of machine learning models into a digital twin application.",
    techStack: ["FastAPI", "Python", "Scikit-learn"],
    link: "#",
  },
  {
    title: "Wildlife Web App",
    year: "May 2024",
    image: "${import.meta.env.BASE_URL}images/wildlife.jpg",
    description: "A full-stack website that showcases wildlife species and their habitats.",
    techStack: ["Node.js", "Express.js", "MongoDB", "HTML5", "CSS3",],
    link: "#",
  },
  {
    title: "Chinese Opera",
    year: "Jan 2024",
    image: "${import.meta.env.BASE_URL}images/opera.jpg",
    description: "A mini-program that introduces the history and culture of Chinese opera.",
    techStack: ["WeChat DevTools", "JavaScript", "HTML5", "CSS3"],
    link: "#",
  },
]

const AllProjects = () => {
  return (
    <div className='max-w-[980px] flex flex-col gap-20 mx-auto mt-12'>
      {projects.map((project, index) => (
        <SingleProject key={index} project={project} index={index} />
      ))}
    </div>
  )
}

export default AllProjects