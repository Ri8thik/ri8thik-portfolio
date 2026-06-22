import React, { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    'Initializing...',
    'Loading Angular expertise...',
    'Mounting components...',
    'Applying Tailwind styles...',
    'Ready to impress!',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const textIndex = Math.floor((progress / 100) * loadingTexts.length);
    setCurrentText(Math.min(textIndex, loadingTexts.length - 1));
  }, [progress]);

  return (
    <div className="fixed inset-0 z-[100] bg-gray-950 flex flex-col items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl orb-1"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl orb-2"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="relative mb-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/30 animate-pulse">
            <Code2 size={36} className="text-white" />
          </div>
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-2xl border-2 border-indigo-500/30 scale-110 pulse-ring"></div>
          <div className="absolute inset-0 rounded-2xl border-2 border-purple-500/20 scale-125 pulse-ring" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Name */}
        <h1 className="text-2xl font-bold text-white mb-1">
          Rithik<span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Soun</span>
        </h1>
        <p className="text-gray-500 text-sm mb-10">Software Engineer • Full Stack Developer</p>

        {/* Progress Bar */}
        <div className="w-64">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500 text-xs">{loadingTexts[currentText]}</span>
            <span className="text-indigo-400 text-xs font-semibold">{progress}%</span>
          </div>
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Skills tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-10 max-w-sm">
          {['Angular', 'React', 'TypeScript', 'Spring Boot', 'Kafka'].map((skill, i) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-xs font-medium bg-gray-800/80 text-gray-400 border border-gray-700/50 animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
