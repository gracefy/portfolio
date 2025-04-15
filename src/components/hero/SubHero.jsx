import React from 'react';

// Sub hero component - separate section under the hero
const SubHero = () => {
  return (
    <div className="w-full border-y border-gray-400 flex justify-around uppercase text-gray-500 text-4xl md:text-2xl xl:text-4xl py-8 items-center gap-4 bg-white dark:bg-gray-800 dark:border-lime-600 dark:text-gray-400">
      <p>Fast Learner</p>
      <p className="md:block hidden">Team Work</p>
      <p className="md:block hidden">Details Master</p>
    </div>
  );
};

export default SubHero;
