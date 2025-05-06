import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/animation';
import clsx from 'clsx';

// About image component with framer motion
const AboutImage = () => {
  const [videoBroken, setVideoBroken] = useState(false);

  return (
    <motion.div
      variants={fadeIn('left', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="relative h-[500px] w-[300px] group flex items-center justify-center"
    >
      {!videoBroken && (
        <video
          src={`${import.meta.env.BASE_URL}videos/coding.mp4`}
          className={clsx(
            'absolute inset-0 h-full w-auto z-10 object-cover ',
            'rounded-[100px] group-hover:scale-105',
            'transition-opacity duration-500 ease-in-out'
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
          src={`${import.meta.env.BASE_URL}images/coding.jpg`}
          alt="About me"
          className="h-full w-auto z-10 object-cover rounded-[100px] group-hover:scale-105 transition-all duration-500 ease-in-out"
        />
      )}

      <div
        className={clsx(
          'absolute z-0 h-full w-[250px] bg-lime-600 bottom-[-20px]',
          'left-[-20px] rounded-bl-[120px] rounded-tr-[120px]',
          'rounded-br-[20px] rounded-tl-[20px]',
          'transition-all duration-500 ease-in-out group-hover:bg-orange-400'
        )}
      />
    </motion.div>
  );
};

export default AboutImage;
