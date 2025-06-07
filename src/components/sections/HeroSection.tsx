
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import ParticleField from '../effects/ParticleField';

const HeroSection = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Cinematic sequence timing
    const timers = [
      setTimeout(() => setAnimationPhase(1), 500),   // Fade in background
      setTimeout(() => setAnimationPhase(2), 1200),  // Reveal name
      setTimeout(() => setAnimationPhase(3), 2400),  // Reveal subtitle
      setTimeout(() => setAnimationPhase(4), 3200),  // Show CTA and scroll indicator
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-studio-charcoal via-studio-hero-to to-studio-charcoal">
      {/* Subtle particle background */}
      <ParticleField />
      
      {/* Main content container */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Name reveal with cinematic timing */}
        <div className="mb-8">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight">
            <span 
              className={`inline-block transition-all duration-1000 ease-out ${
                animationPhase >= 2 
                  ? 'opacity-100 transform-none' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <span className="text-studio-bone">Sojan</span>
            </span>
            <span className="text-studio-bone mx-4">·</span>
            <span 
              className={`inline-block transition-all duration-1000 ease-out ${
                animationPhase >= 2 
                  ? 'opacity-100 transform-none' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <span className="text-studio-gold">Augustine</span>
            </span>
          </h1>
        </div>
        
        {/* Subtitle with delayed reveal */}
        <div 
          className={`mb-16 transition-all duration-800 ease-out ${
            animationPhase >= 3 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-xl md:text-2xl text-studio-bone/80 font-light tracking-wide">
            Visual Artist & Post-Production Specialist
          </p>
          <div className="w-24 h-px bg-studio-gold mx-auto mt-6"></div>
        </div>
        
        {/* CTA button with refined styling */}
        <div 
          className={`mb-20 transition-all duration-800 ease-out ${
            animationPhase >= 4 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'
          }`}
        >
          <button 
            onClick={scrollToAbout}
            className="group relative px-12 py-4 border border-studio-gold text-studio-gold hover:text-studio-charcoal transition-all duration-300 overflow-hidden bg-transparent hover:bg-studio-gold"
          >
            <span className="relative z-10 font-medium tracking-wider text-sm uppercase">
              Enter Portfolio
            </span>
          </button>
        </div>
        
        {/* Scroll indicator with improved design */}
        <div 
          className={`flex flex-col items-center transition-all duration-800 ease-out ${
            animationPhase >= 4 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex flex-col items-center cursor-pointer group" onClick={scrollToAbout}>
            <span className="text-studio-gold/60 text-xs tracking-widest mb-4 uppercase">
              Scroll to explore
            </span>
            <div className="relative">
              <div className="w-px h-16 bg-gradient-to-b from-studio-gold/60 to-transparent"></div>
              <ArrowDown 
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-studio-gold/60 group-hover:text-studio-gold transition-colors duration-300 animate-bounce-slow" 
                size={16} 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle ambient lighting effect */}
      <div 
        className={`absolute inset-0 bg-gradient-radial from-studio-gold/5 via-transparent to-transparent transition-opacity duration-2000 ${
          animationPhase >= 1 ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
    </section>
  );
};

export default HeroSection;
