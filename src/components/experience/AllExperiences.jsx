import SingleExperience from './SingleExperience';

// Experiences data
const experiences = [
  {
    job: 'Software Developer',
    company: 'Conestoga College Smart Centre ',
    date: '2024.09 - 2024.12',
    responsibilities: [
      'Designed scalable APIs and automated ML pipelines for real-time equipment monitoring, predictive maintenance, and model retraining, improving performance by 30%.',
      'Built data pipelines to process sensor streams, manage model lifecycle, and support automated decision-making in production.',
      'Documented system architecture and workflows to facilitate knowledge transfer and maintainability.',
    ],
    tech: ['Python', 'FastAPI', 'TensorFlow', 'Scikit-learn', 'MQTT', 'InfluxDB'],
  },
  {
    job: 'Web Developer',
    company: 'Beijing Couplower Technology',
    date: '2024.01 - 2024.08',
    responsibilities: [
      'Developed core modules for a mobile web app serving 100k+ users, including cross-page audio playback and content management features.',
      'Refactored legacy codebase to improve scalability, maintainability, and code quality across the platform.',
      'Enhanced performance and reduced page load time by 40% through pagination and lazy loading.',
    ],
    tech: ['JavaScript', 'Vue.js', 'HTML5', 'CSS3'],
  },
  {
    job: 'QA Engineer',
    company: 'Beijing Couplower Technology',
    date: '2018.08 - 2022.12',
    responsibilities: [
      'Created detailed test plans and test cases; tracked, reported and followed up on bugs with the product and development team.',
      'Performed cross-device testing using cloud-based platforms on phones of various brands and models.',
      'Assisted in feature scoping and prioritization based on requirements, user feedback and test results.',
    ],
    tech: ['Postman', 'Manual Testing', 'Test Cases'],
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
