
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container-modern">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - About Me Card */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="bg-black text-white rounded-3xl p-12 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-white/60 text-lg font-light mb-6 italic">About Me</h2>
                <div className="space-y-6">
                  <p className="text-xl leading-relaxed">
                    I'm Sojan Augustine, <span className="italic font-medium">a BCA graduate and digital creative professional</span> with expertise in visual effects, motion design, and content creation.
                  </p>
                </div>
              </div>
              
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Right Column - My Expertise */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-8">
              <div>
                <h2 className="text-black/60 text-lg font-light mb-4 italic">My Expertise</h2>
                <p className="text-lg text-black/80 leading-relaxed">
                  My expertise lies in transforming creative concepts into compelling visual realities by leveraging advanced design tools and industry-standard software, combining technical precision with innovative thinking.
                </p>
                
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-16 h-px bg-black/30"></div>
                  <button className="group flex items-center gap-2 text-black/70 hover:text-black transition-colors duration-300">
                    <span className="text-sm font-medium">See more</span>
                    <div className="w-8 h-8 rounded-full border border-black/20 flex items-center justify-center group-hover:border-black/40 transition-colors duration-300">
                      <ArrowRight size={14} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
