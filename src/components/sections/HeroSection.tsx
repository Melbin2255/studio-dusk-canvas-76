
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center hero-gradient overflow-hidden">
      {/* Background breathing animation */}
      <div className="absolute inset-0 hero-gradient animate-pulse-glow opacity-30"></div>
      
      <div className="relative z-10 text-center px-6">
        {/* Main headline with draw effect */}
        <h1 className={`text-6xl md:text-8xl lg:text-9xl font-light mb-6 transition-all duration-2000 ${isLoaded ? 'text-outline-gold opacity-100' : 'opacity-0'}`}>
          Sojan Augustine
        </h1>
        
        {/* Sub-headline */}
        <h2 className={`text-xl md:text-2xl lg:text-3xl font-light text-studio-bone mb-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Visual Artist & Post-Production Specialist
        </h2>
        
        {/* Enter button */}
        <button 
          onClick={scrollToAbout}
          className={`btn-studio-primary mb-16 transition-all duration-1000 delay-1000 hover:glow-gold ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Enter
        </button>
        
        {/* Explore indicator */}
        <div className={`flex flex-col items-center transition-all duration-1000 delay-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-studio-gold text-sm font-medium mb-4 tracking-wider">EXPLORE</span>
          <div className="w-0.5 h-16 bg-studio-gold animate-draw-line"></div>
          <ChevronDown className="text-studio-gold mt-2 animate-bounce" size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
