import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiSolidRightTopArrowCircle } from 'react-icons/bi';
import { fadeIn } from '../../framerMotion/animation';

const SingleProject = ({ project, index }) => {
  const [show, setShow] = useState(false);
  const isReversed = index % 2 === 0;
  const direction = isReversed ? 'right' : 'left';

  return (
    <motion.div
      variants={fadeIn(direction, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className={`w-full flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''} gap-12 items-center md:items-start mb-12`}
    >
      {/* Text Section */}
      <div
        className={`flex-1 ${isReversed ? 'md:text-left' : 'md:text-right'} text-gray-800 dark:text-gray-100`}
      >
        <h3 className="text-2xl md:text-3xl text-lime-600 dark:text-lime-400 font-semibold">
          {project.title}
        </h3>

        <div
          className={`flex flex-wrap gap-2 my-3 justify-center ${isReversed ? 'md:justify-start' : 'md:justify-end'}`}
        >
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-lime-100 dark:bg-lime-900 text-lime-800 dark:text-lime-200 px-2 py-0.5 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <p
          onClick={() => setShow(!show)}
          className="mt-3 text-lime-600 hover:text-lime-500 transition-colors duration-300 underline cursor-pointer"
        >
          {show ? 'Hide' : 'Show'} Details
        </p>

        <AnimatePresence mode="wait">
          {show && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="mt-4 p-4 rounded-lg bg-gray-100/30 dark:bg-gray-900/50 border border-lime-600/30 dark:border-lime-400/30 text-left"
            >
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                {project.description}
              </p>

              <h4 className="text-lg font-bold text-lime-600 dark:text-lime-400 mt-4">
                Key Contributions:
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 dark:text-gray-300">
                {project.responsibility.map((res, idx) => (
                  <li key={idx}>{res}</li>
                ))}
              </ul>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-4 text-lime-500 hover:text-lime-400 transition"
                >
                  View Project <BiSolidRightTopArrowCircle className="text-xl" />
                </a>
              )}

              {project.linkNote && (
                <p className="mt-2 italic text-gray-500 dark:text-gray-400 text-sm">
                  * {project.linkNote}
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Image Section */}
      <div className="flex-1 max-w-[400px] relative overflow-hidden rounded-xl border border-gray-200 dark:border-zinc-700 group">
        <img
          src={`${import.meta.env.BASE_URL}images/${project.image}`}
          alt="Project image"
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-lime-800/30 dark:bg-lime-600/40 opacity-50 group-hover:opacity-0 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
