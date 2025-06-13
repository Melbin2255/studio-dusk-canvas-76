
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-white to-purple-light/30 relative overflow-hidden">
      {/* Background gradient decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-gradient opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-gradient opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container-modern relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 bg-purple-gradient-soft border border-purple-gradient-start/20 text-purple-gradient-start px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-purple/20">
            <div className="w-2 h-2 rounded-full bg-purple-gradient"></div>
            Specialized Skills
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-black mb-4 italic">My <span className="text-gradient-purple font-medium">Expertise</span></h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Specialized skills in visual storytelling and digital content creation
          </p>
          <div className="w-24 h-1 bg-purple-gradient rounded-full mx-auto mt-6"></div>
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
              <div className="bg-white rounded-2xl border border-purple-gradient-start/10 overflow-hidden hover:shadow-purple/20 hover:shadow-2xl hover:border-purple-gradient-start/30 transition-all duration-500 h-full relative group">
                {/* Purple gradient overlay on hover */}
                <div className="absolute inset-0 bg-purple-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-10"></div>
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-gradient-start/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Purple accent corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-purple-gradient rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0"></div>
                </div>

                {/* Content */}
                <div className="p-8 relative z-20">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-medium text-black group-hover:text-gradient-purple transition-all duration-300">{item.title}</h3>
                    <div className="w-8 h-8 rounded-full border-2 border-purple-gradient-start/20 flex items-center justify-center group-hover:border-purple-gradient-start group-hover:bg-purple-gradient-soft transition-all duration-300">
                      <ArrowRight size={14} className="text-purple-gradient-start group-hover:translate-x-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Tools */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-medium text-purple-gradient-start uppercase tracking-wider">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map((tool, toolIndex) => (
                        <div
                          key={toolIndex}
                          className="flex items-center gap-2 px-3 py-1.5 bg-purple-gradient-soft rounded-lg border border-purple-gradient-start/20 hover:border-purple-gradient-start/40 hover:bg-purple-gradient-soft/80 transition-all duration-300"
                        >
                          <div className="w-4 h-4 rounded bg-white p-0.5 shadow-sm border border-purple-gradient-start/10">
                            <img
                              src={softwareIcons[tool as keyof typeof softwareIcons]}
                              alt={tool}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <span className="text-purple-gradient-start text-xs font-medium">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-purple-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-px bg-purple-gradient"></div>
            <div className="w-3 h-3 rounded-full bg-purple-gradient"></div>
            <div className="w-12 h-px bg-purple-gradient"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
