import React from 'react';
import SingleProject from './SingleProject';

// Projects data
const projects = [
  {
    title: 'AI AnswerBook',
    year: 'April 2025',
    image: 'answerbook.jpg',
    description:
      'A playful side project that blends AI, frontend animation, and a touch of poetic mystery.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'Prisma', 'Vercel'],
    responsibility: [
      'Developed a full-stack Q&A platform powered by large language models via OpenRouter API.',
      'Implemented user authentication with JWT and HttpOnly cookies, supporting registration and login flows.',
      'Designed and integrated history tracking features with search, pagination, and deletion functionality.',
      'Maintained modular architecture with reusable hooks and components to ensure scalability and clarity.',
    ],
    link: 'https://answerbook.graceye.ca/',
    linkNote: '',
  },
  {
    title: 'ML Model Deployment',
    year: 'Sep 2024',
    image: 'factory.jpg',
    description:
      'A digital twin system integrated with machine learning models to monitor machine operations in real-time and predict outcomes for proactive decision-making.',
    tech: ['Python', 'FastAPI', 'TensorFlow', 'Scikit-learn', 'MQTT', 'InfluxDB'],
    responsibility: [
      'Designed and implemented pipelines to integrate machine learning models into a digital twin system.',
      'Processed real-time sensor data from the client, applied ML models to predict optimal machine setup parameters, and delivered results back to the client.',
      'Fetched and preprocessed data from InfluxDB at regular intervals to predict machine downtime, sending results via MQTT for real-time digital twin visualization.',
      'Retrained ML models periodically using historical data to ensure adaptability to machine conditions, automating model deployment to enhance accuracy.',
    ],
    link: null,
    linkNote: 'Client use internally',
  },
  {
    title: 'Mobile Web App',
    year: 'Jan 2024',
    image: 'opera.jpg',
    description:
      'A mobile web app on WeChat for a traditional opera community, focusing on showcasing Chinese opera culture, featuring music playback, professional knowledge, live show information, and artist galleries.',
    tech: ['JavaScript', 'Vue-based framework', 'HTML5', 'CSS3'],
    responsibility: [
      'Developed and delivered core features for a mobile web app with over 100,000 users, enabling seamless access to Chinese opera content.',
      'Implemented an advanced audio playback system, supporting loop playback, accompaniment selection, and actor/score integration, ensuring a smooth user experience.',
      'Optimized UI/UX and Enhanced app performance, reducing load time by 20%, through efficient state management and optimized asset loading strategies.',
    ],
    link: null,
    linkNote: "Search for '黄梅迷' on WeChat to access",
  },
  {
    title: 'Wildlife Web App',
    year: 'May 2024',
    image: 'wildlife.jpg',
    description:
      'A full-stack web application to showcase Ontario wildlife, featuring animal info, blogs, donations and user engagement features.',
    tech: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'HTML5', 'CSS3'],
    responsibility: [
      'Designed and built a full-stack web application, implementing both frontend and backend architectures along with database design.',
      'Implemented dynamic data display and handled client requests and responses.',
      'Deployed the application on Render with MongoDB Atlas integration.',
    ],
    link: 'https://wildlife-g6xv.onrender.com/',
  },
];

// All projects component
const AllProjects = () => {
  return (
    <div className="max-w-[980px] flex flex-col gap-20 mx-auto mt-12">
      {projects.map((project, index) => (
        <SingleProject key={index} project={project} index={index} />
      ))}
    </div>
  );
};

export default AllProjects;
