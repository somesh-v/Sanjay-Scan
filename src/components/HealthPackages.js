import React from 'react';
import { motion } from 'framer-motion';
import { FaFemale, FaHeartbeat } from 'react-icons/fa';

// Imports with exact folder name
import jasmineImage from './img/jasmine.png';
import tulipImage from './img/Tulip.png';
import lavenderImage from './img/Lavender.png';
import roseImage from './img/Rose.png';

const HealthPackages = () => {
    const packages = [
        {
            name: 'Jasmine Package',
            features: 'Thyroid + Uterus/Ovaries Screening',
            image: jasmineImage,
            icon: <FaFemale className="text-pink-500" />,
            color: 'pink',
        },
        {
            name: 'Tulip Package',
            features: 'Breast + Uterus/Ovaries Screening',
            image: tulipImage,
            icon: <FaFemale className="text-red-500" />,
            color: 'red',
        },
        {
            name: 'Lavender Package',
            features: 'Thyroid + Breast + Uterus/Ovaries',
            image: lavenderImage,
            icon: <FaFemale className="text-purple-500" />,
            color: 'purple',
        },
        {
            name: 'Rose Package',
            features: 'Comprehensive Thyroid + Breast + Uterus/Ovaries',
            image: roseImage,
            icon: <FaFemale className="text-rose-500" />,
            color: 'rose',
        },
    ];

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.2 },
        }),
        hover: { scale: 1.03, transition: { duration: 0.3, ease: 'easeOut' } },
    };

    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-20 bg-gradient-to-br from-gray-50 via-white to-pink-50 min-h-screen flex items-center justify-center"
        >
            <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
                        Women's Health Packages
                    </h2>
                    <p className="mt-4 text-lg md:text-xl text-gray-500 font-light">
                        Tailored wellness plans designed with care
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm mx-auto border border-gray-100"
                        >
                            <div className="relative">
                                <img
                                    src={pkg.image}
                                    alt={pkg.name}
                                    className="w-full h-48 object-cover rounded-t-2xl"
                                />
                                <div
                                    className={`absolute -bottom-5 left-5 bg-${pkg.color}-100 p-3 rounded-full shadow-lg`}
                                >
                                    <div className={`text-2xl text-${pkg.color}-500`}>{pkg.icon}</div>
                                </div>
                            </div>

                            <div className="pt-8 px-6 pb-6">
                                <h3 className={`text-xl font-semibold text-${pkg.color}-600 mb-3`}>
                                    {pkg.name}
                                </h3>
                                <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                                    {pkg.features}
                                </p>
                                <button
                                    className={`w-full py-3 bg-${pkg.color}-500 text-white rounded-lg hover:bg-${pkg.color}-600 transition-all duration-300 text-base font-medium shadow-sm`}
                                >
                                    Book Now
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default HealthPackages;