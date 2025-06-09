import { useState, useEffect } from 'react';
import ParticleField from '../effects/ParticleField';
import AnimatedLogo from '../AnimatedLogo';

const HeroSection = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    // Enhanced cinematic sequence timing
    const timers = [
      setTimeout(() => setAnimationPhase(1), 300),   // Background fade
      setTimeout(() => setAnimationPhase(2), 800),   // First name reveal
      setTimeout(() => setAnimationPhase(3), 1400),  // Last name reveal
      setTimeout(() => setAnimationPhase(4), 2200),  // Subtitle reveal
      setTimeout(() => setAnimationPhase(5), 3000),  // CTA reveal
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-studio-hero-from via-studio-hero-to to-studio-charcoal">
      {/* Enhanced particle background */}
      <ParticleField />
      
      {/* Main content container */}
      <div className="relative z-10 text-center px-6 max-w-8xl mx-auto">
        {/* Logo Animation */}
        <div className={`mb-12 transition-all duration-1000 ease-out ${
          animationPhase >= 1
            ? 'opacity-100 transform-none'
            : 'opacity-0 scale-50'
        }`}>
          <AnimatedLogo width="180" height="180" className="text-studio-gold mx-auto filter drop-shadow-2xl" />
        </div>

        {/* Enhanced name reveal with varied typography */}
        <div className="mb-16">
          <h1 className="leading-none tracking-tight">
            {/* First name with different styling */}
            <div className="mb-4">
              <span 
                className={`inline-block transition-all duration-1200 ease-out font-light ${
                  animationPhase >= 2 
                    ? 'opacity-100 transform-none filter-none' 
                    : 'opacity-0 translate-y-12 scale-90 blur-sm'
                }`}
                style={{ 
                  transitionDelay: '0ms',
                  fontSize: 'clamp(4rem, 12vw, 10rem)'
                }}
              >
                <span className="text-studio-gold">Sojan</span>
              </span>
            </div>
            
            {/* Last name with enhanced styling */}
            <div>
              <span 
                className={`inline-block transition-all duration-1400 ease-out font-extralight ${
                  animationPhase >= 3 
                    ? 'opacity-100 transform-none filter-none' 
                    : 'opacity-0 translate-y-16 scale-85 blur-md'
                }`}
                style={{ 
                  transitionDelay: '200ms',
                  fontSize: 'clamp(5rem, 14vw, 12rem)',
                  letterSpacing: '0.05em'
                }}
              >
                <span className="text-studio-bone bg-gradient-to-r from-studio-bone via-studio-gold/20 to-studio-bone bg-clip-text">
                  Augustine
                </span>
              </span>
            </div>
          </h1>
        </div>
        
        {/* Enhanced subtitle with sophisticated animation */}
        <div 
          className={`mb-24 transition-all duration-1000 ease-out ${
            animationPhase >= 4 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-3xl md:text-4xl lg:text-5xl text-studio-bone/80 font-light tracking-widest uppercase">
            <span className="inline-block animate-float" style={{ animationDelay: '0s' }}>Visual</span>
            <span className="mx-4 text-studio-gold/60">•</span>
            <span className="inline-block animate-float" style={{ animationDelay: '0.5s' }}>Artist</span>
            <span className="mx-4 text-studio-gold/60">•</span>
            <span className="inline-block animate-float" style={{ animationDelay: '1s' }}>Post-Production</span>
          </p>
        </div>
        
        {/* Enhanced CTA with glow effect */}
        <div 
          className={`transition-all duration-800 ease-out ${
            animationPhase >= 5 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-6 scale-90'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <button 
            onClick={scrollToAbout}
            className="group relative text-studio-gold hover:text-studio-bone transition-all duration-500 text-xl tracking-[0.3em] uppercase font-light overflow-hidden"
          >
            <span className="relative z-10 inline-block transition-transform duration-300 group-hover:scale-110">
              Enter
            </span>
            <div className="absolute inset-0 bg-studio-gold/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <div className="absolute -inset-2 bg-studio-gold/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 blur-sm"></div>
          </button>
        </div>
      </div>
      
      {/* Enhanced ambient lighting with pulsing effect */}
      <div 
        className={`absolute inset-0 transition-all duration-3000 ${
          animationPhase >= 1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-radial from-studio-gold/8 via-transparent to-transparent animate-pulse-glow"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-studio-gold/3 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-studio-gold/2 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
