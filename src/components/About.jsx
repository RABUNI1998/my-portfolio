/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { SiFlutter, SiDart, SiReact, SiVite, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiJavascript, SiFirebase, SiPostgresql } from 'react-icons/si';
import { FaFileExcel } from 'react-icons/fa';
import profileImage from '../assets/marfo-joseph.jpg';

const profileImageUrl = profileImage;

const skills = [
  { icon: <SiReact className="text-cyan-400" />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiVite className="text-purple-500" />, name: 'Vite' },
  { icon: <SiFlutter className="text-sky-400" />, name: 'Flutter' },
  { icon: <SiNodedotjs className="text-green-500" />, name: 'Node.js' },
  { icon: <SiFirebase className="text-amber-400" />, name: 'Firebase' },
  { icon: <SiPostgresql className="text-blue-400" />, name: 'PostgreSQL' },
  { icon: <SiTailwindcss className="text-teal-400" />, name: 'Tailwind' },
  { icon: <FaFileExcel className="text-green-600" />, name: 'Excel/VBA' },
];

const SkillCard = ({ icon, name }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
    whileTap={{ scale: 0.95, rotate: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-slate-700/50 shadow-lg"
  >
    <div className="text-5xl text-white">{icon}</div>
    <span className="text-slate-300 font-semibold">{name}</span>
  </motion.div>
);

const FloatingShapes = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <motion.div 
      className="absolute top-[10%] left-[5%] w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-2xl"
      animate={{ 
        y: [0, -20, 0, 20, 0],
        x: [0, 10, 0, -10, 0],
      }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    />
    <motion.div 
      className="absolute bottom-[20%] right-[10%] w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-2xl"
      animate={{ 
        y: [0, 20, 0, -20, 0],
        x: [0, -15, 0, 15, 0],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div 
      className="absolute top-[30%] right-[20%] w-16 h-16 bg-green-500 rounded-full opacity-10 blur-xl"
      animate={{ 
        rotate: [0, 360],
      }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-tertiary">
      <FloatingShapes />
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="grid grid-cols-1 items-center gap-16 md:grid-cols-3"
        >
          <motion.div variants={imageVariants} className="flex justify-center md:col-span-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img
                src={profileImageUrl}
                alt="Joseph Marfo, CEO of RB-TECH"
                className="relative h-64 w-64 rounded-full object-cover border-4 border-slate-800 shadow-xl lg:h-80 lg:w-80"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2">
            <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
              The Mind Behind The Code
            </h2>
            <p className="mb-6 text-lg text-slate-300 leading-relaxed">
              Hi, I'm Joseph Marfo, the founder of RB-TECH. With a unique background in Mathematics Education and a minor in IT, I bring a structured, analytical, and user-focused approach to software development. My passion is not just building software, but solving problems and creating tools that empower businesses.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              As the CEO of RB-TECH, my commitment is to deliver excellence and innovation in every project, ensuring your vision is brought to life with precision and creativity.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: true, amount: 0.2 }}
          transition={{duration: 0.8}}
          className="mt-20">
          <h3 className="mb-8 text-3xl font-bold text-white text-center">Core Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;