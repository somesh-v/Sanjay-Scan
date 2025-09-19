import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronDown, FaBars, FaSearch, FaSync } from 'react-icons/fa';

// Import the local image
import frameImage from './img/Frame_123-removebg-preview.png'; // Adjust the path as needed

const TopNavbar = ({ toggleMobileMenu }) => {
    return (
        <div className="fixed top-0 w-full bg-[#F4C430] text-[#5C4033] py-2 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                {/* Laptop/Desktop: Image, 360 Virtual Tour, and Search Bar in One Row */}
                <div className="hidden md:flex justify-between items-center">
                    {/* Image on the Left */}
                    <Link to="/">
                        <img
                            src={frameImage}
                            alt="Sanjay Scan Centre"
                            className="h-12"
                        />
                    </Link>

                    {/* 360 Virtual Tour and Search Bar */}
                    <div className="flex items-center space-x-6">
                        <a 
                            href="https://vrtour.sanjayscans.in" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-[#FFFFFF]"
                        >
                            <FaSync />
                            <span>360 Virtual Tour</span>
                        </a>
                        {/* 360 Virtual Tour */}
                       

                        {/* Search Bar */}
                        <div className="flex items-center bg-[#FDF8F0] rounded-full px-4 py-1 w-96">
                            <FaSearch className="text-[#C19A6B]" />
                            <input
                                type="text"
                                placeholder="Search tests, scans..."
                                className="w-full ml-2 focus:outline-none text-[#5C4033] bg-transparent"
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile: Image and 360 Virtual Tour in First Row, Search Bar and Hamburger Icon in Second Row */}
                <div className="md:hidden">
                    {/* First Row: Image and 360 Virtual Tour */}
                    <div className="flex justify-between items-center">
                        {/* Image on the Left */}
                        <Link to="/">
                            <img
                                src={frameImage}
                                alt="Sanjay Scan Centre"
                                className="h-12 object-contain"
                            />
                        </Link>

                        {/* 360 Virtual Tour */}
                        <div className="flex items-center space-x-2 text-[#FFFFFF]">
                            <a 
                            href="https://vrtour.sanjayscans.in" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-[#FFFFFF]">
                    
                            <FaSync />
                            <span>360 Virtual Tour</span>
                        </a>
                        </div>
                    </div>

                    {/* Second Row: Search Bar and Hamburger Icon */}
                    <div className="flex justify-between items-center mt-2">
                        {/* Search Bar */}
                        <div className="flex items-center bg-[#FDF8F0] rounded-full px-4 py-1 w-full mr-2">
                            <FaSearch className="text-[#C19A6B]" />
                            <input
                                type="text"
                                placeholder="Search tests, scans..."
                                className="w-full ml-2 focus:outline-none text-[#5C4033] bg-transparent"
                            />
                        </div>

                        {/* Hamburger Icon */}
                        <button
                            className="text-[#FFFFFF] focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            <FaBars size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [dropdownTimeout, setDropdownTimeout] = useState(null);

    const scanTests = [
        { name: 'Doppler', path: '/scans/doppler' },
        { name: 'Obestrics', path: '/scans/obestrics' },
        { name: 'Twin Gestation', path: '/scans/twin-gestation' },
        { name: 'Abdomen', path: '/scans/abdomen' },
        { name: 'Thyroid and Breast', path: '/scans/thyroid-breast' },
    ];

    const navItems = [
        { label: 'About Us', path: '/about' },
        { label: 'Health Packages', path: '/packages' },
        { label: 'Book a Test', path: '/book' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleDropdownMouseEnter = () => {
        if (dropdownTimeout) {
            clearTimeout(dropdownTimeout);
        }
        setIsDropdownOpen(true);
    };

    const handleDropdownMouseLeave = () => {
        const timeout = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 300); // Adjust the delay as needed
        setDropdownTimeout(timeout);
    };

    return (
        <>
            {/* Top Navbar */}
            <TopNavbar toggleMobileMenu={toggleMobileMenu} />

            {/* Main Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-14 w-full bg-[#FFFFFF] text-[#F4C430] shadow-lg z-40"
            >
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-end items-center">
                    {/* Desktop Nav Links */}
                    <ul className="hidden md:flex space-x-6 items-center">
                        <li>
                            <Link to="/about" className="text-[#6B9E78] hover:text-[#E3B124] transition">
                                About Us
                            </Link>
                        </li>
                        {/* Dropdown Container */}
                        <li className="relative group">
                            <button
                                onMouseEnter={handleDropdownMouseEnter}
                                onMouseLeave={handleDropdownMouseLeave}
                                className="flex items-center text-[#6B9E78] hover:text-[#E3B124] transition"
                            >
                                Scan and Tests <FaChevronDown className="ml-1" />
                            </button>
                            {isDropdownOpen && (
                                <motion.ul
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    onMouseEnter={handleDropdownMouseEnter}
                                    onMouseLeave={handleDropdownMouseLeave}
                                    className="absolute left-0 mt-2 w-48 bg-[#FDF8F0] shadow-lg rounded-md z-50"
                                >
                                    {scanTests.map((test) => (
                                        <li key={test.name}>
                                            <Link
                                                to={test.path}
                                                className="block px-4 py-2 text-[#5C4033] hover:bg-[#E3B124] hover:text-[#FFFFFF] transition"
                                                onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                                            >
                                                {test.name}
                                            </Link>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </li>
                        {navItems.slice(1).map((item) => (
                            <li key={item.label}>
                                <Link to={item.path} className="text-[#6B9E78] hover:text-[#E3B124] transition">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="md:hidden bg-[#FDF8F0] shadow-lg"
                    >
                        <ul className="flex flex-col items-center space-y-4 py-4">
                            <li>
                                <Link
                                    to="/about"
                                    className="text-[#6B9E78] hover:text-[#E3B124] transition"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center text-[#6B9E78] hover:text-[#E3B124] transition"
                                >
                                    Scan and Tests <FaChevronDown className="ml-1" />
                                </button>
                                {isDropdownOpen && (
                                    <ul className="bg-[#FDF8F0] shadow-lg rounded-md mt-2 w-48 z-50">
                                        {scanTests.map((test) => (
                                            <li key={test.name}>
                                                <Link
                                                    to={test.path}
                                                    className="block px-4 py-2 text-[#5C4033] hover:bg-[#E3B124] hover:text-[#FFFFFF] transition"
                                                    onClick={() => {
                                                        setIsMobileMenuOpen(false);
                                                        setIsDropdownOpen(false);
                                                    }}
                                                >
                                                    {test.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            {navItems.slice(1).map((item) => (
                                <li key={item.label}>
                                    <Link
                                        to={item.path}
                                        className="text-[#6B9E78] hover:text-[#E3B124] transition"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </motion.nav>
        </>
    );
};

export default Navbar;