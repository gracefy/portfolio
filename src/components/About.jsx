
import { motion } from "framer-motion";
import { PiHexagonThin, PiHeartThin } from "react-icons/pi";


export default function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row gap-12 py-20 px-4 mx-auto justify-between items-center bg-white dark:bg-gray-900">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-[1200px] mx-auto">
        <div className="max-w-[800px] text-center md:text-left">
          <h2 className="text-6xl text-lime-800 my-10 font-semibold dark:text-lime-300">About Me</h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I have a passion for building interactive web applications and optimizing user experience.
            With a background in **React, Node.js, and cloud computing**, I focus on performance, accessibility,
            and cutting-edge frontend technologies.
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Currently, I'm working on a **Chinese Opera fan website** using **React, Express.js, and Bmob**.
            I also have experience with **FastAPI** and **LSTM models** for AI-driven predictions.
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Looking for a **Frontend / Fullstack Developer role** to bring my expertise in web technologies
            to innovative projects.
          </p>
          <button className="mt-10 px-6 py-3 text-lg font-semibold border border-lime-700 rounded-full text-lime-700 hover:bg-lime-200 dark:text-gray-900 dark:bg-gray-100 dark:hover:bg-gray-300 transition-all duration-500">
            My Projects
          </button>
        </div>
        <div className="max-w-sm h-100 w-70 relative">
          <div className="absolute h-100 w-70 rounded-4xl overflow-hidden z-2">
            <img
              src="/images/about-me.jpg"
              alt="About me image"
              className="h-full w-auto object-cover hover:scale-110 transation-all duration-500"
            />
          </div>
          <div className="absolute h-100 w-70 bg-lime-600 dark:bg-lime-300 -bottom-10 -left-10 rounded-bl-4xl rounded-tr-4xl rounded-br-xl rounded-tl-xl z-1">
          </div>

        </div>
      </div>
    </section>

  );
}

