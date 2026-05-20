import React from 'react';
import { Code2, Zap, Users, Award, BookOpen, MapPin, Mail } from 'lucide-react';
import { experiences, socialLinks } from '../../data/portfolio';
import { useIntersection } from '../../hooks/useIntersection';
import SectionHeading from '../shared/SectionHeading';

interface AboutProps {
  isDark: boolean;
}

const strengthCards = [
  {
    icon: <Code2 size={24} />,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code following industry best practices.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: <Zap size={24} />,
    title: 'Performance First',
    description: 'Optimizing applications for speed, accessibility, and exceptional user experience.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: <Users size={24} />,
    title: 'Team Player',
    description: 'Collaborative mindset with excellent communication skills and agile experience.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Award size={24} />,
    title: 'Problem Solver',
    description: 'Breaking down complex problems into simple, elegant, and efficient solutions.',
    color: 'from-pink-500 to-rose-500',
  },
];

const About: React.FC<AboutProps> = ({ isDark }) => {
  const { ref: leftRef, isVisible: leftVisible } = useIntersection({ threshold: 0.2 });
  const { ref: rightRef, isVisible: rightVisible } = useIntersection({ threshold: 0.2 });

  return (
    <section
      id="about"
      className={`py-24 relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-white'}`}
      aria-label="About section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 ${isDark ? 'bg-indigo-500' : 'bg-indigo-300'}`}></div>
        <div className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-10 ${isDark ? 'bg-purple-500' : 'bg-purple-300'}`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="✨ About Me"
          title="Crafting Digital"
          highlight="Experiences"
          subtitle="I'm a passionate developer who loves building scalable, performant, and beautiful web applications."
          isDark={isDark}
        />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left - Bio */}
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            {/* Profile Card */}
            <div className={`rounded-2xl p-6 mb-6 border ${isDark ? 'bg-gray-900/50 border-gray-700/50' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 ring-2 ring-indigo-500/30">
                  <img src="/images/profile.jpg" alt="Rithik Soun" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Rithik Soun</h3>
                  <p className="text-indigo-400 font-medium">Frontend & Full Stack Developer</p>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin size={13} className="text-gray-500" />
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{socialLinks.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-sm">
                  <Mail size={13} className="text-indigo-400" />
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>{socialLinks.email}</span>
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                👋 Hi! I'm <strong className={isDark ? 'text-white' : 'text-gray-900'}>Rithik Soun</strong>, a dedicated
                Frontend & Full Stack Developer with <strong className="text-indigo-400">4+ years of professional experience</strong>{' '}
                building enterprise-grade web applications.
              </p>
              <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                My core expertise lies in <strong className="text-indigo-400">Angular</strong> (v12-17) with TypeScript,
                where I've architected and delivered multiple production-grade applications. I'm deeply passionate about
                creating performant, accessible, and visually stunning user interfaces.
              </p>
              <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                On the backend, I work with <strong className="text-green-400">Java Spring Boot</strong> to design
                RESTful APIs and microservices that power scalable applications. I believe in end-to-end ownership and
                love taking features from concept to production.
              </p>
              <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                When I'm not coding, I contribute to open-source, explore new technologies, and mentor junior developers.
                I'm actively seeking opportunities at <strong className={isDark ? 'text-white' : 'text-gray-900'}>product-based companies</strong>{' '}
                where I can make a meaningful impact. 🚀
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: 'Years Experience', value: '4+', icon: '⏱️' },
                { label: 'Projects Delivered', value: '20+', icon: '🚀' },
                { label: 'Technologies', value: '15+', icon: '⚡' },
                { label: 'Happy Clients', value: '10+', icon: '🌟' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`p-4 rounded-xl border text-center hover:-translate-y-1 transition-transform duration-300 ${
                    isDark ? 'bg-gray-900/50 border-gray-700/50' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <span className="text-2xl">{stat.icon}</span>
                  <div className={`text-2xl font-black mt-1 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Strengths */}
          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 delay-200 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <div className="flex items-center gap-2 mb-6">
              <BookOpen size={20} className="text-indigo-400" />
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Professional Strengths</h3>
            </div>
            <div className="grid gap-4 mb-8">
              {strengthCards.map((card, idx) => (
                <div
                  key={card.title}
                  className={`p-5 rounded-2xl border group hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 ${
                    isDark ? 'bg-gray-900/50 border-gray-700/50 hover:bg-gray-900' : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
                  }`}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {card.icon}
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{card.title}</h4>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-10 justify-center">
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-indigo-500/50"></div>
            <h3 className={`text-2xl font-bold flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              🏆 Work Experience
            </h3>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-indigo-500/50"></div>
          </div>

          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent md:-translate-x-0.5"></div>

            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <TimelineItem key={exp.id} exp={exp} idx={idx} isDark={isDark} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem: React.FC<{ exp: typeof experiences[0]; idx: number; isDark: boolean }> = ({ exp, idx, isDark }) => {
  const { ref, isVisible } = useIntersection({ threshold: 0.3 });
  const isEven = idx % 2 === 0;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative flex flex-col md:flex-row gap-6 md:gap-0 pl-12 md:pl-0 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-indigo-500/30 md:-translate-x-4 z-10">
        {exp.id}
      </div>

      {/* Content */}
      <div className={`md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
        <div
          className={`p-5 rounded-2xl border hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 ${
            isDark ? 'bg-gray-900/70 border-gray-700/50' : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
          }`}
        >
          <div className={`flex items-start justify-between gap-3 mb-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
            <div>
              <h4 className={`font-bold text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>{exp.role}</h4>
              <p className="text-indigo-400 font-medium text-sm">{exp.company}</p>
            </div>
            <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${
              isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
            }`}>
              {exp.period}
            </span>
          </div>
          <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{exp.description}</p>
          <ul className={`space-y-1 mb-3 ${isEven ? 'md:text-right' : ''}`}>
            {exp.achievements.map((achievement, i) => (
              <li key={i} className={`flex items-start gap-1.5 text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'} ${isEven ? 'md:flex-row-reverse' : ''}`}>
                <span className="text-indigo-400 mt-0.5 flex-shrink-0">▸</span>
                {achievement}
              </li>
            ))}
          </ul>
          <div className={`flex flex-wrap gap-1.5 ${isEven ? 'md:justify-end' : ''}`}>
            {exp.technologies.map((tech) => (
              <span key={tech} className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
              }`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
