import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="flex items-center gap-2 cursor-pointer group shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <FaCode className="w-7 h-7 text-purple-500" />
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent whitespace-nowrap">
              Islam Hamdy
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={`#${item.href}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className={`relative text-sm lg:text-base font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  activeSection === item.href
                    ? 'text-purple-500'
                    : 'text-gray-300 hover:text-white'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-bg/95 backdrop-blur-lg border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className="block py-3 text-gray-300 hover:text-purple-500 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;