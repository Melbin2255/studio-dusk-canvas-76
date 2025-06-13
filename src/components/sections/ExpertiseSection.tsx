
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Software icons mapping for the expertise cards
const softwareIcons = {
  'ae': '/icons/ae.png',
  'resolve': '/icons/resolve.png',
  'premiere': '/icons/premiere.png',
  'photoshop': '/icons/photoshop.png',
  'illustrator': '/icons/illustrator.png',
  'maya': '/icons/maya.png',
  'c4d': '/icons/c4d.png',
  'blender': '/icons/blender.png'
};

const expertiseData = [
  {
    title: 'Visual Effects',
    description: 'I create stunning visual effects that seamlessly blend with live-action footage, enhancing storytelling and delivering impactful cinematic moments.',
    icons: ['ae', 'resolve'],
    bgColor: 'bg-gray-900'
  },
  {
    title: 'Color Grading',
    description: 'I meticulously refine the mood and tone of visuals, ensuring consistent and impactful aesthetics that elevate the final product.',
    icons: ['resolve', 'premiere'],
    bgColor: 'bg-gray-800'
  },
  {
    title: 'Video & Photo Editing',
    description: 'I transform raw footage and images into polished, compelling visual content, focusing on pacing, composition, and overall narrative flow.',
    icons: ['photoshop', 'premiere', 'illustrator'],
    bgColor: 'bg-gray-900'
  },
  {
    title: '3D Animation',
    description: 'I bring stories to life through captivating 3D animations, blending technical skill with artistic vision to create immersive experiences.',
    icons: ['maya', 'blender'],
    bgColor: 'bg-gray-800'
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="expertise" 
      ref={sectionRef} 
      className="py-20 bg-gray-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            My Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized skills in transforming creative concepts into compelling visual realities
          </p>
        </motion.div>

        {/* Expertise Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {expertiseData.map((item, index) => (
            <motion.div
              key={item.title}
              className={`${item.bgColor} text-white rounded-2xl p-8 relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold mb-4 flex items-center">
                  {item.title}
                  <svg 
                    className="ml-auto w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Software Icons */}
                <div className="flex items-center space-x-3">
                  {item.icons.map((icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="w-10 h-10 bg-white/10 rounded-lg p-2 flex items-center justify-center backdrop-blur-sm"
                    >
                      <img
                        src={softwareIcons[icon as keyof typeof softwareIcons]}
                        alt={icon}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
