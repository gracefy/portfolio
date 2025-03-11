import React from 'react'
import { Link } from 'react-scroll'

// Navigation links
const links = [
  { name: "About", section: "about" },
  { name: "Skills", section: "skills" },
  { name: "Experience", section: "experience" },
  { name: "Projects", section: "projects" },
  { name: "Contact", section: "contact" },
];

// Navigation links component on large screens
const NavLinks = () => {
  return (
    <ul className="hidden md:flex space-x-6 font-semibold">
      {links.map((link) => (
        <li key={link.section} className="group">
          <Link
            to={link.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            className='text-lg cursor-pointer text-primaryBlue dark:text-gray-300 hover:text-lime-600 dark:hover:text-lime-400 transition-all duration-500'>{link.name}</Link>
          <div className="mx-auto bg-lime-600 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks