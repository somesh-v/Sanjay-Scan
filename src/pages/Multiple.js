import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers } from 'react-icons/fa';

const Multiple = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12 sm:py-16 bg-white min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FaUsers className="text-teal-600 text-4xl sm:text-5xl mb-4 sm:mb-6 mx-auto" />
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-600 mb-4 sm:mb-6">Multiple (3) Scan</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-3 sm:mb-4 text-sm sm:text-base">
          This advanced ultrasound is tailored for pregnancies with three or more fetuses. It provides detailed imaging to monitor growth, development, and potential risks in higher-order multiple births.
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm">
          Sanjay Scan Centre offers expert care and cutting-edge technology to support families expecting multiple babies.
        </p>
      </div>
    </motion.section>
  );
};

export default Multiple;