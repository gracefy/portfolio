import { motion } from "framer-motion";
import { PiHexagonThin, PiHeartThin } from "react-icons/pi";


export default function Hero() {
  return (
    <section className="px-6 py-20 md:py-28 bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-[1200px] mx-auto">
        <div className="flex h-full items-center justify-center">
          <motion.img
            src="/images/grace.webp"
            alt="Feng Ye"
            className="z-2 w-auto h-[300px] mx-auto transition-transform duration-300 hover:scale-110"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute z-1 flex justify-center items-center animate-pulse">
            <PiHeartThin className="md:h-[90%] sm:h-[100%] min-h-120 w-auto text-lime-400 blur-md animate-[spin_15s_linear_infinite]" />
          </div>
        </div>
        <div className="max-w-4xl flex flex-col gap-4 h-full justify-center text-center md:text-left">
          <motion.h2
            className="lg:text-2xl text-xl uppercase font-semibold dark:text-white mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Software Developer
          </motion.h2>
          <motion.h1
            className="md:text-6xl text-4xl font-bold text-lime-800 dark:text-lime-300 mt-6 font-roboto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Feng Ye
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            A Software Developer skilled in <strong>React, Node.js, and Tailwind CSS</strong>.<br />
            With experience in **digital twins, machine learning, and backend API development**.
          </motion.p>
        </div>

      </div>
    </section>
  );
}

