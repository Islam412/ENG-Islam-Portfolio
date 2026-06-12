import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaCode, FaGlobe, FaUsers, FaAward, 
  FaEnvelope, FaPhone, FaLaptopCode, FaGithub, FaLinkedin, 
  FaFacebook, FaInstagram, FaQuoteLeft, FaMapMarkerAlt 
} from 'react-icons/fa';
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
    { icon: FaCode, value: 20, label: 'Projects Done', suffix: '+' },
    { icon: FaLaptopCode, value: 4, label: 'Years Exp', suffix: '+' },
    { icon: FaAward, value: 15, label: 'Technologies', suffix: '+' },
    { icon: FaUsers, value: 10, label: 'Happy Clients', suffix: '+' },
  ];

  const profileImage = '/profile/islam2.jpg';

  // روابط السوشيال ميديا
  const socialLinks = [
    { icon: FaGithub, href: personalInfo.github, color: 'hover:bg-gray-600', bgColor: 'bg-gray-700' },
    { icon: FaLinkedin, href: personalInfo.linkedin, color: 'hover:bg-blue-600', bgColor: 'bg-blue-700' },
    { icon: FaFacebook, href: personalInfo.facebook, color: 'hover:bg-blue-700', bgColor: 'bg-blue-800' },
    { icon: FaInstagram, href: personalInfo.instagram, color: 'hover:bg-pink-600', bgColor: 'bg-pink-700' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-card to-dark-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.06),transparent_60%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-purple-500 text-xs uppercase tracking-wider font-semibold bg-purple-500/10 px-4 py-1.5 rounded-full">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            <span className="gradient-text">Who Am I?</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">Get to know me better</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Profile Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-5/12"
          >
            <div className="relative group">
              {/* Animated Border Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-500" />
              
              {/* Image Container */}
              <div className="relative bg-dark-bg rounded-2xl overflow-hidden">
                <img
                  src={profileImage}
                  alt="Islam Hamdy"
                  className="w-full object-cover transition-all duration-700 group-hover:scale-105"
                  style={{ objectPosition: '50% 20%' }}
                  onError={(e) => {
                    e.target.src = 'https://ui-avatars.com/api/?name=Islam+Hamdy&background=8b5cf6&color=fff&size=500&bold=true';
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent" />
                
                {/* Name Card on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="bg-dark-bg/80 backdrop-blur-md rounded-xl p-4 border border-purple-500/30">
                    <h3 className="text-white text-xl font-bold">Islam Hamdy</h3>
                    <p className="text-purple-400 text-sm">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-7/12 space-y-5"
          >
            {/* Description */}
            <div className="relative bg-gradient-to-r from-purple-500/5 to-transparent rounded-xl p-4">
              <FaQuoteLeft className="w-7 h-7 text-purple-500/20 absolute top-2 left-2" />
              <p className="text-gray-300 leading-relaxed text-sm pl-6">
                {t('about.description')}
              </p>
            </div>
            
            {/* Stats Grid - 2x2 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-xl p-3 text-center hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 border border-gray-800 hover:border-purple-500/30 group"
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <stat.icon className="w-6 h-6 text-purple-500 mx-auto mb-1 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-xl font-bold text-white">
                    <Counter end={stat.value} />{stat.suffix}
                  </div>
                  <div className="text-gray-400 text-[10px] mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Contact Info - Email + Phone */}
            <div className="grid grid-cols-2 gap-3">
              <motion.a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-xl hover:bg-purple-500/10 transition-all duration-300 group border border-gray-800 hover:border-purple-500/30"
                whileHover={{ x: 3 }}
              >
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <FaEnvelope className="w-3.5 h-3.5 text-purple-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] text-gray-500">Email</div>
                  <div className="text-xs text-gray-300 truncate">{personalInfo.email}</div>
                </div>
              </motion.a>
              
              <motion.a 
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-xl hover:bg-purple-500/10 transition-all duration-300 group border border-gray-800 hover:border-purple-500/30"
                whileHover={{ x: 3 }}
              >
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <FaPhone className="w-3.5 h-3.5 text-purple-500" />
                </div>
                <div>
                  <div className="text-[9px] text-gray-500">Phone</div>
                  <div className="text-xs text-gray-300">{personalInfo.phone}</div>
                </div>
              </motion.a>
            </div>

            {/* Location & Experience (غير مكرر) */}
            <div className="grid grid-cols-2 gap-3">
              <motion.div 
                className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-xl border border-gray-800"
              >
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <FaMapMarkerAlt className="w-3.5 h-3.5 text-purple-500" />
                </div>
                <div>
                  <div className="text-[9px] text-gray-500">Location</div>
                  <div className="text-xs text-gray-300">{personalInfo.location}</div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl border border-purple-500/20"
                whileHover={{ scale: 1.02 }}
              >
                <FaLaptopCode className="w-4 h-4 text-purple-500" />
                <div>
                  <div className="text-[9px] text-gray-500">Experience</div>
                  <div className="text-xs text-white font-medium">5+ Years</div>
                </div>
              </motion.div>
            </div>

            {/* Social Media Links */}
            <div className="pt-3">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-px bg-gradient-to-r from-purple-500 to-transparent" />
                <span className="text-xs text-gray-500">Follow Me</span>
              </div>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 rounded-full ${social.bgColor} flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;