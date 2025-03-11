import React from 'react'
import { Link } from 'react-scroll'

const NavLogo = () => {
  return (
    <div>
      {/* Logo on large screens */}
      <h1 className="text-2xl text-primaryBlue dark:text-gray-300 hover:text-lime-600 dark:hover:text-lime-300 hidden md:block">
        <Link to='hero' smooth={true} duration={500} className='cursor-pointer'>Grace Ye</Link>
      </h1>

      {/* Logo on small screens */}
      <h1 className="text-3xl font-roboto font-extrabold text-primaryBlue dark:text-gray-300 hover:text-lime-600 dark:hover:text-lime-300 md:hidden">
        <Link to='hero' smooth={true} duration={500} className='cursor-pointer'>GY</Link>
      </h1>
    </div>
  )
}

export default NavLogo