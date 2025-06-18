import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CustomCursor from '../effects/CustomCursor';
import FloatingElements from '../effects/FloatingElements';
import GradientBlobs from '../effects/GradientBlobs';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8f5ff] via-[#f3e6ff] to-[#ede0ff] flex items-center justify-center py-12 sm:py-20">
      <CustomCursor />
      <FloatingElements />
      <GradientBlobs intensity="heavy" />

      {/* Simple Available Status Indicator */}
      <motion.div
        className="absolute top-8 md:top-10 right-8 md:right-10 flex items-center gap-2 z-50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-sm text-gray-700 font-medium">Available</span>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-12">
          
          {/* Left Column: Name */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start mt-4 sm:mt-8 lg:mt-0">
            <motion.h1
              className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tight text-black text-left"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -60 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              I AM<br />
              <span className="font-serif italic">SOJAN</span>
            </motion.h1>
          </div>

          {/* Center Column: Profile Image with "Hey, there" overlay */}
          <div className="lg:col-span-4 relative flex justify-center mt-8 lg:mt-0">
            {/* "Hey, there" positioned around the image */}
            <div className="absolute inset-0 z-0 overflow-visible">
              <motion.div
                className="absolute top-0 sm:top-4 md:top-8 lg:top-12 w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                <div className="relative w-full flex justify-center">
                  <span className="text-7xl sm:text-6xl md:text-7xl lg:text-[140px] font-serif italic text-black pointer-events-none whitespace-nowrap" 
                        style={{ transform: 'translateY(-50%)' }}>
                    Hey there
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[450px] z-10"
              initial={{ opacity: 0, scale: 0.7, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.7, y: isVisible ? 0 : 50 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="relative aspect-[3.5/5] overflow-hidden">
                <img
                  src="/images/profile.png"
                  alt="Sojan Augustine"
                  className="w-full h-full object-cover object-center"
                />
                {/* Background blend gradient */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `
                      linear-gradient(
                        to bottom,
                        transparent 0%,
                        rgba(248, 245, 255, 0.1) 70%,
                        rgba(243, 230, 255, 0.2) 100%
                      )
                    `
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills and Title */}
          <div className="lg:col-span-4 flex flex-col justify-center text-center lg:text-right mt-8 lg:mt-0">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 60 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-2">
                Specialized in 3D animation,
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-2">
                VFX, Color Grading, Motion Graphics,
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Video & Photo Editing.
              </p>
            </motion.div>

            <motion.div
              className="text-right"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 60 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black">
                Freelance
              </h3>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif italic leading-tight text-black mt-2">
                Digital Creator
              </h3>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="w-px h-16 bg-black/30 mx-auto"></div>
        <div className="w-2 h-2 bg-black/40 rounded-full mx-auto mt-2 animate-bounce"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
