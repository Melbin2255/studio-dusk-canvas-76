
import { useState, useRef } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import MasonryGrid from '../ui/MasonryGrid';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';

const WorksSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
  useScrollAnimation(sectionRef, { threshold: 0.1 });
  useScrollAnimation(gridRef, { threshold: 0.2, delay: 300 });

  const categories = ['all', 'commercial', 'music video', 'documentary', 'short film'];

  const works = [
    {
      id: 1,
      title: "Ethereal Dreams",
      category: "music video",
      image: "/lovable-uploads/b2485002-d91b-4f87-a044-770fc88756a6.png",
      description: "A surreal journey through consciousness",
      year: "2024",
      client: "Independent Artist"
    },
    {
      id: 2,
      title: "Urban Pulse",
      category: "commercial",
      image: "/lovable-uploads/b28adcef-8be1-4b98-95db-a682474aadde.png",
      description: "Dynamic cityscapes and human connections",
      year: "2024",
      client: "Metro Brand"
    },
    {
      id: 3,
      title: "Natural Harmony",
      category: "documentary",
      image: "/lovable-uploads/f2b6ac95-7c83-4e47-ab34-ca67977c2a27.png",
      description: "Environmental storytelling at its finest",
      year: "2023",
      client: "Nature Foundation"
    },
    {
      id: 4,
      title: "Digital Renaissance",
      category: "short film",
      image: "/lovable-uploads/b2485002-d91b-4f87-a044-770fc88756a6.png",
      description: "Future meets classical artistry",
      year: "2023",
      client: "Art Collective"
    },
    {
      id: 5,
      title: "Midnight Sessions",
      category: "music video",
      image: "/lovable-uploads/b28adcef-8be1-4b98-95db-a682474aadde.png",
      description: "Intimate performance in atmospheric lighting",
      year: "2024",
      client: "Jazz Ensemble"
    },
    {
      id: 6,
      title: "Corporate Vision",
      category: "commercial",
      image: "/lovable-uploads/f2b6ac95-7c83-4e47-ab34-ca67977c2a27.png",
      description: "Brand storytelling with emotional depth",
      year: "2024",
      client: "Tech Startup"
    }
  ];

  const filteredWorks = selectedCategory === 'all' 
    ? works 
    : works.filter(work => work.category === selectedCategory);

  return (
    <section id="works" className="py-24 bg-studio-taupe">
      <div className="container-studio">
        {/* Section Header */}
        <div 
          ref={sectionRef}
          className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-800"
        >
          <h2 className="text-4xl md:text-5xl font-light text-studio-bone mb-6">
            Featured <span className="text-studio-gold">Works</span>
          </h2>
          <div className="w-16 h-1 bg-studio-gold mx-auto mb-8"></div>
          <p className="text-xl text-studio-bone/70 max-w-3xl mx-auto">
            A curated selection of projects showcasing the intersection of creativity and technical excellence
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-studio-gold text-studio-charcoal'
                  : 'bg-studio-charcoal text-studio-bone hover:bg-studio-gold hover:text-studio-charcoal'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div 
          ref={gridRef}
          className="opacity-0 translate-y-8 transition-all duration-800"
        >
          <MasonryGrid className="gap-6">
            {filteredWorks.map((work, index) => (
              <Dialog key={work.id}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer bg-studio-charcoal rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-studio-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Play className="text-studio-gold" size={48} />
                      </div>
                      <div className="absolute top-4 right-4 bg-studio-gold text-studio-charcoal px-3 py-1 rounded-full text-xs font-medium">
                        {work.category}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-studio-bone mb-2 group-hover:text-studio-gold transition-colors duration-300">
                        {work.title}
                      </h3>
                      <p className="text-studio-bone/70 text-sm mb-4">{work.description}</p>
                      <div className="flex justify-between items-center text-xs text-studio-bone/50">
                        <span>{work.year}</span>
                        <span>{work.client}</span>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl bg-studio-charcoal border-studio-taupe">
                  <div className="space-y-6">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-96 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-studio-bone mb-2">{work.title}</h3>
                      <p className="text-studio-bone/70 mb-4">{work.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="space-x-4">
                          <span className="text-studio-gold font-medium">{work.category}</span>
                          <span className="text-studio-bone/50">{work.year}</span>
                          <span className="text-studio-bone/50">{work.client}</span>
                        </div>
                        <button className="inline-flex items-center gap-2 text-studio-gold hover:text-studio-gold-hover transition-colors">
                          <ExternalLink size={16} />
                          View Project
                        </button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </MasonryGrid>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
