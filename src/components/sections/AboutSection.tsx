
import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import TiltElement from '../effects/TiltElement';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useScrollAnimation(sectionRef, { threshold: 0.2 });
  useScrollAnimation(contentRef, { threshold: 0.3, delay: 200 });

  return (
    <section id="about" className="py-24 bg-studio-charcoal relative overflow-hidden">
      <div className="container-studio">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div 
            ref={sectionRef}
            className="space-y-8 opacity-0 translate-y-8 transition-all duration-800"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-studio-bone mb-6">
                About <span className="text-studio-gold">Sojan</span>
              </h2>
              <div className="w-16 h-1 bg-studio-gold mb-8"></div>
            </div>
            
            <div className="space-y-6 text-studio-bone/80 text-lg leading-relaxed">
              <p>
                With over a decade of experience in visual storytelling, I specialize in 
                creating compelling narratives through post-production excellence and 
                innovative visual effects.
              </p>
              <p>
                My journey began with a passion for cinema and evolved into mastery of 
                cutting-edge technology, allowing me to bring creative visions to life 
                with precision and artistry.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h3 className="text-2xl font-bold text-studio-gold mb-2">10+</h3>
                <p className="text-studio-bone/60">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-studio-gold mb-2">200+</h3>
                <p className="text-studio-bone/60">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div 
            ref={contentRef}
            className="opacity-0 translate-y-8 transition-all duration-800"
          >
            <TiltElement>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-studio-gold/20 to-studio-hero-to rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-studio-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-3xl font-bold text-studio-charcoal">SA</span>
                    </div>
                    <h3 className="text-xl font-medium text-studio-bone mb-2">Sojan Augustine</h3>
                    <p className="text-studio-bone/60">Visual Artist</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-studio-gold rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-studio-gold rounded-full opacity-40"></div>
              </div>
            </TiltElement>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-64 h-64 bg-studio-gold/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default AboutSection;
