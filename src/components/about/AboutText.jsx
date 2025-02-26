import React from 'react'

const AboutText = () => {
  return (
    <div className="max-w-[800px] text-center md:items-start md:text-left">
      <h2 className="text-6xl text-lime-600 mb-10 dark:text-lime-400">About Me</h2>
      <p className="text-lg mt-4 text-primaryBlue dark:text-gray-300 leading-relaxed">
        I have a passion for building interactive web applications and optimizing user experience.
        With a background in **React, Node.js, and cloud computing**, I focus on performance, accessibility,
        and cutting-edge frontend technologies.
      </p>
      <p className="text-lg mt-4 text-primaryBlue dark:text-gray-300 leading-relaxed">
        Currently, I'm working on a **Chinese Opera fan website** using **React, Express.js, and Bmob**.
        I also have experience with **FastAPI** and **LSTM models** for AI-driven predictions.
      </p>
      <p className="text-lg mt-4 text-primaryBlue dark:text-gray-300 leading-relaxed">
        Looking for a **Frontend / Fullstack Developer role** to bring my expertise in web technologies
        to innovative projects.
      </p>
      <button className="mt-10 px-6 py-3 text-lg border border-lime-600 rounded-full text-primaryBlue hover:bg-lime-600 hover:text-gray-300 dark:text-gray-300 transition-all duration-500">
        My Projects
      </button>
    </div>
  )
}

export default AboutText