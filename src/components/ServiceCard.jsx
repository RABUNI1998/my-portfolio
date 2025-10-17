
/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion.js";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    whileHover={{ scale: 1.05, y: -10 }}
    transition={{ type: "spring", stiffness: 300 }}
    className='w-full p-[1px] rounded-[20px] shadow-card'
  >
    <div
      style={{
        background: 'linear-gradient(135deg, #151030, #050816)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
      }}
      className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className='text-white text-[20px] font-bold text-center'>
        {title}
      </h3>
    </div>
  </motion.div>
);

export default ServiceCard;