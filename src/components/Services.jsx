/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from 'framer-motion';

import { styles } from '../styles.js';
import { fadeIn, textVariant } from "../utils/motion.js";
import { servicesList } from "../constants/index.js";
import SectionWrapper from "./SectionWrapper";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a software developer, I specialize in building AI-powered web and mobile applications. I leverage modern technologies like React, Next.js, and Flutter, along with backend solutions like Firebase and PostgreSQL, to create high-performance, innovative products. From web to mobile, and even Excel automation, I turn complex problems into elegant solutions.
      </motion.p>

      <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {servicesList.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const ServicesSection = SectionWrapper(Services, "services");

export default ServicesSection;