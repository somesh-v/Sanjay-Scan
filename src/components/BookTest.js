
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaPhone, FaMapMarkerAlt, FaNotesMedical } from 'react-icons/fa';

const BookTest = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    testType: '',
  });
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const testTypes = [
    'Blood Test',
    'X-Ray',
    'MRI Scan',
    'Ultrasound',
    'CT Scan',
    'ECG',
    'Other',
  ];

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'phone') {
      // Remove non-digit characters except the leading +
      value = value.replace(/[^+\d]/g, '');
      // Ensure it starts with +91
      if (!value.startsWith('+91') && value.length > 0) {
        value = '+91' + value.replace(/^\+91/, '');
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsSubmitting(true);

    console.log('Submitting form:', formData);

    // Add timeout to prevent hanging
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    try {
      const response = await fetch('http://localhost:5000/api/book-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const result = await response.json();
      console.log('Response:', result);

      if (response.ok) {
        setMessage('Booking request submitted successfully!');
        setFormData({ name: '', phone: '', address: '', testType: '' });
      } else {
        setMessage(result.message || 'Failed to submit booking request. Please try again.');
      }
    } catch (error) {
      clearTimeout(timeoutId);
      console.error('Error submitting form:', error.message, error.stack);
      setMessage(error.name === 'AbortError' ? 'Request timed out' : 'An error occurred: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-16 bg-gradient-to-br from-[#FDF8F0] to-[#F9E8D9] min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6B9E78] text-center mb-10 tracking-tight pt-16">
          Book Your Test
        </h2>
        <motion.form
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-[#6B9E78]/20"
        >
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="flex items-center text-[#6B9E78] font-medium mb-2 text-base">
              <FaUser className="mr-2 text-[#F4C430]" /> Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 border border-[#6B9E78]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4C430] text-[#5C4033] bg-[#FDF8F0] transition-all duration-200"
            />
          </div>

          {/* Phone Field */}
          <div className="mb-6">
            <label htmlFor="phone" className="flex items-center text-[#6B9E78] font-medium mb-2 text-base">
              <FaPhone className="mr-2 text-[#F4C430]" /> Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+919876543210"
              required
              className="w-full px-4 py-3 border border-[#6B9E78]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4C430] text-[#5C4033] bg-[#FDF8F0] transition-all duration-200"
            />
          </div>

          {/* Address Field */}
          <div className="mb-6">
            <label htmlFor="address" className="flex items-center text-[#6B9E78] font-medium mb-2 text-base">
              <FaMapMarkerAlt className="mr-2 text-[#F4C430]" /> Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              required
              className="w-full px-4 py-3 border border-[#6B9E78]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4C430] text-[#5C4033] bg-[#FDF8F0] transition-all duration-200"
            />
          </div>

          {/* Test Type Field */}
          <div className="mb-6">
            <label htmlFor="testType" className="flex items-center text-[#6B9E78] font-medium mb-2 text-base">
              <FaNotesMedical className="mr-2 text-[#F4C430]" /> Test Type
            </label>
            <select
              id="testType"
              name="testType"
              value={formData.testType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#6B9E78]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F4C430] text-[#5C4033] bg-[#FDF8F0] appearance-none transition-all duration-200"
            >
              <option value="" disabled>Select a test type</option>
              {testTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          {message && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-center mb-6 text-sm ${message.includes('success') ? 'text-[#6B9E78]' : 'text-red-500'}`}
            >
              {message}
            </motion.p>
          )}

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 bg-[#F4C430] text-white rounded-full font-semibold text-base shadow-md transition-all duration-300 ${isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:bg-[#E3B124]'}`}
          >
            {isSubmitting ? 'Submitting...' : 'Book Now'}
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default BookTest;
