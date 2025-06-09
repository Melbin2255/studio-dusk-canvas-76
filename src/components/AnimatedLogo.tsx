import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedLogoProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

const AnimatedLogo = ({ width = "210mm", height = "297mm", className = "" }: AnimatedLogoProps) => {
  const drawVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      fillOpacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      fillOpacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut" },
        fillOpacity: { duration: 0.3, delay: 1.2 }
      },
    },
  };

  const polygon1Variants = {
    hidden: { x: -100, y: -100, ...drawVariants.hidden },
    visible: { x: 0, y: 0, ...drawVariants.visible },
  };

  const polygon2Variants = {
    hidden: { x: 100, y: -100, ...drawVariants.hidden },
    visible: { 
      x: 0, 
      y: 0, 
      ...drawVariants.visible,
      transition: {
        ...drawVariants.visible.transition,
        delay: 0.3,
      }
    },
  };

  const polygon3Variants = {
    hidden: { x: 0, y: 100, ...drawVariants.hidden },
    visible: { 
      x: 0, 
      y: 0, 
      ...drawVariants.visible,
      transition: {
        ...drawVariants.visible.transition,
        delay: 0.6,
      }
    },
  };

  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 500 600"
      version="1.1"
      className={className}
      initial="hidden"
      animate="visible"
    >
      <motion.g>
        <motion.path
          variants={polygon1Variants}
          className="fill-current"
          d={`M92.15,408.94 L359.98,408.96 L420.01,304.98 L198.36,304.98 L212.22,280.98 L420.02,280.98 L396.93,240.98 L189.12,240.98 L129.09,344.96 L350.74,344.96 L336.9,368.96 L115.24,368.96Z`}
          stroke="currentColor"
          strokeWidth="2"
        />
        <motion.path
          variants={polygon2Variants}
          className="fill-current"
          d={`M92.14,432.95 L115.23,472.93 L276.86,472.93 L226.07,560.92 L212.22,560.92 L175.27,496.92 L129.08,496.92 L189.12,600.91 L249.16,600.91 L346.13,432.95Z`}
          stroke="currentColor"
          strokeWidth="2"
        />
        <motion.path
          variants={polygon3Variants}
          className="fill-current"
          d={`M323.05,600.91 L440.8,396.96 L454.65,420.95 L350.74,600.91 L396.93,600.91 L500.83,420.94 L440.8,316.96 L276.87,600.91Z`}
          stroke="currentColor"
          strokeWidth="2"
        />
      </motion.g>
    </motion.svg>
  );
};

export default AnimatedLogo;
