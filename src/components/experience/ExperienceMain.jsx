import React from 'react'
import ExperienceText from './ExperienceText'
import ExperienceTop from './ExperienceTop'
import AllExperiences from './AllExperiences'

// Experience main component
const ExperienceMain = () => {
  return (
    <section id='experience' className='flex flex-col gap-12 px-4 py-20 mx-auto dark:bg-gray-900'>
      <div className='max-w-[1200px] mx-auto px-4'>
        <ExperienceText />
        {/* <ExperienceTop /> */}
        {/* <div className='w-full h-1 mt-4 bg-gray-300 hidden lg:block'></div> */}
        <AllExperiences />
      </div>

    </section>
  )
}

export default ExperienceMain