import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CustomCursor from '../effects/CustomCursor';
import FloatingElements from '../effects/FloatingElements';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f3e6ff] flex items-center justify-center py-20">
      <CustomCursor />
      <FloatingElements />

      {/* "Hey, there" large centered above the image */}
      <motion.h1
        className="absolute inset-x-0 top-20 text-center text-[180px] sm:text-[200px] font-serif italic opacity-10 pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hey, there
      </motion.h1>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-8">
          {/* Left: Available & Name */}
          <div className="flex flex-col justify-start">
            <motion.div
              className="inline-block mb-6 px-6 py-2 bg-black text-white rounded-full text-lg font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6 }}
            >
              Available for new works
            </motion.div>

            <motion.h2
              className="text-7xl md:text-8xl font-bold leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I AM<br />SOJAN
            </motion.h2>
          </div>

          {/* Center: Profile Image */}
          <motion.div
            className="relative w-full max-w-[500px] mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 1, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative aspect-square">
              <img
                src="/images/profile.png"
                alt="Sojan Augustine"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle gradient overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(
                      to bottom,
                      transparent 40%,
                      rgba(243, 230, 255, 0.6) 100%
                    )
                  `
                }}
              />
            </div>
          </motion.div>

          {/* Right: Skills and Title */}
          <div className="flex flex-col items-end">
            <motion.p
              className="mb-4 text-gray-700 text-xl text-right"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Specialized in 3D animation,<br />
              VFX, Color Grading, Motion Graphics,<br />
              Video & Photo Editing.
            </motion.p>

            <motion.h3
              className="text-3xl md:text-4xl mt-2 text-right"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Freelance<br />
              <span className="italic">Digital</span> Creator
            </motion.h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
