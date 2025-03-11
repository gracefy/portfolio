import React, { useState, useEffect } from 'react'
import useDarkMode from '../../hooks/useDarkMode'
import { IoSunnyOutline, IoMoon } from "react-icons/io5";

// Theme toggle component
const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <div>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="p-2 rounded-md bg-gray-100 dark:bg-gray-900 cursor-pointer"
      >
        {isDarkMode ? (
          <IoSunnyOutline className="h-6 w-6 text-yellow-500" />
        ) : (
          <IoMoon className="h-6 w-6 text-gray-500" />
        )}
      </button>
    </div>
  )
}

export default ThemeToggle