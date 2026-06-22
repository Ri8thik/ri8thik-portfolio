import React, { useState, useMemo } from 'react';
import { ExternalLink, Search, Filter, Eye, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../data/portfolio';
import { useIntersection } from '../../hooks/useIntersection';
import SectionHeading from '../shared/SectionHeading';
import ProjectModal from '../shared/ProjectModal';

interface ProjectsProps {
  isDark: boolean;
}

const statusColors: Record<string, { bg: string; text: string; dot: string }> = {
  'Live': { bg: 'bg-green-500/10', text: 'text-green-400', dot: 'bg-green-400' },
  'In Development': { bg: 'bg-yellow-500/10', text: 'text-yellow-400', dot: 'bg-yellow-400' },
  'Completed': { bg: 'bg-blue-500/10', text: 'text-blue-400', dot: 'bg-blue-400' },
};

const allTechs = Array.from(new Set(projects.flatMap(p => p.technologies)));
const allCategories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const { ref: gridRef, isVisible: gridVisible } = useIntersection({ threshold: 0.05 });

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesTech = !selectedTech || project.technologies.includes(selectedTech);
      return matchesSearch && matchesCategory && matchesTech;
    });
  }, [searchQuery, selectedCategory, selectedTech]);

  return (
    <section
      id="projects"
      className={`py-32 md:py-40 relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-white'}`}
      aria-label="Projects section"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 ${isDark ? 'bg-indigo-500' : 'bg-indigo-300'}`}></div>
        <div className={`absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 ${isDark ? 'bg-purple-500' : 'bg-purple-300'}`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="🚀 My Work"
          title="Featured"
          highlight="Projects"
          subtitle="A showcase of production-ready applications built with modern technologies and best practices."
          isDark={isDark}
        />

        {/* Search & Filter Bar */}
        <div className={`rounded-2xl border p-4 mb-8 ${isDark ? 'bg-gray-900/50 border-gray-700/50' : 'bg-gray-50 border-gray-200'}`}>
          {/* Search */}
          <div className="relative mb-4">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects by name, tech, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-11 pr-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all duration-300 ${
                isDark
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-indigo-500'
                  : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-indigo-400'
              }`}
              aria-label="Search projects"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`flex items-center gap-1 text-xs font-medium mr-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <Filter size={12} /> Category:
            </span>
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tech Filter */}
          <div className="flex flex-wrap gap-2">
            <span className={`flex items-center gap-1 text-xs font-medium mr-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              ⚡ Tech:
            </span>
            {allTechs.slice(0, 8).map(tech => (
              <button
                key={tech}
                onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200 focus:outline-none skill-tag ${
                  selectedTech === tech
                    ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/40'
                    : isDark
                    ? 'bg-gray-800 text-gray-400 hover:text-gray-200'
                    : 'bg-gray-100 text-gray-500 hover:text-gray-700'
                }`}
              >
                {tech}
              </button>
            ))}
            {selectedTech && (
              <button
                onClick={() => setSelectedTech(null)}
                className="px-2.5 py-1 rounded-md text-xs font-medium text-red-400 bg-red-500/10 hover:bg-red-500/20 transition-colors"
              >
                ✕ Clear
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Showing <strong className="text-indigo-400">{filteredProjects.length}</strong> of {projects.length} projects
        </p>

       {/* Projects Grid */}
         <div
           ref={gridRef as React.RefObject<HTMLDivElement>}
           className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
         >
          {filteredProjects.length === 0 ? (
            <div className="col-span-2 text-center py-20">
              <span className="text-6xl mb-4 block">🔍</span>
              <p className={`text-lg font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>No projects found</p>
              <p className={`text-sm mt-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Try adjusting your search or filters</p>
            </div>
          ) : (
            filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                isDark={isDark}
                isVisible={gridVisible}
                delay={idx * 150}
                isHovered={hoveredProject === project.id}
                onHover={() => setHoveredProject(project.id)}
                onLeave={() => setHoveredProject(null)}
                onViewDetails={() => setSelectedProject(project)}
              />
            ))
          )}
        </div>

        {/* GitHub CTA */}
        <div className={`mt-16 text-center p-8 rounded-2xl border ${
          isDark ? 'bg-gray-900/50 border-gray-700/50' : 'bg-gray-50 border-gray-200'
        }`}>
          <Star className="mx-auto mb-3 text-yellow-400" size={32} />
          <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Explore More on GitHub
          </h3>
          <p className={`text-sm mb-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Check out my GitHub for more open source projects, experiments, and contributions.
          </p>
          <a
            href="https://github.com/rithiksoun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <FaGithub size={20} />
            Visit My GitHub Profile
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          isDark={isDark}
        />
      )}
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
  isDark: boolean;
  isVisible: boolean;
  delay: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onViewDetails: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project, isDark, isVisible, delay, isHovered, onHover, onLeave, onViewDetails
}) => {
  const status = statusColors[project.status];

  return (
    <article
      className={`group rounded-2xl border overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${
        isDark
          ? 'bg-gray-900/70 border-gray-700/50 hover:border-indigo-500/40 hover:shadow-indigo-500/10'
          : 'bg-white border-gray-200 hover:border-indigo-300 shadow-md hover:shadow-indigo-100'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Project Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 project-overlay opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

        {/* Status badge */}
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${status.bg} ${status.text} border border-current/20`}>
            <span className={`w-1.5 h-1.5 rounded-full ${status.dot} animate-pulse`}></span>
            {project.status}
          </span>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/40 text-white backdrop-blur-sm border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Hover Actions Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={onViewDetails}
            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 font-semibold rounded-xl text-sm hover:bg-indigo-500 hover:text-white transition-all duration-200 shadow-lg transform hover:scale-105 focus:outline-none"
            aria-label={`View details for ${project.title}`}
          >
            <Eye size={16} />
            Details
          </button>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-xl text-sm hover:bg-indigo-500 transition-all duration-200 shadow-lg transform hover:scale-105 focus:outline-none"
            aria-label={`View live demo for ${project.title}`}
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-5">
        <h3 className={`text-lg font-bold mb-2 group-hover:text-indigo-400 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {project.title}
        </h3>
        <p className={`text-sm leading-relaxed mb-4 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 5).map(tech => (
            <span
              key={tech}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium skill-tag ${
                isDark
                  ? 'bg-gray-800 text-gray-300 hover:bg-indigo-500/20 hover:text-indigo-300'
                  : 'bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
              }`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${isDark ? 'bg-gray-800 text-gray-500' : 'bg-gray-100 text-gray-400'}`}>
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-3 border-t border-gray-700/30">
          <button
            onClick={onViewDetails}
            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 hover:scale-105 focus:outline-none ${
              isDark
                ? 'bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 border border-indigo-500/20'
                : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border border-indigo-200'
            }`}
          >
            <Eye size={13} />
            Details
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 hover:scale-105 focus:outline-none ${
              isDark
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
            aria-label="GitHub"
          >
            <FaGithub size={13} />
            GitHub
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 hover:scale-105 focus:outline-none"
            aria-label="Live Demo"
          >
            <ExternalLink size={13} />
            Live
          </a>
        </div>
      </div>
    </article>
  );
};

export default Projects;
