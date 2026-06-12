import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaStar, FaCode, FaDatabase, FaLayerGroup } from 'react-icons/fa';
import { projectsData, projectStats } from '../data/portfolioData';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [category, setCategory] = useState('all');
  const [techFilter, setTechFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);

  // تقنيات متاحة للفلترة
  const technologies = ['all', 'React', 'Django', 'Python', 'SQL', 'Tailwind CSS'];

  // فلترة المشاريع حسب التصنيف والتقنية
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

  // أيقونات التصنيفات
  const categoryIcons = {
    frontend: <FaCode className="w-4 h-4" />,
    backend: <FaDatabase className="w-4 h-4" />,
    fullstack: <FaLayerGroup className="w-4 h-4" />,
  };

  // ألوان التصنيفات
  const categoryColors = {
    frontend: 'from-green-500 to-emerald-500',
    backend: 'from-blue-500 to-cyan-500',
    fullstack: 'from-purple-500 to-pink-500',
  };

  // أسماء التصنيفات للعرض
  const categoryNames = {
    frontend: 'Frontend',
    backend: 'Backend',
    fullstack: 'Full Stack',
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-dark-card to-dark-bg relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-purple-500 text-sm uppercase tracking-wider font-semibold">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            <span className="gradient-text">{t('projects.title')}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Project Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="glass-card rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold text-purple-500">{projectStats.total}</div>
            <div className="text-xs text-gray-400">Total Projects</div>
          </div>
          <div className="glass-card rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold text-green-500">{projectStats.frontend}</div>
            <div className="text-xs text-gray-400">Frontend</div>
          </div>
          <div className="glass-card rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold text-blue-500">{projectStats.backend}</div>
            <div className="text-xs text-gray-400">Backend</div>
          </div>
          <div className="glass-card rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-2xl font-bold text-purple-500">{projectStats.fullstack}</div>
            <div className="text-xs text-gray-400">Full Stack</div>
          </div>
        </motion.div>

        {/* Category Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-3 mb-8 flex-wrap"
        >
          <button
            onClick={() => { setCategory('all'); setTechFilter('all'); setVisibleCount(6); }}
            className={`px-5 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
              category === 'all' 
                ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/25' 
                : 'glass-card text-gray-400 hover:text-white'
            }`}
          >
            <FaLayerGroup className="w-4 h-4" />
            All ({projectStats.total})
          </button>
          <button
            onClick={() => { setCategory('frontend'); setTechFilter('all'); setVisibleCount(6); }}
            className={`px-5 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
              category === 'frontend' 
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25' 
                : 'glass-card text-gray-400 hover:text-white'
            }`}
          >
            <FaCode className="w-4 h-4" />
            Frontend ({projectStats.frontend})
          </button>
          <button
            onClick={() => { setCategory('backend'); setTechFilter('all'); setVisibleCount(6); }}
            className={`px-5 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
              category === 'backend' 
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25' 
                : 'glass-card text-gray-400 hover:text-white'
            }`}
          >
            <FaDatabase className="w-4 h-4" />
            Backend ({projectStats.backend})
          </button>
          <button
            onClick={() => { setCategory('fullstack'); setTechFilter('all'); setVisibleCount(6); }}
            className={`px-5 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
              category === 'fullstack' 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25' 
                : 'glass-card text-gray-400 hover:text-white'
            }`}
          >
            <FaLayerGroup className="w-4 h-4" />
            Full Stack ({projectStats.fullstack})
          </button>
        </motion.div>

        {/* Technology Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {technologies.map(tech => (
            <button
              key={tech}
              onClick={() => { setTechFilter(tech); setVisibleCount(6); }}
              className={`px-3 py-1.5 rounded-full text-xs transition-all duration-300 ${
                techFilter === tech 
                  ? 'bg-purple-500/30 text-purple-400 border border-purple-500' 
                  : 'glass-card text-gray-500 hover:text-gray-300'
              }`}
            >
              {tech === 'all' ? 'All Tech' : tech}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 transition-all duration-500"
            >
              {/* Category Badge */}
              <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-gradient-to-r ${categoryColors[project.category]} text-white text-xs font-semibold flex items-center gap-1 shadow-lg`}>
                {categoryIcons[project.category]}
                <span>{categoryNames[project.category]}</span>
              </div>

              {/* Image Container */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={i18n.language === 'en' ? project.title : project.titleAr}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x400/1a1a1a/8b5cf6?text=Project';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-semibold flex items-center gap-1 shadow-lg">
                    <FaStar className="w-3 h-3" />
                    Featured
                  </div>
                )}
                
                {/* Overlay Links on Hover */}
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-purple-500 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-purple-500 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">
                  {i18n.language === 'en' ? project.title : project.titleAr}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-2">
                  {i18n.language === 'en' ? project.description : project.descriptionAr}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 text-xs rounded-full bg-gray-800 text-gray-400 border border-gray-700">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                
                {/* Links */}
                <div className="flex gap-5 pt-3 border-t border-gray-800">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-500 transition-all duration-300 group/link"
                  >
                    <FaExternalLinkAlt className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-purple-500 transition-all duration-300 group/link"
                  >
                    <FaGithub className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No projects found in this category.</p>
          </div>
        )}

        {/* Show More Button */}
        {hasMore && filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={loadMore}
              className="group px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Show More Projects</span>
              <span className="text-sm opacity-80">({filteredProjects.length - visibleCount} remaining)</span>
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        )}

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Islam412"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-all duration-300 group"
          >
            <span>View all projects on GitHub</span>
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;