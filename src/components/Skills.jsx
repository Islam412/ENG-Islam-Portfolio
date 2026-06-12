import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skillsData } from '../data/portfolioData';

const Skills = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    { title: t('skills.frontend'), data: skillsData.frontend, color: 'from-pink-500 to-orange-500', icon: '🎨' },
    { title: t('skills.backend'), data: skillsData.backend, color: 'from-blue-500 to-cyan-500', icon: '⚙️' },
    { title: t('skills.tools'), data: skillsData.tools, color: 'from-purple-500 to-indigo-500', icon: '🛠️' },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-500 text-sm uppercase tracking-wider">My Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            <span className="gradient-text">{t('skills.title')}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass-card rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-bold gradient-text">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-5">
                {category.data.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110" style={{ color: skill.color }} />
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                        className={`skill-bar-fill bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;