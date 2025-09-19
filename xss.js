import React from 'react';
import { motion } from 'framer-motion';
import { FaInfoCircle, FaEye, FaBullseye, FaUsers, FaClock, FaUserMd, FaDollarSign, FaUserFriends, FaShieldAlt, FaStethoscope, FaHeartbeat, FaFacebook, FaTwitter, FaInstagram, FaTrophy, FaCalendarAlt, FaQuestionCircle } from 'react-icons/fa';

// Import local images (adjust paths based on your project structure)
import founder1Img from './img/DR.BALASUBRAMANIAM.jpeg'; // Mr. Govindarajan
import founder2Img from './img/DR.GOMATHI.jpeg'; // Mrs. Aarthi Govindarajan
import visionMissionImg from './img/SANJAY11.png';
import aboutBannerImg from './img/doppler.jpg'; // Add your banner image
import scanCenterImg from './img/abdomen.jpg'; // Add your scan center image

const AboutUs = () => {
    const founders = [
        { name: 'Dr. Balasubramaniam', photo: founder1Img },
        { name: 'Dr. Komathi', photo: founder2Img },
    ];

    const whyChooseItems = [
        { text: '90,000+ Scans', icon: <FaClock /> },
        { text: 'Trusted by Doctors & Hospitals', icon: <FaUserMd /> },
        { text: 'Affordable Pricing', icon: <FaDollarSign /> },
        { text: '15+ Years of Trust', icon: <FaUserFriends /> },
    ];

    const features = [
        { text: '4D Sonography Center', icon: <FaStethoscope /> },
        { text: 'Quick & Reliable Results', icon: <FaHeartbeat /> },
        { text: 'Patient-Centric Diagnostic', icon: <FaShieldAlt /> },
    ];

    const achievements = [
        { text: '30,000+ Successful Scans', icon: <FaTrophy /> },
        { text: 'Awarded for Excellence', icon: <FaTrophy /> },
        { text: 'Recognized by Medical Community', icon: <FaTrophy /> },
    ];

    // Border animation variants for the image
    const borderVariants = {
        initial: { 
            strokeDashoffset: 0,
            strokeDasharray: '1000',
        },
        animate: { 
            strokeDashoffset: [1000, 0],
            transition: {
                duration: 4,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
            },
        },
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#FDF8F0]">
            {/* Banner Section with "About SanjayScans" */}
            <div className="relative w-full h-64 md:h-96 overflow-hidden">
                <img 
                    src={aboutBannerImg} 
                    alt="About SanjayScans" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-white text-center"
                    >
                        About SanjayScans
                    </motion.h1>
                </div>
            </div>

            {/* Main Content */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-12 sm:py-16 flex flex-col items-center flex-grow"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                   {/* About Sanjay Scans Section */}
<div className="relative mb-16 min-h-[70vh] pt-10">
  {/* Image that covers from 10% to 70% of screen height on left side */}
  <motion.div 
  className="absolute left-0 top-[10%] -mt-[5%] lg:mt-0 w-full lg:w-[70%] h-[60%] lg:h-[60vh]"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <img 
    src={scanCenterImg} 
    alt="Sanjay Scan Centre" 
    className="w-full h-full object-cover rounded-r-lg shadow-lg"
  />
</motion.div>

 {/* Text Card positioned left-aligned with square proportions */}

<motion.div 
  className="relative z-10 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[45%] 
             mx-auto lg:mx-0 lg:ml-[5%] xl:ml-[50%]
             mt-[50%] lg:mt-[5%]  // Increased from 5% to 10% for mobile
             bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#6B9E78] mb-4 sm:mb-6">
    <FaInfoCircle className="inline-block mr-2 text-[#F4C430]" /> About Sanjay Scan Centre
  </h2>
  <div className="space-y-3 sm:space-y-4 text-[#5C4033] text-sm sm:text-base">
    <p>
      Sanjay Scan Centre, established in 2010, has been a pioneer in providing advanced diagnostic imaging services in Salem and surrounding regions. Founded by Dr. Balasubramaniam and Dr. Komathi, our center has grown to become one of the most trusted diagnostic facilities in the area.
    </p>
    
  
  </div>
</motion.div>
</div>

                    {/* Founders and Doctor Cards */}
                    <div className="flex justify-center mb-12 sm:mb-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                            {founders.map((founder, index) => (
                                <motion.div
                                    key={founder.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="bg-[#FFFFFF] rounded-lg shadow-lg border border-[#6B9E78] hover:shadow-xl transition duration-300 flex flex-col h-80 sm:h-96"
                                >
                                    <div className="h-[65%] relative">
                                        <img
                                            src={founder.photo}
                                            alt={founder.name}
                                            className="w-full h-full object-cover rounded-t-lg"
                                        />
                                        <div className="absolute top-0 left-0 w-full h-2 bg-[#F4C430]" />
                                    </div>
                                    <div className="h-[35%] flex flex-col items-center justify-center p-4 sm:p-6">
                                        <FaUsers className="text-[#F4C430] text-2xl sm:text-3xl mb-2" />
                                        <h3 className="text-lg sm:text-xl font-semibold text-[#6B9E78] mb-2">Founder</h3>
                                        <p className="text-[#5C4033] text-xs sm:text-sm text-center">{founder.name}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                   {/* Vision and Mission Section */}
<motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="mb-16 sm:mb-20 lg:mb-24 py-8 px-4 sm:px-6 lg:px-8"
>
    <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl font-bold text-[#2C3E50] mb-4"
            >
                Our Guiding Principles
            </motion.h2>
            <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
                className="w-24 h-1 bg-[#F4C430] mx-auto"
            />
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Image with Elegant Frame */}
            <div className="w-full lg:w-1/2 relative group">
                <div className="relative overflow-hidden rounded-xl shadow-xl h-80 sm:h-96 lg:h-[480px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6B9E78] to-[#F4C430] opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <img
                        src={visionMissionImg}
                        alt="Vision and Mission"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
                <div className="absolute -z-10 -inset-4 bg-gradient-to-r from-[#6B9E78] to-[#F4C430] rounded-2xl opacity-20 blur-lg"></div>
            </div>

            {/* Vision and Mission Text */}
            <div className="w-full lg:w-1/2 flex flex-col gap-10">
                {/* Vision Card */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white p-6 sm:p-8 rounded-xl shadow-md border-l-4 border-[#F4C430] hover:shadow-lg transition-shadow duration-300"
                >
                    <div className="flex items-center mb-4">
                        <div className="bg-[#F4C430] p-3 rounded-full mr-4">
                            <FaEye className="text-white text-xl" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#2C3E50]">
                            Our Vision
                        </h3>
                    </div>
                    <p className="text-[#5C4033] text-base sm:text-lg leading-relaxed">
                        At Sanjay Scan Centre, our vision is to be the region's premier provider of advanced diagnostic services, setting new benchmarks in medical imaging excellence. Since our establishment in <span className="font-semibold text-[#6B9E78]">2010</span>, we've been committed to pioneering innovations that redefine healthcare diagnostic standards.
                    </p>
                </motion.div>

                {/* Mission Card */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white p-6 sm:p-8 rounded-xl shadow-md border-l-4 border-[#6B9E78] hover:shadow-lg transition-shadow duration-300"
                >
                    <div className="flex items-center mb-4">
                        <div className="bg-[#6B9E78] p-3 rounded-full mr-4">
                            <FaBullseye className="text-white text-xl" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#2C3E50]">
                            Our Mission
                        </h3>
                    </div>
                    <p className="text-[#5C4033] text-base sm:text-lg leading-relaxed">
                        We are dedicated to delivering precise, accessible, and compassionate diagnostic care through cutting-edge technology and expert analysis. Our patient-first philosophy drives us to continually enhance ultrasound imaging services while maintaining affordability and exceptional accuracy.
                    </p>
                </motion.div>
            </div>
        </div>
    </div>
</motion.div>
                    {/* Why Choose Sanjay Scan Center */}
                    <div className="mb-12 sm:mb-16">
                        <h3 className="text-xl sm:text-2xl font-semibold text-[#6B9E78] text-center mb-6 sm:mb-8">
                            Why Choose Sanjay Scan Center
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {whyChooseItems.map((item, index) => (
                                <motion.div
                                    key={item.text}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#F4C430] group"
                                >
                                    <div className="absolute top-0 left-0 w-1 h-full bg-[#6B9E78] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                                    <div className="flex items-center space-x-4">
                                        <div className="text-3xl text-[#F4C430] group-hover:scale-110 transition-transform duration-300">
                                            {item.icon}
                                        </div>
                                        <p className="text-[#5C4033] text-base sm:text-lg font-semibold group-hover:text-[#6B9E78] transition-colors duration-300">
                                            {item.text}
                                        </p>
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
                   
                    
                </div>
            </motion.section>

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

export default AboutUs;