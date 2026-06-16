import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCode } from 'react-icons/fa';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  // تحديد الاسم حسب اللغة
  const name = i18n.language === 'ar' ? 'إسلام حمدي' : 'Islam Hamdy';

  return (
    <footer className="bg-dark-card border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <FaCode className="w-6 h-6 text-purple-500" />
            <span className="text-gray-400">
              {t('footer.rights')} © {name} {currentYear} . 
            </span>
          </div>
          <div className="flex gap-6">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">
              {t('nav.home')}
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">
              {t('nav.about')}
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
              {t('nav.skills')}
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
              {t('nav.projects')}
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              {t('nav.contact')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;