import React from 'react';
import AboutText from './AboutText';
import AboutImage from './AboutImage';

// About main component
const AboutMain = () => {
  return (
    <section id="about" className="font-sans bg-gray-100 dark:bg-gray-900 py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 md:gap-24 justify-between items-center">
        <AboutText />
        <AboutImage />
      </div>
    </section>
  );
};

export default AboutMain;
