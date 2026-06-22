import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useIntersection } from '../../hooks/useIntersection';
import SectionHeading from '../shared/SectionHeading';
import { achievements } from '../../data/portfolio';

interface TestimonialsProps {
  isDark: boolean;
}

const highlights = achievements.map((item, index) => ({
  id: index + 1,
  name: item.title,
  role: item.organization,
  avatar: index === 0 ? '🏆' : index === 1 ? '⚡' : '📈',
  rating: 5,
  text: item.description,
}));

const Testimonials: React.FC<TestimonialsProps> = ({ isDark }) => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, isVisible } = useIntersection({ threshold: 0.2 });

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
    }, 300);
  };

  const prev = () => goTo((current - 1 + highlights.length) % highlights.length);
  const next = () => goTo((current + 1) % highlights.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section
      className={`py-24 relative overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}
      aria-label="Testimonials section"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-5 ${isDark ? 'bg-indigo-500' : 'bg-indigo-300'}`}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="🏅 Highlights"
          title="Career"
          highlight="Achievements"
          subtitle="A quick snapshot of measurable wins and recognition from my recent software engineering journey."
          isDark={isDark}
        />

        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Main testimonial card */}
          <div className={`relative rounded-3xl p-8 md:p-12 border mb-8 overflow-hidden ${
            isDark ? 'bg-gray-900/70 border-gray-700/50' : 'bg-white border-gray-200 shadow-xl'
          }`}>
            {/* Quote decoration */}
            <div className="absolute top-6 right-8 opacity-10">
              <Quote size={80} className="text-indigo-500" />
            </div>

            {/* Gradient border top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

            <div
              className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(highlights[current].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>

              {/* Quote text */}
              <blockquote className={`text-lg md:text-xl leading-relaxed mb-8 italic ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                "{highlights[current].text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl shadow-lg">
                  {highlights[current].avatar}
                </div>
                <div>
                  <p className={`font-bold text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {highlights[current].name}
                  </p>
                  <p className="text-indigo-400 text-sm">{highlights[current].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            {/* Dot indicators */}
            <div className="flex gap-2">
              {highlights.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`rounded-full transition-all duration-300 focus:outline-none ${
                    idx === current
                      ? 'w-8 h-2 bg-gradient-to-r from-indigo-500 to-purple-500'
                      : `w-2 h-2 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'}`
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  isDark
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                }`}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  isDark
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                }`}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
