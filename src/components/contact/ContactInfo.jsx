import { fadeIn } from '../../framerMotion/animation';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export const ContactInfo = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className="flex flex-col items-center gap-4"
    >
      <a
        href="mailto:gracefengye@gmail.com"
        target="_blank"
        className="flex items-center gap-2 md:text-lg text-lime-600 hover:text-lime-400 dark:text-lime-400 dark:hover:text-lime-200 transition-colors duration-300"
      >
        <FaEnvelope /> gracefengye@gmail.com
      </a>

      <div className="flex gap-6 mt-4">
        <a
          href="https://www.linkedin.com/in/gracefengye/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-600 hover:text-lime-400 dark:text-lime-400 dark:hover:text-lime-200 transition-transform duration-300 hover:scale-110"
        >
          <FaLinkedinIn className="text-xl md:text-2xl" />
        </a>
        <a
          href="https://github.com/gracefy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-600 hover:text-lime-400 dark:text-lime-400 dark:hover:text-lime-200 transition-transform duration-300 hover:scale-110"
        >
          <FaGithub className="text-xl md:text-2xl" />
        </a>
      </div>
    </motion.div>
  );
};
export default ContactInfo;
