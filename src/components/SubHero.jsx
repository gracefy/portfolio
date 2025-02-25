import { div } from "framer-motion/client";
import React from "react";

export default function SubHero() {
  return (
    <div className="full border-y border-gray-300 flex justify-around uppercase text-gray-500 text-4xl md:text-2xl xl:text-4xl py-8 items-center gap-4 bg-gray-200 dark:bg-gray-800 dark:border-lime-600/50 dark:text-gray-300">
      <p>Fast Learner</p>
      <p className="md:block hidden">Team Work</p>
      <p className="md:block hidden">Details Master</p>
    </div>
  );
}