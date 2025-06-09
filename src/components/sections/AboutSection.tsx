import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import TiltElement from '../effects/TiltElement';
import { Quote, Award, Target, Zap } from 'lucide-react';

const AboutSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  const highlights = [
    { icon: Award, text: "Visual Development", color: "text-blue-400" },
    { icon: Target, text: "Motion Design", color: "text-green-400" },
    { icon: Zap, text: "Creative Direction", color: "text-purple-400" }
  ];

  return (
    <section id="about" className="py-24 bg-studio-charcoal relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-studio-gold/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-studio-gold/30 to-transparent"></div>
      </div>
      
      <div className="container-studio relative z-10">
        {/* Enhanced Section Title */}
        <div className="mb-16" ref={titleRef}>
          <div className={`text-center transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-studio-gold"></div>
              <span className="text-studio-gold/70 font-medium tracking-wider uppercase text-sm">About Me</span>
              <div className="w-12 h-px bg-studio-gold"></div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-studio-gold relative inline-block">
              Creative Vision & Expertise
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-studio-gold rounded-full"></div>
            </h2>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" ref={contentRef}>
          {/* Text Content with modern cards */}
          <div className={`transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Quote block */}
            <div className="bg-studio-taupe/30 backdrop-blur-sm rounded-2xl p-8 border border-studio-gold/20 mb-8 relative">
              <Quote className="absolute top-4 left-4 text-studio-gold/40" size={24} />
              <p className="text-studio-bone/90 text-lg italic leading-relaxed pl-8">
                "Creating immersive digital experiences through modern design and technology."
              </p>
            </div>
            
            {/* Main content */}
            <div className="space-y-6">
              <p className="text-studio-bone/90 leading-relaxed">
                I'm Sojan Augustine, a BCA graduate and digital creative professional. My expertise spans across visual effects, motion design, and digital content creation.
              </p>
              <p className="text-studio-bone/90 leading-relaxed">
                With a modern approach to design and technology, I focus on creating engaging digital experiences that combine innovative techniques with practical solutions.
              </p>
            </div>

            {/* Modern highlight cards */}
            <div className="grid gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="group flex items-center gap-4 p-4 bg-studio-charcoal/50 rounded-xl border border-studio-gold/10 hover:border-studio-gold/30 transition-all duration-300 hover:transform hover:translate-x-2"
                >
                  <div className="w-10 h-10 bg-studio-taupe rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className={`${highlight.color} group-hover:text-studio-gold transition-colors duration-300`} size={20} />
                  </div>
                  <span className="text-studio-bone font-medium group-hover:text-studio-gold transition-colors duration-300">
                    {highlight.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Image with modern frame */}
          <div className={`transition-all duration-1000 delay-300 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              {/* Modern frame effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-studio-gold/20 to-transparent rounded-3xl blur-xl"></div>
              <div className="absolute -inset-2 bg-studio-taupe/30 rounded-2xl"></div>
              
              <TiltElement>
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/images/profile.jpg"
                    alt="Sojan Augustine - Visual Artist"
                    className="w-full rounded-xl shadow-lg hover:shadow-studio-gold/50 transition-all duration-500 hover:scale-105"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-charcoal/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-studio-gold/60"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-studio-gold/60"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-studio-gold/60"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-studio-gold/60"></div>
                </div>
              </TiltElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
