
import { useState, useRef, useEffect } from 'react';

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
    tools: ['Adobe After Effects', 'Blackmagic Fusion', 'Nuke']
  },
  {
    id: 'color-grading',
    title: 'Color Grading',
    description: 'I meticulously refine the mood and tone of visuals, ensuring consistent and impactful aesthetics that elevate the final product.',
    tools: ['DaVinci Resolve', 'Adobe Premiere Pro']
  },
  {
    id: 'video-photo-editing',
    title: 'Video & Photo Editing',
    description: 'I transform raw footage and images into polished, compelling visual content, focusing on pacing, composition, and overall narrative flow.',
    tools: ['Adobe Premiere Pro', 'Adobe Photoshop', 'Adobe Illustrator']
  },
  {
    id: '3d-animation',
    title: '3D Animation',
    description: 'I bring stories to life through captivating 3D animations, blending technical skill with artistic vision to create immersive experiences.',
    tools: ['Autodesk Maya', 'Cinema 4D', 'Blender']
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
        {/* Expertise Cards Grid */}
        <div className="space-y-16">
          {expertiseData.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Modern Skill Card Layout */}
              <div className="bg-gray-50 rounded-3xl p-12 lg:p-16">
                {/* Header Section */}
                <div className="bg-black text-white rounded-2xl p-8 mb-8">
                  <h2 className="text-4xl lg:text-5xl font-light">
                    <span className="font-normal">{item.title.split(' ')[0]}</span>{' '}
                    <span className="italic font-light">{item.title.split(' ').slice(1).join(' ')}</span>
                  </h2>
                </div>
                
                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left - Software Icons */}
                  <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                    {item.tools.map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        className="w-20 h-20 lg:w-24 lg:h-24 bg-white rounded-2xl p-4 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
                      >
                        <img
                          src={softwareIcons[tool as keyof typeof softwareIcons]}
                          alt={tool}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Right - Description */}
                  <div className="space-y-6">
                    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
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
