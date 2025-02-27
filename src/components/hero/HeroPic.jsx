import React from 'react'
import { PiCircleDashedThin, PiSquareThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/animation";


const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex h-full items-center justify-center">
      <img
        src={`${import.meta.env.BASE_URL}images/pic_round.webp`}
        alt="Feng Ye"
        className="w-auto h-[300px] z-2 hover:scale-105 transition-transform duration-300 ease-in-out"
      />
      <div className="absolute z-1 flex justify-center items-center animate-pulse w-[320px] h-[320px] rounded-full bg-lime-600/50 dark:bg-lime-400">
        {/* <PiCircleDashedThin className="md:h-[90%] sm:h-[100%] min-h-[480px] w-auto text-lime-600 blur-md animate-[spin_20s_linear_infinite]" /> */}
      </div>
    </motion.div>
  )
}

export default HeroPic