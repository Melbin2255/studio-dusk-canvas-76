
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9370DB] to-[#E6E6FA] overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-16 h-16 opacity-20" style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          backgroundColor: '#8FBC8F'
        }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 opacity-15" style={{
          clipPath: 'polygon(30% 0%, 0% 50%, 30% 100%, 70% 100%, 100% 50%, 70% 0%)',
          backgroundColor: '#8FBC8F'
        }}></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 opacity-25" style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          backgroundColor: '#8FBC8F'
        }}></div>
        <div className="absolute bottom-20 left-20 w-14 h-14 opacity-20" style={{
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          backgroundColor: '#8FBC8F'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Left Content Area */}
          <div className="lg:col-span-7 space-y-8">
            {/* Hey, there - Top Left */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl lg:text-6xl text-black italic mb-8" style={{
                fontFamily: 'Great Vibes, cursive',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
              }}>
                Hey, there
              </h2>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              className="flex justify-start mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-[#FFB6C1] hover:text-black">
                Available for new works
              </button>
            </motion.div>

            {/* I AM SOJAN */}
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h1 className="text-6xl lg:text-7xl font-bold text-black leading-tight tracking-tight" style={{
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                fontWeight: 700
              }}>
                I AM<br />
                SOJAN
              </h1>
            </motion.div>

            {/* Specialties Text */}
            <motion.div
              className="text-left max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-black text-base leading-relaxed italic mb-4" style={{
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                fontWeight: 300
              }}>
                Specialized in 3D animation, VFX, Color Grading, Motion Graphics, Video & Photo Editing
              </p>
              
              <p className="text-black text-lg font-medium" style={{
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                fontWeight: 500
              }}>
                Freelance Digital Creator
              </p>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden" style={{
                boxShadow: '0 0 20px rgba(255,255,255,0.5)'
              }}>
                <img
                  src="/images/profile.jpg"
                  alt="Sojan Augustine"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Google Fonts import for Great Vibes */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" 
        rel="stylesheet" 
      />
    </section>
  );
};

export default HeroSection;
