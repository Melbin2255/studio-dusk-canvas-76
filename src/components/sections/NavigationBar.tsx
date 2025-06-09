import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedLogo from '../AnimatedLogo';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-studio-charcoal/90 backdrop-blur-md border-b border-studio-gold/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center h-[92px]">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="w-12 h-12 flex items-center justify-center -mt-5">
              <AnimatedLogo width="100%" height="100%" className="text-studio-gold" />
            </div>
            <motion.div 
              className="text-lg font-medium text-studio-gold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Sojan Augustine
            </motion.div>
          </motion.div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center ml-auto space-x-10">
            {['About', 'Expertise', 'Works', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-studio-bone hover:text-studio-gold transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
