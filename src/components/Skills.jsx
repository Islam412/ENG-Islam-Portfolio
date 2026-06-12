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
    <section id="skills" className="py-20 bg-dark-bg" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            {t('skills.title')}
          </h2>
          <p className="text-gray-400 text-lg">{t('skills.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-gradient-to-br from-dark-card to-dark-hover rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group"
            >
              <div className="text-center mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white mt-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.data.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    className="group/skill"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-5 h-5 transition-all duration-300 group-hover/skill:scale-110" style={{ color: skill.color }} />
                        <span className="text-gray-300 group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                        className={`absolute h-full bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
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