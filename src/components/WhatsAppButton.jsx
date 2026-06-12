import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${personalInfo.whatsapp}?text=Hello%20Islam%2C%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20with%20you!`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatDelay: 3,
      }}
    >
      <FaWhatsapp className="w-8 h-8" />
      <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;