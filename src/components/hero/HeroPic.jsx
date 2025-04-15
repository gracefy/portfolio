import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/animation';
import clsx from 'clsx';

// Hero pic component with framer motion
const HeroPic = () => {
  const [videoBroken, setVideoBroken] = useState(false);

  return (
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative flex items-center justify-center group min-h-[300px] w-[300px]"
    >
      {!videoBroken && (
        <video
          src={`${import.meta.env.BASE_URL}videos/grace_ai.mp4`}
          poster={`${import.meta.env.BASE_URL}images/grace_ai.jpg`}
          className={clsx(
            'absolute inset-0 h-full w-full rounded-full object-cover z-10',
            'group-hover:scale-105 transition-all duration-500 ease-in-out'
          )}
          muted
          playsInline
          preload="auto"
          loop
          onMouseOver={(e) => e.target.play()}
          onMouseOut={(e) => e.target.pause()}
          onError={() => setVideoBroken(true)}
        />
      )}

      {/* Fallback for video */}
      {videoBroken && (
        <img
          src={`${import.meta.env.BASE_URL}images/grace_ai.jpg`}
          alt="Grace Ye"
          className="w-auto h-[300px] rounded-full z-10 transition-all duration-500 ease-in-out"
        />
      )}
      <div
        className={clsx(
          'absolute z-0 flex justify-center items-center w-[320px] h-[320px] ',
          'rounded-full animate-pulse  bg-lime-600/50 dark:bg-lime-400',
          'group-hover:animate-none group-hover:bg-orange-400 transition-all duration-500 ease-in-out'
        )}
      />
    </motion.div>
  );
};

export default HeroPic;
