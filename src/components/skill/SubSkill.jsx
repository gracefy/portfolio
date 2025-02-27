import React from 'react'

const SubSkill = () => {
  return (
    <div className='border-y-2 border-gray-200 dark:border-gray-700 relative'>
      <div className='absolute bg-gradient-to-r from-lime-600 to-lime-100 opacity-50 w-full h-full'></div>
      <img src={`${import.meta.env.BASE_URL}images/subSkills.jpg`} alt="Sub Skills Image" />
    </div>
  )
}

export default SubSkill