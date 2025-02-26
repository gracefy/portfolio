import React, { useState } from 'react'
import { IoMenu, IoClose } from "react-icons/io5";

const links = [
  { name: "About", section: "about" },
  { name: "Skills", section: "skills" },
  { name: "Experience", section: "experience" },
  { name: "Projects", section: "projects" },
  { name: "Contact", section: "contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md">
        {isOpen ? <IoClose className="h-6 w-6 text-primaryBlue dark:text-gray-300" /> : <IoMenu className="h-6 w-6 text-primaryBlue dark:text-gray-300" />}
      </button>

      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-100 dark:bg-gray-900 shadow-lg p-4 space-y-2 font-semibold">
          {links.map((link) => (
            <li key={link.section} className="group">
              <a href={`#${link.section}`} className="block text-lg text-center text-primaryBlue dark:text-gray-300 hover:text-lime-600 dark:hover:text-lime-400 transition-all duration-500">{link.name}</a>
              <div className="mx-auto bg-lime-600 w-0 group-hover:w-[50%] h-[1px] transition-all duration-500"></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MobileNav