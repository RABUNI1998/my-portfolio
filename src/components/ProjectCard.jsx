/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaGithub, FaLink, FaFileExcel } from 'react-icons/fa';
import { SiReact, SiVite, SiTailwindcss, SiNetlify, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';

const techIconMap = {
  'React': <SiReact className="text-cyan-400" />,
  'Vite': <SiVite className="text-purple-500" />,
  'Tailwind CSS': <SiTailwindcss className="text-teal-400" />,
  'Netlify': <SiNetlify className="text-cyan-600" />,
  'HTML': <SiHtml5 className="text-orange-500" />,
  'CSS': <SiCss3 className="text-blue-500" />,
  'JavaScript': <SiJavascript className="text-yellow-400" />,
  'Microsoft Excel': <FaFileExcel className="text-green-600" />,
  'VBA': <span className="text-green-500 font-bold">VBA</span>,
  'Data Automation': null,
};

const ProjectCard = ({ title, description, imageUrl, techStack, liveUrl, codeUrl }) => {
  return (
    <motion.div
      whileHover="hover"
      className="relative w-full sm:w-[360px] h-[480px] rounded-2xl overflow-hidden shadow-2xl"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.img 
        src={imageUrl} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: 'translateZ(0)' }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-black/50"
        style={{ transform: 'translateZ(20px)' }}
      />

      <motion.div 
        className="absolute inset-0 p-6 flex flex-col justify-end"
        style={{ transform: 'translateZ(50px)' }}
      >
        <motion.div initial={{ y: 20, opacity: 0 }} variants={{ hover: { y: 0, opacity: 1 } }} transition={{ delay: 0.1 }}>
          <h3 className="text-white font-bold text-2xl drop-shadow-lg">{title}</h3>
          <p className="mt-2 text-gray-200 text-sm drop-shadow-md">{description}</p>
        </motion.div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {techStack.map((tech) => (
            <div key={tech} className="text-2xl text-white drop-shadow-md">
              {techIconMap[tech]}
            </div>
          ))}
        </div>

        <motion.div initial={{ y: 20, opacity: 0 }} variants={{ hover: { y: 0, opacity: 1 } }} transition={{ delay: 0.2 }} className="mt-4 flex items-center space-x-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-200 transition-colors hover:text-white font-semibold"
          >
            <FaLink /> Live Demo
          </a>
          {codeUrl && (
            <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-200 transition-colors hover:text-white font-semibold">
              <FaGithub /> View Code
            </a>
          )}
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute inset-0 border-2 border-purple-500 rounded-2xl pointer-events-none"
        style={{ transform: 'translateZ(80px)' }}
        initial={{ opacity: 0 }}
        variants={{ hover: { opacity: 1 } }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default ProjectCard;