import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaArrowDown } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.github, color: 'hover:text-gray-400' },
    { icon: FaLinkedin, href: personalInfo.linkedin, color: 'hover:text-blue-500' },
    { icon: FaFacebook, href: personalInfo.facebook, color: 'hover:text-blue-600' },
    { icon: FaInstagram, href: personalInfo.instagram, color: 'hover:text-pink-500' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-purple-500 font-semibold mb-4">{t('hero.greeting')}</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent animate-gradient bg-[length:200%]">
                {personalInfo.name}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">{t('hero.title')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
              {t('hero.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.viewWork')}
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-3 border border-purple-500 rounded-full text-purple-500 font-semibold hover:bg-purple-500/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.contactMe')}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 transition-all duration-300 ${social.color}`}
                whileHover={{ y: -3, scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-gray-400"
          >
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-purple-500 transition-colors">
              <FaEnvelope className="w-4 h-4" /> {personalInfo.email}
            </a>
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-purple-500 transition-colors">
              <FaPhone className="w-4 h-4" /> {personalInfo.phone}
            </a>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <FaArrowDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;