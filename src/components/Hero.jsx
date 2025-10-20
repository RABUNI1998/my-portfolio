/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { styles } from '../styles.js';
import { StarsCanvas } from "./index.js";
import { FiEye, FiSend } from 'react-icons/fi';

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

  const [stats, setStats] = useState({ visits: 0, requests: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // The path '/.netlify/functions/get-stats' is automatically
        // mapped by Netlify to our serverless function.
        const response = await fetch('/.netlify/functions/get-stats');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch stats:", error);
        // Set to a default or loading state if fetch fails
        setStats({ visits: 1000, requests: 40 }); // Fallback mock data
      }
    };

    fetchStats();
  }, []);

  const StatItem = ({ icon, value, label }) => (
    <div className="flex items-center gap-3 text-slate-300">
      {icon}
      <div className="text-left">
        <p className="text-2xl font-bold text-white">{new Intl.NumberFormat().format(value)}</p>
        <p className="text-sm text-slate-400">{label}</p>
      </div>
    </div>
  );

  return (
    <section className="relative w-full h-screen mx-auto flex flex-col items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.h1
            variants={itemVariants}
            className={`${styles.heroHeadText} bg-gradient-to-r from-primary-color to-accent-color bg-clip-text text-transparent`}
          >
            RB-TECH
          </motion.h1>
        </div>

        <div>
          <motion.h2
            variants={itemVariants}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            Building High-Performance Web & Mobile Applications with AI-Powered
            Precision.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`${styles.sectionSubText} mt-4 text-secondary max-w-3xl`}
          >
            From sleek e-commerce sites with React to cross-platform mobile apps
            with Flutter, RB-TECH turns your ideas into reality.
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="mt-8 flex space-x-6">
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="text-secondary transition-colors hover:text-accent-color">
            <FaGithub size={32} className="transition-transform hover:scale-125" />
          </a>
          <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-secondary transition-colors hover:text-accent-color">
            <FaLinkedin size={32} className="transition-transform hover:scale-125" />
          </a>
          <a href="mailto:your-email@example.com" className="text-secondary transition-colors hover:text-accent-color">
            <FaEnvelope size={32} className="transition-transform hover:scale-125" />
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-10">
          <a
            href="#work" // Make sure you have a section with id="work"
            className="group relative inline-block px-8 py-3 font-bold text-white rounded-full bg-gradient-to-r from-primary-color to-accent-color overflow-hidden"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
            View My Work
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 flex space-x-10">
          <StatItem icon={<FiEye size={32} className="text-accent-color" />} value={stats.visits} label="Portfolio Visits" />
          <StatItem icon={<FiSend size={32} className="text-accent-color" />} value={stats.requests} label="Services Requested" />
        </motion.div>
      </motion.div>

      <StarsCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#services">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-purple-500 flex justify-center items-start p-2 shadow-lg shadow-purple-500/50">
            <motion.div
              animate={{
                y: [0, 24, 0],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-white"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;