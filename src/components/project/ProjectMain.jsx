import React from 'react'
import ProjectText from './ProjectText'
import AllProjects from './AllProjects'

const ProjectMain = () => {
  return (
    <section id='projects' className='py-20 bg-gray-100 dark:bg-gray-800'>
      <div className='max-w-[1200px] mx-auto px-4'>
        <ProjectText />
        <AllProjects />
      </div>
    </section>
  )
}

export default ProjectMain