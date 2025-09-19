import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStethoscope, FaBaby, FaUserFriends, FaUsers, FaHeart, FaUser } from 'react-icons/fa';

const Scans = () => {
    const tests = [
        { name: 'Doppler', icon: <FaStethoscope />, path: '/scans/doppler', summary: 'Blood flow assessment' },
        { name: 'Obestrics', icon: <FaBaby />, path: '/scans/obestrics', summary: 'Pregnancy monitoring' },
        { name: 'Twin Gestation', icon: <FaUserFriends />, path: '/scans/twin-gestation', summary: 'Twin pregnancy scan' },
        { name: 'Multiple (>3)', icon: <FaUsers />, path: '/scans/multiple', summary: 'Multi-fetus scan' },
        { name: 'Abdomen', icon: <FaHeart />, path: '/scans/abdomen', summary: 'Abdominal organ evaluation' },
        { name: 'Thyroid and Breast', icon: <FaUser />, path: '/scans/thyroid-breast', summary: 'Gland and tissue scan' },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-12 sm:py-16 bg-white min-h-screen flex items-center"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-teal-600 text-center mb-6 sm:mb-8">
                    Scan and Tests
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {tests.map((test, index) => (
                        <motion.div
                            key={test.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition flex flex-col items-center text-center border border-teal-600"
                        >
                            <div className="text-teal-600 text-2xl sm:text-3xl mb-3 sm:mb-4">{test.icon}</div>
                            <h3 className="text-lg sm:text-xl font-semibold text-teal-600 mb-2">{test.name}</h3>
                            <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{test.summary}</p>
                            <Link
                                to={test.path}
                                className="text-teal-600 hover:text-teal-800 font-medium text-sm sm:text-base"
                            >
                                Learn More
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Scans;