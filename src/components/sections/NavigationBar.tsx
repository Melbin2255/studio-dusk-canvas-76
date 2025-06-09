
import { useState, useEffect } from 'react';

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
      <div className="container-studio py-4">
        <div className="flex items-center justify-between">
          {/* Updated Logo */}
          <div className="text-2xl font-bold text-studio-gold">
            Sojan Augustine
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Expertise', 'Works', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-studio-bone hover:text-studio-gold transition-colors duration-300 relative group"
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-studio-gold/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
