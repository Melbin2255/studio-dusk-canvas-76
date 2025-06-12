import React from 'react';
import { motion } from 'framer-motion';

interface MotionDecorationProps {}

const MotionDecoration: React.FC<MotionDecorationProps> = () => {
  const paths = [
    "M10 10C10 20 20 20 20 10",
    "M5 15C15 15 15 5 25 5",
    "M0 10C10 10 10 0 20 0",
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Motion paths */}
      <svg className="absolute w-full h-full">
        {paths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke="rgba(147, 51, 234, 0.2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: index * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Floating motion indicators */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-purple-400/30"
            initial={{ 
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: 0
            }}
            animate={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              delay: index * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Motion text effect */}
      <motion.div
        className="absolute bottom-4 right-4 text-sm text-purple-400/50 font-light"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          y: [-10, 0, 10]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        motion
      </motion.div>
    </div>
  );
};

export default MotionDecoration;
