
import { useState, useRef, useEffect } from 'react';
import { Check, ArrowRight, Sparkles, Eye, Palette, Film, Edit, Camera, Cube, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom SVG Icons for expertise
const CustomIcons = {
  VFX: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#48D1CC"/>
      <circle cx="17" cy="6" r="2" fill="#FF69B4" opacity="0.7"/>
      <circle cx="7" cy="18" r="1.5" fill="#9370DB" opacity="0.8"/>
    </svg>
  ),
  ColorGrading: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="#48D1CC" strokeWidth="2"/>
      <rect x="5" y="8" width="4" height="8" fill="#FF69B4" opacity="0.6"/>
      <rect x="10" y="8" width="4" height="8" fill="#9370DB" opacity="0.7"/>
      <rect x="15" y="8" width="4" height="8" fill="#6A5ACD" opacity="0.8"/>
    </svg>
  ),
  Editing: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25Z" fill="#48D1CC"/>
      <path d="M20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z" fill="#FF69B4"/>
    </svg>
  ),
  Animation3D: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" fill="none" stroke="#48D1CC" strokeWidth="2"/>
      <path d="M12 2V22" stroke="#FF69B4" strokeWidth="1.5"/>
      <path d="M2 8.5L22 15.5" stroke="#9370DB" strokeWidth="1.5" opacity="0.7"/>
      <path d="M22 8.5L2 15.5" stroke="#6A5ACD" strokeWidth="1.5" opacity="0.7"/>
    </svg>
  )
};

// Software icons with pixel art style
const softwareTools = {
  'VFX': [
    { name: 'After Effects', icon: '🎬', color: 'bg-purple-500' },
    { name: 'Nuke', icon: '💥', color: 'bg-orange-500' },
    { name: 'Fusion', icon: '🔥', color: 'bg-red-500' }
  ],
  'Color Grading': [
    { name: 'DaVinci Resolve', icon: '🎨', color: 'bg-yellow-500' },
    { name: 'Premiere Pro', icon: '🎞️', color: 'bg-purple-600' }
  ],
  'Editing': [
    { name: 'Premiere Pro', icon: '✂️', color: 'bg-blue-500' },
    { name: 'Photoshop', icon: '🖼️', color: 'bg-cyan-500' },
    { name: 'Illustrator', icon: '🎯', color: 'bg-orange-600' }
  ],
  '3D Animation': [
    { name: 'Maya', icon: '🏗️', color: 'bg-green-500' },
    { name: 'Cinema 4D', icon: '🎪', color: 'bg-blue-600' },
    { name: 'Blender', icon: '🌪️', color: 'bg-orange-500' }
  ]
};

const expertiseData = {
  'VFX': {
    title: 'Visual Effects',
    description: 'I create stunning visual effects that seamlessly blend with live-action footage, enhancing storytelling and delivering impactful cinematic moments that captivate audiences.',
    competencies: ['Compositing & Keying', 'Motion Tracking', 'Particle Systems', 'Digital Environments'],
    proficiency: 95,
    image: '/images/vfx.png',
    gradient: 'from-green-400 to-cyan-500'
  },
  'Color Grading': {
    title: 'Color Grading',
    description: 'I meticulously refine the mood and tone of visuals, ensuring consistent and impactful aesthetics that elevate the final product to professional standards.',
    competencies: ['Color Correction', 'Look Development', 'Shot Matching', 'Cinematic Styling'],
    proficiency: 92,
    image: '/images/colorg.png',
    gradient: 'from-orange-400 to-pink-500'
  },
  'Editing': {
    title: 'Video & Photo Editing',
    description: 'I transform raw footage and images into polished, compelling visual content, focusing on pacing, composition, and overall narrative flow.',
    competencies: ['Storytelling & Pacing', 'Sound Design', 'Graphic Integration', 'Advanced Retouching'],
    proficiency: 88,
    image: '/images/videoedit.png',
    gradient: 'from-pink-400 to-violet-500'
  },
  '3D Animation': {
    title: '3D Animation & Modeling',
    description: 'I bring stories to life through captivating 3D animations, blending technical skill with artistic vision to create immersive digital experiences.',
    competencies: ['Character Animation', 'Motion Graphics', 'Procedural Modeling', 'Lighting & Rendering'],
    proficiency: 90,
    image: '/images/3d.png',
    gradient: 'from-blue-400 to-purple-500'
  }
};

