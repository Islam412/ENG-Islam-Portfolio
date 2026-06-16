import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaGithub, FaExternalLinkAlt, FaArrowRight, FaStar, FaCode, 
  FaDatabase, FaLayerGroup, FaEye, FaRocket, FaFilter, FaTimes,
  FaInfoCircle, FaTag
} from 'react-icons/fa';
import { projectsData, projectStats } from '../data/portfolioData';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [category, setCategory] = useState('all');
  const [techFilter, setTechFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);
  const [showTechFilter, setShowTechFilter] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const allTechnologies = ['all', 'React', 'Django', 'Python', 'SQL', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'Docker', 'Redis', 'Celery', 'Stripe'];

  const filteredProjects = projectsData.filter(project => {
    const matchCategory = category === 'all' || project.category === category;
    const matchTech = techFilter === 'all' || project.technologies.includes(techFilter);
    return matchCategory && matchTech;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const showAll = () => {
    setVisibleCount(filteredProjects.length);
  };

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const categoryNames = {
    frontend: t('projects.frontend'),
    backend: t('projects.backend'),
    fullstack: t('projects.fullStack'),
  };

  const allLabel = i18n.language === 'ar' ? 'الكل' : 'All';

  return (
    <>
      <section id="projects" className="py-16 md:py-20 bg-gradient-to-b from-dark-card to-dark-bg relative overflow-hidden" ref={ref}>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="inline-block mb-2 md:mb-3"
            >
              <span className="text-purple-500 text-[10px] md:text-xs uppercase tracking-wider font-semibold bg-purple-500/10 px-3 md:px-4 py-1 rounded-full">
                {t('projects.portfolio')}
              </span>
            </motion.div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
              <span className="gradient-text">{t('projects.title')}</span>
            </h2>
            <p className="text-gray-400 text-xs md:text-sm mt-2">{t('projects.subtitle')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 max-w-2xl mx-auto mb-8 md:mb-10"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg md:rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-dark-bg/80 backdrop-blur-sm rounded-lg md:rounded-xl py-2 md:py-3 text-center border border-gray-800 group-hover:border-transparent transition-all duration-300">
                <div className="text-xl md:text-2xl font-bold text-purple-500">{projectStats.total}</div>
                <div className="text-[8px] md:text-[10px] text-gray-500">{t('projects.total')}</div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg md:rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-dark-bg/80 backdrop-blur-sm rounded-lg md:rounded-xl py-2 md:py-3 text-center border border-gray-800 group-hover:border-transparent transition-all duration-300">
                <div className="text-xl md:text-2xl font-bold text-green-500">{projectStats.frontend}</div>
                <div className="text-[8px] md:text-[10px] text-gray-500">{t('projects.frontend')}</div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg md:rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-dark-bg/80 backdrop-blur-sm rounded-lg md:rounded-xl py-2 md:py-3 text-center border border-gray-800 group-hover:border-transparent transition-all duration-300">
                <div className="text-xl md:text-2xl font-bold text-blue-500">{projectStats.backend}</div>
                <div className="text-[8px] md:text-[10px] text-gray-500">{t('projects.backend')}</div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg md:rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-dark-bg/80 backdrop-blur-sm rounded-lg md:rounded-xl py-2 md:py-3 text-center border border-gray-800 group-hover:border-transparent transition-all duration-300">
                <div className="text-xl md:text-2xl font-bold text-purple-500">{projectStats.fullstack}</div>
                <div className="text-[8px] md:text-[10px] text-gray-500">{t('projects.fullStack')}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-gray-900/40 backdrop-blur-md rounded-xl md:rounded-2xl p-1 border border-gray-800 shadow-xl overflow-x-auto max-w-full">
              <div className="flex flex-nowrap md:flex-wrap justify-center gap-1 min-w-max md:min-w-0">
                <button
                  onClick={() => { setCategory('all'); setTechFilter('all'); setVisibleCount(6); }}
                  className={`relative px-3 md:px-5 py-1.5 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-1 md:gap-2 overflow-hidden whitespace-nowrap ${
                    category === 'all' ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {category === 'all' && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg md:rounded-xl shadow-lg"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1 md:gap-2">
                    <FaLayerGroup className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="font-semibold hidden sm:inline">{allLabel}</span>
                    <span className={`px-1.5 md:px-2 py-0.5 rounded-full text-[9px] md:text-xs font-bold transition-all duration-300 ${
                      category === 'all' ? 'bg-white/20 text-white' : 'bg-gray-800 text-gray-400'
                    }`}>
                      {projectStats.total}
                    </span>
                  </span>
                </button>

                <button
                  onClick={() => { setCategory('frontend'); setTechFilter('all'); setVisibleCount(6); }}
                  className={`relative px-3 md:px-5 py-1.5 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-1 md:gap-2 overflow-hidden whitespace-nowrap ${
                    category === 'frontend' ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {category === 'frontend' && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg md:rounded-xl shadow-lg"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1 md:gap-2">
                    <FaCode className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="font-semibold hidden sm:inline">{t('projects.frontend')}</span>
                    <span className={`px-1.5 md:px-2 py-0.5 rounded-full text-[9px] md:text-xs font-bold transition-all duration-300 ${
                      category === 'frontend' ? 'bg-white/20 text-white' : 'bg-gray-800 text-gray-400'
                    }`}>
                      {projectStats.frontend}
                    </span>
                  </span>
                </button>

                <button
                  onClick={() => { setCategory('backend'); setTechFilter('all'); setVisibleCount(6); }}
                  className={`relative px-3 md:px-5 py-1.5 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-1 md:gap-2 overflow-hidden whitespace-nowrap ${
                    category === 'backend' ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {category === 'backend' && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg md:rounded-xl shadow-lg"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1 md:gap-2">
                    <FaDatabase className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="font-semibold hidden sm:inline">{t('projects.backend')}</span>
                    <span className={`px-1.5 md:px-2 py-0.5 rounded-full text-[9px] md:text-xs font-bold transition-all duration-300 ${
                      category === 'backend' ? 'bg-white/20 text-white' : 'bg-gray-800 text-gray-400'
                    }`}>
                      {projectStats.backend}
                    </span>
                  </span>
                </button>

                <button
                  onClick={() => { setCategory('fullstack'); setTechFilter('all'); setVisibleCount(6); }}
                  className={`relative px-3 md:px-5 py-1.5 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-1 md:gap-2 overflow-hidden whitespace-nowrap ${
                    category === 'fullstack' ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {category === 'fullstack' && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg md:rounded-xl shadow-lg"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1 md:gap-2">
                    <FaLayerGroup className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="font-semibold hidden sm:inline">{t('projects.fullStack')}</span>
                    <span className={`px-1.5 md:px-2 py-0.5 rounded-full text-[9px] md:text-xs font-bold transition-all duration-300 ${
                      category === 'fullstack' ? 'bg-white/20 text-white' : 'bg-gray-800 text-gray-400'
                    }`}>
                      {projectStats.fullstack}
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-8 md:mb-10"
          >
            <div className="relative">
              {/* <button
                onClick={() => setShowTechFilter(!showTechFilter)}
                className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm bg-gray-800/50 text-gray-300 hover:text-white border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <FaFilter className="w-3 h-3 md:w-3.5 md:h-3.5" />
                <span>{techFilter === 'all' ? t('projects.filterByTech') : techFilter}</span>
                <svg className={`w-2.5 h-2.5 md:w-3 md:h-3 transition-transform duration-300 ${showTechFilter ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button> */}
              {showTechFilter && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-900 border border-gray-700 rounded-lg md:rounded-xl overflow-hidden shadow-xl z-20 min-w-[140px] md:min-w-[160px]">
                  <div className="p-1">
                    {allTechnologies.map(tech => (
                      <button
                        key={tech}
                        onClick={() => { setTechFilter(tech); setVisibleCount(6); setShowTechFilter(false); }}
                        className={`w-full text-left px-2 md:px-3 py-1.5 md:py-2 text-[10px] md:text-xs rounded-md transition-colors ${
                          techFilter === tech
                            ? 'bg-purple-500/20 text-purple-400'
                            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                        }`}
                      >
                        {tech === 'all' ? t('projects.allTechnologies') : tech}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group bg-dark-bg rounded-lg md:rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
                onClick={() => openModal(project)}
              >
                <div className="relative h-36 sm:h-40 md:h-44 overflow-hidden bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/600x400/1a1a1a/8b5cf6?text=Project';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className={`absolute top-2 left-2 md:top-3 md:left-3 px-1.5 md:px-2 py-0.5 rounded-full text-[8px] md:text-[10px] font-medium text-white shadow-lg bg-gradient-to-r ${
                    project.category === 'frontend' ? 'from-green-500 to-emerald-500' :
                    project.category === 'backend' ? 'from-blue-500 to-cyan-500' :
                    'from-purple-500 to-pink-500'
                  }`}>
                    {categoryNames[project.category]}
                  </div>

                  {project.featured && (
                    <div className="absolute top-2 right-2 md:top-3 md:right-3 px-1.5 md:px-2 py-0.5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-[7px] md:text-[9px] font-semibold flex items-center gap-0.5 md:gap-1">
                      <FaStar className="w-2 h-2 md:w-2.5 md:h-2.5" />
                      <span className="hidden xs:inline">Featured</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 md:gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 md:w-9 md:h-9 rounded-lg bg-purple-500 flex items-center justify-center text-white hover:bg-purple-600 hover:scale-110 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 md:w-9 md:h-9 rounded-lg bg-gray-700 flex items-center justify-center text-white hover:bg-purple-500 hover:scale-110 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="p-3 md:p-4">
                  <h3 className="text-sm md:text-base font-bold text-white mb-1 group-hover:text-purple-400 transition-colors line-clamp-1">
                    {i18n.language === 'en' ? project.title : project.titleAr}
                  </h3>
                  <p className="text-gray-400 text-[10px] md:text-[11px] leading-relaxed mb-2 md:mb-3 line-clamp-2">
                    {i18n.language === 'en' ? project.description.substring(0, 60) : project.descriptionAr.substring(0, 60)}...
                  </p>

                  <div className="flex flex-wrap gap-1 md:gap-1.5 mb-2 md:mb-3">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-1 md:px-1.5 py-0.5 text-[7px] md:text-[8px] rounded bg-purple-500/10 text-purple-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1 md:px-1.5 py-0.5 text-[7px] md:text-[8px] rounded bg-gray-800 text-gray-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-1.5 md:gap-2 pt-1.5 md:pt-2 border-t border-gray-800">
                    <button 
                      className="flex-1 flex items-center justify-center gap-1 py-1 md:py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-[9px] md:text-[10px] font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                      onClick={() => openModal(project)}
                    >
                      <FaEye className="w-2 h-2 md:w-2.5 md:h-2.5" />
                      {t('projects.viewDetails')}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-8 md:py-12">
              <p className="text-gray-400 text-xs md:text-sm">{t('projects.noProjects')}</p>
            </div>
          )}

          {hasMore && filteredProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-center mt-8 md:mt-10"
            >
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                <motion.button
                  onClick={loadMore}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-4 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs md:text-sm font-medium flex items-center gap-1.5 md:gap-2 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
                >
                  <FaEye className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  <span>{t('projects.showMore')}</span>
                  <span className="text-[9px] md:text-xs bg-white/20 px-1 md:px-1.5 py-0.5 rounded-full">
                    {filteredProjects.length - visibleCount}
                  </span>
                  <FaArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </motion.button>

                <motion.button
                  onClick={showAll}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-4 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl border border-purple-500 text-purple-400 text-xs md:text-sm font-medium hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-1.5 md:gap-2"
                >
                  <FaLayerGroup className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  <span>{t('projects.viewAll')}</span>
                  <span className="text-[9px] md:text-xs">({filteredProjects.length})</span>
                  <FaArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-center mt-6 md:mt-8"
          >
            <a
              href="https://github.com/Islam412"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
            >
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gray-700 group-hover:bg-purple-500/20 flex items-center justify-center transition-all duration-300">
                <FaGithub className="w-3 h-3 md:w-4 md:h-4 text-gray-400 group-hover:text-purple-400" />
              </div>
              <div className="text-left">
                <div className="text-[8px] md:text-[10px] text-gray-500 group-hover:text-purple-400 transition-colors">{t('projects.github')}</div>
                <div className="text-[10px] md:text-xs text-white font-medium group-hover:text-purple-400 transition-colors">{t('projects.viewAllProjects')}</div>
              </div>
              <FaArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all duration-300" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ✅ Modal - مع صورة كاملة */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-purple-500/30"
            >
              {/* زر الإغلاق */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-800/80 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500 transition-all duration-300"
              >
                <FaTimes className="w-4 h-4" />
              </button>

              {/* ✅ صورة المشروع - تظهر كاملة */}
              <div className="relative w-full bg-gray-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[400px] object-contain"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x400/1a1a1a/8b5cf6?text=Project';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge في المودال */}
                <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg bg-gradient-to-r ${
                  selectedProject.category === 'frontend' ? 'from-green-500 to-emerald-500' :
                  selectedProject.category === 'backend' ? 'from-blue-500 to-cyan-500' :
                  'from-purple-500 to-pink-500'
                }`}>
                  {selectedProject.category === 'frontend' ? t('projects.frontend') : 
                   selectedProject.category === 'backend' ? t('projects.backend') : t('projects.fullStack')}
                </div>
              </div>

              {/* المحتوى */}
              <div className="p-6 space-y-5">
                {/* العنوان */}
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {i18n.language === 'en' ? selectedProject.title : selectedProject.titleAr}
                  </h2>
                  <div className="flex items-center gap-2 mt-2">
                    {selectedProject.featured && (
                      <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-[10px] font-semibold flex items-center gap-1">
                        <FaStar className="w-2.5 h-2.5" />
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* الوصف */}
                <div>
                  <h3 className="text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2">
                    <FaInfoCircle className="w-3.5 h-3.5" /> {t('projects.description')}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {i18n.language === 'en' ? selectedProject.description : selectedProject.descriptionAr}
                  </p>
                </div>

                {/* التقنيات */}
                <div>
                  <h3 className="text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2">
                    <FaCode className="w-3.5 h-3.5" /> {t('projects.technologies')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* معلومات إضافية */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <FaTag className="w-3.5 h-3.5 text-purple-500" />
                    <span>{selectedProject.category === 'frontend' ? t('projects.frontendProject') : 
                           selectedProject.category === 'backend' ? t('projects.backendProject') : t('projects.fullStackProject')}</span>
                  </div>
                </div>

                {/* أزرار الإجراءات */}
                <div className="flex gap-3 pt-4 border-t border-gray-800">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    {t('projects.viewLive')}
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-600 text-gray-300 text-sm font-medium hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    {t('projects.viewCode')}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;