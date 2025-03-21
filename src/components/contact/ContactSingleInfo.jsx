import React from 'react'

// Single contact information component
const ContactSingleInfo = ({ text, Image }) => {
  return (
    <div className='flex gap-4 items-center justify-start'>
      <Image className='text-3xl' />
      <p>{text}</p>
    </div>
  )
}

export default ContactSingleInfo