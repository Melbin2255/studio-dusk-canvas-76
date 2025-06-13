
import { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

// Software icons mapping
const softwareIcons = {
  'Adobe After Effects': '/icons/ae.png',
  'Blackmagic Fusion': '/icons/fusion.png',
  'Nuke': '/icons/nuke.png',
  'DaVinci Resolve': '/icons/resolve.png',
  'Adobe Premiere Pro': '/icons/premiere.png',
  'Adobe Photoshop': '/icons/photoshop.png',
  'Adobe Illustrator': '/icons/illustrator.png',
  'Autodesk Maya': '/icons/maya.png',
  'Cinema 4D': '/icons/c4d.png',
  'Blender': '/icons/blender.png'
};

const expertiseData = [
  {
    id: 'visual-effects',
    title: 'Visual Effects',
    description: 'I create stunning visual effects that seamlessly blend with live-action footage, enhancing storytelling and delivering impactful cinematic moments.',
    tools: ['Adobe After Effects', 'Blackmagic Fusion', 'Nuke'],
    image: '/images/vfx.png'
  },
  {
    id: 'color-grading',
    title: 'Color Grading',
    description: 'I meticulously refine the mood and tone of visuals, ensuring consistent and impactful aesthetics that elevate the final product.',
    tools: ['DaVinci Resolve', 'Adobe Premiere Pro'],
    image: '/images/colorg.png'
  },
  {
    id: 'video-photo-editing',
    title: 'Video & Photo Editing',
    description: 'I transform raw footage and images into polished, compelling visual content, focusing on pacing, composition, and overall narrative flow.',
    tools: ['Adobe Premiere Pro', 'Adobe Photoshop', 'Adobe Illustrator'],
    image: '/images/videoedit.png'
  },
  {
    id: '3d-animation',
    title: '3D Animation',
    description: 'I bring stories to life through captivating 3D animations, blending technical skill with artistic vision to create immersive experiences.',
    tools: ['Autodesk Maya', 'Cinema 4D', 'Blender'],
    image: '/images/3d.png'
  }
];

const ExpertiseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container-modern">
        {/* Expertise Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {expertiseData.map((item, index) => (
            <div
              key={item.id}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-black text-white rounded-3xl overflow-hidden h-full">
                {/* Header with title and arrow */}
                <div className="p-8 pb-6">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-white/60 text-lg font-light italic">{item.title}</h3>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors duration-300">
                      <ArrowRight size={14} className="text-white/60" />
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed mb-8">{item.description}</p>
                </div>

                {/* Tools section */}
                <div className="px-8 pb-6">
                  <div className="flex flex-wrap gap-3">
                    {item.tools.map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg border border-white/10 backdrop-blur-sm"
                      >
                        <div className="w-5 h-5 rounded bg-white/20 p-0.5">
                          <img
                            src={softwareIcons[tool as keyof typeof softwareIcons]}
                            alt={tool}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-white/80 text-sm font-medium">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
