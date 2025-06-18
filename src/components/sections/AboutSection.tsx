import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';
import GradientBlobs from '../effects/GradientBlobs';

const AboutSection = () => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section ref={sectionRef} id="about" className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-[#f8f5ff] via-[#f3e6ff] to-[#ede0ff]">
      <GradientBlobs intensity="light" />
      
      <div className="container-modern">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* About Me Card */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gray-800 text-white rounded-3xl p-12 lg:p-16 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-white/70 text-2xl lg:text-3xl font-light mb-8 italic">About Me</h2>
                <div className="space-y-6">
                  <p className="text-white text-xl lg:text-2xl leading-relaxed">
                    <span className="italic font-light">I'm</span> Sojan Augustine, <span className="italic font-medium">a BCA graduate and digital creative professional</span> with <span className="italic font-medium">expertise in</span> visual effects, motion design, and content creation.
                  </p>
                </div>
              </div>
              
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* My Expertise Section */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-8">
              <div>
                <h2 className="text-black text-2xl lg:text-3xl font-light mb-6 italic">My Expertise</h2>
                <p className="text-black/80 text-lg lg:text-xl leading-relaxed max-w-4xl">
                  My expertise lies in transforming creative concepts into compelling visual realities by leveraging advanced design tools and industry-standard software, combining technical precision with innovative thinking.
                </p>
                
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-24 h-px bg-black/30"></div>
                  <button className="group flex items-center gap-3 bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-all duration-300">
                    <span className="text-sm font-medium">See more</span>
                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/50 transition-colors duration-300">
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
