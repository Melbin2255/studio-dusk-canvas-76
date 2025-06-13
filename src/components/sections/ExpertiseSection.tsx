
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
    description: 'Creating stunning visual effects that seamlessly blend with live-action footage, enhancing storytelling and delivering impactful cinematic moments.',
    tools: ['Adobe After Effects', 'Blackmagic Fusion', 'Nuke'],
    image: '/images/vfx.png'
  },
  {
    id: 'color-grading',
    title: 'Color Grading',
    description: 'Meticulously refining the mood and tone of visuals, ensuring consistent and impactful aesthetics that elevate the final product.',
    tools: ['DaVinci Resolve', 'Adobe Premiere Pro'],
    image: '/images/colorg.png'
  },
  {
    id: 'video-photo-editing',
    title: 'Video & Photo Editing',
    description: 'Transforming raw footage and images into polished, compelling visual content, focusing on pacing, composition, and overall narrative flow.',
    tools: ['Adobe Premiere Pro', 'Adobe Photoshop', 'Adobe Illustrator'],
    image: '/images/videoedit.png'
  },
  {
    id: '3d-animation',
    title: '3D Animation',
    description: 'Bringing stories to life through captivating 3D animations, blending technical skill with artistic vision to create immersive experiences.',
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
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      <div className="container-modern">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl lg:text-4xl font-light text-black mb-4 italic">My Expertise</h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Specialized skills in visual storytelling and digital content creation
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {expertiseData.map((item, index) => (
            <div
              key={item.id}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-medium text-black">{item.title}</h3>
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-400 transition-colors duration-300">
                      <ArrowRight size={14} className="text-gray-600" />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {item.description}
                  </p>

                  {/* Tools */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map((tool, toolIndex) => (
                        <div
                          key={toolIndex}
                          className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-100"
                        >
                          <div className="w-4 h-4 rounded bg-white p-0.5 shadow-sm">
                            <img
                              src={softwareIcons[tool as keyof typeof softwareIcons]}
                              alt={tool}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-gray-700 text-xs font-medium">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
