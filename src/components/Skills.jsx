import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io";
import { SiFastapi, SiMongodb } from "react-icons/si";

const skills = [
  {
    skill: "Node.js",
    icon: FaNodeJs,
    level: 85,
    project: "Wildlife Website API"
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
    level: 80,
    project: "Chinese Opera Website"
  },
  {
    skill: "React.js",
    icon: FaReact,
    level: 80,
    project: "Chinese Opera Website"
  },
  {
    skill: "FastAPI",
    icon: SiFastapi,
    level: 70,
    project: "ML Model Deployment"
  },
  {
    skill: "Python",
    icon: IoLogoPython,
    level: 75,
    project: "ML Model Training"
  },
  {
    skill: "HTML5",
    icon: FaHtml5,
    level: 80,
    project: "Chinese Opera Website"
  },
  {
    skill: "CSS3",
    icon: FaCss3Alt,
    level: 80,
    project: "Chinese Opera Website"
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
    level: 70,
    project: "Wildlife Website"
  },
  {
    skill: "SQL",
    icon: DiMsqlServer,
    level: 75,
    project: "Wildlife Website"
  },
];

const Skills = () => {
  return (
    <section id="skills" className="flex flex-col gap-12 px-4 pt-20 mx-auto bg-gray-100 dark:bg-gray-800">
      <div className='max-w-[1200px] min-h-120 mx-auto px-4 relative overflow-hidden'>
        <div className='flex flex-col justify-between items-center gap-12  mx-auto text-center md:text-left'>
          <h2 className="text-6xl text-lime-800 font-semibold dark:text-lime-300">My Skills</h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I have a passion for building interactive web applications and optimizing user experience.
            With a background in **React, Node.js, and cloud computing**, I focus on performance, accessibility,
            and cutting-edge frontend technologies.
          </p>
        </div>

        <div className='hidden lg:flex items-center justify-center relative gap-2 max-w-3xl mx-auto my-10'>
          {skills.map((skill, index) => (
            <div className="hover:-translate-y-10 transition-all duration-500" key={index}>
              <div className='relative flex flex-col items-center gap-2 z-2'>
                <div className='bg-white dark:bg-gray-100 text-6xl text-lime-600 h-30 w-30 border-4 border-lime-600 flex items-center justify-center rounded-full hover:text-lime-800 hover:scale-105 transform transation-all duration-500'>
                  <skill.icon />
                </div>
                <h3 className="text-xl font-bold text-gray-100">{skill.skill}</h3>
                {/* <p className="text-gray-700 dark:text-gray-300">{skill.project}</p> */}
              </div>
              <div className='w-30 h-60 bg-lime-600 absolute top-15 z-1'></div>
            </div>
          ))}
        </div>

        <div className='grid md:grid-cols-3 grid-cols-2 gap-12 my-12 lg:hidden'>
          {skills.map((skill, index) => (
            <div className='flex flex-col items-center gap-2' key={index}>
              <skill.icon className='text-7xl text-lime-600 hover:text-lime-800' />
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 text-center">{skill.skill}</h3>
              {/* <p className="text-gray-700 dark:text-gray-300">{skill.project}</p> */}
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills