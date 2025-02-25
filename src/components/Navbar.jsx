import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import useDarkMode from "../hooks/useDarkMode";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { section } from "framer-motion/client";

const links = [
  { name: "About", section: "about" },
  { name: "Skills", section: "skills" },
  { name: "Experience", section: "experience" },
  { name: "Projects", section: "projects" },
  { name: "Contact", section: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      links.forEach(({ section }) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md fixed w-full z-10">
      <h1 className="text-xl font-roboto font-extrabold dark:text-white hidden md:block">Feng Ye</h1>
      <h1 className="text-xl font-roboto font-extrabold dark:text-white sm:block md:hidden">Feng</h1>
      <ul className="hidden md:flex space-x-6">
        {links.map((link) => (
          <li key={link.section} className="group">
            <a
              href={`#${link.section}`}
              className={`cursor-pointer text-gray-700 dark:text-white transition-all duration-500 
              ${activeSection === section ? "text-lime-600 dark:text-lime-300 font-bold border-b-2 border-lime-600 dark:border-lime-300" : "hover:text-lime-600 dark:hover:text-lime-300"}
            `}>{link.name}</a>
            <div className="mx-auto bg-lime-600 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="p-2 rounded-md bg-gray-200 dark:bg-gray-700"
      >
        {isDarkMode ? (
          <SunIcon className="h-6 w-6 text-yellow-500" />
        ) : (
          <MoonIcon className="h-6 w-6 text-gray-900" />
        )}
      </button>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md">
          {isOpen ? <XMarkIcon className="h-6 w-6 text-gray-900 dark:text-white" /> : <Bars3Icon className="h-6 w-6 text-gray-900 dark:text-white" />}
        </button>

        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg p-4 space-y-2">
            {links.map((link) => (
              <li key={link.section} className="group">
                <a href={`#${link.section}`} className="block text-center text-gray-700 dark:text-white hover:text-lime-600 dark:hover:text-lime-300 transition-all duration-500">{link.name}</a>
                <div className="mx-auto bg-lime-600 w-0 group-hover:w-[50%] h-[1px] transition-all duration-500"></div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}