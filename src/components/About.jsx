import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Globe, Smartphone, Briefcase, Users, Award, Coffee } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    { icon: Briefcase, value: personalInfo.experience, label: t('about.experience') },
    { icon: Code2, value: personalInfo.projects, label: t('about.projects') },
    { icon: Award, value: personalInfo.technologies, label: t('about.technologies') },
    { icon: Users, value: personalInfo.clients, label: t('about.clients') },
  ];

  const images = [
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg',
    'https://randomuser.me/api/portraits/men/3.jpg',
  ];

  return (
    <section id="about" className="py-20 bg-dark-card" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <p className="text-gray-400 text-lg">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                className={`relative overflow-hidden rounded-2xl ${
                  index === 0 ? 'col-span-2' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={img}
                  alt={`Profile ${index + 1}`}
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-50" />
              </motion.div>
            ))}
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed">
              {t('about.description')}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-dark-bg rounded-xl p-4 text-center"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <stat.icon className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-purple-500" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-purple-500" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Globe className="w-5 h-5 text-purple-500" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;