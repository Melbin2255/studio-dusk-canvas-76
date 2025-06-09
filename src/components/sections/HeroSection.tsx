
import { useState, useEffect } from 'react';
import ParticleField from '../effects/ParticleField';
import AnimatedLogo from '../AnimatedLogo';
import { ChevronDown, Sparkles } from 'lucide-react';

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
      
      {/* Floating geometric elements - responsive positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 sm:w-2 sm:h-2 bg-studio-gold/40 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-studio-gold/60 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-studio-gold/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-studio-gold/50 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Main content container - enhanced responsive padding */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto w-full">
        {/* Logo Animation with enhanced glow - responsive sizing */}
        <div className={`mb-8 sm:mb-12 transition-all duration-1000 ease-out ${
          animationPhase >= 1
            ? 'opacity-100 transform-none'
            : 'opacity-0 scale-50'
        }`}>
          <div className="relative">
            <AnimatedLogo 
              width="120" 
              height="120" 
              className="text-studio-gold mx-auto filter drop-shadow-2xl sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px]" 
            />
            <div className="absolute inset-0 bg-studio-gold/20 blur-2xl sm:blur-3xl rounded-full scale-125 sm:scale-150 animate-pulse-glow"></div>
          </div>
        </div>

        {/* Enhanced name reveal with varied typography - fully responsive */}
        <div className="mb-12 sm:mb-16 relative">
          {/* Decorative elements around name - responsive sizing */}
          <div className="absolute -top-4 sm:-top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 sm:gap-4">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-studio-gold/50"></div>
            <Sparkles className="text-studio-gold/60" size={12} />
            <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-studio-gold/50"></div>
          </div>
          
          <h1 className="leading-none tracking-tight">
            {/* First name with different styling - responsive typography */}
            <div className="mb-2 sm:mb-4">
              <span 
                className={`inline-block transition-all duration-1200 ease-out font-light relative ${
                  animationPhase >= 2 
                    ? 'opacity-100 transform-none filter-none' 
                    : 'opacity-0 translate-y-8 sm:translate-y-12 scale-90 blur-sm'
                }`}
                style={{ 
                  transitionDelay: '0ms',
                  fontSize: 'clamp(2.5rem, 8vw, 10rem)'
                }}
              >
                <span className="text-studio-gold relative">
                  Sojan
                  <div className="absolute -inset-1 sm:-inset-2 bg-studio-gold/10 blur-lg sm:blur-xl rounded-full opacity-0 animate-pulse-glow"></div>
                </span>
              </span>
            </div>
            
            {/* Last name with enhanced styling - responsive typography */}
            <div>
              <span 
                className={`inline-block transition-all duration-1400 ease-out font-extralight ${
                  animationPhase >= 3 
                    ? 'opacity-100 transform-none filter-none' 
                    : 'opacity-0 translate-y-12 sm:translate-y-16 scale-85 blur-md'
                }`}
                style={{ 
                  transitionDelay: '200ms',
                  fontSize: 'clamp(3rem, 10vw, 12rem)',
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
        
        {/* Enhanced subtitle with sophisticated animation - responsive */}
        <div 
          className={`mb-16 sm:mb-24 transition-all duration-1000 ease-out ${
            animationPhase >= 4 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-6 sm:translate-y-8 scale-95'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="relative">
            {/* Mobile-optimized subtitle layout */}
            <div className="block sm:hidden">
              <p className="text-lg font-light tracking-widest uppercase mb-2">
                <span className="inline-block animate-float" style={{ animationDelay: '0s' }}>Visual</span>
              </p>
              <p className="text-lg font-light tracking-widest uppercase mb-2">
                <span className="inline-block animate-float" style={{ animationDelay: '0.5s' }}>Artist</span>
              </p>
              <p className="text-lg font-light tracking-widest uppercase">
                <span className="inline-block animate-float" style={{ animationDelay: '1s' }}>Post-Production</span>
              </p>
            </div>
            
            {/* Desktop subtitle layout */}
            <p className="hidden sm:block text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-studio-bone/80 font-light tracking-widest uppercase">
              <span className="inline-block animate-float" style={{ animationDelay: '0s' }}>Visual</span>
              <span className="mx-2 lg:mx-4 text-studio-gold/60 scale-150">•</span>
              <span className="inline-block animate-float" style={{ animationDelay: '0.5s' }}>Artist</span>
              <span className="mx-2 lg:mx-4 text-studio-gold/60 scale-150">•</span>
              <span className="inline-block animate-float" style={{ animationDelay: '1s' }}>Post-Production</span>
            </p>
            
            {/* Subtle underline animation - responsive width */}
            <div className="mt-4 sm:mt-6 flex justify-center">
              <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-studio-gold to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced CTA with modern design - responsive */}
        <div 
          className={`transition-all duration-800 ease-out ${
            animationPhase >= 5 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-4 sm:translate-y-6 scale-90'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <button 
              onClick={scrollToAbout}
              className="group relative text-studio-gold hover:text-studio-bone transition-all duration-500 text-base sm:text-lg lg:text-xl tracking-[0.2em] sm:tracking-[0.3em] uppercase font-light overflow-hidden border border-studio-gold/30 px-8 sm:px-12 py-3 sm:py-4 rounded-full backdrop-blur-sm"
            >
              <span className="relative z-10 inline-block transition-transform duration-300 group-hover:scale-110 flex items-center gap-2 sm:gap-3">
                <span className="hidden sm:inline">Enter Portfolio</span>
                <span className="sm:hidden">Portfolio</span>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-studio-gold rounded-full animate-pulse"></div>
              </span>
              <div className="absolute inset-0 bg-studio-gold/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
              <div className="absolute -inset-1 sm:-inset-2 bg-studio-gold/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 blur-sm"></div>
            </button>
            
            {/* Scroll indicator - responsive sizing */}
            <div className="animate-bounce">
              <ChevronDown className="text-studio-gold/60" size={20} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced ambient lighting with pulsing effect - responsive */}
      <div 
        className={`absolute inset-0 transition-all duration-3000 ${
          animationPhase >= 1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-radial from-studio-gold/8 via-transparent to-transparent animate-pulse-glow"></div>
        <div className="absolute top-1/3 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-studio-gold/3 rounded-full blur-2xl sm:blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-studio-gold/2 rounded-full blur-2xl sm:blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Subtle grid overlay - responsive sizing */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(212, 175, 55, 0.15) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
