import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBaby, FaQuestionCircle } from 'react-icons/fa';
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { AnimatePresence } from 'framer-motion';
import { FaInfoCircle, FaEye, FaBullseye, FaUsers, FaClock, FaUserMd,FaPhone, FaDollarSign, FaUserFriends, FaShieldAlt, FaStethoscope, FaHeartbeat, FaFacebook, FaTwitter, FaInstagram, FaTrophy,FaPlus, FaMinus } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

// Import banner image (adjust path based on your project structure)
import obstetricsBannerImg from './img/obes.jpeg';

// Import scan type images (replace with actual image paths)
import datingScanImg from './img/dat.jpg';
import ntScanImg from './img/NT-Scan.jpg';
import anomalyScanImg from './img/ana.png';
import growthScanImg from './img/Growth-Scan.jpg';
import dopplerScanImg from './img/dopplerafi.jpg';

// Staggered animation variants for the carousel
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

const Obstetrics = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const scans = [
        { type: "Dating Scan", description: "Confirms pregnancy and estimates due date.", image: datingScanImg },
        { type: "NT Scan", description: "Screens for chromosomal abnormalities.", image: ntScanImg },
        { type: "Anomaly Scan", description: "Detailed anatomy check of the of baby.", image: anomalyScanImg },
        { type: "Growth Scan", description: "Monitors fetal growth and amniotic fluid.", image: growthScanImg },
        { type: "Doppler Scan", description: "Checks blood flow to the placenta and baby.", image: dopplerScanImg },
    ];

    const wellnessData = [
        {
            category: "Diet",
            tips: [
                { title: "Foods to Eat", details: "Leafy greens, lean proteins, whole grains, dairy products, and fruits rich in vitamins." },
                { title: "Foods to Avoid", details: "Raw fish, unpasteurized dairy, undercooked meat, excessive caffeine, and alcohol." }
            ]
        },
        {
            category: "Exercise",
            tips: [
                { title: "Safe Activities", details: "Prenatal yoga, walking, swimming, low-impact aerobics, and pelvic floor exercises." },
                { title: "Exercises to Avoid", details: "High-impact sports, contact sports, heavy lifting, and exercises with risk of falling." }
            ]
        },
        {
            category: "Wellness",
            tips: [
                { title: "Stress Management", details: "Meditation, breathing exercises, prenatal massage, and talking with a counselor if needed." },
                { title: "Sleep Tips", details: "Sleep on your side with a pregnancy pillow, maintain a routine, and avoid caffeine before bed." }
            ]
        },
    ];

    const symptoms = [
        {
            name: "Morning Sickness",
            description: "Common in first trimester, often improves by week 14-16",
            remedies: [
                "Eat small, frequent meals",
                "Ginger tea or supplements",
                "Vitamin B6 supplements",
                "Acupressure wristbands",
                "Avoid strong odors"
            ]
        },
        {
            name: "Back Pain",
            description: "Typically develops in second and third trimesters",
            remedies: [
                "Prenatal yoga or stretching",
                "Warm compresses",
                "Supportive maternity belt",
                "Proper posture",
                "Low-impact exercise"
            ]
        },
        {
            name: "Heartburn",
            description: "Common throughout pregnancy, especially later stages",
            remedies: [
                "Eat smaller meals",
                "Avoid spicy/greasy foods",
                "Don't lie down after eating",
                "Elevate head while sleeping",
                "Antacids (doctor approved)"
            ]
        }
    ];

    const faqs = [
        { question: "When should I schedule my first obstetric scan?", answer: "Between 6 to 9 weeks to confirm pregnancy and estimate due date." },
        { question: "What foods should I avoid during pregnancy?", answer: "Avoid raw fish, unpasteurized dairy, undercooked meat, and excessive caffeine." },
        { question: "How often should I visit my doctor?", answer: "Monthly until 28 weeks, twice monthly until 36 weeks, then weekly." },
        { question: "Is ultrasound safe during pregnancy?", answer: "Yes, obstetric ultrasound uses sound waves, not radiation, and is considered very safe." },
        { question: "What should I bring to my first appointment?", answer: "Bring your medical history, any current medications, and insurance information." }
    ];

    // Carousel settings for react-slick
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="bg-[#FDF8F0] pt-16">
            {/* Banner Section with "Obstetrics" Heading */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
                <img
                    src={obstetricsBannerImg}
                    alt="Obstetrics"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-white text-center translate-y-4 md:translate-y-0 pt-16"
                    >
                        Obstetrics
                    </motion.h1>
                </div>
            </div>

            {/* Pregnancy Scan Types Section with Carousel */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-16 sm:py-20 bg-[#FFFFFF]"
            >
                <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#6B9E78] uppercase mb-6 sm:mb-8 text-center tracking-wide">
                        Pregnancy Scan Types
                    </h2>
                    <p className="text-[#5C4033] max-w-2xl mx-auto mb-8 sm:mb-12 text-base sm:text-lg font-medium leading-relaxed text-center">
                        Different types of scans are performed at various stages of pregnancy to monitor both maternal and fetal health.
                    </p>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <Slider {...carouselSettings}>
                            {scans.map((scan, index) => (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    className="px-2"
                                >
                                    <div className="bg-[#FDF8F0] rounded-lg shadow-lg p-6 text-center h-full flex flex-col justify-between border border-[#F4C430]">
                                        <img
                                            src={scan.image}
                                            alt={scan.type}
                                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                                        />
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-semibold text-[#5C4033] mb-2">
                                                {scan.type}
                                            </h3>
                                            <p className="text-[#5C4033] text-sm sm:text-base">
                                                {scan.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </Slider>
                    </motion.div>
                </div>
            </motion.section>

            {/* Why Should You Get Obstetric Scans? Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-16 sm:py-20 bg-[#FDF8F0]"
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#6B9E78] uppercase tracking-tight">
                            Why Should You Get Obstetric Scans?
                        </h2>
                        <div className="mt-4 h-1 w-20 bg-[#F4C430] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#6B9E78] flex items-center justify-center mb-4">
                                <CheckCircleIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-[#5C4033] mb-2 text-center">
                                Pregnancy Confirmation
                            </h3>
                            <p className="text-sm sm:text-base text-[#5C4033]/90 text-center">
                                Confirm pregnancy viability and estimate due date accurately.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#6B9E78] flex items-center justify-center mb-4">
                                <CheckCircleIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-[#5C4033] mb-2 text-center">
                                Fetal Development
                            </h3>
                            <p className="text-sm sm:text-base text-[#5C4033]/90 text-center">
                                Monitor fetal growth and development throughout pregnancy.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#6B9E78] flex items-center justify-center mb-4">
                                <CheckCircleIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-[#5C4033] mb-2 text-center">
                                Early Detection
                            </h3>
                            <p className="text-sm sm:text-base text-[#5C4033]/90 text-center">
                                Detect potential complications early for timely intervention.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#6B9E78] flex items-center justify-center mb-4">
                                <CheckCircleIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-[#5C4033] mb-2 text-center">
                                Placenta Assessment
                            </h3>
                            <p className="text-sm sm:text-base text-[#5C4033]/90 text-center">
                                Assess placenta position and amniotic fluid levels.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* When and Why Obstetric Scans Are Prescribed Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-16 sm:py-20 bg-gradient-to-b from-[#FDF8F0] to-[#f8f0e1]"
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-flex items-center justify-center mb-5">
                            <div className="relative">
                                <div className="absolute -inset-3 bg-[#6B9E78]/20 rounded-full blur-md"></div>
                                <div className="relative p-4 bg-white rounded-full shadow-lg">
                                    <FaQuestionCircle className="text-[#F4C430] text-4xl sm:text-5xl" />
                                </div>
                            </div>
                        </div>
                        <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-[#5C4033] mb-4">
                            When Are Obstetric Scans Recommended?
                        </h2>
                        <p className="text-lg sm:text-xl text-[#5C4033]/90 max-w-3xl mx-auto">
                            Essential scans throughout your pregnancy journey
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl shadow-md overflow-hidden border-l-4 border-[#6B9E78]"
                        >
                            <div className="p-6 sm:p-8">
                                <div className="flex items-center mb-4">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-12 h-12 rounded-full bg-[#6B9E78] flex items-center justify-center">
                                            <span className="text-white text-xl font-bold">1</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#5C4033]">
                                        First Trimester
                                    </h3>
                                </div>
                                <p className="text-[#5C4033]/90 text-base sm:text-lg mb-4">
                                    Typically between 6-12 weeks
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-[#6B9E78] mt-0.5 mr-2" />
                                        <span className="text-[#5C4033]">Confirm pregnancy viability</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-[#6B9E78] mt-0.5 mr-2" />
                                        <span className="text-[#5C4033]">Check fetal heartbeat</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-[#6B9E78] mt-0.5 mr-2" />
                                        <span className="text-[#5C4033]">Estimate due date</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-[#6B9E78] mt-0.5 mr-2" />
                                        <span className="text-[#5C4033]">Screen for chromosomal abnormalities</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl shadow-md overflow-hidden border-l-4 border-[#F4C430]"
                        >
                            <div className="p-6 sm:p-8">
                                <div className="flex items-center mb-4">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-12 h-12 rounded-full bg-[#F4C430] flex items-center justify-center">
                                            <span className="text-white text-xl font-bold">2</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#5C4033]">
                                        Second Trimester
                                    </h3>
                                </div>
                                <p className="text-[#5C4033]/90 text-base sm:text-lg mb-4">
                                    Typically between 18-22 weeks
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-[#F4C430] mt-0.5 mr-2" />
                                        <span className="text-[#5C4033]">Detailed anatomy scan</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-[#F4C430] mt-0.5 mr-2" />
                                        <span className="text-[#5C4033]">Check organ formation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-[#F4C430] mt-0.5 mr-2" />
                                        <span className="text-[#5C4033]">Assess growth and development</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-[#F4C430] mt-0.5 mr-2" />
                                        <span className="text-[#5C4033]">Determine baby's sex (if desired)</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl shadow-md overflow-hidden border-l-4 border-[#6B9E78]"
                        >
                            <div className="p-6 sm:p-8">
                                <div className="flex items-center mb-4">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-12 h-12 rounded-full bg-[#6B9E78] flex items-center justify-center">
                                            <span className="text-white text-xl font-bold">3</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#5C4033]">
                                        Third Trimester
                                    </h3>
                                </div>
                                <p className="text-[#5C4033]/90 text-base sm:text-lg mb-4">
                                    Typically between 28-40 weeks
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-[#6B9E78] mt-0.5 mr-2" />
                                        <span className="text-[#5C4033]">Monitor fetal growth</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-[#6B9E78] mt-0.5 mr-2" />
                                        <span className="text-[#5C4033]">Check baby's position</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-[#6B9E78] mt-0.5 mr-2" />
                                        <span className="text-[#5C4033]">Assess placenta location</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-[#6B9E78] mt-0.5 mr-2" />
                                        <span className="text-[#5C4033]">Measure amniotic fluid levels</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-2xl shadow-md overflow-hidden border-l-4 border-[#F4C430]"
                        >
                            <div className="p-6 sm:p-8">
                                <div className="flex items-center mb-4">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-12 h-12 rounded-full bg-[#F4C430] flex items-center justify-center">
                                            <FaBaby className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#5C4033]">
                                        Special Circumstances
                                    </h3>
                                </div>
                                <p className="text-[#5C4033]/90 text-base sm:text-lg mb-4">
                                    Additional scans when needed
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-[#F4C430] mt-0.5 mr-2" />
                                        <span className="text-[#5C4033]">High-risk pregnancies</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-[#F4C430] mt-0.5 mr-2" />
                                        <span className="text-[#5C4033]">Multiple pregnancies (twins, triplets)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-[#F4C430] mt-0.5 mr-2" />
                                        <span className="text-[#5C4033]">Suspected complications</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-[#F4C430] mt-0.5 mr-2" />
                                        <span className="text-[#5C4033]">Monitoring existing conditions</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
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
                                  Schedule your Obestrics scan today with our seamless booking process.
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
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6B9E78] text-center mb-6 sm:mb-8 tracking-tight pt-16">
        Frequently Asked Questions
    </h2>

    <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
            <motion.div
                key={index}
                layout
                className="bg-[#FFFFFF] rounded-xl shadow-md border border-[#6B9E78]/10 overflow-hidden"
            >
                <motion.div
                    layout
                    className="flex justify-between items-center p-4 sm:p-6 cursor-pointer hover:bg-[#F4C430]/10 transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                >
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#6B9E78]">
                        {faq.question}
                    </h3>
                    {openIndex === index ? (
                        <FaMinus className="text-[#F4C430] text-lg sm:text-xl" />
                    ) : (
                        <FaPlus className="text-[#F4C430] text-lg sm:text-xl" />
                    )}
                </motion.div>

                <AnimatePresence initial={false}>
                    {openIndex === index && (
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
                                {faq.answer}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        ))}
    </div>
</motion.section>

            {/* Footer Section */}
            <footer className="bg-[#6B9E78] py-8 sm:py-12 w-full m-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        <div className="text-[#FFFFFF]">
                            <h4 className="text-base sm:text-lg font-semibold mb-3 text-[#F4C430]">Sanjay Scan Centre</h4>
                            <p className="text-xs sm:text-sm text-[#FFFFFF]">Your trusted partner for advanced diagnostics and health checkups.</p>
                        </div>
                        <div className="text-[#FFFFFF]">
                            <h4 className="text-base sm:text-lg font-semibold mb-3 text-[#F4C430]">Address</h4>
                            <p className="text-xs sm:text-sm text-[#FFFFFF]">Patta Kovil, No: 2-A, 3rd Agraharam, opp. to Kasi Vishwanathar Kovil, Salem, Tamil Nadu 636001</p>
                        </div>
                        <div className="text-[#FFFFFF]">
                            <h4 className="text-base sm:text-lg font-semibold mb-3 text-[#F4C430]">Contact Us</h4>
                            <p className="text-xs sm:text-sm text-[#FFFFFF]">Call: +91 08460519893</p>
                            <p className="text-xs sm:text-sm text-[#FFFFFF]">Email: info@sanjayscancentre.com</p>
                        </div>
                        <div className="text-[#FFFFFF]">
                            <h4 className="text-base sm:text-lg font-semibold mb-3 text-[#F4C430]">Follow Us</h4>
                            <div className="flex space-x-3">
                                <a href="#" className="text-[#FFFFFF] hover:text-[#E3B124] transition duration-300 social-icon">
                                    <FaFacebook size={24} />
                                </a>
                                <a href="#" className="text-[#FFFFFF] hover:text-[#E3B124] transition duration-300 social-icon">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="#" className="text-[#FFFFFF] hover:text-[#E3B124] transition duration-300 social-icon">
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

export default Obstetrics;
