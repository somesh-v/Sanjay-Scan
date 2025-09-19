import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle, FaPlus, FaMinus, FaFacebook, FaTwitter, FaInstagram, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import local images
import abdomenBannerImage from './img/abdomen.jpg';
import upperAbdomenImage from './img/upper.jpg';
import lowerAbdomenImage from './img/lower.jpg';
import fullAbdomenImage from './img/full.jpg';
import abdomenPelvisImage from './img/app.jpg';
import kubImage from './img/kub.png';
import earlyDetectionImage from './img/869.jpg'; // Replace with actual path
import nonInvasiveImage from './img/11664357_20944884.jpg'; // Replace with actual path
import reliableDiagnosisImage from './img/2697984.jpg'; // Replace with actual path

const Abdomen = () => {
    // State for FAQ toggle
    const [openFaq, setOpenFaq] = useState(null);

    const faqData = [
        { q: 'What does an abdomen scan show?', a: 'An abdomen scan provides detailed images of the abdominal organs, including the liver, kidneys, pancreas, spleen, gallbladder, and intestines. It can detect gallstones, kidney stones, organ enlargement, and other abnormalities.' },
        { q: 'Why would my doctor recommend an abdomen scan?', a: 'Your doctor may recommend an abdomen scan to investigate bloating, or suspected conditions like gallstones, kidney stones, or liver enlargement.' },
        { q: 'Is an abdomen scan painful?', a: 'No, an abdomen scan is painless. A technician will apply gel and move a probe over your abdomen, which may cause slight pressure but no discomfort.' },
        { q: 'Can I have an abdomen scan if I’m pregnant?', a: 'Yes, abdomen scans (ultrasound) are safe during pregnancy as they use sound waves, not radiation. They are often used to monitor fetal development or maternal health.' },
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // Scan types data with images
    const scanTypes = [
        { title: 'Upper Abdomen', image: upperAbdomenImage },
        { title: 'Lower Abdomen', image: lowerAbdomenImage },
        { title: 'Full Abdomen', image: fullAbdomenImage },
        { title: 'Abdomen & Pelvis', image: abdomenPelvisImage },
        { title: 'KUB (Kidney, Ureter, Bladder)', image: kubImage },
    ];

    // Why choose data with images
    const whyChooseData = [
        { image: earlyDetectionImage, title: 'Early Detection', text: 'Detects health problems like gallstones and kidney stones early.' },
        { image: nonInvasiveImage, title: 'Non-Invasive', text: 'Safe procedure with no radiation exposure.' },
        { image: reliableDiagnosisImage, title: 'Reliable Diagnosis', text: 'Provides detailed images for precise organ assessment.' },
    ];

    // Staggered animation variants for the scan cards
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#FDF8F0] text-[#5C4033] pt-16">
            {/* Banner Section */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
                <img
                    src={abdomenBannerImage}
                    alt="Abdomen Scan"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-white text-center translate-y-4 md:translate-y-0 pt-16"
                    >
                        Abdomen Ultrasound Scan
                    </motion.h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow py-8 sm:py-16">
              <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="mb-10 sm:mb-14"
>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B9E78] text-center mb-6 sm:mb-8 tracking-tight">
        Why Choose an Abdomen Scan?
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {whyChooseData.map((item, index) => (
            <motion.div
                key={index}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(107, 158, 120, 0.2)' }}
                className="bg-[#FFFFFF] rounded-xl shadow-md border border-[#F4C430]/20 transition-all duration-300 text-center overflow-hidden"
            >
                <div className="relative w-full h-48 sm:h-64 md:h-80">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-t-xl"
                    />
                </div>
                <div className="p-6 sm:p-8">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#6B9E78] mb-2 sm:mb-3">{item.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base opacity-80">{item.text}</p>
                </div>
            </motion.div>
        ))}
    </div>
</motion.section>
                {/* When and Why Abdomen Scan is Prescribed Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-10 sm:mb-14"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B9E78] text-center mb-6 sm:mb-8 tracking-tight">
                        When & Why Abdomen Scan is Prescribed
                    </h2>
                    <div className="bg-[#FFFFFF] p-4 sm:p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
                        <p className="text-sm sm:text-base md:text-lg opacity-80 mb-4">
                            An abdomen scan is prescribed to diagnose and monitor abdominal conditions. Common reasons include:
                        </p>
                        <ul className="list-none space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base">
                            {[
                                'Detection of gallstones or gallbladder inflammation.',
                                'Identifying kidney stones and assessing kidney health.',
                                'Evaluating conditions like an enlarged liver or spleen.',
                                'Identifying fluid accumulation or ascites in the abdominal cavity.',
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="text-[#F4C430] mr-2">•</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.section>

                {/* Things You Should Know Before Taking an Abdomen Scan Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-10 sm:mb-14"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B9E78] text-center mb-6 sm:mb-8 tracking-tight">
                        Preparing for Your Abdomen Scan
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
                        {[
                            { text: 'Fast for 4-6 hours before the scan to ensure clear images.' },
                            { text: 'Wear loose-fitting clothing without metal zippers or buttons.' },
                            { text: 'Lie still during the 15-30 minute procedure for accurate results.' },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.03 }}
                                className="bg-[#FFFFFF] p-4 sm:p-6 rounded-xl shadow-lg border border-[#6B9E78]/10 transition-all duration-300 flex items-center"
                            >
                                <span className="w-3 h-3 bg-[#F4C430] rounded-full mr-3"></span>
                                <p className="text-xs sm:text-sm md:text-base">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Abdomen Scan Types Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-10 sm:mb-14"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B9E78] text-center mb-6 sm:mb-8 tracking-tight">
                        Abdomen Scan Types
                    </h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                    >
                        {scanTypes.map((scan, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ scale: 1.03 }}
                                className="bg-[#FFFFFF] p-4 sm:p-6 rounded-xl shadow-lg border border-[#6B9E78]/10 transition-all duration-300"
                            >
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#6B9E78] mb-3 sm:mb-4 border-b border-[#F4C430]/30 pb-2">{scan.title}</h3>
                                <div className="flex items-center space-x-3 sm:space-x-4">
                                    <img src={scan.image} alt={scan.title} className="w-24 sm:w-30 h-12 sm:h-16 rounded-md object-cover" />
                                    <p className="text-xs sm:text-sm md:text-base font-medium text-[#5C4033]">{scan.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>
   {/* 7. Book an Appointment */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-10 sm:mb-14 text-center pt-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B9E78] mb-4 sm:mb-6 tracking-tight">Book an Appointment</h2>
                    <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto opacity-80">
                        Schedule your Doppler scan today with our seamless booking process.
                    </p>
                    <Link to="/book">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(244, 196, 48, 0.3)' }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#F4C430] text-[#FFFFFF] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-lg hover:bg-[#E3B124] transition-all duration-300 shadow-md"
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
                    transition={{ duration: 0.8 }}
                    className="mb-10 sm:mb-14"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B9E78] text-center mb-6 sm:mb-8 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
                        {faqData.map((faq, index) => (
                            <motion.div
                                key={index}
                                layout
                                className="bg-[#FFFFFF] rounded-xl shadow-md border border-[#6B9E78]/10 overflow-hidden"
                            >
                                <motion.div
                                    layout
                                    className="flex justify-between items-center p-4 sm:p-6 cursor-pointer hover:bg-[#F4C430]/10 transition-colors duration-200"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#6B9E78]">
                                        {faq.q}
                                    </h3>
                                    {openFaq === index ? (
                                        <FaMinus className="text-[#F4C430] text-lg sm:text-xl" />
                                    ) : (
                                        <FaPlus className="text-[#F4C430] text-lg sm:text-xl" />
                                    )}
                                </motion.div>
                                <AnimatePresence initial={false}>
                                    {openFaq === index && (
                                        <motion.div
                                            layout
                                            key="answer"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="p-4 sm:p-6 pt-0"
                                        >
                                            <p className="text-xs sm:text-sm md:text-base text-[#5C4033] opacity-80">
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
            <footer className="bg-[#6B9E78] py-12 sm:py-16 w-full m-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <div className="text-[#FFFFFF]">
                            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-[#F4C430]">Sanjay Scan Centre</h4>
                            <p className="text-sm sm:text-base text-[#FFFFFF]">Your trusted partner for advanced diagnostics and health checkups.</p>
                        </div>
                        <div className="text-[#FFFFFF]">
                            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-[#F4C430]">Address</h4>
                            <p className="text-sm sm:text-base text-[#FFFFFF]">Patta Kovil, No: 2-A, 3rd Agraharam, opp. to Kasi Vishwanathar Kovil, Salem, Tamil Nadu 636001</p>
                        </div>
                        <div className="text-[#FFFFFF]">
                            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-[#F4C430]">Contact Us</h4>
                            <p className="text-sm sm:text-base text-[#FFFFFF]">Call: +91 08460519893</p>
                            <p className="text-sm sm:text-base text-[#FFFFFF]">Email: info@sanjayscancentre.com</p>
                        </div>
                        <div className="text-[#FFFFFF]">
                            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-[#F4C430]">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-[#FFFFFF] hover:text-[#E3B124] transition duration-300">
                                    <FaFacebook size={24} />
                                </a>
                                <a href="#" className="text-[#FFFFFF] hover:text-[#E3B124] transition duration-300">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="#" className="text-[#FFFFFF] hover:text-[#E3B124] transition duration-300">
                                    <FaInstagram size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Abdomen;