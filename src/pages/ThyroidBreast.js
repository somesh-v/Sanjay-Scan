import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserMd, FaRibbon, FaBrain, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Placeholder images (replace with actual image paths)
import thyroidBannerImage from './img/thyroid-conditions-hero-image.jpg';
import thyroidWhatImage from './img/thyroidgland.jpg';
import breastWhatImage from './img/mammogram1.jpg';
import infantBrainWhatImage from './img/MIT-Infant-MRI-01.jpg';

const ThyroidBreast = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const faqData = [
        { q: 'Are these scans safe?', a: 'Yes, thyroid, breast, and infant brain scans are non-invasive and typically use ultrasound or other safe imaging methods.' },
        { q: 'How long do these scans take?', a: 'Most scans take 30-60 minutes, depending on the area and complexity.' },
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const whenWhyData = [
        {
            section: 'Thyroid and Neck Scan',
            when: 'Unexplained swelling, lumps, or thyroid disorder symptoms.',
            why: 'To diagnose conditions like nodules, goiter, or thyroid cancer.',
            image: thyroidWhatImage,
        },
        {
            section: 'Breast Health Screening',
            when: 'Routine screening or symptoms like lumps or pain.',
            why: 'To detect breast cancer or benign conditions early.',
            image: breastWhatImage,
        },
        {
            section: 'Infant Brain Scan',
            when: 'Premature birth, developmental delays, or seizures.',
            why: 'To assess brain development and detect abnormalities.',
            image: infantBrainWhatImage,
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#FDF8F0] text-[#5C4033] pt-16">
            {/* Banner Section */}
            <div className="relative w-full h-72 sm:h-96 md:h-[28rem] overflow-hidden">
                <img
                    src={thyroidBannerImage}
                    alt="Health Scans"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white text-center px-4"
                    >
                        Thyroid and Breast Scans
                    </motion.h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow py-10 sm:py-16">
                {/* When & Why Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#6B9E78] text-center mb-8 sm:mb-10 tracking-tight">
                        When & Why These Scans Are Prescribed
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                        {whenWhyData.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="relative bg-[#FFFFFF] h-64 sm:h-80 rounded-2xl shadow-lg border border-[#6B9E78]/10 bg-cover bg-center transition-all duration-300 flex flex-col justify-end overflow-hidden"
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                                <div className="relative p-6 sm:p-8 text-white">
                                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-center">{item.section}</h3>
                                    <p className="text-sm sm:text-base font-medium opacity-90 text-center">
                                        <strong>When:</strong> {item.when}
                                    </p>
                                    <p className="text-sm sm:text-base opacity-80 text-center">
                                        <strong>Why:</strong> {item.why}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Why Choose These Scans */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#6B9E78] text-center mb-8 sm:mb-10 tracking-tight">
                        Why Choose These Scans?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { icon: FaUserMd, title: 'Safe & Non-Invasive', text: 'Uses ultrasound or safe imaging, no radiation or discomfort.' },
                            { icon: FaRibbon, title: 'Early Detection', text: 'Identifies abnormalities early for better treatment outcomes.' },
                            { icon: FaBrain, title: 'Precise Diagnosis', text: 'Provides detailed insights for accurate medical decisions.' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -5, boxShadow: '0 12px 24px rgba(107, 158, 120, 0.15)' }}
                                className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl shadow-md border border-[#F4C430]/10 bg-gradient-to-br from-white to-[#F4C430]/5 transition-all duration-300 text-center"
                            >
                                <item.icon className="text-[#F4C430] text-4xl sm:text-5xl mb-4 mx-auto" />
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#6B9E78] mb-3">{item.title}</h3>
                                <p className="text-sm sm:text-base opacity-80">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Thyroid and Neck Scan Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#6B9E78] text-center mb-8 sm:mb-10 tracking-tight">
                        Thyroid and Neck Scan
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-10 bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl shadow-lg">
                        <img src={thyroidWhatImage} alt="Thyroid Scan" className="w-full sm:w-1/2 rounded-lg shadow-md object-cover" />
                        <div className="text-left space-y-6">
                            <p className="text-base sm:text-lg md:text-xl font-medium text-[#5C4033] opacity-90">
                                A thyroid and neck scan is a non-invasive imaging test used to assess the structure.
                            </p>
                            <div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#6B9E78] mb-3">When is it Recommended?</h3>
                                <ul className="list-none space-y-3 text-sm sm:text-base md:text-lg">
                                    {[
                                        'Unexplained swelling or lumps in the neck.',
                                        'Symptoms of thyroid disorders (weight changes, fatigue, hair loss).',
                                        'Abnormal thyroid function test results.',
                                        'Monitoring of thyroid nodules or post-thyroid surgery.',
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-[#F4C430] mr-3">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-base sm:text-lg md:text-xl font-medium text-[#5C4033] opacity-90">
                                <strong>Why is it Important?</strong> Early detection of thyroid and neck issues allows for timely treatment and management. It helps in diagnosing conditions like thyroid nodules, goiter, thyroiditis, and even thyroid cancer, reducing health risks.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Breast Health Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#6B9E78] text-center mb-8 sm:mb-10 tracking-tight">
                        Breast Health and Screening
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-10 bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl shadow-lg">
                        <img src={breastWhatImage} alt="Breast Screening" className="w-full sm:w-1/2 rounded-lg shadow-md object-cover" />
                        <div className="text-left space-y-6">
                            <p className="text-base sm:text-lg md:text-xl font-medium text-[#5C4033] opacity-90">
                                Breast screening is a medical procedure used to detect breast cancer at an early stage before symptoms appear. It typically involves mammograms, ultrasound scans, and clinical examinations.
                            </p>
                            <p className="text-base sm:text-lg md:text-xl font-medium text-[#5C4033] opacity-90">
                                <strong>Why is it Important?</strong> Early detection through screening increases the chances of successful treatment and survival. It helps identify abnormalities before they become more severe, reducing the need for aggressive treatments.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Book an Appointment */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="mb-12 sm:mb-16 text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#6B9E78] mb-6 sm:mb-8 tracking-tight">
                        Book an Appointment
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto opacity-80">
                        Schedule your scan today with our seamless booking process.
                    </p>
                    <Link to="/book">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(244, 196, 48, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-[#F4C430] to-[#E3B124] text-[#FFFFFF] px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg"
                        >
                            <FaPhone className="inline mr-2" /> Book Now
                        </motion.button>
                    </Link>
                </motion.section>

                {/* Frequently Asked Questions */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#6B9E78] text-center mb-8 sm:mb-10 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <div className="max-w-4xl mx-auto space-y-4">
                        {faqData.map((faq, index) => (
                            <motion.div
                                key={index}
                                layout
                                className="bg-[#FFFFFF] rounded-2xl shadow-md border border-[#6B9E78]/10 overflow-hidden"
                            >
                                <motion.div
                                    layout
                                    className="flex justify-between items-center p-6 sm:p-8 cursor-pointer hover:bg-[#F4C430]/10 transition-colors duration-300"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#6B9E78]">
                                        {faq.q}
                                    </h3>
                                    {openFaq === index ? (
                                        <FaMinus className="text-[#F4C430] text-xl sm:text-2xl" />
                                    ) : (
                                        <FaPlus className="text-[#F4C430] text-xl sm:text-2xl" />
                                    )}
                                </motion.div>
                                <AnimatePresence initial={false}>
                                    {openFaq === index && (
                                        <motion.div
                                            layout
                                            key="answer"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                                            className="p-6 sm:p-8 pt-0"
                                        >
                                            <p className="text-sm sm:text-base md:text-lg text-[#5C4033] opacity-80">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </div>

            {/* Footer Section */}
            <footer className="bg-[#6B9E78] py-12 sm:py-16 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                        <div className="text-[#FFFFFF]">
                            <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-[#F4C430]">Sanjay Scan Centre</h4>
                            <p className="text-base sm:text-lg text-[#FFFFFF] opacity-90">Your trusted partner for advanced diagnostics and health checkups.</p>
                        </div>
                        <div className="text-[#FFFFFF]">
                            <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-[#F4C430]">Address</h4>
                            <p className="text-base sm:text-lg text-[#FFFFFF] opacity-90">Patta Kovil, No: 2-A, 3rd Agraharam, opp. to Kasi Vishwanathar Kovil, Salem, Tamil Nadu 636001</p>
                        </div>
                        <div className="text-[#FFFFFF]">
                            <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-[#F4C430]">Contact Us</h4>
                            <p className="text-base sm:text-lg text-[#FFFFFF] opacity-90">Call: +91 08460519893</p>
                            <p className="text-base sm:text-lg text-[#FFFFFF] opacity-90">Email: info@sanjayscancentre.com</p>
                        </div>
                        <div className="text-[#FFFFFF]">
                            <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-[#F4C430]">Follow Us</h4>
                            <div className="flex space-x-6">
                                <a href="#" className="text-[#FFFFFF] hover:text-[#E3B124] transition duration-300 text-2xl">
                                    <FaFacebook />
                                </a>
                                <a href="#" className="text-[#FFFFFF] hover:text-[#E3B124] transition duration-300 text-2xl">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="text-[#FFFFFF] hover:text-[#E3B124] transition duration-300 text-2xl">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ThyroidBreast;