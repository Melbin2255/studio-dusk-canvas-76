import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';
import CustomCursor from '../effects/CustomCursor';
import FloatingElements from '../effects/FloatingElements';
import TypewriterText from '../effects/TypewriterText';
import MotionDecoration from '../effects/MotionDecoration';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };  const [isPlayingMotion, setIsPlayingMotion] = useState(true);

  // Order adjusted to make Motion Designer appear last for maximum impact
  const roles = [
    "Creative Developer",
    "UI/UX Designer",
    "3D Artist",
    "Motion Designer"
  ];

  // Motion-related decorative elements config
  const motionDecorations = [
    { x: '20%', y: '30%', size: 'w-8 h-8', delay: 0 },
    { x: '80%', y: '60%', size: 'w-6 h-6', delay: 0.2 },
    { x: '70%', y: '20%', size: 'w-10 h-10', delay: 0.4 },
  ];

  const toggleMotion = () => {
    setIsPlayingMotion(!isPlayingMotion);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_1px_1px,rgba(142,84,233,0.15)_1px,transparent_0)]" style={{ backgroundSize: '40px 40px' }} />
      
      {/* Floating Elements */}
      <FloatingElements />

      {/* Main content container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Name reveal */}
        <motion.div 
          className="mb-6 sm:mb-8 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="absolute -top-4 sm:-top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 sm:gap-4">
            <motion.div 
              className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isVisible ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Sparkles className="text-purple-400" size={16} />
            </motion.div>
            <motion.div 
              className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent via-purple-400 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isVisible ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
          </div>
          
          <h1 className="font-europa leading-none tracking-tight">
            <motion.div 
              className="mb-2 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span 
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400"
                style={{ fontSize: 'clamp(3.5rem, 10vw, 12rem)' }}
              >
                Sojan
              </span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span 
                className="inline-block text-gray-900"
                style={{ 
                  fontSize: 'clamp(4rem, 12vw, 14rem)',
                  letterSpacing: '-0.02em'
                }}
              >
                Augustine
              </span>
            </motion.div>
          </h1>

          {/* Roles Typewriter */}          {/* Motion dcoration elements */}
          {motionDecorations.map((decoration, index) => (
            <motion.div
              key={index}
              className="absolute pointer-events-none"
              style={{ left: decoration.x, top: decoration.y }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: decoration.delay,
                type: "spring",
                stiffness: 100
              }}
            >
              <div className={`${decoration.size} rounded-lg border border-purple-200 bg-purple-50/30 backdrop-blur-sm transform rotate-12`} />
            </motion.div>
          ))}          <motion.div
            className="mt-12 sm:mt-16 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="relative">
              {/* Motion Decoration */}
              {isPlayingMotion && <MotionDecoration />}
              
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200/20 via-transparent to-purple-200/20 blur-xl" />
              
              <TypewriterText 
                words={roles} 
                className="text-2xl sm:text-3xl lg:text-4xl text-purple-600 font-medium tracking-wide"
              />

              {/* Play/Pause Motion Button */}
              <motion.button
                className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-purple-100/50 hover:bg-purple-200/50 backdrop-blur-sm transition-colors"
                onClick={toggleMotion}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isPlayingMotion ? (
                  <Pause className="w-4 h-4 text-purple-600/70" />
                ) : (
                  <Play className="w-4 h-4 text-purple-600/70" />
                )}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>          {/* Scroll indicator - Now part of the content flow */}
          <motion.div
            className="mt-12 sm:mt-16 flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button
              onClick={scrollToAbout}
              className="p-3 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 group"
              style={{
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)',
              }}
            >
              <motion.div
                className="p-2 rounded-full backdrop-blur-sm flex items-center justify-center"
                whileHover={{ scale: 1.1, y: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronDown className="w-8 h-8 text-purple-600 group-hover:text-purple-700 animate-bounce" />
              </motion.div>
            </button>
          </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;