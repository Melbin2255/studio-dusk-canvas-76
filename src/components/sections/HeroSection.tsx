
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import ParticleField from '../effects/ParticleField';
import TiltElement from '../effects/TiltElement';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [nameRevealed, setNameRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Trigger dramatic name reveal after initial load
      setTimeout(() => setNameRevealed(true), 800);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center hero-gradient overflow-hidden">
      {/* Enhanced Particle field background */}
      <ParticleField />
      
      {/* Multiple background layers for depth */}
      <div className="absolute inset-0 hero-gradient animate-pulse-glow opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-radial from-studio-gold/5 via-transparent to-transparent animate-pulse"></div>
      
      <div className="relative z-10 text-center px-6">
        {/* Enhanced 3D Tilt container for main content */}
        <TiltElement className="mb-8" maxTilt={20}>
          {/* Dramatic name reveal with multiple effects */}
          <div className="relative mb-6">
            {/* Background glow effect */}
            <div className={`absolute inset-0 text-6xl md:text-8xl lg:text-9xl font-light transition-all duration-3000 ${nameRevealed ? 'opacity-30 blur-md scale-110' : 'opacity-0'}`}>
              <span className="text-studio-gold">Sojan Augustine</span>
            </div>
            
            {/* Main text with enhanced reveal */}
            <h1 className={`relative text-6xl md:text-8xl lg:text-9xl font-light transition-all duration-2000 ${isLoaded ? 'text-outline-gold opacity-100' : 'opacity-0'}`}>
              <span className={`inline-block transition-all duration-1500 ${nameRevealed ? 'animate-dramatic-reveal-1' : 'opacity-0 scale-50 rotate-12'}`}>
                Sojan
              </span>
              {' '}
              <span className={`inline-block transition-all duration-1500 delay-300 ${nameRevealed ? 'animate-dramatic-reveal-2' : 'opacity-0 scale-50 -rotate-12'}`}>
                Augustine
              </span>
            </h1>
            
            {/* Shimmer overlay effect */}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-studio-gold/30 to-transparent transform -skew-x-12 transition-all duration-2000 ${nameRevealed ? 'animate-shimmer' : 'opacity-0'}`}></div>
          </div>
          
          {/* Enhanced animated subtitle */}
          <h2 className={`text-xl md:text-2xl lg:text-3xl font-light text-studio-bone mb-12 transition-all duration-1500 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0 animate-subtle-glow' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block bg-gradient-to-r from-studio-bone via-studio-gold to-studio-bone bg-clip-text text-transparent animate-gradient-shift">
              Visual Artist & Post-Production Specialist
            </span>
          </h2>
        </TiltElement>
        
        {/* Enhanced enter button with multiple effects */}
        <button 
          onClick={scrollToAbout}
          className={`btn-studio-primary mb-16 transition-all duration-1500 delay-1500 hover:glow-gold relative overflow-hidden group transform ${isLoaded ? 'opacity-100 translate-y-0 hover:scale-110' : 'opacity-0 translate-y-8'}`}
        >
          <span className="relative z-10 transition-all duration-300 group-hover:scale-105">Enter</span>
          <div className="absolute inset-0 bg-studio-gold transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
          <div className="absolute inset-0 animate-pulse-ring"></div>
        </button>
        
        {/* Enhanced explore indicator with breathing effect */}
        <div className={`flex flex-col items-center transition-all duration-1500 delay-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-studio-gold text-sm font-medium mb-4 tracking-wider animate-pulse-subtle">EXPLORE</span>
          <div className="w-0.5 h-16 bg-studio-gold animate-draw-line-enhanced"></div>
          <ChevronDown className="text-studio-gold mt-2 animate-bounce-enhanced hover:text-studio-gold-hover transition-colors cursor-pointer transform hover:scale-125" size={20} onClick={scrollToAbout} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
