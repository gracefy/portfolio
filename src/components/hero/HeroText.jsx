import React from 'react'

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center text-center md:text-left pt-8">
      <h2 className="lg:text-2xl text-xl uppercase text-primaryBlue dark:text-gray-200">
        Software Developer
      </h2>
      <h1 className="md:text-6xl text-4xl font-bold uppercase text-lime-600 dark:text-lime-400">
        Feng Ye
      </h1>
      <p className="mt-4 text-lg text-primaryBlue dark:text-gray-300 leading-relaxed">
        A Software Developer skilled in <strong>React, Node.js, and Tailwind CSS</strong>.<br />
        With experience in **digital twins, machine learning, and backend API development**.
      </p>
    </div>
  )
}

export default HeroText