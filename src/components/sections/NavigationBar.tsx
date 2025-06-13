
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import AnimatedLogo from '../AnimatedLogo';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  const navItems = ['About', 'Expertise', 'Works', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-border-light shadow-soft' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[92px]">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="w-12 h-12 flex items-center justify-center -mt-5 relative">
              <AnimatedLogo width="100%" height="100%" className="text-purple-gradient-start" />
              <div className="absolute inset-0 bg-purple-gradient-start/20 blur-xl rounded-full animate-pulse opacity-50"></div>
            </div>
            <motion.div 
              className="text-lg font-montserrat font-medium text-black relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Sojan Augustine
              <div className="absolute -bottom-1 left-0 w-full h-px bg-purple-gradient opacity-60"></div>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="group relative text-sm font-lato text-black hover:text-purple-gradient-start transition-all duration-300 py-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
              >
                <span className="relative z-10">{item}</span>
                
                <div className="absolute bottom-0 left-0 w-full h-px bg-purple-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                <div className="absolute inset-0 bg-purple-gradient-soft rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-black hover:text-purple-gradient-start transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className={`md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-border-light ${
            isMobileMenuOpen ? 'max-h-80' : 'max-h-0'
          }`}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="py-6 space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-6 py-3 font-lato text-black hover:text-purple-gradient-start hover:bg-purple-gradient-soft transition-all duration-300 rounded-lg mx-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  x: isMobileMenuOpen ? 0 : -20 
                }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default NavigationBar;
