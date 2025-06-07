
import { useState, useRef, useEffect } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Project Zenith',
    category: '3D Animation',
    image: '/lovable-uploads/b2485002-d91b-4f87-a044-770fc88756a6.png',
    description: 'Abstract 3D animation exploring cosmic themes'
  },
  {
    id: 2,
    title: 'Project Horizon',
    category: 'VFX',
    image: '/lovable-uploads/b2485002-d91b-4f87-a044-770fc88756a6.png',
    description: 'Breathtaking landscape visual effects'
  },
  {
    id: 3,
    title: 'Project Nebula',
    category: 'Motion Graphics',
    image: '/lovable-uploads/b2485002-d91b-4f87-a044-770fc88756a6.png',
    description: 'Dynamic motion graphics for digital media'
  },
  {
    id: 4,
    title: 'Project Aurora',
    category: 'Live Action',
    image: '/lovable-uploads/b2485002-d91b-4f87-a044-770fc88756a6.png',
    description: 'Cinematic live action post-production'
  },
  {
    id: 5,
    title: 'Project Solstice',
    category: '3D Animation',
    image: '/lovable-uploads/b2485002-d91b-4f87-a044-770fc88756a6.png',
    description: 'Character-driven 3D narrative'
  },
  {
    id: 6,
    title: 'Project Equinox',
    category: 'VFX',
    image: '/lovable-uploads/b2485002-d91b-4f87-a044-770fc88756a6.png',
    description: 'Advanced visual effects integration'
  }
];

const WorksSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-studio-charcoal">
      <div className="container-studio">
        {/* Section Title */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-studio-bone mb-8">
            Selected Works
          </h2>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-studio-gold text-studio-charcoal'
                    : 'bg-studio-taupe text-studio-bone hover:bg-studio-gold hover:text-studio-charcoal'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-xl bg-studio-taupe">
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-studio-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-studio-gold font-medium">View Project →</span>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
