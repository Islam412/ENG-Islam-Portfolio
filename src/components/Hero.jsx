import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaArrowDown, FaDownload, FaCode } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.github, color: 'hover:bg-gray-600' },
    { icon: FaLinkedin, href: personalInfo.linkedin, color: 'hover:bg-blue-600' },
    { icon: FaFacebook, href: personalInfo.facebook, color: 'hover:bg-blue-700' },
    { icon: FaInstagram, href: personalInfo.instagram, color: 'hover:bg-pink-600' },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv-islam-hamdy.pdf';
    link.download = 'Islam_Hamdy_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Side - Text Content */}
          <motion.div 
            className="text-center lg:text-left flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6"
            >
              <FaCode className="w-4 h-4 text-purple-500" />
              <span className="text-sm text-purple-400">Available for work</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">
                {personalInfo.name}
              </span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl lg:text-3xl text-gray-300 mb-6"
            >
              {t('hero.title')}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 max-w-lg mx-auto lg:mx-0 mb-8 text-lg leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
            >
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.contactMe')}
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
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-8 py-3 border border-gray-600 rounded-full text-gray-300 font-semibold hover:border-purple-500 hover:text-purple-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.viewWork')}
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:text-white hover:scale-110 backdrop-blur-sm`}
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image with 3D Effect */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative group">
              {/* Animated Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition duration-500 animate-spin-slow" />
              
              {/* Profile Image Container */}
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-r from-purple-600 to-cyan-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-dark-bg">
                  <img 
                    src="/images/profile-main.jpg" 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'https://ui-avatars.com/api/?name=Islam+Hamdy&background=8b5cf6&color=fff&size=400';
                    }}
                  />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-2xl opacity-50" />
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur-2xl opacity-50" />
            </div>
          </motion.div>
        </div>

        {/* Contact Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-gray-800"
        >
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-gray-400 hover:text-purple-500 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition">
              <FaEnvelope className="w-4 h-4 text-purple-500" />
            </div>
            <span>{personalInfo.email}</span>
          </a>
          <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-purple-500 transition-colors group">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition">
              <FaPhone className="w-4 h-4 text-purple-500" />
            </div>
            <span>{personalInfo.phone}</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-8 h-12 rounded-full border-2 border-gray-600 flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-3 bg-purple-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;