const ExpertiseSection = () => {
  const [activeTab, setActiveTab] = useState('VFX');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
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

  const tabs = Object.keys(expertiseData);
  const activeData = expertiseData[activeTab as keyof typeof expertiseData];

  return (
    <section 
      ref={sectionRef} 
      className="py-32 relative overflow-hidden"
      style={{ background: 'radial-gradient(circle, #E6E6FA 0%, #FFFFFF 100%)' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tech-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tech-hot-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tech-purple/5 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div 
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="text-tech-cyan animate-sparkle" size={24} />
            <span className="text-tech-purple/70 font-helvetica font-normal tracking-wider uppercase text-sm">My Expertise</span>
            <Sparkles className="text-tech-hot-pink animate-sparkle" size={24} />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-helvetica font-light text-tech-indigo mb-6 relative">
            Technical Excellence
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-tech-cyan to-tech-hot-pink rounded-full"></div>
          </h2>
          
          <p className="text-xl text-tech-purple/70 max-w-3xl mx-auto leading-relaxed font-helvetica">
            Transforming creative concepts into compelling visual realities through specialized skills and cutting-edge techniques across various digital mediums.
          </p>
        </motion.div>

        {/* Interactive Tab Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {tabs.map((tab, index) => {
            const IconComponent = CustomIcons[tab as keyof typeof CustomIcons];
            return (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                onMouseEnter={() => setHoveredCard(tab)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`floating-card group relative p-6 transition-all duration-500 overflow-hidden ${
                  activeTab === tab
                    ? 'bg-gradient-to-br from-tech-cyan/20 to-tech-hot-pink/20 border-2 border-tech-cyan shadow-tech-glow'
                    : 'bg-white/80 backdrop-blur-sm border border-tech-purple/20 hover:border-tech-cyan/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    activeTab === tab ? 'bg-white/20' : 'bg-tech-lavender/50 group-hover:bg-tech-cyan/20'
                  }`}>
                    <IconComponent />
                  </div>
                  <div>
                    <h3 className={`font-helvetica font-normal text-lg mb-2 ${
                      activeTab === tab ? 'text-tech-indigo' : 'text-tech-purple group-hover:text-tech-indigo'
                    }`}>{tab}</h3>
                    <span className={`text-sm ${
                      activeTab === tab ? 'text-tech-cyan' : 'text-tech-purple/60'
                    }`}>
                      {activeTab === tab ? 'Currently viewing' : 'Click to explore'}
                    </span>
                  </div>
                </div>
                
                {hoveredCard === tab && activeTab !== tab && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-tech-cyan/10 to-tech-hot-pink/10 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Content Panel */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Visual Column */}
          <div className="relative group">
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-br ${activeData.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-500`}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-white border-2 border-tech-cyan/20 group-hover:border-tech-cyan/40 transition-all duration-500">
              <img 
                src={activeData.image}
                alt={activeData.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tech-indigo/30 to-transparent"></div>
              
              {/* Floating proficiency indicator */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 border border-tech-cyan/30">
                <div className="relative w-12 h-12">
                  <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                      fill="none"
                      stroke="#E6E6FA"
                      strokeWidth="2"
                    />
                    <path
                      d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                      fill="none"
                      stroke="#48D1CC"
                      strokeWidth="2"
                      strokeDasharray={`${activeData.proficiency}, 100`}
                      className="progress-bar-glow"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-helvetica font-medium text-tech-indigo">{activeData.proficiency}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl lg:text-5xl font-helvetica font-light text-tech-indigo mb-4">
                {activeData.title}
              </h3>
              
              <p className="text-lg text-tech-purple/80 leading-relaxed font-helvetica">
                {activeData.description}
              </p>
            </div>

            {/* Key Competencies */}
            <div className="floating-card bg-white/60 backdrop-blur-sm border border-tech-cyan/20 p-6">
              <h4 className="text-xl font-helvetica font-medium text-tech-indigo mb-6 flex items-center gap-2">
                <Check className="text-tech-cyan" size={20} />
                Core Competencies
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeData.competencies.map((competency, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-4 p-4 bg-white/40 rounded-xl border border-tech-cyan/10 hover:border-tech-cyan/30 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-tech-hot-pink rounded-full animate-pulse"></div>
                    <span className="text-tech-indigo font-helvetica font-normal">{competency}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Primary Tools */}
            <div>
              <h4 className="text-xl font-helvetica font-medium text-tech-indigo mb-6">
                Professional Tools
              </h4>
              <div className="flex flex-wrap gap-3">
                {softwareTools[activeTab as keyof typeof softwareTools]?.map((tool, index) => (
                  <motion.div
                    key={index}
                    className="pixel-badge group"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <span className="mr-2">{tool.icon}</span>
                    <span className="font-helvetica text-xs">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
