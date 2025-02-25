import React from 'react'

const links = [
  { name: "About", section: "about" },
  { name: "Skills", section: "skills" },
  { name: "Experience", section: "experience" },
  { name: "Projects", section: "projects" },
  { name: "Contact", section: "contact" },
];

const FooterMain = () => {
  return (
    <section id='footer' className='pt-10 dark:bg-gray-900'>
      <div className='max-w-[1200px] px-4 mx-auto'>
        <div className='w-full h-[1px] bg-gray-300'></div>
        <div className='hidden md:flex justify-between mt-4 mx-auto'>
          <p className='text-3xl text-gray-800 dark:text-gray-200'>Feng Ye</p>
          <ul className='flex gap-4 text-gray-600 text-xl dark:text-gray-200'>
            {links.map((link, index) => (
              <li key={index}>
                <a href={`#${link.section}`} className='hover:text-lime-600 dark:hover:text-lime-300 cursor-pointer transition-all duration-500'>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className='mx-auto py-10 text-right text-sm text-gray-500'> 2025 Feng | All Rights Reserved. </p>
      </div>
    </section>
  )
}

export default FooterMain