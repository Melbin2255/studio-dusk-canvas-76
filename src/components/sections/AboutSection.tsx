
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-20 bg-gray-900 text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400 rounded-full opacity-10 blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="bg-gray-800 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.h3
                className="text-2xl lg:text-3xl font-light italic text-gray-300 mb-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                About Me
              </motion.h3>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-lg leading-relaxed">
                  I'm Sojan Augustine, a <span className="font-semibold italic">BCA graduate</span> and{' '}
                  <span className="font-semibold italic">digital creative professional</span> with{' '}
                  <span className="font-semibold italic">expertise in</span> visual effects, motion design,
                  and content creation.
                </p>
              </motion.div>
            </div>

            {/* Right Content - Expertise Preview */}
            <motion.div
              className="bg-gray-700 rounded-2xl p-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="text-xl font-semibold mb-4">My Expertise</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                My expertise lies in transforming creative concepts into compelling visual realities by leveraging 
                advanced design tools and industry-standard software, combining technical precision with innovative thinking.
              </p>
              
              <button className="inline-flex items-center text-white bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                See more
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
