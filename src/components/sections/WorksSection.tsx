
import { useState, useRef, useEffect } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const filters = ['All', '3D Animation', 'VFX', 'Motion Graphics', 'Live Action'];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

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

  const handleFilterChange = (filter: string) => {
    if (filter === activeFilter) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFilter(filter);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-studio-charcoal" role="region" aria-label="Portfolio showcase">
      <div className="container-studio">
        {/* Section Title */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-studio-bone mb-8">
            Selected Works
          </h2>

          {/* Enhanced Filter Pills */}
          <div className="flex flex-wrap gap-4" role="tablist" aria-label="Project categories">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                role="tab"
                aria-selected={activeFilter === filter}
                aria-controls="projects-grid"
                className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 group overflow-hidden ${
                  activeFilter === filter
                    ? 'bg-studio-gold text-studio-charcoal shadow-lg'
                    : 'bg-studio-taupe text-studio-bone hover:bg-studio-gold hover:text-studio-charcoal'
                }`}
              >
                <span className="relative z-10">{filter}</span>
                <div className="absolute inset-0 bg-studio-gold transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div 
          id="projects-grid"
          role="tabpanel"
          className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}
        >
          <MasonryGrid columns={3} gap={24} className="md:columns-2 lg:columns-3">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer mb-6 break-inside-avoid transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-xl bg-studio-taupe shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-video relative">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.description}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Enhanced overlay with flip effect */}
                    <div className="absolute inset-0 bg-studio-charcoal/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-studio-gold font-medium block mb-2">View Project</span>
                        <span className="text-studio-bone text-sm">{project.details}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-studio-bone mb-2 group-hover:text-studio-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-studio-gold text-sm font-medium mb-2">
                      {project.category}
                    </p>
                    <p className="text-studio-bone/80 text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Ripple effect on click */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="ripple-effect"></div>
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
