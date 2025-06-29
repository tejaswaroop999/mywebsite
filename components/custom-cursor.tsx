'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseEnterInteractive = () => setCursorVariant('text');
    const mouseLeaveInteractive = () => setCursorVariant('default');

    window.addEventListener('mousemove', mouseMove);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', mouseEnterInteractive);
      el.addEventListener('mouseleave', mouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', mouseEnterInteractive);
        el.removeEventListener('mouseleave', mouseLeaveInteractive);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      mixBlendMode: 'difference' as const,
      scale: 1,
    },
  };

  return (
    <motion.div
      className="cursor fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
      }}
    />
  );
}