
import { useState, useEffect } from 'react';
import AnimatedLogo from '../AnimatedLogo';
import { ChevronDown, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimationPhase(1), 300),
      setTimeout(() => setAnimationPhase(2), 800),
      setTimeout(() => setAnimationPhase(3), 1400),
      setTimeout(() => setAnimationPhase(4), 2200),
      setTimeout(() => setAnimationPhase(5), 3000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Purple gradient accents in corners */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-gradient-soft rounded-br-full opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-gradient-soft rounded-tl-full opacity-40"></div>
      
      {/* Subtle geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-gradient-start/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-gradient-end/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-gradient-start/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-purple-gradient-end/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto w-full">
        {/* Logo Animation */}
        <div className={`mb-8 sm:mb-12 transition-all duration-1000 ease-out ${
          animationPhase >= 1
            ? 'opacity-100 transform-none'
            : 'opacity-0 scale-50'
        }`}>
          <div className="relative">
            <AnimatedLogo 
              width="120" 
              height="120" 
              className="text-purple-gradient-start mx-auto sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px]" 
            />
            <div className="absolute inset-0 bg-purple-gradient-start/20 blur-2xl sm:blur-3xl rounded-full scale-125 sm:scale-150 animate-pulse"></div>
          </div>
        </div>

        {/* Enhanced name reveal */}
        <div className="mb-12 sm:mb-16 relative">
          <div className="absolute -top-4 sm:-top-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 sm:gap-4">
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-purple-gradient-start/50"></div>
            <Sparkles className="text-purple-gradient-start/60" size={12} />
            <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-purple-gradient-start/50"></div>
          </div>
          
          <h1 className="leading-none tracking-tight font-montserrat">
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
                <span className="text-gradient-purple relative">
                  Sojan
                </span>
              </span>
            </div>
            
            <div>
              <span 
                className={`inline-block transition-all duration-1400 ease-out font-light ${
                  animationPhase >= 3 
                    ? 'opacity-100 transform-none filter-none' 
                    : 'opacity-0 translate-y-12 sm:translate-y-16 scale-85 blur-md'
                }`}
                style={{ 
                  transitionDelay: '200ms',
                  fontSize: 'clamp(3rem, 10vw, 12rem)',
                  letterSpacing: '0.02em'
                }}
              >
                <span className="text-black">
                  Augustine
                </span>
              </span>
            </div>
          </h1>
        </div>
        
        {/* Enhanced subtitle */}
        <div 
          className={`mb-16 sm:mb-24 transition-all duration-1000 ease-out ${
            animationPhase >= 4 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-6 sm:translate-y-8 scale-95'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="relative">
            <div className="block sm:hidden">
              <p className="text-lg font-lato font-light tracking-wide uppercase mb-2">
                <span className="inline-block">Visual</span>
              </p>
              <p className="text-lg font-lato font-light tracking-wide uppercase mb-2">
                <span className="inline-block">Artist</span>
              </p>
              <p className="text-lg font-lato font-light tracking-wide uppercase">
                <span className="inline-block">Post-Production</span>
              </p>
            </div>
            
            <p className="hidden sm:block text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-text-secondary font-lato font-light tracking-widest uppercase">
              <span className="inline-block">Visual</span>
              <span className="mx-2 lg:mx-4 text-purple-gradient-start scale-150">•</span>
              <span className="inline-block">Artist</span>
              <span className="mx-2 lg:mx-4 text-purple-gradient-start scale-150">•</span>
              <span className="inline-block">Post-Production</span>
            </p>
            
            <div className="mt-4 sm:mt-6 flex justify-center">
              <div className="w-24 sm:w-32 h-px bg-purple-gradient opacity-60"></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced CTA */}
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
              className="group relative bg-purple-gradient text-white hover:shadow-purple transition-all duration-500 text-base sm:text-lg lg:text-xl tracking-wider uppercase font-medium overflow-hidden px-8 sm:px-12 py-3 sm:py-4 rounded-full"
            >
              <span className="relative z-10 inline-block transition-transform duration-300 group-hover:scale-110 flex items-center gap-2 sm:gap-3">
                <span className="hidden sm:inline">Enter Portfolio</span>
                <span className="sm:hidden">Portfolio</span>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
              </span>
              <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
            </button>
            
            <div className="animate-bounce">
              <ChevronDown className="text-purple-gradient-start/60" size={20} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(142, 84, 233, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
