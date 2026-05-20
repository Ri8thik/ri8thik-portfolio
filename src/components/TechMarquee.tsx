import React from 'react';

interface TechMarqueeProps {
  isDark: boolean;
}

const techs = [
  { name: 'Angular', icon: '🅰️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Java', icon: '☕' },
  { name: 'Spring Boot', icon: '🍃' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'REST APIs', icon: '🔗' },
  { name: 'RxJS', icon: '🔄' },
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'Git', icon: '🔀' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'VS Code', icon: '💻' },
  { name: 'PrimeNG', icon: '💎' },
];

const TechMarquee: React.FC<TechMarqueeProps> = ({ isDark }) => {
  return (
    <div className={`relative py-4 overflow-hidden ${isDark ? 'bg-gray-900 border-y border-gray-800/50' : 'bg-gray-50 border-y border-gray-200'}`}>
      {/* Fade edges */}
      <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
        isDark
          ? 'bg-gradient-to-r from-gray-900 to-transparent'
          : 'bg-gradient-to-r from-gray-50 to-transparent'
      }`}></div>
      <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
        isDark
          ? 'bg-gradient-to-l from-gray-900 to-transparent'
          : 'bg-gradient-to-l from-gray-50 to-transparent'
      }`}></div>

      {/* Marquee track */}
      <div className="flex" style={{ animation: 'marquee 30s linear infinite' }}>
        {/* Duplicate for seamless loop */}
        {[...techs, ...techs].map((tech, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2 mx-4 px-4 py-2 rounded-xl border flex-shrink-0 transition-all duration-300 hover:-translate-y-0.5 ${
              isDark
                ? 'bg-gray-800/50 border-gray-700/50 hover:border-indigo-500/40'
                : 'bg-white border-gray-200 hover:border-indigo-300 shadow-sm'
            }`}
          >
            <span className="text-lg">{tech.icon}</span>
            <span className={`text-sm font-semibold whitespace-nowrap ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default TechMarquee;
