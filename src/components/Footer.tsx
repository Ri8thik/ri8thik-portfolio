import React from 'react';
import { Mail, MapPin, Phone, Heart, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { socialLinks, navLinks } from '../data/portfolio';
import { useScrollToSection } from '../hooks/useScrollSpy';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const scrollToSection = useScrollToSection();
  const currentYear = new Date().getFullYear();

  const socialItems = [
    { icon: <FaGithub size={20} />, href: socialLinks.github, label: 'GitHub', color: 'hover:text-white hover:bg-gray-700' },
    { icon: <FaLinkedin size={20} />, href: socialLinks.linkedin, label: 'LinkedIn', color: 'hover:text-white hover:bg-blue-600' },
    { icon: <Mail size={20} />, href: `mailto:${socialLinks.email}`, label: 'Email', color: 'hover:text-white hover:bg-indigo-600' },
    { icon: <FaInstagram size={20} />, href: socialLinks.instagram, label: 'Instagram', color: 'hover:text-white hover:bg-pink-600' },
    { icon: <FaTwitter size={20} />, href: '#', label: 'Twitter', color: 'hover:text-white hover:bg-sky-600' },
  ];

  return (
    <footer
      className={`relative overflow-hidden ${isDark ? 'bg-gray-950 border-t border-gray-800/50' : 'bg-gray-950 border-t border-gray-800'}`}
      role="contentinfo"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-64 rounded-full bg-indigo-600/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-purple-600/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <Code2 size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Rithik<span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Soun</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Frontend & Full Stack Developer passionate about building scalable, performant,
              and beautiful web applications using Angular, TypeScript, and Java Spring Boot.
            </p>
            {/* Contact Details */}
            <div className="space-y-2">
              <a href={`mailto:${socialLinks.email}`} className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors text-sm group">
                <Mail size={15} className="text-indigo-500 group-hover:scale-110 transition-transform" />
                {socialLinks.email}
              </a>
              <a href={`tel:${socialLinks.phone}`} className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors text-sm group">
                <Phone size={15} className="text-indigo-500 group-hover:scale-110 transition-transform" />
                {socialLinks.phone}
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={15} className="text-indigo-500" />
                {socialLinks.location}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-gray-400 hover:text-indigo-400 transition-colors text-sm flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-indigo-400 transition-colors"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['Angular', 'TypeScript', 'Java', 'Spring Boot', 'Tailwind', 'PostgreSQL', 'RxJS', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-800 text-gray-400 hover:bg-indigo-500/20 hover:text-indigo-400 transition-colors cursor-default border border-gray-700/50 hover:border-indigo-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Availability */}
            <div className="mt-5 p-3 rounded-xl bg-green-500/5 border border-green-500/10">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-green-400 text-xs font-semibold">Open to Opportunities</span>
              </div>
              <p className="text-gray-500 text-xs">Available for full-time roles & freelance projects</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <span>© {currentYear} Rithik Soun. Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500 mx-0.5" />
            <span>in Delhi NCR</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={item.label}
                className={`p-2 rounded-lg bg-gray-800 text-gray-400 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${item.color}`}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Built with */}
          <p className="text-gray-600 text-xs">
            Built with{' '}
            <span className="text-indigo-400">React</span> +{' '}
            <span className="text-cyan-400">Tailwind</span> +{' '}
            <span className="text-purple-400">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
