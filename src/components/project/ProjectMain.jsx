import React from 'react';
import ProjectText from './ProjectText';
import AllProjects from './AllProjects';

// Project main component
const ProjectMain = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-[1200px] mx-auto px-4">
        <ProjectText />
        <AllProjects />
      </div>
    </section>
  );
};

export default ProjectMain;
