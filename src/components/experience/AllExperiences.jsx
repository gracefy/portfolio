import React from 'react';
import SingleExperience from './SingleExperience';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/animation';

// Experiences data
const experiences = [
  {
    job: 'Software Developer',
    company: 'Conestoga College Smart Centre ',
    date: '2024.09 - 2024.12',
    responsibilities: [
      'Led backend development for a digital twin system, integrating ML models with real-time sensor data.',
      'Built modular components for data ingestion, processing, model training, evaluation, and deployment.',
      'Designed and implemented scalable APIs using FastAPI and automated the full ML retraining workflow, reducing manual effort and improving system performance by 30%.',
      'Created system flowcharts and documentation, aligning backend structure with data workflows.',
    ],
    tech: ['Python', 'FastAPI', 'MQTT', 'InfluxDB', 'TensorFlow', 'Scikit-learn'],
  },
  {
    job: 'Software Developer',
    company: 'Beijing Couplower Technology',
    date: '2024.01 - 2024.08',
    responsibilities: [
      'Led the refactoring of audio playback logic for a large-scale mobile app with 100k+ users , enabling seamless cross-page and background playback.',
      'Reduced page load time by 40% through dynamic pagination and lazy loading.',
      'Collaborated with product and design teams to deliver responsive UI and maintain code quality under tight release schedules.',
    ],
    tech: ['JavaScript', 'Vue-based framework', 'HTML5', 'CSS3'],
  },
];

// All experiences component
const AllExperiences = () => {
  return (
    <div className="flex flex-col justify-between gap-10 md:gap-15 mt-5">
      {experiences.map((experience, index) => (
        <SingleExperience key={index} experience={experience} index={index} />
      ))}
    </div>
  );
};

export default AllExperiences;
