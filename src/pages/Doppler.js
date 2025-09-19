import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStethoscope, FaHeartbeat, FaShieldAlt, FaClock, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import local images
import legPainImage from './img/dop1.jpg';
import pregnancyImage from './img/dop2.jpg';
import postSurgeryImage from './img/dop3.jpg';
import dopplerProcedureImage from './img/doppler.jpg';
import veinsImage from './img/single.png';
import arteriesImage from './img/single.png';
import varicoseVeinsImage from './img/single.png';
import renalArteryImage from './img/single.png';
import carotidImage from './img/single.png';
import dopplerBannerImage from './img/doppler-scan-in-thrissur.png'; // Add your Doppler banner image
const Doppler = () => {
    const pricingData = [
        {
            heading: 'Doppler LL/UL Veins',
            items: [
                { title: 'Single Limb',  image: veinsImage },
                { title: 'Both Limbs', image: veinsImage },
            ],
        },
        {
            heading: 'Doppler LL/UL Arteries',
            items: [
                { title: 'Single Limb', image: arteriesImage },
                { title: 'Both Limbs',  image: arteriesImage },
            ],
        },
        {
            heading: 'Doppler LL/UL Varicose Veins',
            items: [
                { title: 'Single Limb',image: varicoseVeinsImage },
                { title: 'Both Limbs',image: varicoseVeinsImage },
            ],
        },
        {
            heading: 'Doppler LL/UL Arteries and Veins',
            items: [
                { title: 'Single Limb',  image: arteriesImage },
                { title: 'Both Limbs',  image: arteriesImage },
            ],
        },
        {
            heading: 'Specialized Doppler Scans',
            items: [
                { title: 'Renal Artery Doppler', image: renalArteryImage },
                { title: 'Carotid Doppler', image: carotidImage },
            ],
        },
    ];

    const whenWhyData = [
        {
            when: 'You experience leg pain, swelling, or suspected vascular issues.',
            why: 'To diagnose blood clots (e.g., deep vein thrombosis), blocked arteries, or poor circulation.',
            image: legPainImage,
        },
        {
            when: 'During pregnancy to monitor fetal health.',
            why: 'To assess blood flow between mother and baby.',
            image: pregnancyImage,
        },
        {
            when: 'Post-surgery or injury affecting blood vessels.',
            why: 'To evaluate healing and ensure proper blood flow.',
            image: postSurgeryImage,
        },
    ];

    // State to track which FAQ is open
    const [openFaq, setOpenFaq] = useState(null);

    const faqData = [
        { q: 'Is a Doppler scan safe?', a: 'Yes, it’s non-invasive and uses sound waves, not radiation.' },
        { q: 'How long does it take?', a: 'Typically 30-60 minutes, depending on the area scanned.' },
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#FDF8F0] text-[#5C4033] pt-16">

              {/* Banner Section */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
                <img
                    src={dopplerBannerImage}
                    alt="Doppler Scan"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-white text-center translate-y-4 md:translate-y-0 pt-16"
                    >
                        Doppler Ultrasound Scan
                    </motion.h1>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow py-8 sm:py-16">
               

                {/* 2. When & Why Doppler is Prescribed */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-10 sm:mb-14"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B9E78] text-center mb-6 sm:mb-8 tracking-tight">When & Why Doppler is Prescribed</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                        {whenWhyData.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.03 }}
                                className="bg-[#FFFFFF] p-4 sm:p-6 rounded-xl shadow-lg border border-[#6B9E78]/10 transition-all duration-300 flex flex-col items-center"
                            >
                                <img src={item.image} alt={item.when} className="w-32 sm:w-40 h-32 sm:h-40 rounded-lg mb-3 sm:mb-4 object-cover" />
                                <p className="text-xs sm:text-sm md:text-base font-semibold text-[#6B9E78] mb-2 leading-tight"><strong>When:</strong> {item.when}</p>
                                <p className="text-xs sm:text-sm md:text-base opacity-80"><strong>Why:</strong> {item.why}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 3. Why You Should Take a Doppler (Cards) */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-10 sm:mb-14"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B9E78] text-center mb-6 sm:mb-8 tracking-tight">Why Choose a Doppler Scan?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                        {[
                            { icon: FaShieldAlt, title: 'Safe & Non-Invasive', text: 'No radiation or needles, ensuring a comfortable experience.' },
                            { icon: FaHeartbeat, title: 'Reliable Diagnosis', text: 'Detects blood flow issues with precision for effective treatment.' },
                            { icon: FaClock, title: 'Quick Results', text: 'Get insights fast, typically within 30-60 minutes.' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(107, 158, 120, 0.2)' }}
                                className="bg-[#FFFFFF] p-4 sm:p-6 rounded-xl shadow-md border border-[#F4C430]/20 transition-all duration-300 text-center"
                            >
                                <item.icon className="text-[#F4C430] text-3xl sm:text-4xl mb-3 sm:mb-4 mx-auto" />
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#6B9E78] mb-2 sm:mb-3">{item.title}</h3>
                                <p className="text-xs sm:text-sm md:text-base opacity-80">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 4. Doppler Procedure */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-10 sm:mb-14"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B9E78] text-center mb-6 sm:mb-8 tracking-tight">Doppler Procedure</h2>
                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 bg-[#FFFFFF] p-4 sm:p-6 rounded-xl shadow-lg">
                        <img src={dopplerProcedureImage} alt="Doppler Procedure" className="w-full sm:w-1/2 rounded-lg shadow-md object-cover" />
                        <div className="text-left space-y-4 sm:space-y-6">
                            <p className="text-sm sm:text-base md:text-lg font-medium text-[#5C4033] opacity-90">
                                The Doppler procedure :
                            </p>
                            <ul className="list-none space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base">
                                {['You’ll lie on an examination table.', 'A technician/doctor  applies gel to the area being scanned.', 'A handheld transducer captures blood flow images.', 'The process takes 30-60 minutes, with quick results.'].map((step, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="text-[#F4C430] mr-2">•</span> {step}
                                    </li>
                                ))}
                            </ul>
                            <div>
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#6B9E78] mb-2 sm:mb-3">Before Your Doppler</h3>
                                <ul className="list-none space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base">
                                    {['Wear loose-fitting clothing.', , 'Avoid smoking 24 hours prior.', ].map((prep, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-[#F4C430] mr-2">•</span> {prep}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* 5. Doppler Price */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-10 sm:mb-14"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B9E78] text-center mb-6 sm:mb-8 tracking-tight">Doppler Scans</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {pricingData.map((category, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.03 }}
                                className="bg-[#FFFFFF] p-4 sm:p-6 rounded-xl shadow-lg border border-[#6B9E78]/10 transition-all duration-300"
                            >
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#6B9E78] mb-3 sm:mb-4 border-b border-[#F4C430]/30 pb-2">{category.heading}</h3>
                                {category.items.map((item, idx) => (
                                    <div key={idx} className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                                        <img src={item.image} alt={item.title} className="w-12 sm:w-16 h-12 sm:h-16 rounded-md object-cover" />
                                        <div>
                                            <p className="text-xs sm:text-sm md:text-base font-medium text-[#5C4033]">{item.title}</p>
                                            <p className="text-[#C19A6B] text-sm sm:text-base md:text-lg font-bold">{item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* 6. How It Works */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-10 sm:mb-14"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B9E78] text-center mb-6 sm:mb-8 tracking-tight">How Doppler Works</h2>
                    <div className="bg-[#FFFFFF] p-4 sm:p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
                        <p className="text-sm sm:text-base md:text-lg opacity-80 leading-relaxed">
                            A Doppler scan uses high-frequency sound waves that bounce off moving blood cells. These waves are converted into real-time, color-coded images, revealing blood flow speed and direction. This enables precise detection of circulation issues.
                        </p>
                    </div>
                </motion.section>

                {/* 7. Book an Appointment */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-10 sm:mb-14 text-center"
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

               {/* 8. Frequently Asked Questions */}
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
            <footer className="bg-[#6B9E78] py-12 sm:py-16 w-full m-0"> {/* Added m-0 to remove margin */}
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
                                    <FaFacebook />
                                </a>
                                <a href="#" className="text-[#FFFFFF] hover:text-[#E3B124] transition duration-300">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="text-[#FFFFFF] hover:text-[#E3B124] transition duration-300">
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

export default Doppler;