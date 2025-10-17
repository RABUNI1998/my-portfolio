/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaGithub, FaLink } from 'react-icons/fa';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const ProjectCard = ({ title, description, imageUrl, techStack, liveUrl, codeUrl }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="overflow-hidden rounded-lg bg-slate-900 shadow-lg transition-transform duration-300 hover:-translate-y-2"
    >
      <img src={imageUrl} alt={title} className="h-56 w-full object-cover object-top" />
      <div className="p-6">
        <h3 className="mb-3 text-2xl font-bold text-white">{title}</h3>
        <p className="mb-4 text-slate-300">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="rounded-full bg-blue-900/50 px-3 py-1 text-sm font-semibold text-blue-300">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-300 transition-colors hover:text-blue-400"
          >
            <FaLink /> Live Demo
          </a>
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 transition-colors hover:text-blue-400">
              <FaGithub /> View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;