import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaArrowDown, FaDownload, FaCode } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

// ✅ مكون العداد المتحرك
const AnimatedCounter = ({ end, duration = 2000, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
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
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <span ref={ref} className="text-2xl font-bold text-white">
      {count}{suffix}
    </span>
  );
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);
  
  // ✅ الأدوار مترجمة حسب اللغة
  const rolesEn = ['Full Stack Developer', 'React Expert', 'Django Developer', 'UI/UX Enthusiast'];
  const rolesAr = ['مطور ويب فول ستاك', 'خبير React', 'مطور Django', 'مهتم بتجربة المستخدم'];
  
  // اختيار الأدوار حسب اللغة
  const roles = i18n.language === 'ar' ? rolesAr : rolesEn;
  
  useEffect(() => {
    // تنظيف الـ timeout السابق
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const currentRole = roles[index];
    const isComplete = !isDeleting && text === currentRole;
    const isDeleted = isDeleting && text === '';

    if (isComplete) {
      // انتظر 2 ثانية قبل بدء الحذف
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeoutRef.current);
    }

    if (isDeleted) {
      // انتقل للكلمة التالية
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    // سرعة الكتابة والحذف
    const speed = isDeleting ? 50 : 100;
    
    timeoutRef.current = setTimeout(() => {
      if (isDeleting) {
        setText(currentRole.slice(0, text.length - 1));
      } else {
        setText(currentRole.slice(0, text.length + 1));
      }
    }, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [text, isDeleting, index, roles]);

  // إعادة تعيين عند تغيير اللغة
  useEffect(() => {
    setText('');
    setIndex(0);
    setIsDeleting(false);
  }, [i18n.language]);

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.github, color: 'hover:bg-gray-600' },
    { icon: FaLinkedin, href: personalInfo.linkedin, color: 'hover:bg-blue-600' },
    { icon: FaFacebook, href: personalInfo.facebook, color: 'hover:bg-blue-700' },
    { icon: FaInstagram, href: personalInfo.instagram, color: 'hover:bg-pink-600' },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/Islam_Hamdy_CV.pdf';
    link.download = 'Islam_Hamdy_CV.pdf';
    link.click();
  };

  // تحديد الاسم حسب اللغة
  const displayName = i18n.language === 'ar' ? 'إسلام حمدي' : 'Islam Hamdy';

  return (
    <section 
      id="home" 
      className="min-h-screen min-h-[100dvh] flex items-center justify-center relative overflow-visible"
    >
      {/* 3D Animated Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000" />
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div 
            className="text-center lg:text-left flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-purple-400">{t('hero.available')}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">
                {displayName}
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl lg:text-3xl text-gray-300 mb-6 h-14"
            >
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 max-w-lg mx-auto lg:mx-0 mb-8 text-lg leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
            >
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCode className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                {t('hero.contactMe')}
              </motion.a>
              
              <motion.button
                onClick={handleDownloadCV}
                className="group px-8 py-3 border-2 border-purple-500 rounded-full text-purple-500 font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                {t('hero.downloadCV')}
              </motion.button>
              
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group px-8 py-3 border border-gray-600 rounded-full text-gray-300 font-semibold hover:border-purple-500 hover:text-purple-500 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.viewWork')}
                <FaArrowDown className="inline ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* ✅ Stats مع عداد متحرك */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center lg:justify-start gap-8 mb-10"
            >
              <div className="text-center">
                <AnimatedCounter end={15} duration={2000} suffix="+" />
                <div className="text-xs text-gray-500">{t('about.clients')}</div>
              </div>
              <div className="text-center">
                <AnimatedCounter end={20} duration={2000} suffix="+" />
                <div className="text-xs text-gray-500">{t('about.projects')}</div>
              </div>
              <div className="text-center">
                <AnimatedCounter end={4} duration={2000} suffix="+" />
                <div className="text-xs text-gray-500">{t('about.experience')}</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:text-white hover:scale-110 backdrop-blur-sm border border-gray-700`}
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition duration-500 animate-spin-slow" />
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition duration-700 animate-spin-reverse" />
              <div className="absolute -inset-2 rounded-full border-2 border-purple-500/30 animate-spin-slow" />
              <div className="absolute -inset-6 rounded-full border border-cyan-500/20 animate-spin-reverse" />
              
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-cyan-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-dark-bg">
                  <img 
                    src="/images/profile-main.jpg" 
                    alt={displayName}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = 'profile/islam.jpg';
                    }}
                  />
                </div>
              </div>
              
              <motion.div 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm px-5 py-2 rounded-full border border-purple-500/50 shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <span className="text-sm font-semibold gradient-text">⚡ {t('hero.title')}</span>
              </motion.div>
              
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-purple-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-6 mt-16 pt-8 border-t border-gray-800"
        >
          <a href={`mailto:${personalInfo.email}`} className="group flex items-center gap-3 text-gray-400 hover:text-purple-500 transition-colors">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all group-hover:scale-110">
              <FaEnvelope className="w-4 h-4 text-purple-500" />
            </div>
            <span className="text-sm">{personalInfo.email}</span>
          </a>
          <a href={`tel:${personalInfo.phone}`} className="group flex items-center gap-3 text-gray-400 hover:text-purple-500 transition-colors">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all group-hover:scale-110">
              <FaPhone className="w-4 h-4 text-purple-500" />
            </div>
            <span className="text-sm">{personalInfo.phone}</span>
          </a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-8 h-12 rounded-full border-2 border-gray-600 flex justify-center hover:border-purple-500 transition-colors">
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