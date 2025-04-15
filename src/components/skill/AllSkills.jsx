import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiDotnet, SiFastapi, SiMongodb } from 'react-icons/si';
import { IoLogoJavascript, IoLogoPython } from 'react-icons/io';
import { DiMsqlServer } from 'react-icons/di';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/animation';

// Skills data
const skills = [
  {
    skill: 'JavaScript',
    icon: IoLogoJavascript,
    level: 80,
    project: 'Chinese Opera Website',
  },
  {
    skill: 'React.js',
    icon: FaReact,
    level: 80,
    project: 'Chinese Opera Website',
  },
  {
    skill: 'Node.js',
    icon: FaNodeJs,
    level: 85,
    project: 'Wildlife Website API',
  },
  {
    skill: 'Next.js',
    icon: SiNextdotjs,
    level: 80,
    project: 'AI AnswerBook',
  },
  {
    skill: '.NET',
    icon: SiDotnet,
    level: 70,
    project: 'Invoice Management System',
  },
  {
    skill: 'Python',
    icon: IoLogoPython,
    level: 75,
    project: 'ML Model Training',
  },
  {
    skill: 'HTML5',
    icon: FaHtml5,
    level: 80,
    project: 'Chinese Opera Website',
  },
  {
    skill: 'CSS3',
    icon: FaCss3Alt,
    level: 80,
    project: 'Chinese Opera Website',
  },
  // {
  //   skill: 'FastAPI',
  //   icon: SiFastapi,
  //   level: 70,
  //   project: 'ML Model Deployment',
  // },
  // {
  //   skill: 'MongoDB',
  //   icon: SiMongodb,
  //   level: 70,
  //   project: 'Wildlife Website',
  // },
  // {
  //   skill: 'SQL',
  //   icon: DiMsqlServer,
  //   level: 75,
  //   project: 'Wildlife Website',
  // },
];

// All skills component with framer motion
const AllSkills = () => {
  return (
    <div>
      <div className="hidden lg:flex items-center justify-center relative gap-2 mx-auto mt-10">
        {skills.map((skill, index) => (
          <motion.div
            variants={fadeIn('up', `${index * 0.1}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <div className="hover:-translate-y-[30px] transition-all duration-500" key={index}>
              <div className="relative flex flex-col items-center gap-2 z-2">
                <div className="bg-white dark:bg-gray-100 text-6xl text-lime-600 h-30 w-30 border-4 border-lime-600 flex items-center justify-center rounded-full hover:text-lime-800 hover:scale-105 transform transation-all duration-500">
                  <skill.icon />
                </div>
                <h3 className="text-xl font-bold text-white dark:text-gray-300">{skill.skill}</h3>
                {/* <p className="text-gray-700 dark:text-gray-300">{skill.project}</p> */}
              </div>
              <div className="w-30 h-70 bg-lime-600 absolute top-15 z-1"></div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 grid-cols-2 gap-12 my-12 lg:hidden">
        {skills.map((skill, index) => (
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="flex flex-col items-center gap-2" key={index}>
              <skill.icon className="text-7xl text-lime-600 hover:text-lime-800 " />
              <h3 className="text-xl font-bold text-gray-500 dark:text-gray-300 text-center">
                {skill.skill}
              </h3>
              {/* <p className="text-gray-700 dark:text-gray-300">{skill.project}</p> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;
