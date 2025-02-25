import React from 'react'
import ContactText from './ContactText'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'

const ContactMain = () => {
  return (
    <section id='projects' className='py-20 dark:bg-gray-900'>
      <div className='max-w-[1200px] mx-auto items-center justify-center px-4'>
        <ContactText />
        <div className='flex flex-col lg:flex-row justify-between gap-24 bg-gray-200 dark:bg-gray-700 p-8 rounded-2xl'>
          <ContactLeft />
          <ContactRight />
        </div>

      </div>
    </section>
  )
}

export default ContactMain