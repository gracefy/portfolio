import React from 'react'
import SingleProject from './SingleProject'

const projects = [
  {
    title: "Wildlife Website",
    year: "Mar 2022",
    image: "/images/website-img-1.jpg",
    description: "A full-stack website that showcases wildlife species and their habitats.",
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js"],
    link: "#",
    github: " ",
  },
  {
    title: "Chinese Opera Website",
    year: "Jan 2022",
    image: "/images/website-img-2.webp",
    description: "A responsive website that introduces Chinese opera and its history.",
    techStack: ["React.js", "HTML5", "CSS3", "JavaScript"],
    link: "#",
    github: " ",
  },
  {
    title: "ML Model Deployment",
    year: "Nov 2021",
    image: "/images/website-img-3.jpg",
    description: "A web application that predicts the species of wildlife based on images.",
    techStack: ["FastAPI", "Python", "Docker", "Heroku"],
    link: "#",
    github: " ",
  },
  {
    title: "ML Model Training",
    year: "Sep 2021",
    image: "/images/website-img-4.jpg",
    description: "A machine learning model that classifies wildlife species based on images.",
    techStack: ["Python", "Jupyter Notebook", "Scikit-learn"],
    link: "#",
    github: " ",
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