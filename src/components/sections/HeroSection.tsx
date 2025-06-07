
import { useState, useEffect } from 'react';
import ParticleField from '../effects/ParticleField';

const HeroSection = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Cinematic sequence timing
    const timers = [
      setTimeout(() => setAnimationPhase(1), 500),   // Fade in background
      setTimeout(() => setAnimationPhase(2), 1200),  // Reveal name
      setTimeout(() => setAnimationPhase(3), 2400),  // Reveal subtitle
      setTimeout(() => setAnimationPhase(4), 3200),  // Show CTA
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-studio-hero-from via-studio-hero-to to-studio-charcoal">
      {/* Subtle particle background */}
      <ParticleField />
      
      {/* Main content container */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Name reveal with larger fonts */}
        <div className="mb-12">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-light tracking-tight leading-none">
            <span 
              className={`inline-block transition-all duration-1000 ease-out ${
                animationPhase >= 2 
                  ? 'opacity-100 transform-none' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <span className="text-studio-gold">Sojan Augustine</span>
            </span>
          </h1>
        </div>
        
        {/* Subtitle with larger font */}
        <div 
          className={`mb-20 transition-all duration-800 ease-out ${
            animationPhase >= 3 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-2xl md:text-3xl lg:text-4xl text-studio-bone/90 font-light tracking-wide">
            Visual Artist & Post-Production Specialist
          </p>
        </div>
        
        {/* Simple CTA button */}
        <div 
          className={`transition-all duration-800 ease-out ${
            animationPhase >= 4 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'
          }`}
        >
          <button 
            onClick={scrollToAbout}
            className="text-studio-gold hover:text-studio-bone transition-colors duration-300 text-lg tracking-widest uppercase font-light"
          >
            Enter
          </button>
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
