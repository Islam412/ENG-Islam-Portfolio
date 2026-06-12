import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaArrowDown, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.github, color: 'hover:text-gray-400' },
    { icon: FaLinkedin, href: personalInfo.linkedin, color: 'hover:text-blue-500' },
    { icon: FaFacebook, href: personalInfo.facebook, color: 'hover:text-blue-600' },
    { icon: FaInstagram, href: personalInfo.instagram, color: 'hover:text-pink-500' },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-islam-hamdy.pdf';
    link.download = 'Islam_Hamdy_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side - Text Content */}
          <motion.div 
            className="text-center md:text-left flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p 
              className="text-purple-500 font-semibold mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              {t('hero.greeting')}
            </motion.p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent animate-gradient bg-[length:200%]">
                {personalInfo.name}
              </span>
            </h1>
            <motion.h2 
              className="text-xl md:text-2xl text-gray-300 mb-6"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              {t('hero.title')}
            </motion.h2>
            <p className="text-gray-400 max-w-xl mb-8 text-lg">
              {t('hero.description')}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.viewWork')}
              </motion.a>
              
              <motion.button
                onClick={handleDownloadCV}
                className="px-8 py-3 border-2 border-purple-500 rounded-full text-purple-500 font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="w-4 h-4" />
                Download CV
              </motion.button>
              
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-8 py-3 border border-gray-600 rounded-full text-gray-300 font-semibold hover:border-purple-500 hover:text-purple-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.contactMe')}
              </motion.a>
            </div>

            <div className="flex justify-center md:justify-start space-x-6 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-all duration-300 ${social.color} hover:scale-110`}
                  whileHover={{ y: -5, scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-2xl opacity-50 animate-pulse" />
              
              {/* Profile Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl">
                <img 
                  src="/images/profile-main.jpg" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400?text=Profile';
                  }}
                />
              </div>
              
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border-2 border-cyan-500/20 animate-spin-reverse" />
            </div>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 text-gray-400 mt-12"
        >
          <motion.a 
            href={`mailto:${personalInfo.email}`} 
            className="flex items-center gap-2 hover:text-purple-500 transition-colors"
            whileHover={{ x: -3 }}
          >
            <FaEnvelope className="w-4 h-4" /> {personalInfo.email}
          </motion.a>
          <motion.a 
            href={`tel:${personalInfo.phone}`} 
            className="flex items-center gap-2 hover:text-purple-500 transition-colors"
            whileHover={{ x: 3 }}
          >
            <FaPhone className="w-4 h-4" /> {personalInfo.phone}
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <FaArrowDown className="w-6 h-6 text-gray-400 hover:text-purple-500 transition-colors" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;