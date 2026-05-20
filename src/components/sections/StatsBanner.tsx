import React, { useState, useEffect, useRef } from 'react';
import { useIntersection } from '../../hooks/useIntersection';

interface StatsBannerProps {
  isDark: boolean;
}

const stats = [
  { value: 4, suffix: '+', label: 'Years Experience', icon: '⏱️', color: 'from-blue-500 to-indigo-500' },
  { value: 20, suffix: '+', label: 'Projects Completed', icon: '🚀', color: 'from-indigo-500 to-purple-500' },
  { value: 15, suffix: '+', label: 'Technologies Mastered', icon: '⚡', color: 'from-purple-500 to-pink-500' },
  { value: 100, suffix: 'k+', label: 'Lines of Code Written', icon: '💻', color: 'from-pink-500 to-rose-500' },
  { value: 10, suffix: '+', label: 'Happy Clients', icon: '🌟', color: 'from-rose-500 to-orange-500' },
  { value: 99, suffix: '%', label: 'Code Quality Score', icon: '✅', color: 'from-orange-500 to-amber-500' },
];

function useCountUp(target: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (isVisible && !animatedRef.current) {
      animatedRef.current = true;
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, target, duration]);

  return count;
}

const StatCard: React.FC<{ stat: typeof stats[0]; isDark: boolean; isVisible: boolean; delay: number }> = ({
  stat, isDark, isVisible, delay
}) => {
  const count = useCountUp(stat.value, isVisible);

  return (
    <div
      className={`flex flex-col items-center p-6 rounded-2xl border group hover:-translate-y-2 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${
        isDark
          ? 'bg-gray-900/50 border-gray-700/50 hover:border-indigo-500/30 hover:bg-gray-900'
          : 'bg-white border-gray-200 hover:border-indigo-300 shadow-sm hover:shadow-lg'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">{stat.icon}</span>
      <div className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
        {count}{stat.suffix}
      </div>
      <p className={`text-sm text-center font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        {stat.label}
      </p>
    </div>
  );
};

const StatsBanner: React.FC<StatsBannerProps> = ({ isDark }) => {
  const { ref, isVisible } = useIntersection({ threshold: 0.1 });

  return (
    <section
      className={`py-16 relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}
      aria-label="Statistics section"
    >
      {/* Background gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {stats.map((stat, idx) => (
            <StatCard
              key={stat.label}
              stat={stat}
              isDark={isDark}
              isVisible={isVisible}
              delay={idx * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
