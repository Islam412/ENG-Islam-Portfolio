import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const displayName = i18n.language === 'ar' ? 'إسلام حمدي' : 'Islam Hamdy';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ منع التمرير عند فتح القائمة
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  const navItems = [
    { name: t('nav.home'), href: 'home' },
    { name: t('nav.about'), href: 'about' },
    { name: t('nav.skills'), href: 'skills' },
    { name: t('nav.projects'), href: 'projects' },
    { name: t('nav.contact'), href: 'contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-dark-bg/95 backdrop-blur-lg shadow-lg' : 'bg-dark-bg/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              className="flex items-center gap-2 cursor-pointer group shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <FaCode className="w-6 h-6 md:w-7 md:h-7 text-purple-500" />
              <span className="text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent whitespace-nowrap">
                {displayName}
              </span>
            </motion.a>

            {/* ✅ روابط سطح المكتب */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className={`relative text-sm lg:text-base font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    activeSection === item.href
                      ? 'text-purple-500'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
              <LanguageSwitcher />
            </div>

            {/* ✅ أزرار الموبايل */}
            <div className="flex items-center gap-2 md:hidden">
              <LanguageSwitcher />
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 flex items-center justify-center text-gray-300 hover:text-white focus:outline-none transition-all duration-300 border border-purple-500/30 hover:border-purple-500/60"
                whileTap={{ scale: 0.95 }}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ✅ قائمة الموبايل */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ top: '64px' }}
          >
            {/* خلفية */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* المحتوى */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-dark-bg/95 backdrop-blur-lg border-b border-gray-800 shadow-2xl"
            >
              <div className="container mx-auto px-4 py-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={`#${item.href}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                    className={`block py-3 px-4 text-gray-300 hover:text-purple-500 transition-colors rounded-lg hover:bg-purple-500/10 ${
                      activeSection === item.href ? 'text-purple-500 bg-purple-500/10' : ''
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50" />
                      {item.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;