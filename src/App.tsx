import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import Testimonials from './components/sections/Testimonials';
import StatsBanner from './components/sections/StatsBanner';
import CustomCursor from './components/CustomCursor';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useTheme } from './hooks/useTheme';

const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDark, toggleTheme } = useTheme();
  const activeSection = useScrollSpy(sectionIds, 120);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <CustomCursor />

      <div
        className={`min-h-screen transition-colors duration-500 ${
          isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'
        }`}
        style={{ cursor: 'none' }}
      >
        {/* Skip to main content - Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>

        <Navbar
          activeSection={activeSection}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />

        <main id="main-content">
          <Hero isDark={isDark} />

          <StatsBanner isDark={isDark} />
          <About isDark={isDark} />
          <Skills isDark={isDark} />
          <Projects isDark={isDark} />
          <Testimonials isDark={isDark} />
          <Contact isDark={isDark} />
        </main>

        <Footer isDark={isDark} />
        <ScrollToTop isDark={isDark} />
      </div>
    </>
  );
}
