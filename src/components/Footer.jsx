import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code2 } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Code2 className="w-6 h-6 text-purple-500" />
            <span className="text-gray-400">
              © {currentYear} Islam Hamdy. {t('footer.rights')}
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;