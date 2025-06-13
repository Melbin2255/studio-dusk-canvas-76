
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-purple-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-300 rounded-full opacity-30 blur-lg animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Greeting */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-4xl lg:text-6xl font-light text-gray-900 italic mb-2">
              Hey, <span className="font-normal">there</span>
            </h2>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Available for new works
          </motion.div>

          {/* Main Title */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              I AM<br />
              SOJAN
            </h1>
          </motion.div>

          {/* Skills and Title */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="text-sm text-gray-600 leading-relaxed max-w-md">
              <p>Specialized in 3D animation,</p>
              <p>VFX,Color Grading,Motion Graphics,</p>
              <p>Video & Photo Editing</p>
            </div>
            
            <div>
              <p className="text-xl font-semibold text-gray-900">Freelance</p>
              <p className="text-lg font-light text-gray-700 italic">Digital Creator</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-purple-200 to-purple-100 shadow-2xl">
              <img
                src="/images/profile.jpg"
                alt="Sojan Augustine"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-4 border-purple-200 opacity-50 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
