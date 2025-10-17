/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 p-4 text-center text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        <motion.h1
          variants={itemVariants}
          className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl"
        >
          RB-TECH
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="mt-4 text-3xl font-bold md:text-5xl"
        >
          Building High-Performance Web & Mobile Applications with AI-Powered
          Precision.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl"
        >
          From sleek e-commerce sites with React to cross-platform mobile apps
          with Flutter, RB-TECH turns your ideas into reality.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 flex justify-center space-x-6">
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-blue-400">
            <FaGithub size={32} />
          </a>
          <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-blue-400">
            <FaLinkedin size={32} />
          </a>
          <a href="mailto:your-email@example.com" className="text-slate-400 transition-colors hover:text-blue-400">
            <FaEnvelope size={32} />
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-10">
          <a
            href="#work"
            className="transform rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-transform hover:scale-105 hover:bg-blue-700"
          >
            View My Work
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;