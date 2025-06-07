
import { useEffect, useRef, useState } from 'react';
import CircularProgress from '../ui/CircularProgress';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { label: '3D Animation', percentage: 95 },
    { label: 'VFX & Compositing', percentage: 90 },
    { label: 'Color Grading', percentage: 85 },
    { label: 'Motion Graphics', percentage: 88 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-studio-charcoal">
      <div className="container-studio">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait Column - slides in from left */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative group">
              <div className="w-full max-w-md mx-auto aspect-[4/5] rounded-2xl border-2 border-studio-gold overflow-hidden hover:border-studio-gold-hover transition-all duration-300 hover:glow-gold">
                <img 
                  src="/lovable-uploads/b28adcef-8be1-4b98-95db-a682474aadde.png"
                  alt="Sojan Augustine - Visual Artist Portrait"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Content Column - slides in from right */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-studio-bone">
              Visual Artist &<br />
              Post-Production<br />
              Specialist
            </h2>

            {/* Animated swoosh marks */}
            <div className="flex gap-3 mb-8">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-1 bg-studio-gold rounded-full transform origin-left transition-all duration-300 ${isVisible ? 'animate-swoosh' : 'scale-x-0'}`}
                  style={{ animationDelay: `${i * 0.1 + 0.5}s` }}
                ></div>
              ))}
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-studio-bone mb-12">
              <p>
                With a keen eye for detail and a passion for visual storytelling, I bring a unique blend of artistic vision and technical expertise to every project. My background in visual arts, combined with extensive experience in post-production, allows me to craft compelling narratives that resonate with audiences.
              </p>
              
              <p>
                I specialize in color grading, visual effects, and motion graphics, ensuring that each frame is polished to perfection. My goal is to elevate your creative vision, delivering exceptional results that exceed expectations.
              </p>
            </div>

            {/* Skills with circular progress indicators */}
            <div className="grid grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <CircularProgress
                  key={skill.label}
                  percentage={skill.percentage}
                  label={skill.label}
                  delay={index * 200}
                  size={100}
                />
              ))}
            </div>

            {/* Signature */}
            <div className="mt-8 text-3xl font-bold text-studio-gold">
              SA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
