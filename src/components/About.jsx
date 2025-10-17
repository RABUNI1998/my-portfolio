/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { SiFlutter, SiDart, SiReact, SiVite, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiJavascript } from 'react-icons/si';
import { FaDatabase, FaFileExcel } from 'react-icons/fa';
import profileImage from '../assets/marfo-joseph.jpg';
// TODO: Replace this with a real, high-quality image of yourself.
const profileImageUrl = profileImage;

const skills = [
  { icon: <SiFlutter className="text-sky-400" />, name: 'Flutter' },
  { icon: <SiDart className="text-sky-500" />, name: 'Dart' },
  { icon: <SiReact className="text-cyan-400" />, name: 'React' },
  { icon: <SiVite className="text-purple-500" />, name: 'Vite' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiTailwindcss className="text-teal-400" />, name: 'Tailwind' },
  { icon: <SiNodedotjs className="text-green-500" />, name: 'Node.js' },
  { icon: <FaDatabase className="text-orange-400" />, name: 'Databases' },
  { icon: <FaFileExcel className="text-green-600" />, name: 'Excel/VBA' },
];

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="min-h-screen bg-slate-800 py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
          className="grid grid-cols-1 items-center gap-12 md:grid-cols-3"
        >
          {/* Image Column */}
          <motion.div variants={imageVariants} className="flex justify-center md:col-span-1">
            <div className="relative h-64 w-64 rounded-full border-4 border-blue-500 p-2 shadow-lg lg:h-80 lg:w-80">
              <img
                src={profileImageUrl}
                alt="Joseph Marfo, CEO of RB-TECH"
                className="h-full w-full rounded-full object-cover"
              />
              <div className="absolute inset-0 rounded-full border-4 border-purple-500 mix-blend-overlay"></div>
            </div>
          </motion.div>

          {/* Text Content Column */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
              The Mind Behind The Code
            </h2>
            <p className="mb-6 text-lg text-slate-300">
              Hi, I'm Joseph Marfo, the founder of RB-TECH. With a unique background in Mathematics Education and a minor in IT, I bring a structured, analytical, and user-focused approach to software development. My passion is not just building software, but solving problems and creating tools that empower businesses.
            </p>
            <p className="text-lg text-slate-300">
              As the CEO of RB-TECH, my commitment is to deliver excellence and innovation in every project, ensuring your vision is brought to life with precision and creativity.
            </p>
            <div className="mt-8">
              <h3 className="mb-4 text-2xl font-bold text-white">Core Technologies</h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 rounded-md bg-slate-700/50 p-2 text-slate-300">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;