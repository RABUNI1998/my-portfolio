import { motion } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';

import { styles } from '../styles';
import { testimonials } from '../constants';
import { SectionWrapper } from './index.js';
import { fadeIn, textVariant } from '../utils/motion';

// To create a seamless loop, we duplicate the testimonials.
const duplicatedTestimonials = [...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      {/* TikTok Style Comment Section */}
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex justify-center z-10 relative`}>
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Title, Description, and Animated Button */}
          <motion.div
            variants={fadeIn("right", "spring", 0.2, 0.75)}
            className="flex flex-col justify-center items-center md:items-start text-center md:text-left p-4"
          >
            <h3 className="text-white font-bold text-3xl mb-4">Your Voice Matters!</h3>
            <p className="text-secondary text-lg mb-8 max-w-md">
              Have you worked with RB-TECH? Share your experience and help others discover the quality of our services.
            </p>
            <motion.a
              href="#contact" // Link to your contact section
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(100, 100, 255, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaPlus className="mr-2" />
              Leave a Testimonial
              <motion.span
                className="absolute inset-0 bg-white opacity-0"
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.a>
          </motion.div>

          {/* Right Column: TikTok Style Comment Section */}
          <motion.div
            variants={fadeIn("left", "spring", 0.2, 0.75)}
            className="w-full h-[400px] bg-slate-900/50 rounded-2xl overflow-hidden relative border border-white/10 shadow-lg"
          >
            <motion.div
              className="flex flex-col gap-4 p-4"
              animate={{ y: ['0%', '-100%'] }}
              transition={{
                ease: 'linear',
                duration: testimonials.length * 5, // Adjust duration based on number of items
                repeat: Infinity,
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/10 border border-white/20 backdrop-blur-lg w-full shadow-md"
                >
                  {/* Generic Avatar (Initial) */}
                  <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center bg-purple-500 text-white text-xl font-bold border-2 border-purple-300">
                    {testimonial.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{testimonial.author}</p>
                    <p className="text-slate-200 text-sm mt-1">{testimonial.quote}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = SectionWrapper(Testimonials, "testimonials");

export default TestimonialsSection;