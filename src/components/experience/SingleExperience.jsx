import React from 'react'

const SingleExperience = ({ experience }) => {
  return (
    <div className='h-auto w-[90%] md:h-[350px] md:w-[240px] border-2 border-dashed border-lime-600 dark:border-lime-300 p-4 rounded-2xl mt-12'>
      <h3 className='font-bold text-lime-800 dark:text-lime-300'>{experience.job}</h3>
      <p className='text-lime-600'>{experience.company}</p>
      <p className='text-gray-500 dark:text-gray-300'>{experience.date}</p>
      <ul className='list-disc mt-4 pl-4 dark:text-gray-100'>
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  )
}

export default SingleExperience