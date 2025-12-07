import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaStar } from 'react-icons/fa';

import { styles } from '../styles';
import { myApps } from '../constants';
import AppCard from './AppCard';
import { fadeIn, textVariant } from '../utils/motion'; // Assuming you have these from your template
import { SectionWrapper } from './index.js';

const Apps = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const featuredApp = myApps.find(app => app.featured);

  // Filter from all apps to ensure the featured app is included in results.
  const filteredApps = myApps
    .filter(
      (app) => activeFilter === 'all' || app.platform === activeFilter
    )
    .filter((app) => app.name.toLowerCase().includes(searchTerm.toLowerCase()));


  const filters = ['all', 'web', 'mobile', 'desktop'];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Applications</p>
        <h2 className={styles.sectionHeadText}>Application Showcase.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Explore a selection of applications I've developed, available for web, desktop, and Android. Each project demonstrates my ability to build practical and user-friendly software. Flip a card to see more details and access download links.
        </motion.p>
      </div>

      {/* Featured App Banner */}
      {featuredApp && (
        <motion.div 
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="mt-12 w-full bg-tertiary rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row"
        >
          <div className="md:w-1/2 h-64 md:h-auto">
            <img src={featuredApp.image} alt={featuredApp.name} className="w-full h-full object-cover" />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-yellow-400">
              <FaStar />
              <p className="font-bold text-sm uppercase tracking-wider">Featured App</p>
            </div>
            <h3 className="mt-4 text-white font-bold text-3xl">{featuredApp.name}</h3>
            <p className="mt-2 text-secondary text-[16px]">{featuredApp.description}</p>
            
            {featuredApp.testimonials && featuredApp.testimonials.length > 0 && (
              <blockquote className="mt-4 border-l-4 border-blue-500 pl-4 italic text-slate-300">
                "{featuredApp.testimonials[0].quote}"
              </blockquote>
            )}

            <a
              href={featuredApp.live_demo_link || featuredApp.download_link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block w-fit bg-accent-color text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              {featuredApp.live_demo_link ? 'View Live Demo' : 'Download Now'}
            </a>
          </div>
        </motion.div>
      )}

      <div className="mt-20">
        <h3 className={styles.sectionSubText}>All Applications</h3>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-start gap-4">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeFilter === filter 
                ? 'bg-accent-color text-white shadow-lg' 
                : 'bg-tertiary text-secondary hover:bg-gray-700'
              }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="mt-10 w-full flex justify-center">
        <div className="relative w-full max-w-lg">
          <motion.input
            variants={fadeIn("", "", 0.2, 1)}
            type="text"
            placeholder="Search apps by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pl-12 bg-tertiary border border-slate-700 rounded-full text-white placeholder-secondary focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" />
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {filteredApps.map((app, index) => (
          <motion.div
            key={app.id}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
          >
            <AppCard app={app} />
          </motion.div>
        ))}
      </div>

      {/* Installation Note */}
      <div className="mt-20 text-center text-secondary text-sm max-w-2xl mx-auto">
        <h4 className="font-bold text-white mb-2">Note for Android Users:</h4>
        <p>
          To install an APK, you may need to enable "Install from unknown sources" for your browser in your phone's settings after downloading.
        </p>
      </div>
    </>
  );
};

const AppsSection = SectionWrapper(Apps, "apps");

export default AppsSection;
