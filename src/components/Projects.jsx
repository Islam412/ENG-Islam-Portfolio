import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.featured);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <section id="projects" className="py-20 bg-dark-card" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            {t('projects.title')}
          </h2>
          <p className="text-gray-400 text-lg">{t('projects.subtitle')}</p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => {
              setFilter('all');
              setVisibleCount(6);
            }}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                : 'bg-dark-card text-gray-400 hover:text-white'
            }`}
          >
            All Projects ({projectsData.length})
          </button>
          <button
            onClick={() => {
              setFilter('featured');
              setVisibleCount(6);
            }}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === 'featured'
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                : 'bg-dark-card text-gray-400 hover:text-white'
            }`}
          >
            Featured ({projectsData.filter(p => p.featured).length})
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-dark-bg rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={i18n.language === 'en' ? project.title : project.titleAr}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
                    Featured
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">
                  {i18n.language === 'en' ? project.title : project.titleAr}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {i18n.language === 'en' ? project.description : project.descriptionAr}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" /> {t('projects.viewLive')}
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub className="w-4 h-4" /> {t('projects.viewCode')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show All Projects Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={loadMore}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show All Projects ({filteredProjects.length - visibleCount} more)
              <FaArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8"
        >
          <a
            href="https://github.com/Islam412"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors"
          >
            View all projects on GitHub <FaArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;