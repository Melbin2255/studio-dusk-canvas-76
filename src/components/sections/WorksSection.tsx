
import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import MasonryGrid from '../ui/MasonryGrid';

const projectsData = [
  {
    id: 1,
    title: 'Project Zenith',
    category: '3D Animation',
    image: '/lovable-uploads/b2485002-d91b-4f87-a044-770fc88756a6.png',
    description: 'Abstract 3D animation exploring cosmic themes',
    details: 'Created with Cinema 4D and After Effects'
  },
  {
    id: 2,
    title: 'Project Horizon',
    category: 'VFX',
    image: '/lovable-uploads/b2485002-d91b-4f87-a044-770fc88756a6.png',
    description: 'Breathtaking landscape visual effects',
    details: 'Advanced compositing and matte painting'
  },
  {
    id: 3,
    title: 'Project Nebula',
    category: 'Motion Graphics',
    image: '/lovable-uploads/b2485002-d91b-4f87-a044-770fc88756a6.png',
    description: 'Dynamic motion graphics for digital media',
    details: 'Brand identity and promotional content'
  },
  {
    id: 4,
    title: 'Project Aurora',
    category: 'Live Action',
    image: '/lovable-uploads/b2485002-d91b-4f87-a044-770fc88756a6.png',
    description: 'Cinematic live action post-production',
    details: 'Color grading and sound design'
  },
  {
    id: 5,
    title: 'Project Solstice',
    category: '3D Animation',
    image: '/lovable-uploads/b2485002-d91b-4f87-a044-770fc88756a6.png',
    description: 'Character-driven 3D narrative',
    details: 'Full pipeline from modeling to rendering'
  },
  {
    id: 6,
    title: 'Project Equinox',
    category: 'VFX',
    image: '/lovable-uploads/b2485002-d91b-4f87-a044-770fc88756a6.png',
    description: 'Advanced visual effects integration',
    details: 'Real-time compositing and tracking'
  }
];

const WorksSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const { elementRef: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.5 });
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.2 });

  const filters = ['All', '3D Animation', 'VFX', 'Motion Graphics', 'Live Action'];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  const handleFilterChange = (filter: string) => {
    if (filter === activeFilter) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFilter(filter);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-studio-charcoal overflow-hidden" role="region" aria-label="Portfolio showcase">
      <div className="container-studio">
        {/* Enhanced Section Title */}
        <div ref={titleRef} className={`mb-16 transition-all duration-1500 ease-out transform ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className={`text-4xl lg:text-5xl font-bold text-studio-bone mb-8 transition-all duration-1000 delay-300 ${titleVisible ? 'animate-text-reveal' : ''}`}>
            Selected Works
          </h2>

          {/* Enhanced Filter Pills */}
          <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-600 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} role="tablist" aria-label="Project categories">
            {filters.map((filter, index) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                role="tab"
                aria-selected={activeFilter === filter}
                aria-controls="projects-grid"
                className={`relative px-6 py-3 rounded-full font-medium transition-all duration-500 group overflow-hidden transform hover:scale-105 ${
                  activeFilter === filter
                    ? 'bg-studio-gold text-studio-charcoal shadow-xl shadow-studio-gold/20 animate-pulse-subtle'
                    : 'bg-studio-taupe text-studio-bone hover:bg-studio-gold hover:text-studio-charcoal hover:shadow-lg'
                }`}
                style={{ transitionDelay: `${index * 100 + 700}ms` }}
              >
                <span className="relative z-10 transition-all duration-300 group-hover:scale-105">{filter}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-studio-gold to-studio-gold-hover transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                <div className="absolute inset-0 animate-shimmer-subtle opacity-0 group-hover:opacity-100"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div 
          ref={gridRef}
          id="projects-grid"
          role="tabpanel"
          className={`transition-all duration-700 ease-out transform ${gridVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'} ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}
        >
          <MasonryGrid columns={3} gap={24} className="md:columns-2 lg:columns-3">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer mb-6 break-inside-avoid transition-all duration-700 hover:scale-105 transform ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <div className="relative overflow-hidden rounded-xl bg-studio-taupe shadow-lg hover:shadow-2xl hover:shadow-studio-gold/10 transition-all duration-500">
                  {/* Background glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-studio-gold/10 to-studio-gold/5 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  <div className="relative aspect-video">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.description}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    
                    {/* Enhanced overlay with multiple effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-studio-charcoal via-studio-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-studio-gold font-medium block mb-2 text-lg animate-bounce-subtle">View Project</span>
                        <span className="text-studio-bone text-sm opacity-80">{project.details}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative p-6">
                    <h3 className="text-xl font-bold text-studio-bone mb-2 group-hover:text-studio-gold transition-all duration-500 transform group-hover:translate-x-2">
                      {project.title}
                    </h3>
                    <p className="text-studio-gold text-sm font-medium mb-2 transition-all duration-300 group-hover:brightness-125">
                      {project.category}
                    </p>
                    <p className="text-studio-bone/80 text-sm transition-all duration-300 group-hover:text-studio-bone group-hover:translate-x-1">
                      {project.description}
                    </p>
                  </div>

                  {/* Enhanced ripple effect */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                    <div className="ripple-effect-enhanced"></div>
                  </div>
                </div>
              </div>
            ))}
          </MasonryGrid>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
