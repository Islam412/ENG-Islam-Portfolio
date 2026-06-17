import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-1 px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 hover:from-purple-500/30 hover:to-cyan-500/30 transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaGlobe className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-500" />
      <span className="text-xs md:text-sm font-medium text-white">
        {i18n.language === 'en' ? 'AR' : 'EN'}
      </span>
    </motion.button>
  );
};

export default LanguageSwitcher;