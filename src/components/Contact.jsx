import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.github, color: 'hover:text-gray-400' },
    { icon: FaLinkedin, href: personalInfo.linkedin, color: 'hover:text-blue-500' },
    { icon: FaFacebook, href: personalInfo.facebook, color: 'hover:text-blue-600' },
    { icon: FaInstagram, href: personalInfo.instagram, color: 'hover:text-pink-500' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${personalInfo.email}?subject=Message from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-gray-400 text-lg">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-card rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder={t('contact.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t('contact.email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  required
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder={t('contact.message')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white font-semibold flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane className="w-4 h-4" /> {t('contact.send')}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-dark-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.or')}</h3>
              <div className="space-y-4">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-gray-400 hover:text-purple-500 transition-colors">
                  <FaEnvelope className="w-5 h-5" />
                  <span>{personalInfo.email}</span>
                </a>
                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4 text-gray-400 hover:text-purple-500 transition-colors">
                  <FaPhone className="w-5 h-5" />
                  <span>{personalInfo.phone}</span>
                </a>
                <div className="flex items-center gap-4 text-gray-400">
                  <FaMapMarkerAlt className="w-5 h-5" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="bg-dark-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Social Media</h3>
              <div className="flex flex-wrap gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-all duration-300 ${social.color}`}
                    whileHover={{ y: -3, scale: 1.1 }}
                  >
                    <social.icon className="w-8 h-8" />
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

export default Contact;