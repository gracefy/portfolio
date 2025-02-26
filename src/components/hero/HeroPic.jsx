import React from 'react'
import { PiCircleDashedThin, PiSquareThin } from "react-icons/pi";


const HeroPic = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <img
        src="/images/pic_round.webp"
        alt="Feng Ye"
        className="w-auto h-[280px] z-2"
      />
      <div className="absolute z-1 flex justify-center items-center animate-pulse">
        <PiCircleDashedThin className="md:h-[90%] sm:h-[100%] min-h-[480px] w-auto text-orange-400 blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </div>
  )
}

export default HeroPic