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
      className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
        isDark
          ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
          : 'bg-indigo-50 text-indigo-600 border border-indigo-200'
      }`}>
        {badge}
      </span>
      <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {title}{' '}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        {subtitle}
      </p>
      <div className="flex items-center justify-center gap-2 mt-6">
        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"></div>
        <div className="h-1 w-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <div className="h-1 w-2 rounded-full bg-pink-500"></div>
      </div>
    </div>
  );
};

export default SectionHeading;
