import React from 'react'

const SkillText = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-12  mx-auto text-center md:text-left'>
      <h2 className="text-6xl text-lime-600 dark:text-lime-400">My Skills</h2>
      <p className="text-lg text-primaryBlue dark:text-gray-300 leading-relaxed">
        I have a passion for building interactive web applications and optimizing user experience.
        With a background in **React, Node.js, and cloud computing**, I focus on performance, accessibility,
        and cutting-edge frontend technologies.
      </p>
    </div>
  )
}

export default SkillText