
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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8f5ff] via-[#f3e6ff] to-[#ede0ff] flex items-center justify-center py-20">
      <CustomCursor />
      <FloatingElements />

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-gradient rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-purple-gradient rounded-full blur-3xl opacity-15"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
          
          {/* Left Column: Available Badge & Name */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <motion.div
              className="inline-block mb-8 px-8 py-3 bg-black text-white rounded-full text-base font-medium shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Available for new works
            </motion.div>

            <motion.h1
              className="text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tight text-black"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -60 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              I AM<br />
              <span className="font-serif italic">SOJAN</span>
            </motion.h1>
          </div>

          {/* Center Column: Profile Image with "Hey, there" overlay */}
          <div className="lg:col-span-4 relative flex justify-center">
            {/* "Hey, there" positioned behind and above the image */}
            <motion.div
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 0.08, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              <h2 className="text-8xl md:text-9xl lg:text-[140px] font-serif italic text-black pointer-events-none whitespace-nowrap">
                Hey, there
              </h2>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              className="relative w-full max-w-[400px] lg:max-w-[450px] z-10"
              initial={{ opacity: 0, scale: 0.7, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.7, y: isVisible ? 0 : 50 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/profile.png"
                  alt="Sojan Augustine"
                  className="w-full h-full object-cover object-center"
                />
                {/* Enhanced gradient overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: `
                      linear-gradient(
                        to bottom,
                        transparent 50%,
                        rgba(248, 245, 255, 0.3) 80%,
                        rgba(243, 230, 255, 0.6) 100%
                      )
                    `
                  }}
                />
                {/* Subtle border glow */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20"></div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills and Title */}
          <div className="lg:col-span-4 flex flex-col justify-center text-right">
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
