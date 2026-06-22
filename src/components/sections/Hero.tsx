import React, { useState, useEffect } from 'react';
import { Download, MapPin, Briefcase, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { heroRoles, profile, socialLinks } from '../../data/portfolio';
import { useScrollToSection } from '../../hooks/useScrollSpy';

interface HeroProps {
  isDark?: boolean;
}

const roles = heroRoles;

const codeLines = [
  { text: "const developer = {", indent: 0 },
  { text: `  name: '${profile.name}',`, indent: 1 },
  { text: `  role: '${profile.title}',`, indent: 1 },
  { text: "  skills: ['Angular', 'React', 'Java'],", indent: 1 },
  { text: `  experience: '${profile.yearsExperience} years',`, indent: 1 },
  { text: "  location: 'Delhi NCR, India',", indent: 1 },
  { text: "  available: true,  // ✅", indent: 1 },
  { text: "};", indent: 0 },
];

const baseUrl = import.meta.env.BASE_URL;

const Hero: React.FC<HeroProps> = ({ isDark = true }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const scrollToSection = useScrollToSection();

  // Typewriter effect for role
  useEffect(() => {
    const targetText = roles[currentRole];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < targetText.length) {
      timeout = setTimeout(() => {
        setDisplayText(targetText.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex === targetText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(targetText.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentRole(r => (r + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRole]);

  // Code animation
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines(v => {
        if (v >= codeLines.length) {
          clearInterval(timer);
          return v;
        }
        return v + 1;
      });
    }, 250);
    return () => clearInterval(timer);
  }, []);

  const socialItems = [
    { href: socialLinks.github, icon: <FaGithub size={20} />, label: 'GitHub', color: 'hover:bg-gray-700' },
    { href: socialLinks.linkedin, icon: <FaLinkedin size={20} />, label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { href: `mailto:${socialLinks.email}`, icon: <MdEmail size={20} />, label: 'Email', color: 'hover:bg-indigo-600' },
    { href: socialLinks.instagram, icon: <FaInstagram size={20} />, label: 'Instagram', color: 'hover:bg-pink-600' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Hero Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-cover bg-center ${isDark ? 'opacity-100' : 'opacity-35'}`}
          style={{ backgroundImage: `url(${baseUrl}images/hero-bg.jpg)` }}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            isDark
              ? 'from-gray-950/95 via-gray-950/85 to-gray-900/90'
              : 'from-white/98 via-white/96 to-indigo-50/92'
          }`}
        />
        <div className={`absolute inset-0 bg-grid ${isDark ? 'opacity-20' : 'opacity-10'}`} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-1 absolute -top-20 left-1/3 w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-[80px]" />
        <div className="orb-2 absolute top-1/2 -right-20 w-[400px] h-[400px] rounded-full bg-purple-600/15 blur-[80px]" />
        <div className="orb-3 absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-blue-600/10 blur-[60px]" />
      </div>

      {/* Animated floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={i % 2 === 0 ? 'particle' : 'particle-delayed'}
            style={{
              position: 'absolute',
              left: `${8 + (i * 8)}%`,
              top: `${10 + ((i * 17) % 80)}%`,
              width: `${2 + (i % 4)}px`,
              height: `${2 + (i % 4)}px`,
              borderRadius: '50%',
              background: i % 3 === 0 ? 'rgba(99,102,241,0.6)' : i % 3 === 1 ? 'rgba(139,92,246,0.4)' : 'rgba(236,72,153,0.3)',
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">

          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Status Badge */}
            <div className={`animate-slide-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full border text-sm font-medium mb-8 ${
              isDark
                ? 'glass border-indigo-500/20 text-indigo-300'
                : 'glass-light border-indigo-300/70 text-indigo-800 shadow-sm'
            }`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
              </span>
              <span>{profile.availability}</span>
            </div>

            {/* Greeting */}
            <div className="animate-slide-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <p className={`text-lg mb-2 font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Hello, World! <span className="wave-emoji">👋</span>
              </p>
            </div>

            {/* Name */}
            <h1 className="animate-slide-up mb-3" style={{ animationDelay: '0.15s', opacity: 0 }}>
              <span className={`block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] ${isDark ? 'text-white' : 'text-gray-900'}`}>
                I'm{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                    {profile.name}
                  </span>
                  {/* Underline decoration */}
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transform scale-x-0 animate-scale-in" style={{ animationDelay: '0.8s', transformOrigin: 'left' }}></span>
                </span>
              </span>
            </h1>

            {/* Animated Role */}
            <div className="animate-slide-up mb-6 h-10 sm:h-12 flex items-center justify-center lg:justify-start" style={{ animationDelay: '0.25s', opacity: 0 }}>
              <div className="flex items-center gap-2">
                <Terminal size={18} className={`flex-shrink-0 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <span className={`text-xl sm:text-2xl md:text-3xl font-semibold ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>
                  {displayText}
                  <span className={`cursor-blink ml-0.5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>|</span>
                </span>
              </div>
            </div>

            {/* Meta Tags */}
            <div className="animate-slide-up flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6" style={{ animationDelay: '0.3s', opacity: 0 }}>
              <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium ${
                isDark
                  ? 'bg-indigo-500/10 border border-indigo-500/20 text-indigo-300'
                  : 'bg-indigo-100/90 border border-indigo-200 text-indigo-700'
              }`}>
                <Briefcase size={13} />
                {profile.yearsExperience} Years Experience
              </span>
              <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium ${
                isDark
                  ? 'bg-purple-500/10 border border-purple-500/20 text-purple-300'
                  : 'bg-purple-100/90 border border-purple-200 text-purple-700'
              }`}>
                <MapPin size={13} />
                Delhi NCR, India
              </span>
              <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium ${
                isDark
                  ? 'bg-pink-500/10 border border-pink-500/20 text-pink-300'
                  : 'bg-pink-100/90 border border-pink-200 text-pink-700'
              }`}>
                🎯 Angular 2–18 & React
              </span>
            </div>

            {/* Description */}
            <p className={`animate-slide-up text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0 ${isDark ? 'text-gray-300' : 'text-gray-700'}`} style={{ animationDelay: '0.35s', opacity: 0 }}>
              Software Engineer with <span className="text-indigo-400 font-semibold">4.6+ years</span> of experience building
              scalable enterprise applications using <span className="text-purple-400 font-semibold">Angular, React, TypeScript, Java</span>,
              and <span className="text-pink-400 font-semibold">Spring Boot</span>. Focused on clean architecture,
              API integration, reactive state management, and delivering{' '}
              <span className="text-green-400 font-semibold">production-ready solutions</span> in Agile teams.
            </p>

            {/* CTA Buttons */}
            <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 w-full sm:w-auto" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative overflow-hidden px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg sm:shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 text-sm sm:text-base w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  🚀 Let's Work Together
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <a
                href={`${baseUrl}resume-rithik-soun.pdf`}
                download
                className={`px-6 sm:px-8 py-3.5 sm:py-4 glass border font-bold rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base focus:outline-none focus-visible:ring-2 w-full sm:w-auto ${
                  isDark
                    ? 'border-white/20 hover:border-white/40 text-white hover:bg-white/10 focus-visible:ring-white'
                    : 'border-gray-300 hover:border-gray-400 text-gray-900 hover:bg-white/60 focus-visible:ring-indigo-500'
                }`}
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="animate-slide-up flex items-center gap-4 justify-center lg:justify-start" style={{ animationDelay: '0.45s', opacity: 0 }}>
              <span className={`text-sm font-medium ${isDark ? 'text-gray-500' : 'text-gray-700'}`}>Follow me:</span>
              <div className="flex items-center gap-2">
                {socialItems.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`p-2.5 rounded-xl glass transition-all duration-300 hover:scale-110 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${social.color} ${
                      isDark
                        ? 'text-gray-300 hover:text-white border border-white/10 hover:border-white/20'
                        : 'text-gray-700 hover:text-white border border-gray-300 hover:border-indigo-300 bg-white/80'
                    }`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - 5 columns */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center gap-6">
            {/* Profile Card */}
            <div className="relative animate-scale-in w-full max-w-sm" style={{ animationDelay: '0.3s', opacity: 0 }}>
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-xl"></div>

              {/* Card */}
              <div className={`relative rounded-3xl border overflow-hidden ${isDark ? 'glass border-white/10' : 'glass-light border-gray-300/70'}`}>
                {/* Card top gradient */}
                <div className="h-28 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-noise opacity-30"></div>
                  {/* Decorative circles */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/10"></div>
                  <div className="absolute top-4 right-12 text-4xl">⚡</div>
                </div>

                {/* Profile Image */}
                <div className="px-6 -mt-14 mb-4 flex justify-between items-end">
                  <div className="relative">
                    <div className={`w-24 h-24 rounded-2xl overflow-hidden ring-4 shadow-2xl ${isDark ? 'ring-gray-900' : 'ring-white'}`}>
                      <img src={`${baseUrl}images/profile.jpg`} alt="Rithik Soun" className="w-full h-full object-cover object-top" />
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-400 border-2 flex items-center justify-center ${isDark ? 'border-gray-900' : 'border-white'}`}>
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="px-6 pb-5">
                  <h3 className={`font-bold text-lg leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>{profile.name}</h3>
                  <p className={`text-sm font-medium mb-3 ${isDark ? 'text-indigo-400' : 'text-indigo-700'}`}>{profile.title} • {profile.focus}</p>

                  {/* Skills chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['Angular', 'React', 'TypeScript', 'Spring Boot', 'Kafka'].map((skill) => (
                      <span key={skill} className={`px-2 py-0.5 rounded-md text-xs border font-medium ${
                        isDark
                          ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20'
                          : 'bg-indigo-100 text-indigo-700 border-indigo-200'
                      }`}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Mini stats */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { value: '4.6+', label: 'Years', color: 'text-indigo-400' },
                      { value: '90%+', label: 'Coverage', color: 'text-purple-400' },
                      { value: '3', label: 'Awards', color: 'text-pink-400' },
                    ].map(stat => (
                      <div key={stat.label} className={`text-center p-2 rounded-xl border ${isDark ? 'bg-white/5 border-white/5' : 'bg-white border-gray-200 shadow-sm'}`}>
                        <div className={`font-black text-base ${stat.color}`}>{stat.value}</div>
                        <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Code Block */}
            <div className="animate-slide-up w-full max-w-sm" style={{ animationDelay: '0.5s', opacity: 0 }}>
              <div className={`rounded-2xl border overflow-hidden ${isDark ? 'glass border-white/10' : 'glass-light border-gray-300/70'}`}>
                {/* Terminal header */}
                <div className={`flex items-center gap-2 px-4 py-3 border-b ${isDark ? 'border-white/5 bg-white/5' : 'border-gray-200 bg-white/80'}`}>
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-gray-500 text-xs font-mono">developer.ts</span>
                </div>
                {/* Code */}
                <div className="p-4 code-block text-xs leading-7">
                  {codeLines.slice(0, visibleLines).map((line, idx) => (
                    <div key={idx} className="flex">
                      <span className={`w-5 flex-shrink-0 select-none ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>{idx + 1}</span>
                      <span className="ml-3">
                        {renderCodeLine(line.text, isDark)}
                      </span>
                    </div>
                  ))}
                  {visibleLines < codeLines.length && (
                    <div className="flex">
                      <span className={`w-5 flex-shrink-0 ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>{visibleLines + 1}</span>
                      <span className={`ml-3 cursor-blink ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>|</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <button
          onClick={() => scrollToSection('about')}
          className={`flex flex-col items-center gap-2 transition-colors duration-300 focus:outline-none ${
            isDark ? 'text-gray-500 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'
          }`}
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-medium">Scroll Down</span>
          <div className={`w-5 h-8 rounded-full border flex items-start justify-center pt-1 ${isDark ? 'border-gray-700' : 'border-gray-400'}`}>
            <div className="w-1 h-2 rounded-full bg-indigo-400 animate-bounce"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

function renderCodeLine(text: string, isDark: boolean): React.ReactNode {
  // Color different parts of the code
  return text
    .split(/(const|'[^']*'|\btrue\b|\d+|\/\/.*$|[\[\]]|[:,]|\{|\})/)
    .map((part, i) => {
      if (/^const$/.test(part)) return <span key={i} className={isDark ? 'text-purple-400' : 'text-purple-700'}>{part}</span>;
      if (/^'[^']*'$/.test(part)) return <span key={i} className={isDark ? 'text-yellow-300' : 'text-amber-700'}>{part}</span>;
      if (/^true$/.test(part)) return <span key={i} className={isDark ? 'text-green-400' : 'text-emerald-700'}>{part}</span>;
      if (/^\d+$/.test(part)) return <span key={i} className={isDark ? 'text-orange-400' : 'text-orange-700'}>{part}</span>;
      if (/^\/\//.test(part)) return <span key={i} className={isDark ? 'text-gray-500 italic' : 'text-gray-600 italic'}>{part}</span>;
      if (/^[\[\],:{} ]+$/.test(part)) return <span key={i} className={isDark ? 'text-gray-400' : 'text-gray-700'}>{part}</span>;
      return <span key={i} className={isDark ? 'text-green-300' : 'text-emerald-700'}>{part}</span>;
    });
}

export default Hero;
