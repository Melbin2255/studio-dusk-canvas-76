
import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Play, Pause } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CustomCursor from '../effects/CustomCursor';
import FloatingElements from '../effects/FloatingElements';
import TypewriterText from '../effects/TypewriterText';
import MotionDecoration from '../effects/MotionDecoration';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlayingMotion, setIsPlayingMotion] = useState(true);
  const { scrollY } = useScroll();
  const headlineOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const headlineY = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMotion = () => {
    setIsPlayingMotion(!isPlayingMotion);
  };

  // Professional roles for the typewriter
  const roles = [
    "3D Animation Specialist",
    "VFX Artist",
    "Color Grading Expert", 
    "Motion Design Creator"
  ];

  // Geometric shapes for overlay
  const geometricShapes = [
    { type: 'triangle', x: '10%', y: '20%', size: 'w-16 h-16', delay: 0 },
    { type: 'hexagon', x: '85%', y: '30%', size: 'w-20 h-20', delay: 0.2 },
    { type: 'triangle', x: '15%', y: '70%', size: 'w-12 h-12', delay: 0.4 },
    { type: 'hexagon', x: '80%', y: '75%', size: 'w-14 h-14', delay: 0.6 },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-tech-indigo via-tech-purple to-tech-hot-pink opacity-90" />
        
        {/* Abstract 3D Animation Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-cyan/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tech-hot-pink/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tech-teal/20 rounded-full blur-2xl animate-pulse"></div>
        </div>

        {/* Geometric Overlay Shapes */}
        {geometricShapes.map((shape, index) => (
          <motion.div
            key={index}
            className={`absolute geometric-overlay ${shape.type} ${shape.size} animate-geometric`}
            style={{ left: shape.x, top: shape.y, animationDelay: `${shape.delay}s` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: shape.delay, duration: 0.8 }}
          />
        ))}

        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)]" style={{ backgroundSize: '50px 50px' }} />
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
        style={{ opacity: headlineOpacity, y: headlineY }}
      >
        {/* Cinematic Header */}
        <motion.div 
          className="mb-8 sm:mb-12 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Sparkle Decoration */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
            <motion.div 
              className="w-20 h-px bg-gradient-to-r from-transparent via-white to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isVisible ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
            <motion.div
              className="animate-sparkle"
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Sparkles className="text-white" size={20} />
            </motion.div>
            <motion.div 
              className="w-20 h-px bg-gradient-to-l from-transparent via-white to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isVisible ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
          </div>
          
          {/* Main Headline */}
          <motion.h1 
            className="font-helvetica font-light leading-none tracking-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-4">
              <span 
                className="gradient-text-hero block"
                style={{ fontSize: 'clamp(3rem, 8vw, 8rem)' }}
              >
                Crafting Immersive
              </span>
            </div>
            <div>
              <span 
                className="text-white block"
                style={{ 
                  fontSize: 'clamp(3.5rem, 9vw, 9rem)',
                  letterSpacing: '-0.02em'
                }}
              >
                Digital Realities
              </span>
            </div>
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xl sm:text-2xl lg:text-3xl font-helvetica italic font-extralight text-white/90 mb-8">
              3D Animation | VFX | Color Grading | Motion Design
            </p>

            {/* Roles Typewriter with Motion Decoration */}
            <div className="relative inline-block">
              {isPlayingMotion && <MotionDecoration />}
              <TypewriterText 
                words={roles} 
                className="text-2xl sm:text-3xl lg:text-4xl text-tech-cyan font-medium tracking-wide sparkle-cursor"
              />
              
              {/* Play/Pause Motion Button */}
              <motion.button
                className="absolute -right-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                onClick={toggleMotion}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isPlayingMotion ? (
                  <Pause className="w-5 h-5 text-white/70" />
                ) : (
                  <Play className="w-5 h-5 text-white/70" />
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={scrollToAbout}
              className="btn-cta sparkle-cursor group"
            >
              <span className="mr-2">Explore My Work</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button
            onClick={scrollToAbout}
            className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group backdrop-blur-sm"
          >
            <motion.div
              className="flex items-center justify-center"
              whileHover={{ scale: 1.1, y: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronDown className="w-8 h-8 text-white group-hover:text-tech-cyan animate-bounce" />
            </motion.div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
