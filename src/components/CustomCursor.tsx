import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;

    const updateMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsHidden(false);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }

      const target = e.target as HTMLElement;
      const isClickable = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) ||
        target.closest('button') || target.closest('a') || target.style.cursor === 'pointer';
      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    let rafId: number;
    const animateCursor = () => {
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${curX - 20}px, ${curY - 20}px)`;
      }

      rafId = requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', updateMouse);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafId = requestAnimationFrame(animateCursor);

    return () => {
      document.removeEventListener('mousemove', updateMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-10 h-10 rounded-full border border-indigo-500/60 transition-all duration-200"
        style={{
          opacity: isHidden ? 0 : 1,
          transform: isPointer ? 'scale(1.5)' : 'scale(1)',
          borderColor: isPointer ? 'rgba(139, 92, 246, 0.8)' : 'rgba(99, 102, 241, 0.6)',
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-2 h-2 rounded-full bg-indigo-500 transition-opacity duration-200"
        style={{
          opacity: isHidden ? 0 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
