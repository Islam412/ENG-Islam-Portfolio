import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaGlobe, FaBriefcase, FaUsers, FaAward, FaEnvelope, FaPhone, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    { icon: FaBriefcase, value: 3, label: t('about.experience'), suffix: '+' },
    { icon: FaCode, value: 20, label: t('about.projects'), suffix: '+' },
    { icon: FaAward, value: 15, label: t('about.technologies'), suffix: '+' },
    { icon: FaUsers, value: 10, label: t('about.clients'), suffix: '+' },
  ];

  const images = [
    '/images/profile-1.jpg',
    '/images/profile-2.jpg',
    '/images/profile-3.jpg',
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-card to-dark-bg" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-500 text-sm uppercase tracking-wider font-semibold">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            <span className="gradient-text">{t('about.title')}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <motion.div 
                className="relative overflow-hidden rounded-2xl group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={images[0] || 'https://placehold.co/600x400/1a1a1a/8b5cf6?text=Profile'}
                  alt="Profile 1"
                  className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div 
                className="relative overflow-hidden rounded-2xl group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={images[2] || 'https://placehold.co/400x400/1a1a1a/8b5cf6?text=Profile'}
                  alt="Profile 3"
                  className="w-full h-48 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
            <div className="space-y-4 pt-8">
              <motion.div 
                className="relative overflow-hidden rounded-2xl group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={images[1] || 'https://placehold.co/400x400/1a1a1a/8b5cf6?text=Profile'}
                  alt="Profile 2"
                  className="w-full h-48 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-6 text-center">
                <FaLaptopCode className="w-12 h-12 text-purple-500 mx-auto mb-3" />
                <p className="text-gray-300 text-sm">5+ Years<br />of Excellence</p>
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl p-6 border border-purple-500/10">
              <p className="text-gray-300 leading-relaxed text-lg">
                {t('about.description')}
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 text-center hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <stat.icon className="w-10 h-10 text-purple-500 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-white">
                    <Counter end={stat.value} />{stat.suffix}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Contact Details */}
            <div className="space-y-3 pt-4">
              <motion.a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl hover:bg-purple-500/10 transition-all duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition">
                  <FaEnvelope className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="text-gray-300">{personalInfo.email}</div>
                </div>
              </motion.a>
              <motion.a 
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl hover:bg-purple-500/10 transition-all duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition">
                  <FaPhone className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Phone</div>
                  <div className="text-gray-300">{personalInfo.phone}</div>
                </div>
              </motion.a>
              <motion.div 
                className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <FaGlobe className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Location</div>
                  <div className="text-gray-300">{personalInfo.location}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;