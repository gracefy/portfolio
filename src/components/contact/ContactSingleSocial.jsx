import React from 'react'

// Single contact social component
const ContactSingleSocial = ({ Icon, link }) => {
  return (
    <div className='flex justify-center items-center text-2xl h-12 w-12 border border-lime-600 text-lime-600 dark:border-lime-300 dark:text-lime-400 rounded-full p-3'>
      <a href={link} className='cursor-pointer' target='_blank'>
        <Icon />
      </a>

    </div>
  )
}

export default ContactSingleSocial