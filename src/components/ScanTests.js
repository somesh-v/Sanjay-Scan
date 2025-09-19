import React from 'react';
import { motion } from 'framer-motion';
import { FaStethoscope } from 'react-icons/fa';

const ScanTests = () => {
    const tests = [
        { name: 'Doppler', icon: <FaStethoscope /> },
        { name: 'Obestrics', icon: <FaStethoscope /> },
        { name: 'Twin Gestation', icon: <FaStethoscope /> },
        { name: 'Multiple (>3)', icon: <FaStethoscope /> },
        { name: 'Abdomen', icon: <FaStethoscope /> },
        { name: 'Thyroid and Breast', icon: <FaStethoscope /> },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-16 bg-gray-50 min-h-screen flex items-center"
        >
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-teal-600 text-center mb-8">Scan and Tests</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tests.map((test, index) => (
                        <motion.div
                            key={test.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                        >
                            <div className="text-teal-500 text-3xl mb-4">{test.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800">{test.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ScanTests;