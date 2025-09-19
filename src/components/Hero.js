import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaFacebook, FaTwitter, FaInstagram, FaFemale, FaHeartbeat } from 'react-icons/fa';
import { FaStethoscope, FaBaby, FaUserFriends, FaHospital, FaUserMd, FaClock, FaShieldAlt, FaThumbsUp } from 'react-icons/fa';

// Import local images
import car1Image from './img/CAR1.png';
import abdomenImage from './img/abdomen.jpg';
import car2Image from './img/CAR2.png';
import car3Image from './img/CAR3.png';
import obsImage from './img/obes.jpeg';
import twins from './img/Twins.png';
import jasmineImage from './img/jasmine.png';
import tulipImage from './img/Tulip.png';
import lavenderImage from './img/Lavender.png';
import roseImage from './img/Rose.png';

// CountUp Component for Animation
const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setCount(Math.floor(start));
        }, 16);

        return () => clearInterval(timer);
    }, [end, duration]);

    return <span>{count}</span>;
};

const Hero = () => {
    const [isAchievementsLoading, setIsAchievementsLoading] = useState(false);
    const achievementsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsAchievementsLoading(true);
                    // Stop loading after 1 second
                    const timer = setTimeout(() => {
                        setIsAchievementsLoading(false);
                    }, 1000);
                    observer.disconnect(); // Stop observing after first trigger
                    return () => clearTimeout(timer);
                }
            },
            { threshold: 0.1 } // Trigger when 10% of section is visible
        );

        if (achievementsRef.current) {
            observer.observe(achievementsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const carouselImages = [
        car1Image,
        car2Image,
        car3Image,
    ];

    const scanCards = [
        {
            title: 'Abdomen',
            icon: <FaStethoscope />,
            image: abdomenImage,
            content: 'Evaluates internal organs like liver, kidneys, and gallbladder.',
            price: 'Starting at ₹1000',
        },
        {
            title: 'Obstetrics',
            icon: <FaBaby />,
            image: obsImage,
            content: 'Monitors fetal development and health during pregnancy.',
            price: 'Starting at ₹1000',
        },
        {
            title: 'Twin Gestation',
            icon: <FaUserFriends />,
            image: twins,
            content: 'Specialized scan for monitoring twin pregnancies.',
            price: 'Starting at ₹1000',
        },
    ];

    const whyChooseItems = [
        { icon: <FaHospital />, text: 'State-of-the-art Facilities' },
        { icon: <FaUserMd />, text: 'Experienced Doctors' },
        { icon: <FaClock />, text: 'Quick Results' },
        { icon: <FaShieldAlt />, text: 'Reliable Diagnostics' },
        { icon: <FaThumbsUp />, text: 'Patient-Centric Care' },
    ];

    const womenHealthPackages = [
        {
            name: 'Jasmine Package',
            includes: ['Thyroid Screening', 'Uterus/Ovaries Screening'],
        },
        {
            name: 'Tulip Package',
            includes: ['Breast Screening', 'Uterus/Ovaries Screening'],
        },
        {
            name: 'Lavender Package',
            includes: ['Thyroid Screening', 'Breast Screening', 'Uterus/Ovaries Screening'],
        },
        {
            name: 'Rose Package',
            includes: ['Comprehensive Thyroid Screening', 'Breast Screening', 'Uterus/Ovaries Screening'],
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
        <section className="bg-[#FDF8F0] text-[#5C4033] pt-12 mt-12 sm:mt-14 md:mt-16">
            {/* Carousel Section with Appointment Card */}
            <div className="relative">
                <Carousel
                    showThumbs={false}
                    autoPlay
                    infiniteLoop
                    interval={3000}
                    showStatus={false}
                    showArrows={true}
                    className="w-full"
                >
                    {carouselImages.map((img, index) => (
                        <div key={index}>
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-auto sm:h-96 object-cover"
                            />
                        </div>
                    ))}
                </Carousel>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="hidden sm:block absolute top-2 right-2 sm:top-6 sm:right-6 bg-[#FFFFFF] text-[#F4C430] p-3 sm:p-4 rounded-lg shadow-lg z-10 w-48 sm:w-72"
                >
                    <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2 text-[#6B9E78]">
                        Book an Appointment
                    </h3>
                    <p className="text-xs sm:text-sm mb-2 sm:mb-3">Schedule your diagnostic test today!</p>
                    <Link to="/book">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#F4C430] text-[#FFFFFF] px-3 py-1 sm:px-4 sm:py-2 rounded-full font-semibold hover:bg-[#E3B124] transition text-xs sm:text-sm"
                        >
                            Book Now
                        </motion.button>
                    </Link>
                </motion.div>
            </div>

            {/* Welcome Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="py-8 sm:py-16 text-center"
            >
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#6B9E78]">
                    Welcome to Sanjay Scan Centre
                </h2>
                <p className="text-sm sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                    Your trusted partner for advanced diagnostics and health checkups.
                </p>
            </motion.div>

            {/* Scan Cards Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {scanCards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-[#FFFFFF] rounded-lg shadow-lg border border-[#FDF8F0] hover:shadow-xl transition duration-300 flex flex-col h-64 sm:h-[28rem] relative z-10 backdrop-blur-sm bg-opacity-30"
                        >
                            <div className="h-[40%] relative">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover rounded-t-lg"
                                />
                            </div>
                            <div className="h-[20%] bg-[#F4C430] flex items-center justify-center p-4">
                                <h3 className="text-sm sm:text-xl font-semibold text-[#FFFFFF]">
                                    {card.title}
                                </h3>
                            </div>
                            <div className="h-[40%] flex flex-col items-center justify-center p-4 sm:p-6">
                                <p className="text-[#5C4033] text-xs sm:text-sm text-center mb-2">
                                    {card.content}
                                </p>
                                <p className="text-[#C19A6B] text-xs sm:text-sm font-medium mb-2">
                                    {card.price}
                                </p>
                                <Link to="/book">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-[#F4C430] text-[#FFFFFF] px-3 py-1 sm:px-4 sm:py-2 rounded-full font-semibold hover:bg-[#E3B124] transition text-xs sm:text-sm"
                                    >
                                        Book Now
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Achievements Section */}
            <div
                ref={achievementsRef}
                className="mt-12 sm:mt-16 bg-[#FFFFFF] py-12 sm:py-16"
            >
                <h3 className="text-xl sm:text-2xl font-semibold text-[#6B9E78] text-center mb-6 sm:mb-8">
                    Our Achievements
                </h3>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {isAchievementsLoading ? (
                        <div className="flex justify-center items-center h-32">
                            <div className="w-12 h-12 border-4 border-[#F4C430] border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="relative bg-[#FDF8F0] text-[#5C4033] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center justify-center text-center border border-[#6B9E78] w-full sm:w-72 h-64 mx-auto overflow-hidden"
                            >
                                {/* Half-oval accent on top-right */}
                                <div className="absolute top-0 right-0 w-24 h-12 bg-[#6B9E78] rounded-bl-full"></div>
                                <motion.div
                                    initial={{ scale: 0.8 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-4xl sm:text-5xl font-bold mb-3 z-10"
                                >
                                    <CountUp end={15} />+
                                </motion.div>
                                <p className="text-base sm:text-lg font-semibold z-10">Years Experience</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="relative bg-[#FDF8F0] text-[#5C4033] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center justify-center text-center border border-[#6B9E78] w-full sm:w-72 h-64 mx-auto overflow-hidden"
                            >
                                {/* Half-oval accent on top-right */}
                                <div className="absolute top-0 right-0 w-24 h-12 bg-[#6B9E78] rounded-bl-full"></div>
                                <motion.div
                                    initial={{ scale: 0.8 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-4xl sm:text-5xl font-bold mb-3 z-10"
                                >
                                    <CountUp end={90000} />+
                                </motion.div>
                                <p className="text-base sm:text-lg font-semibold z-10">Scans Completed</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="relative bg-[#FDF8F0] text-[#5C4033] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center justify-center text-center border border-[#6B9E78] w-full sm:w-72 h-64 mx-auto overflow-hidden"
                            >
                                {/* Half-oval accent on top-right */}
                                <div className="absolute top-0 right-0 w-24 h-12 bg-[#6B9E78] rounded-bl-full"></div>
                                <motion.div
                                    initial={{ scale: 0.8 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-4xl sm:text-5xl font-bold mb-3 z-10"
                                >
                                    ₹<CountUp end={999} />
                                </motion.div>
                                <p className="text-base sm:text-lg font-semibold z-10">Starting Price</p>
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>

            {/* Women's Health Packages Section */}
            <motion.section
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="py-16 bg-[#FDF8F0]"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#6B9E78] tracking-tight">
                            Women's Health Packages
                        </h2>
                        <p className="mt-4 text-lg md:text-xl text-[#5C4033] font-light">
                            Tailored wellness plans designed with care
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {womenHealthPackages.map((pkg, index) => (
                            <motion.div
                                key={pkg.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-[#FFFFFF] rounded-lg shadow-lg p-6 sm:p-8"
                            >
                                <h4 className="text-xl sm:text-2xl font-semibold text-[#6B9E78] mb-4">
                                    {pkg.name}
                                </h4>
                                <p className="text-lg sm:text-xl font-bold text-[#C19A6B] mb-4">{pkg.price}</p>
                                <ul className="list-disc list-inside text-[#5C4033] mb-4">
                                    {pkg.includes.map((item, idx) => (
                                        <li key={idx} className="text-sm sm:text-base">{item}</li>
                                    ))}
                                </ul>
                                <Link to="/book">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-[#F4C430] text-[#FFFFFF] px-4 py-2 rounded-full font-semibold hover:bg-[#E3B124] transition text-sm sm:text-base"
                                    >
                                        Book Now
                                    </motion.button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            

            {/* About Website and Scans Section */}
            <div className="mt-12 sm:mt-16 bg-[#FFFFFF] py-12 sm:py-16">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#6B9E78] text-center mb-6 sm:mb-8">
                    About Our Scans
                </h3>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        <div className="bg-[#FDF8F0] text-[#C19A6B] p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center justify-center text-center">
                            <div className="text-2xl sm:text-3xl mb-2"><FaStethoscope /></div>
                            <p className="text-sm sm:text-base font-medium">Advanced Diagnostic Tools</p>
                        </div>
                        <div className="bg-[#FDF8F0] text-[#C19A6B] p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center justify-center text-center">
                            <div className="text-2xl sm:text-3xl mb-2"><FaUserMd /></div>
                            <p className="text-sm sm:text-base font-medium">Expert Radiologists</p>
                        </div>
                        <div className="bg-[#FDF8F0] text-[#C19A6B] p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center justify-center text-center">
                            <div className="text-2xl sm:text-3xl mb-2"><FaClock /></div>
                            <p className="text-sm sm:text-base font-medium">Quick & Reliable Results</p>
                        </div>
                        <div className="bg-[#FDF8F0] text-[#C19A6B] p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center justify-center text-center">
                            <div className="text-2xl sm:text-3xl mb-2"><FaShieldAlt /></div>
                            <p className="text-sm sm:text-base font-medium">Safe & Hygienic Environment</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-[#6B9E78] py-12 sm:py-16 w-full m-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <div className="text-[#FFFFFF]">
                            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-[#F4C430]">
                                Sanjay Scan Centre
                            </h4>
                            <p className="text-sm sm:text-base text-[#FFFFFF]">
                                Your trusted partner for advanced diagnostics and health checkups.
                            </p>
                        </div>
                        <div className="text-[#FFFFFF]">
                            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-[#F4C430]">Address</h4>
                            <p className="text-sm sm:text-base text-[#FFFFFF]">
                                Patta Kovil, No: 2-A, 3rd Agraharam, opp. to Kasi Vishwanathar Kovil, Salem,
                                Tamil Nadu 636001
                            </p>
                        </div>
                        <div className="text-[#FFFFFF]">
                            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-[#F4C430]">Contact Us</h4>
                            <p className="text-sm sm:text-base text-[#FFFFFF]">Call: +91 08460519893</p>
                            <p className="text-sm sm:text-base text-[#FFFFFF]">
                                Email: info@sanjayscancentre.com
                            </p>
                        </div>
                        <div className="text-[#FFFFFF]">
                            <h4 className="text-lg sm:text-xl font-semibold mb-4 text-[#F4C430]">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-[#FFFFFF] hover:text-[#E3B124] transition duration-300"
                                >
                                    <FaFacebook />
                                </a>
                                <a
                                    href="#"
                                    className="text-[#FFFFFF] hover:text-[#E3B124] transition duration-300"
                                >
                                    <FaTwitter />
                                </a>
                                <a
                                    href="#"
                                    className="text-[#FFFFFF] hover:text-[#E3B124] transition duration-300"
                                >
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Hero;