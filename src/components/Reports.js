import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt } from 'react-icons/fa';

const Reports = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-12 sm:py-16 bg-white min-h-screen flex items-center"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-teal-600 mb-4 sm:mb-6">Reports</h2>
                <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md max-w-md mx-auto border border-teal-600">
                    <FaFileAlt className="text-teal-600 text-3xl sm:text-4xl mb-3 sm:mb-4 mx-auto" />
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                        Access your diagnostic reports online with ease.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-teal-600 text-white px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-teal-800 transition text-sm sm:text-base"
                    >
                        View Reports
                    </motion.button>
                </div>
            </div>
        </motion.section>
    );
};

export default Reports;