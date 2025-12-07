import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLink, FaArrowLeft } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

import { myApps } from '../constants';
import { styles } from '../styles';
import AppCard from '../components/AppCard';
import { fadeIn } from '../utils/motion';

const AppDetailPage = () => {
  const { id } = useParams();
  const app = myApps.find((app) => app.id === id);
  const [mainImage, setMainImage] = useState(app ? app.image : null);

  // Get up to 3 other apps to recommend, excluding the current one.
  const recommendedApps = myApps
    .filter((recommendedApp) => recommendedApp.id !== id)
    .slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className={styles.sectionHeadText}>App not found.</h2>
      </div>
    );
  }

  return (
    <div className={`${styles.padding} max-w-7xl mx-auto relative z-0 min-h-screen pt-28`}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Link to="/apps" className="flex items-center gap-2 text-secondary hover:text-white mb-8 transition-colors">
          <FaArrowLeft />
          Back to Showcase
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div variants={fadeIn('right', 'spring', 0.2, 0.75)}>
            <img src={mainImage} alt={app.name} className="w-full h-auto object-cover rounded-2xl shadow-lg mb-4" />
            <div className="flex gap-2">
              {app.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${app.name} screenshot ${index + 1}`}
                  className={`w-24 h-16 object-cover rounded-lg cursor-pointer border-2 ${mainImage === img ? 'border-blue-500' : 'border-transparent'}`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </motion.div>

          {/* App Details */}
          <motion.div variants={fadeIn('left', 'spring', 0.2, 0.75)}>
            <h2 className={styles.sectionHeadText}>{app.name}</h2>
            <p className="mt-4 text-secondary text-[17px] leading-[30px]">{app.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {app.tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>

            <div className="mt-8 flex justify-start text-secondary text-sm border-t border-b border-slate-700 py-3 gap-8">
              <div className="text-center"><p className="font-bold text-white">Version</p><p>{app.version}</p></div>
              <div className="text-center"><p className="font-bold text-white">Platform</p><p className="capitalize">{app.platform}</p></div>
              <div className="text-center"><p className="font-bold text-white">Size</p><p>{app.size}</p></div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              {app.live_demo_link && (
                <a href={app.live_demo_link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors">
                  <FaLink /> Live Demo
                </a>
              )}
              {app.download_link && (
                <a href={app.download_link} download target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-accent-color text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                  <FiDownload /> {app.platform === 'mobile' ? 'Download APK' : 'Download'}
                </a>
              )}
              {app.source_code_link && (
                <a href={app.source_code_link} target="_blank" rel="noopener noreferrer" title="Source Code" className="text-white hover:text-accent-color transition-colors">
                  <FaGithub size={32} />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Testimonials Section */}
        {app.testimonials && app.testimonials.length > 0 && (
          <div className="mt-20">
            <h3 className={styles.sectionSubText}>What People Are Saying</h3>
            <div className="mt-8 grid grid-cols-1 gap-8">
              {app.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
                  className="bg-tertiary p-8 rounded-2xl"
                >
                  <p className="text-white font-black text-5xl">"</p>
                  <div className="mt-1">
                    <p className="text-white tracking-wider text-[18px]">"{testimonial.quote}"</p>
                    <p className="mt-7 text-secondary font-medium text-[16px]">- {testimonial.author}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Recommended Apps Section */}
        {recommendedApps.length > 0 && (
          <div className="mt-20">
            <h3 className={styles.sectionSubText}>You might also like</h3>
            <div className="mt-12 flex flex-wrap gap-10 justify-center lg:justify-start">
              {recommendedApps.map((recommendedApp, index) => (
                <motion.div
                  key={`recommended-${recommendedApp.id}`}
                  variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <AppCard app={recommendedApp} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AppDetailPage;