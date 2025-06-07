
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import ParticleField from '../effects/ParticleField';
import TiltElement from '../effects/TiltElement';

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
      {/* Particle field background */}
      <ParticleField />
      
      {/* Background breathing animation */}
      <div className="absolute inset-0 hero-gradient animate-pulse-glow opacity-20"></div>
      
      <div className="relative z-10 text-center px-6">
        {/* 3D Tilt container for main content */}
        <TiltElement className="mb-8">
          {/* Main headline with enhanced draw effect */}
          <h1 className={`text-6xl md:text-8xl lg:text-9xl font-light mb-6 transition-all duration-2000 ${isLoaded ? 'text-outline-gold opacity-100' : 'opacity-0'}`}>
            <span className="inline-block animate-fade-in-up">Sojan</span>{' '}
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Augustine</span>
          </h1>
          
          {/* Animated subtitle */}
          <h2 className={`text-xl md:text-2xl lg:text-3xl font-light text-studio-bone mb-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block bg-gradient-to-r from-studio-bone to-studio-gold bg-clip-text text-transparent">
              Visual Artist & Post-Production Specialist
            </span>
          </h2>
        </TiltElement>
        
        {/* Enhanced enter button with ripple effect */}
        <button 
          onClick={scrollToAbout}
          className={`btn-studio-primary mb-16 transition-all duration-1000 delay-1000 hover:glow-gold relative overflow-hidden group ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="relative z-10">Enter</span>
          <div className="absolute inset-0 bg-studio-gold transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
        </button>
        
        {/* Enhanced explore indicator */}
        <div className={`flex flex-col items-center transition-all duration-1000 delay-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-studio-gold text-sm font-medium mb-4 tracking-wider animate-pulse">EXPLORE</span>
          <div className="w-0.5 h-16 bg-studio-gold animate-draw-line"></div>
          <ChevronDown className="text-studio-gold mt-2 animate-bounce hover:text-studio-gold-hover transition-colors cursor-pointer" size={20} onClick={scrollToAbout} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
