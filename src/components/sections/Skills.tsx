import React, { useState } from 'react';
import { useIntersection } from '../../hooks/useIntersection';
import { techCategories } from '../../data/portfolio';
import SectionHeading from '../shared/SectionHeading';

interface SkillsProps {
  isDark: boolean;
}

interface ProgressBarProps {
  level: number;
  color: string;
  isVisible: boolean;
  delay?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ level, color, isVisible, delay = 0 }) => {
  return (
    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(100,100,120,0.2)' }}>
      <div
        className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
        style={{
          width: isVisible ? `${level}%` : '0%',
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  );
};

const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useIntersection({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useIntersection({ threshold: 0.1 });

  const filteredCategories = activeCategory
    ? techCategories.filter(c => c.category === activeCategory)
    : techCategories;

  return (
    <section
      id="skills"
      className={`py-32 md:py-40 relative overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
      aria-label="Skills section"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 right-0 w-80 h-80 rounded-full blur-3xl opacity-5 ${isDark ? 'bg-purple-500' : 'bg-purple-400'}`}></div>
        <div className={`absolute bottom-1/4 left-0 w-64 h-64 rounded-full blur-3xl opacity-5 ${isDark ? 'bg-indigo-500' : 'bg-indigo-400'}`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="⚡ Tech Stack"
          title="Skills &"
          highlight="Technologies"
          subtitle="A resume-aligned toolkit covering languages, frameworks, backend integrations, developer tools, and delivery practices used in enterprise applications."
          isDark={isDark}
        />

        {/* Category Filter */}
        <div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
              activeCategory === null
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                : isDark
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            All Technologies
          </button>
          {techCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(activeCategory === cat.category ? null : cat.category)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                activeCategory === cat.category
                  ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                  : isDark
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.icon} {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {filteredCategories.map((category, catIdx) => (
            <SkillCard
              key={category.category}
              category={category}
              isDark={isDark}
              isVisible={gridVisible}
              delay={catIdx * 150}
            />
          ))}
        </div>

        {/* Additional Skills Bar */}
        <div className="mt-16">
          <AdditionalSkills isDark={isDark} isVisible={gridVisible} />
        </div>

        {/* Code snippet decoration */}
        <div className={`mt-16 p-6 rounded-2xl border code-block ${
          isDark ? 'bg-gray-950 border-gray-800 text-gray-300' : 'bg-gray-950 border-gray-800 text-gray-300'
        }`}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-gray-500 text-xs">skills.ts</span>
          </div>
          <div className="text-sm leading-7">
            <span className="text-purple-400">const</span>{' '}
            <span className="text-blue-400">developer</span>{' '}
            <span className="text-gray-400">=</span>{' '}
            <span className="text-gray-300">{'{'}</span>
            <br />
            <span className="ml-4 text-green-400">name</span>
            <span className="text-gray-400">: </span>
            <span className="text-yellow-300">'Rithik Soun'</span>
            <span className="text-gray-400">,</span>
            <br />
            <span className="ml-4 text-green-400">experience</span>
            <span className="text-gray-400">: </span>
            <span className="text-orange-400">4</span>
            <span className="text-gray-400">,</span>
            <br />
            <span className="ml-4 text-green-400">primaryStack</span>
            <span className="text-gray-400">: [</span>
             <span className="text-yellow-300">'Angular'</span>
            <span className="text-gray-400">, </span>
             <span className="text-yellow-300">'React'</span>
            <span className="text-gray-400">, </span>
             <span className="text-yellow-300">'Spring Boot'</span>
            <span className="text-gray-400">],</span>
            <br />
             <span className="ml-4 text-green-400">focus</span>
            <span className="text-gray-400">: </span>
             <span className="text-yellow-300">'Enterprise products, APIs, and performance'</span>
            <br />
            <span className="text-gray-300">{'}'}</span>
            <span className="text-gray-400">;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  category: typeof techCategories[0];
  isDark: boolean;
  isVisible: boolean;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, isDark, isVisible, delay }) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div
      className={`rounded-2xl border overflow-hidden transition-all duration-700 hover:shadow-xl hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${
        isDark
          ? 'bg-gray-900/70 border-gray-700/50 hover:border-indigo-500/30'
          : 'bg-white border-gray-200 hover:border-indigo-300 shadow-sm'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Card Header */}
      <div className={`p-5 bg-gradient-to-r ${category.color} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20 bg-noise"></div>
        <span className="text-3xl mb-2 block">{category.icon}</span>
        <h3 className="text-white font-bold text-lg">{category.category}</h3>
        <p className="text-white/70 text-xs mt-0.5">{category.skills.length} technologies</p>
      </div>

      {/* Skills List */}
      <div className="p-5 space-y-4">
        {category.skills.map((skill, idx) => (
          <div
            key={skill.name}
            className="group cursor-default"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-base">{skill.icon}</span>
                <span className={`text-sm font-medium transition-colors duration-200 ${
                  hoveredSkill === skill.name
                    ? 'text-indigo-400'
                    : isDark ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  {skill.name}
                </span>
              </div>
              <span className={`text-xs font-semibold ${
                skill.level >= 90 ? 'text-green-400' :
                skill.level >= 80 ? 'text-blue-400' :
                'text-yellow-400'
              }`}>
                {skill.level}%
              </span>
            </div>
            <ProgressBar
              level={skill.level}
              color={category.color}
              isVisible={isVisible}
              delay={delay + idx * 100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

interface AdditionalSkillsProps {
  isDark: boolean;
  isVisible: boolean;
}

const AdditionalSkills: React.FC<AdditionalSkillsProps> = ({ isDark, isVisible }) => {
  const allSkills = [
    { name: 'Angular (2-18)', level: 96, color: 'from-red-500 to-red-600' },
    { name: 'React', level: 82, color: 'from-cyan-500 to-sky-600' },
    { name: 'TypeScript', level: 92, color: 'from-blue-500 to-blue-600' },
    { name: 'Java', level: 92, color: 'from-amber-600 to-amber-700' },
    { name: 'Spring Boot', level: 88, color: 'from-green-500 to-green-600' },
    { name: 'RxJS', level: 90, color: 'from-pink-500 to-pink-600' },
    { name: 'NgRx', level: 84, color: 'from-fuchsia-500 to-purple-600' },
    { name: 'HTML5 / CSS3 / SCSS', level: 90, color: 'from-orange-500 to-orange-600' },
    { name: 'Tailwind CSS', level: 88, color: 'from-cyan-500 to-cyan-600' },
    { name: 'Redux', level: 76, color: 'from-violet-500 to-violet-700' },
    { name: 'PostgreSQL', level: 84, color: 'from-indigo-500 to-indigo-600' },
    { name: 'Redis', level: 74, color: 'from-rose-500 to-red-600' },
    { name: 'Apache Kafka', level: 76, color: 'from-slate-600 to-slate-800' },
    { name: 'REST APIs', level: 90, color: 'from-purple-500 to-purple-600' },
    { name: 'Jenkins / CI-CD', level: 82, color: 'from-lime-500 to-green-600' },
    { name: 'Git & GitHub', level: 92, color: 'from-gray-500 to-gray-600' },
    { name: 'Jest / Jasmine', level: 84, color: 'from-teal-500 to-teal-600' },
  ];

  return (
    <div className={`rounded-2xl border p-6 ${isDark ? 'bg-gray-900/50 border-gray-700/50' : 'bg-white border-gray-200 shadow-sm'}`}>
      <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        📊 Proficiency Overview
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {allSkills.map((skill, idx) => (
          <div key={skill.name} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{skill.name}</span>
              <span className="text-xs font-semibold text-indigo-400">{skill.level}%</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(100,100,120,0.2)' }}>
              <div
                className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                style={{
                  width: isVisible ? `${skill.level}%` : '0%',
                  transitionDelay: `${idx * 80}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
