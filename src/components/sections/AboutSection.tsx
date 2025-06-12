
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import TiltElement from '../effects/TiltElement';
import { Quote, Award, Target, Zap } from 'lucide-react';

const AboutSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  const highlights = [
    { icon: Award, text: "Visual Development", color: "text-purple-gradient-start" },
    { icon: Target, text: "Motion Design", color: "text-purple-gradient-end" },
    { icon: Zap, text: "Creative Direction", color: "text-purple-gradient-start" }
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden corner-accent-tl corner-accent-br">
      {/* Subtle purple gradient accents */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-gradient-soft rounded-br-full opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-gradient-soft rounded-tl-full opacity-20"></div>
      
      <div className="container-modern relative z-10">
        {/* Enhanced Section Title */}
        <div className="mb-16" ref={titleRef}>
          <div className={`text-center transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-purple-gradient"></div>
              <span className="text-text-muted font-lato font-medium tracking-wider uppercase text-sm">About Me</span>
              <div className="w-12 h-px bg-purple-gradient"></div>
            </div>
            
            <h2 className="font-montserrat text-gradient-purple relative inline-block">
              Creative Vision & Expertise
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-purple-gradient rounded-full"></div>
            </h2>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" ref={contentRef}>
          {/* Text Content */}
          <div className={`transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Quote block */}
            <div className="card-modern mb-8 relative bg-purple-gradient-soft border-purple-gradient-start/20">
              <Quote className="absolute top-4 left-4 text-purple-gradient-start/60" size={24} />
              <p className="text-black text-lg italic leading-relaxed pl-8 font-lato">
                "Creating immersive digital experiences through modern design and technology."
              </p>
            </div>
            
            {/* Main content */}
            <div className="space-y-6">
              <p className="text-text-secondary leading-relaxed font-lato">
                I'm Sojan Augustine, a BCA graduate and digital creative professional. My expertise spans across visual effects, motion design, and digital content creation.
              </p>
              <p className="text-text-secondary leading-relaxed font-lato">
                With a modern approach to design and technology, I focus on creating engaging digital experiences that combine innovative techniques with practical solutions.
              </p>
            </div>

            {/* Modern highlight cards */}
            <div className="grid gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-border-light hover:border-purple-gradient-start/30 shadow-soft hover:shadow-purple transition-all duration-300 hover:transform hover:translate-x-2"
                >
                  <div className="w-10 h-10 bg-purple-gradient-soft rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className={`${highlight.color} group-hover:text-purple-gradient-end transition-colors duration-300`} size={20} />
                  </div>
                  <span className="text-black font-medium font-lato group-hover:text-purple-gradient-start transition-colors duration-300">
                    {highlight.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Image */}
          <div className={`transition-all duration-1000 delay-300 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-gradient-soft rounded-3xl blur-xl"></div>
              <div className="absolute -inset-2 bg-white/80 rounded-2xl border border-border-light"></div>
              
              <TiltElement>
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/images/profile.jpg"
                    alt="Sojan Augustine - Visual Artist"
                    className="w-full rounded-xl shadow-medium hover:shadow-purple transition-all duration-500 hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-purple-gradient/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-purple-gradient-start/60"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-purple-gradient-start/60"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-purple-gradient-start/60"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-purple-gradient-start/60"></div>
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
