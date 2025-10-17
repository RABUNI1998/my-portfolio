/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';
import { styles } from '../styles';

// Import your project images from the assets folder
import joedeeImage from '../assets/joedee-enterprise.png';
import tfecImage from '../assets/tfec.png';
import excelImage from '../assets/excel-sba.png';

const projects = [
  {
    title: 'Joede Enterprise E-commerce Platform',
    description: 'A full-stack e-commerce solution featuring a customer storefront and a comprehensive admin panel for managing products, orders, and users.',
    imageUrl: joedeeImage,
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Netlify'],
    liveUrl: 'https://joedeenterprise.netlify.app/',
    codeUrl: null, // Add your repo link here if public
  },
  {
    title: 'The Farsight-Edu Consult',
    description: 'A professional and responsive website for an educational consultancy firm, built to attract and inform clients with a clean and modern design.',
    imageUrl: tfecImage,
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://tfec.netlify.app/',
    codeUrl: null,
  },
  {
    title: 'Excel School-Based Assessment System',
    description: 'An advanced Excel system designed to automate school-based assessment scoring and reporting, significantly reducing manual work for educators.',
    imageUrl: excelImage,
    techStack: ['Microsoft Excel', 'VBA', 'Data Automation'],
    liveUrl: 'https://youtu.be/h3Zn5rzGw_Y', // Link to a video demo or file download if available
    codeUrl: null,
  },
];

const Work = () => {
  return (
    <section id="work" className={`${styles.padding} min-h-screen bg-gradient-to-b from-primary to-tertiary py-24`}>
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className={`${styles.sectionHeadText} text-center mb-6`}
        >
          My Work
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-slate-300 max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Here are some of the projects I've worked on, showcasing my skills in web development, mobile development, and AI integration.
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20 flex flex-wrap gap-12 justify-center"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
