
import { useState, useRef, useEffect } from 'react';
import { Check } from 'lucide-react';

const expertiseData = {
  '3D Animation': {
    title: '3D Animation',
    description: 'I bring stories to life through captivating 3D animations, blending technical skill with artistic vision to create immersive experiences.',
    competencies: ['Character Animation', 'Motion Graphics', 'Visual Effects Integration'],
    tools: ['Autodesk Maya', 'Cinema 4D', 'Blender'],
    image: '/lovable-uploads/f2b6ac95-7c83-4e47-ab34-ca67977c2a27.png'
  },
  'VFX': {
    title: 'Visual Effects',
    description: 'Creating stunning visual effects that seamlessly integrate with live-action footage, enhancing storytelling through digital artistry.',
    competencies: ['Compositing', 'Particle Systems', 'Environment Creation'],
    tools: ['After Effects', 'Nuke', 'Houdini'],
    image: '/placeholder.svg'
  },
  'Color Grading': {
    title: 'Color Grading',
    description: 'Establishing mood and atmosphere through precise color correction and grading, bringing cinematic quality to every frame.',
    competencies: ['Color Correction', 'Look Development', 'HDR Workflow'],
    tools: ['DaVinci Resolve', 'Baselight', 'Color Finale'],
    image: '/placeholder.svg'
  },
  'Editing': {
    title: 'Post-Production Editing',
    description: 'Crafting compelling narratives through expert editing, pacing, and seamless integration of all post-production elements.',
    competencies: ['Narrative Editing', 'Sound Design Integration', 'Workflow Optimization'],
    tools: ['Avid Media Composer', 'Premiere Pro', 'Final Cut Pro'],
    image: '/placeholder.svg'
  }
};

const ExpertiseSection = () => {
  const [activeTab, setActiveTab] = useState('3D Animation');
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

  const tabs = Object.keys(expertiseData);
  const activeData = expertiseData[activeTab as keyof typeof expertiseData];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-studio-charcoal">
      <div className="container-studio">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-studio-gold mb-4">
            My Expertise
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 relative ${
                activeTab === tab
                  ? 'text-studio-gold bg-studio-taupe'
                  : 'text-studio-bone hover:text-studio-gold hover:bg-studio-taupe'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-studio-gold"></div>
              )}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Visual Column */}
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden bg-studio-taupe border border-studio-gold/20">
              <img 
                src={activeData.image}
                alt={activeData.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-studio-bone">
              {activeData.title}
            </h3>
            
            <p className="text-lg text-studio-bone leading-relaxed">
              {activeData.description}
            </p>

            {/* Key Competencies */}
            <div>
              <h4 className="text-xl font-semibold text-studio-gold mb-4">
                Key Competencies
              </h4>
              <div className="space-y-3">
                {activeData.competencies.map((competency, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded border-2 border-studio-gold flex items-center justify-center">
                      <Check size={12} className="text-studio-gold" />
                    </div>
                    <span className="text-studio-bone">{competency}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary Tools */}
            <div>
              <h4 className="text-xl font-semibold text-studio-gold mb-4">
                Primary Tools
              </h4>
              <div className="flex flex-wrap gap-3">
                {activeData.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-studio-taupe text-studio-bone rounded-full text-sm font-medium hover:bg-studio-gold hover:text-studio-charcoal transition-all duration-300 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
