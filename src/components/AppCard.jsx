import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsBoxArrowUpRight } from 'react-icons/bs';

import { FaGithub, FaGooglePlay, FaLink } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const AppCard = ({ app }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Stop the click event from bubbling up to the parent Link
  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'web':
        return '🌐';
      case 'mobile':
        return '📱';
      case 'desktop':
        return '💻';
      default:
        return '⭐';
    }
  };

  return (
    <div
      className="w-[360px] h-[240px] rounded-2xl perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Card Front */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden">
          <img src={app.image} alt={app.name} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50">
            <h3 className="text-white text-xl font-bold">{app.name}</h3>
            <span className="text-2xl absolute top-2 right-2" title={app.platform}>{getPlatformIcon(app.platform)}</span>
          </div>
        </div>

        {/* Card Back */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl bg-tertiary p-5 rotate-y-180">
          <div className="flex flex-col h-full justify-between">
            <div>
            <h3 className="text-white font-bold text-[24px]">{app.name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{app.description}</p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between text-secondary text-xs border-t border-b border-slate-700 py-2">
                <div className="text-center">
                  <p className="font-bold text-white">Version</p>
                  <p>{app.version}</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-white">Platform</p>
                  <p className="capitalize">{app.platform}</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-white">Size</p>
                  <p>{app.size}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
              {app.tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>

              <div className="flex justify-between items-center gap-2">
                {/* Action Button */}
                {app.download_link && (
                  <a
                    href={app.download_link}
                    download // This attribute prompts the browser to download the file
                    onClick={handleLinkClick}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow bg-accent-color text-white text-center font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {app.platform === 'mobile' ? 'Download APK' : 'Download'}
                  </a>
                )}
                {app.live_demo_link && (
                  <a href={app.live_demo_link} onClick={handleLinkClick} target="_blank" rel="noopener noreferrer" className="flex-grow bg-green-600 text-white text-center font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                    Live Demo
                  </a>
                )}

                <Link
                  to={`/apps/${app.id}`}
                  className="flex items-center justify-center gap-2 flex-grow bg-slate-600 text-white text-center font-bold py-2 px-4 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <BsBoxArrowUpRight /> Details
                </Link>

                {/* Source Code Icon */}
                {app.source_code_link && (
                  <a href={app.source_code_link} onClick={handleLinkClick} target="_blank" rel="noopener noreferrer" title="Source Code" className="ml-4 text-white hover:text-accent-color transition-colors">
                    <FaGithub size={28} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppCard;
