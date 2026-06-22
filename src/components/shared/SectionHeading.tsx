import React from 'react';
import { useIntersection } from '../../hooks/useIntersection';

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  isDark: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ badge, title, highlight, subtitle, isDark }) => {
  const { ref, isVisible } = useIntersection({ threshold: 0.3 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Badge */}
      <div className="inline-flex items-center justify-center mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border transition-all duration-300 ${
          isDark
            ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30 hover:bg-indigo-500/20'
            : 'bg-indigo-50 text-indigo-600 border-indigo-200 hover:bg-indigo-100'
        }`}>
          {badge}
        </span>
      </div>

      {/* Main Title */}
      <h2 className={`text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {title}{' '}
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
          {highlight}
        </span>
      </h2>

      {/* Subtitle */}
      <p className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {subtitle}
      </p>

      {/* Decorative accent */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500/50 to-indigo-500/20"></div>
        <div className="h-1.5 w-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-pink-500/20 to-pink-500/50"></div>
      </div>
    </div>
  );
};

export default SectionHeading;


