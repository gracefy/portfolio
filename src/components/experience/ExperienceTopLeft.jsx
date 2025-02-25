import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px] items-center'>
      <p className='text-lime-600 dark:text-lime-300 font-bold uppercase text-3xl font-roboto text-center'>Since 2022</p>
      <div div className='flex jusitify-center items-center gap-4' >
        <ExperienceInfo number='3' text='Years' />
        <p className='font-bold text-6xl text-gray-400'>-</p>
        <ExperienceInfo number='10' text='Projects' />
      </div>
      <p className='text-center text-gray-600 dark:text-gray-100'>
        With 3 years of experience building dynamic and user-friendly web applications.
      </p>
      <ExperienceInfo number='$100k' text='Max Busgest' />
    </div >
  )
}

export default ExperienceTopLeft