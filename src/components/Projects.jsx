import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaStar, FaCode, FaDatabase, FaLayerGroup, FaEye, FaRocket } from 'react-icons/fa';
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

  const showAll = () => {
    setVisibleCount(filteredProjects.length);
  };

  // أيقونات التصنيفات
  const categoryIcons = {
    all: <FaLayerGroup className="w-4 h-4" />,
    frontend: <FaCode className="w-4 h-4" />,
    backend: <FaDatabase className="w-4 h-4" />,
    fullstack: <FaLayerGroup className="w-4 h-4" />,
  };

  // ألوان التصنيفات
  const categoryColors = {
    all: 'from-purple-500 to-cyan-500',
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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">My Recent Work</p>
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

        {/* Category Filter Buttons - Modern & Improved */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="bg-gray-900/40 backdrop-blur-md rounded-2xl p-1.5 border border-gray-800 shadow-xl">
            <div className="flex flex-wrap justify-center gap-1.5">
              {/* All Button */}
              <button
                onClick={() => { setCategory('all'); setTechFilter('all'); setVisibleCount(6); }}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2.5 overflow-hidden ${
                  category === 'all' ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {category === 'all' && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl shadow-lg"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="p-1 rounded-lg bg-white/10">
                    <FaLayerGroup className="w-4 h-4" />
                  </span>
                  <span className="font-semibold">All</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    category === 'all' 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-800 text-gray-400 group-hover:bg-gray-700'
                  }`}>
                    {projectStats.total}
                  </span>
                </span>
              </button>

              {/* Frontend Button */}
              <button
                onClick={() => { setCategory('frontend'); setTechFilter('all'); setVisibleCount(6); }}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2.5 overflow-hidden ${
                  category === 'frontend' ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {category === 'frontend' && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl shadow-lg"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="p-1 rounded-lg bg-white/10">
                    <FaCode className="w-4 h-4" />
                  </span>
                  <span className="font-semibold">Frontend</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    category === 'frontend' 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-800 text-gray-400'
                  }`}>
                    {projectStats.frontend}
                  </span>
                </span>
              </button>

              {/* Backend Button */}
              <button
                onClick={() => { setCategory('backend'); setTechFilter('all'); setVisibleCount(6); }}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2.5 overflow-hidden ${
                  category === 'backend' ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {category === 'backend' && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="p-1 rounded-lg bg-white/10">
                    <FaDatabase className="w-4 h-4" />
                  </span>
                  <span className="font-semibold">Backend</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    category === 'backend' 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-800 text-gray-400'
                  }`}>
                    {projectStats.backend}
                  </span>
                </span>
              </button>

              {/* Full Stack Button */}
              <button
                onClick={() => { setCategory('fullstack'); setTechFilter('all'); setVisibleCount(6); }}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2.5 overflow-hidden ${
                  category === 'fullstack' ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {category === 'fullstack' && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span className="p-1 rounded-lg bg-white/10">
                    <FaLayerGroup className="w-4 h-4" />
                  </span>
                  <span className="font-semibold">Full Stack</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    category === 'fullstack' 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-800 text-gray-400'
                  }`}>
                    {projectStats.fullstack}
                  </span>
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Technology Filter - Clean Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex justify-center gap-2 mt-8 mb-12 flex-wrap"
        >
          {technologies.map(tech => (
            <button
              key={tech}
              onClick={() => { setTechFilter(tech); setVisibleCount(6); }}
              className={`px-3 py-1.5 rounded-full text-xs transition-all duration-300 ${
                techFilter === tech 
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25' 
                  : 'bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700'
              }`}
            >
              {tech === 'all' ? 'All Technologies' : tech}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group bg-dark-bg rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x400/1a1a1a/8b5cf6?text=Project';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className={`absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-medium text-white shadow-lg bg-gradient-to-r ${
                  project.category === 'frontend' ? 'from-green-500 to-emerald-500' :
                  project.category === 'backend' ? 'from-blue-500 to-cyan-500' :
                  'from-purple-500 to-pink-500'
                }`}>
                  {project.category === 'frontend' ? 'Frontend' : 
                   project.category === 'backend' ? 'Backend' : 'Full Stack'}
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-[9px] font-semibold flex items-center gap-1">
                    <FaStar className="w-2.5 h-2.5" />
                    Featured
                  </div>
                )}

                {/* Hover Overlay Buttons */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center text-white hover:bg-purple-600 hover:scale-110 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center text-white hover:bg-purple-500 hover:scale-110 transition-all duration-300"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {i18n.language === 'en' ? project.title : project.titleAr}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">
                  {i18n.language === 'en' ? project.description.substring(0, 80) : project.descriptionAr.substring(0, 80)}...
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[9px] rounded bg-purple-500/10 text-purple-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-[9px] rounded bg-gray-800 text-gray-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2 border-t border-gray-800">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group/btn"
                  >
                    <FaRocket className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-gray-600 text-gray-300 text-xs font-medium hover:border-purple-500 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300 group/btn"
                  >
                    <FaGithub className="w-3 h-3 group-hover/btn:rotate-3 transition-transform" />
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

        {/* Show More & View All Buttons */}
        {hasMore && filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                onClick={loadMore}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium flex items-center gap-2 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
              >
                <FaEye className="w-4 h-4" />
                <span>Show More</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                  {filteredProjects.length - visibleCount}
                </span>
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={showAll}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group px-6 py-3 rounded-xl border-2 border-purple-500 text-purple-400 font-medium hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <FaLayerGroup className="w-4 h-4" />
                <span>View All</span>
                <span className="text-xs">({filteredProjects.length})</span>
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Islam412"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-6 py-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-gray-700 group-hover:bg-purple-500/20 flex items-center justify-center transition-all duration-300">
              <FaGithub className="w-5 h-5 text-gray-400 group-hover:text-purple-400" />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-500 group-hover:text-purple-400 transition-colors">GitHub Repository</div>
              <div className="text-sm text-white font-medium group-hover:text-purple-400 transition-colors">View all projects on GitHub</div>
            </div>
            <FaArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;