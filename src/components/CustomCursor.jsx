import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('clickable')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    }

    const handleMouseEnter = () => {
      setIsVisible(true);
    }

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  // Disable custom cursor on touch devices where hover is not supported
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return null;
  }

  return (
    <motion.div
      className={`victorian-heart ${isHovering ? 'victorian-heart--hover' : ''}`}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        scale: isHovering ? 1.05 : 1
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
    >
      <svg viewBox="0 0 40 40" width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="pearlGrad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="15%" stopColor="#94A3B8" />
            <stop offset="40%" stopColor="#334155" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>
        </defs>

        {/* Glow behind the heart (visible on hover) */}
        <motion.circle 
            cx="20" cy="20" r="16" 
            fill="var(--color-red)" 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isHovering ? 0.3 : 0, scale: isHovering ? 1.2 : 0.5 }}
            transition={{ duration: 0.4 }}
            style={{ filter: 'blur(8px)' }}
        />

        {/* Entwined thorn vines composing the heart shape */}
        <path 
            d="M 20,36 C 20,36 6,24 6,12 C 6,6 13,6 20,12 C 27,6 34,6 34,12 C 34,24 20,36 20,36 Z" 
            fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
        />
        <path 
            d="M 20,34 C 20,34 8,24 8,13 C 8,8 14,8 20,12 C 26,8 32,8 32,13 C 32,24 20,34 20,34 Z" 
            fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeDasharray="3 2" 
        />
        <path 
            d="M 20,38 C 20,38 4,24 4,11 C 4,4 12,4 20,12 C 28,4 36,4 36,11 C 36,24 20,38 20,38 Z" 
            fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" 
        />

        {/* Thorns (Espinas) sticking out */}
        <g stroke="currentColor" strokeWidth="1" strokeLinecap="round">
            {/* Left side */}
            <path d="M 12,8 L 8,4 L 13,9" />
            <path d="M 6,15 L 2,14 L 7,17" />
            <path d="M 9,23 L 5,26 L 11,25" />
            <path d="M 15,30 L 11,34 L 16,31" />
            {/* Right side */}
            <path d="M 28,8 L 32,4 L 27,9" />
            <path d="M 34,15 L 38,14 L 33,17" />
            <path d="M 31,23 L 35,26 L 29,25" />
            <path d="M 25,30 L 29,34 L 24,31" />
        </g>

        {/* The Black Pearl swinging from the top intersection */}
        <motion.g 
            animate={isHovering ? { rotate: [0, 12, -10, 8, -6, 0] } : { rotate: 0 }}
            transition={isHovering ? { repeat: Infinity, duration: 2.5, ease: "easeInOut" } : { duration: 0.5 }}
            style={{ originX: '20px', originY: '12px' }}
        >
            <line x1="20" y1="12" x2="20" y2="19" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="20" cy="21.5" r="2.5" fill="url(#pearlGrad)" />
        </motion.g>

      </svg>
    </motion.div>
  );
}
