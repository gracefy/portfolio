import React from 'react'

// Navigation links
const links = [
  { name: "About", section: "about" },
  { name: "Skills", section: "skills" },
  { name: "Experience", section: "experience" },
  { name: "Projects", section: "projects" },
  { name: "Contact", section: "contact" },
];

// Footer main component
const FooterMain = () => {
  return (
    <section id='footer' className='pt-10 dark:bg-gray-900'>
      <div className='px-4 mx-auto'>
        <div className='w-full h-[1px] bg-gray-300'></div>
        <div className='hidden md:flex max-w-[1300px] justify-between mt-4 mx-auto text-primaryBlue dark:text-gray-300'>
          <p className='text-3xl'>Grace Ye</p>
          <ul className='flex gap-4 text-xl'>
            {links.map((link, index) => (
              <li key={index}>
                <a href={`#${link.section}`} className='hover:text-lime-600 dark:hover:text-lime-400 cursor-pointer transition-all duration-500'>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className='max-w-[1300px] mx-auto pb-10 text-right text-sm text-gray-500 dark:text-gray-400'> &copy; 2025 Grace | All Rights Reserved. </p>
      </div>
    </section>
  )
}

export default FooterMain