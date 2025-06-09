
import { useState, useRef, useEffect } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const expertiseData = {
  '3D Animation': {
    title: '3D Animation',
    description: 'I bring stories to life through captivating 3D animations, blending technical skill with artistic vision to create immersive experiences.',
    competencies: ['Character Animation', 'Motion Graphics', 'Visual Effects Integration'],
    tools: ['Autodesk Maya', 'Cinema 4D', 'Blender'],
    image: '/lovable-uploads/f2b6ac95-7c83-4e47-ab34-ca67977c2a27.png',
    color: 'from-blue-500/20 to-purple-500/20'
  },
  'VFX': {
    title: 'Visual Effects',
    description: 'Creating stunning visual effects that seamlessly integrate with live-action footage, enhancing storytelling through digital artistry.',
    competencies: ['Compositing', 'Particle Systems', 'Environment Creation'],
    tools: ['After Effects', 'Nuke', 'Houdini'],
    image: '/placeholder.svg',
    color: 'from-green-500/20 to-teal-500/20'
  },
  'Color Grading': {
    title: 'Color Grading',
    description: 'Establishing mood and atmosphere through precise color correction and grading, bringing cinematic quality to every frame.',
    competencies: ['Color Correction', 'Look Development', 'HDR Workflow'],
    tools: ['DaVinci Resolve', 'Baselight', 'Color Finale'],
    image: '/placeholder.svg',
    color: 'from-orange-500/20 to-red-500/20'
  },
  'Editing': {
    title: 'Post-Production Editing',
    description: 'Crafting compelling narratives through expert editing, pacing, and seamless integration of all post-production elements.',
    competencies: ['Narrative Editing', 'Sound Design Integration', 'Workflow Optimization'],
    tools: ['Avid Media Composer', 'Premiere Pro', 'Final Cut Pro'],
    image: '/placeholder.svg',
    color: 'from-pink-500/20 to-violet-500/20'
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
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-studio-charcoal via-studio-taupe/10 to-studio-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-studio-gold/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-studio-gold/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-studio relative z-10">
        {/* Enhanced Section Title */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="text-studio-gold" size={24} />
            <span className="text-studio-bone/70 font-medium tracking-wider uppercase text-sm">What I Do Best</span>
            <Sparkles className="text-studio-gold" size={24} />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-studio-gold mb-6 relative">
            My Expertise
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-studio-gold rounded-full"></div>
          </h2>
          
          <p className="text-xl text-studio-bone/70 max-w-3xl mx-auto leading-relaxed">
            Specialized skills and cutting-edge techniques that bring creative visions to life
          </p>
        </div>

        {/* Modern Tab Navigation */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`group relative p-6 rounded-2xl border transition-all duration-500 overflow-hidden ${
                  activeTab === tab
                    ? 'bg-studio-gold text-studio-charcoal border-studio-gold shadow-xl shadow-studio-gold/25'
                    : 'bg-studio-taupe/30 text-studio-bone border-studio-taupe hover:border-studio-gold/50 backdrop-blur-sm'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative z-10">
                  <h3 className="font-semibold text-lg mb-2">{tab}</h3>
                  <ArrowRight 
                    size={16} 
                    className={`transition-transform duration-300 ${
                      activeTab === tab ? 'translate-x-2' : 'group-hover:translate-x-1'
                    }`} 
                  />
                </div>
                
                {activeTab !== tab && (
                  <div className="absolute inset-0 bg-gradient-to-r from-studio-gold/10 to-studio-gold/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Content Panel */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Visual Column */}
          <div className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-br ${activeData.color} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-studio-taupe border-2 border-studio-gold/20 group-hover:border-studio-gold/40 transition-all duration-500">
              <img 
                src={activeData.image}
                alt={activeData.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-charcoal/50 to-transparent"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold text-studio-bone mb-4">
                {activeData.title}
              </h3>
              
              <p className="text-lg text-studio-bone/80 leading-relaxed">
                {activeData.description}
              </p>
            </div>

            {/* Enhanced Key Competencies */}
            <div className="bg-studio-taupe/30 backdrop-blur-sm rounded-2xl p-6 border border-studio-gold/20">
              <h4 className="text-xl font-semibold text-studio-gold mb-6 flex items-center gap-2">
                <Check className="text-studio-gold" size={20} />
                Key Competencies
              </h4>
              <div className="grid gap-4">
                {activeData.competencies.map((competency, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-3 bg-studio-charcoal/50 rounded-xl hover:bg-studio-charcoal/70 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-studio-gold rounded-full"></div>
                    <span className="text-studio-bone font-medium">{competency}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Primary Tools */}
            <div>
              <h4 className="text-xl font-semibold text-studio-gold mb-6">
                Primary Tools
              </h4>
              <div className="flex flex-wrap gap-3">
                {activeData.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-gradient-to-r from-studio-taupe to-studio-taupe/80 text-studio-bone rounded-full text-sm font-medium hover:from-studio-gold hover:to-studio-gold-hover hover:text-studio-charcoal transition-all duration-300 cursor-default border border-studio-gold/20 hover:border-studio-gold hover:scale-105 transform"
                    style={{ animationDelay: `${index * 100}ms` }}
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
