/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaFileExcel } from 'react-icons/fa';

const servicesList = [
  {
    icon: <FaCode size={40} className="text-blue-400" />,
    title: 'Custom Web Development',
    description:
      'We build fast, responsive, and scalable web applications tailored to your business needs using modern technologies like React (Next.js, Vite) and stunning designs.',
  },
  {
    icon: <FaMobileAlt size={40} className="text-blue-400" />,
    title: 'Cross-Platform Mobile App Development',
    description:
      'Reach your users on both iOS and Android with a single, beautiful, and performant mobile app built with Flutter. Save time and development costs without compromising on quality.',
  },
  {
    icon: <FaFileExcel size={40} className="text-blue-400" />,
    title: 'Data & Automation Solutions',
    description:
      'Leverage the power of your data. We create advanced Excel dashboards, automate repetitive tasks, and provide data-driven insights to help you make smarter business decisions.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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

const Services = () => {
  return (
    <section id="services" className="min-h-screen bg-slate-800 py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-4xl font-extrabold text-white md:text-5xl"
        >
          What I Do
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="transform rounded-lg bg-slate-900 p-8 shadow-lg transition-transform hover:-translate-y-2"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="mb-4 text-2xl font-bold text-white">{service.title}</h3>
              <p className="text-slate-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;