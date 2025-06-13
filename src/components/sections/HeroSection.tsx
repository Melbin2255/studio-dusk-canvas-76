
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-purple-200 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-300 rounded-full opacity-30 blur-lg animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - Hey there and availability badge */}
          <div className="lg:col-span-4 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Hey, there */}
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 italic mb-8">
                Hey, <span className="font-normal">there</span>
              </h2>

              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Available for new works
              </motion.div>
            </motion.div>
          </div>

          {/* Center Content - Profile Image */}
          <div className="lg:col-span-4 lg:order-2 flex justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-purple-200 to-purple-100 shadow-2xl">
                <img
                  src="/images/profile.jpg"
                  alt="Sojan Augustine"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-purple-200 opacity-50 animate-pulse"></div>
            </motion.div>
          </div>

          {/* Right Content - Skills */}
          <div className="lg:col-span-4 lg:order-3">
            <motion.div
              className="text-right"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-sm text-gray-600 leading-relaxed mb-8">
                <p>Specialized in 3D animation,</p>
                <p>VFX,Color Grading,Motion Graphics,</p>
                <p>Video & Photo Editing</p>
              </div>
              
              <div>
                <p className="text-xl font-semibold text-gray-900">Freelance</p>
                <p className="text-lg font-light text-gray-700 italic">Digital Creator</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Content - Main Title spanning full width */}
          <div className="lg:col-span-12 lg:order-4 mt-8">
            <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 leading-tight">
                I AM<br />
                SOJAN
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
