import React from 'react'
import ContactForm from './ContactForm'

// Left side of the contact section
const ContactLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
      <div>
        <h3 className='text-2xl md:text-3xl text-lime-600 dark:text-lime-600'>Get In touch</h3>
        <p className='text-xl font-thin text-gray-600 dark:text-gray-300'>Feel free to reach out!</p>
      </div>
      <ContactForm />
    </div>
  )
}

export default ContactLeft