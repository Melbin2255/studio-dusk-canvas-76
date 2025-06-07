
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import TiltElement from '../effects/TiltElement';

const AboutSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 bg-studio-charcoal">
      <div className="container-studio">
        {/* Section Title */}
        <div className="mb-12" ref={titleRef}>
          <h2 className={`text-4xl lg:text-5xl font-bold text-studio-gold transition-opacity duration-1000 ${titleVisible ? 'opacity-100' : 'opacity-0'}`}>
            About Me
          </h2>
          <div className="w-32 h-1 bg-studio-gold mt-2"></div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={contentRef}>
          {/* Text Content */}
          <div className={`transition-opacity duration-1000 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-studio-bone/90 mb-6">
              Driven by a lifelong passion for visual storytelling, I'm Sojan Augustine, a visual artist specializing in post-production. My journey has led me through the intricate worlds of VFX, motion graphics, and video editing, allowing me to contribute to diverse projects, from commercials to film.
            </p>
            <p className="text-studio-bone/90 mb-6">
              I believe in the power of visuals to evoke emotion and spark conversation. My work is rooted in a deep understanding of color theory, composition, and pacing, ensuring every project is not only visually stunning but also effectively communicates its intended message.
            </p>
            <p className="text-studio-bone/90">
              With a keen eye for detail and a commitment to innovation, I'm always exploring new techniques and technologies to push the boundaries of what's possible in visual media. Let's collaborate and bring your vision to life.
            </p>
          </div>

          {/* Image with Tilt Effect */}
          <div className={`transition-opacity duration-1000 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
            <TiltElement>
              <img
                src="/images/studio-dusk-profile.webp"
                alt="Sojan Augustine - Visual Artist"
                className="rounded-xl shadow-lg hover:shadow-studio-gold/50 transition-shadow duration-300"
              />
            </TiltElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
