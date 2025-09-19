import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaBaby } from 'react-icons/fa';

// Import local images
import TwinsDating from './img/TwinsDating.jpg'; // Image for 8-10 Weeks (Dating)
import TwinsDoppler1 from './img/winsDoppler1.jpg'; // Image for 11-17 Weeks with Doppler
import TwinsGrowth from './img/TwinsGrowth.jpg'; // Image for Growth with Doppler
import TwinsAnatomy from './img/anatomy.jpg'; // Image for 18-24 Weeks Anatomy
import TwinsAFI from './img/dopplerafi.jpg'; // Image for Doppler and AFI
import twinGestationBannerImage from './img/TwinsDating.jpg'; // Banner image

const TwinGestation = () => {
    const scans = [
        {
            title: "8-10 Weeks (Dating)",
            description: "Confirms twins, type, and gestational age.",
            image: TwinsDating,
        },
        {
            title: "11-17 Weeks with Doppler",
            description: "Evaluates blood flow and early complications.",
            image: TwinsDoppler1,
        },
        {
            title: "Growth with Doppler",
            description: "Monitors growth and development of twins.",
            image: TwinsGrowth,
        },
        {
            title: "18-24 Weeks Anatomy",
            description: "Assesses physical development of twins.",
            image: TwinsAnatomy,
        },
        {
            title: "Doppler and AFI",
            description: "Checks blood flow and fluid levels.",
            image: TwinsAFI,
        },
    ];

    // Animation Variants
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
        hover: { scale: 1.03, boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)" },
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#FDF8F0] pt-16">
            {/* Banner Section */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
                <img
                    src={twinGestationBannerImage}
                    alt="Twin Gestation Scan"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-white text-center translate-y-4 md:translate-y-0 pt-16"
                    >
                        Twin Gestation Scan
                    </motion.h1>
                </div>
            </div>

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-12 sm:py-16 flex-grow"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                 
                    {/* Cards Section */}
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
                            {scans.map((scan, index) => (
                                <motion.div
                                    key={scan.title}
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    whileHover="hover"
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="bg-[#FFFFFF] rounded-xl shadow-lg border border-[#FDF8F0] hover:shadow-xl transition duration-300 flex flex-col h-72 sm:h-[30rem] relative z-10 overflow-hidden"
                                >
                                    {/* Image Section */}
                                    <div className="h-[40%] relative overflow-hidden">
                                        <motion.img
                                            src={scan.image}
                                            alt={scan.title}
                                            className="w-full h-full object-cover rounded-t-xl"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                    {/* Heading Section */}
                                    <div className="h-[20%] bg-[#F4C430] flex items-center justify-center p-4">
                                        <h3 className="text-base sm:text-xl font-semibold text-[#FFFFFF] text-center">
                                            {scan.title}
                                        </h3>
                                    </div>
                                    {/* Content Section */}
                                    <div className="h-[40%] flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-[#FFFFFF] to-[#FDF8F0]">
                                        <p className="text-[#5C4033] text-sm sm:text-base text-center mb-4 font-medium">
                                            {scan.description}
                                        </p>
                                        <Link to="/book">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-[#F4C430] text-[#FFFFFF] px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-[#E3B124] transition text-sm sm:text-base shadow-md"
                                            >
                                                Book Now
                                            </motion.button>
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced Preparation Section */}
                    <div className="mt-12 max-w-3xl mx-auto bg-[#FFFFFF] rounded-xl p-8 shadow-lg border border-[#FDF8F0] mb-16">
                        <h3 className="text-2xl font-semibold text-[#6B9E78] mb-6">Preparing for Your Scan</h3>
                        <p className="text-[#5C4033] text-base mb-6 bg-[#FDF8F0] p-4 rounded-lg shadow-sm">
                            Follow these tips for the best scan results:
                        </p>
                        <ul className="space-y-4 text-[#5C4033] text-base">
                            <li className="flex items-center bg-[#FDF8F0] p-3 rounded-lg shadow-sm hover:bg-[#F4C430] hover:text-[#FFFFFF] transition duration-300">
                                <span className="w-3 h-3 bg-[#F4C430] rounded-full mr-3"></span>
                                Drink water before the scan.
                            </li>
                            <li className="flex items-center bg-[#FDF8F0] p-3 rounded-lg shadow-sm hover:bg-[#F4C430] hover:text-[#FFFFFF] transition duration-300">
                                <span className="w-3 h-3 bg-[#F4C430] rounded-full mr-3"></span>
                                Wear comfortable clothing.
                            </li>
                            <li className="flex items-center bg-[#FDF8F0] p-3 rounded-lg shadow-sm hover:bg-[#F4C430] hover:text-[#FFFFFF] transition duration-300">
                                <span className="w-3 h-3 bg-[#F4C430] rounded-full mr-3"></span>
                                Bring past ultrasound reports.
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.section>

            {/* Footer Section */}
            <footer className="bg-[#6B9E78] py-12 sm:py-16 border-t border-[#6B9E78]/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                        <div>
                            <h4 className="text-xl font-semibold text-[#F4C430] mb-4">Sanjay Scan Centre</h4>
                            <p className="text-base text-[#FFFFFF] opacity-80">
                                Your trusted partner for advanced diagnostics and health checkups.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-[#F4C430] mb-4">Address</h4>
                            <p className="text-base text-[#FFFFFF] opacity-80">
                                123 Health Street, Chennai, Tamil Nadu, India
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-[#F4C430] mb-4">Contact Us</h4>
                            <p className="text-base text-[#FFFFFF] opacity-80">Call: +91 123 456 7890</p>
                            <p className="text-base text-[#FFFFFF] opacity-80">Email: info@sanjayscancentre.com</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-[#F4C430] mb-4">Follow Us</h4>
                            <div className="flex space-x-6">
                                <motion.a
                                    href="#"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    className="text-[#FFFFFF] hover:text-[#E3B124] transition duration-300"
                                >
                                    <FaFacebook size={24} />
                                </motion.a>
                                <motion.a
                                    href="#"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    className="text-[#FFFFFF] hover:text-[#E3B124] transition duration-300"
                                >
                                    <FaTwitter size={24} />
                                </motion.a>
                                <motion.a
                                    href="#"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    className="text-[#FFFFFF] hover:text-[#E3B124] transition duration-300"
                                >
                                    <FaInstagram size={24} />
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TwinGestation;