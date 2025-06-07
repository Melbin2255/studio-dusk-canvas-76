
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import CircularProgress from '../ui/CircularProgress';

const AboutSection = () => {
  const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: portraitRef, isVisible: portraitVisible } = useScrollAnimation({ threshold: 0.5 });
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.4 });

  const skills = [
    { label: '3D Animation', percentage: 95 },
    { label: 'VFX & Compositing', percentage: 90 },
    { label: 'Color Grading', percentage: 85 },
    { label: 'Motion Graphics', percentage: 88 },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-studio-charcoal overflow-hidden">
      <div className="container-studio">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Enhanced Portrait Column */}
          <div ref={portraitRef} className={`transition-all duration-1500 ease-out transform ${portraitVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-20 scale-95'}`}>
            <div className="relative group">
              {/* Background glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-studio-gold/20 to-studio-gold/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl border-2 border-studio-gold overflow-hidden hover:border-studio-gold-hover transition-all duration-500 hover:glow-gold transform group-hover:scale-105">
                <img 
                  src="/lovable-uploads/b28adcef-8be1-4b98-95db-a682474aadde.png"
                  alt="Sojan Augustine - Visual Artist Portrait"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                
                {/* Overlay effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-studio-charcoal/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Column */}
          <div ref={contentRef} className={`transition-all duration-1500 delay-300 ease-out transform ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            {/* Animated title */}
            <h2 className={`text-4xl lg:text-5xl font-bold mb-8 text-studio-bone transition-all duration-1000 delay-500 ${contentVisible ? 'animate-text-reveal' : ''}`}>
              Visual Artist &<br />
              Post-Production<br />
              Specialist
            </h2>

            {/* Enhanced animated swoosh marks */}
            <div className="flex gap-3 mb-8">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-1 bg-gradient-to-r from-studio-gold to-studio-gold-hover rounded-full transform origin-left transition-all duration-500 ${contentVisible ? 'animate-swoosh-enhanced' : 'scale-x-0 opacity-0'}`}
                  style={{ animationDelay: `${i * 0.15 + 0.8}s` }}
                ></div>
              ))}
            </div>

            {/* Enhanced text content */}
            <div className={`space-y-6 text-lg leading-relaxed text-studio-bone mb-12 transition-all duration-1000 delay-1000 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <p className="transform transition-all duration-700 delay-1200 hover:translate-x-2">
                With a keen eye for detail and a passion for visual storytelling, I bring a unique blend of artistic vision and technical expertise to every project. My background in visual arts, combined with extensive experience in post-production, allows me to craft compelling narratives that resonate with audiences.
              </p>
              
              <p className="transform transition-all duration-700 delay-1400 hover:translate-x-2">
                I specialize in color grading, visual effects, and motion graphics, ensuring that each frame is polished to perfection. My goal is to elevate your creative vision, delivering exceptional results that exceed expectations.
              </p>
            </div>

            {/* Enhanced skills with staggered animation */}
            <div className={`grid grid-cols-2 gap-8 transition-all duration-1000 delay-1500 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {skills.map((skill, index) => (
                <div
                  key={skill.label}
                  className={`transition-all duration-700 transform ${contentVisible ? 'animate-float-in' : 'opacity-0 scale-75'}`}
                  style={{ animationDelay: `${index * 200 + 1600}ms` }}
                >
                  <CircularProgress
                    percentage={skill.percentage}
                    label={skill.label}
                    delay={index * 200 + 1600}
                    size={100}
                  />
                </div>
              ))}
            </div>

            {/* Enhanced signature */}
            <div className={`mt-8 text-3xl font-bold text-studio-gold transition-all duration-1000 delay-2000 transform ${contentVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-12'}`}>
              SA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
