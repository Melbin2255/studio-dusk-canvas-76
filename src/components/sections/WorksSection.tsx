
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import MasonryGrid from '../ui/MasonryGrid';
import { Filter } from 'lucide-react';

const WorksSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('all');

  const works = [
    { id: 1, title: 'Project 1', category: 'branding', imageUrl: '/images/works/image-1.jpg' },
    { id: 2, title: 'Project 2', category: 'web', imageUrl: '/images/works/image-2.jpg' },
    { id: 3, title: 'Project 3', category: 'branding', imageUrl: '/images/works/image-3.jpg' },
    { id: 4, title: 'Project 4', category: 'ui/ux', imageUrl: '/images/works/image-4.jpg' },
    { id: 5, title: 'Project 5', category: 'web', imageUrl: '/images/works/image-5.jpg' },
    { id: 6, title: 'Project 6', category: 'photography', imageUrl: '/images/works/image-6.jpg' },
    { id: 7, title: 'Project 7', category: 'ui/ux', imageUrl: '/images/works/image-7.jpg' },
    { id: 8, title: 'Project 8', category: 'photography', imageUrl: '/images/works/image-8.jpg' },
    { id: 9, title: 'Project 9', category: 'branding', imageUrl: '/images/works/image-9.jpg' },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: works.length },
    { id: 'branding', label: '3D Animation', count: works.filter(w => w.category === 'branding').length },
    { id: 'web', label: 'VFX', count: works.filter(w => w.category === 'web').length },
    { id: 'ui/ux', label: 'Color Grading', count: works.filter(w => w.category === 'ui/ux').length },
    { id: 'photography', label: 'Motion Graphics', count: works.filter(w => w.category === 'photography').length },
  ];

  const filteredWorks = selectedCategory === 'all'
    ? works
    : works.filter(work => work.category === selectedCategory);

  return (
    <section id="works" className="py-32 bg-gradient-to-b from-studio-charcoal via-studio-taupe/5 to-studio-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial from-studio-gold/5 via-transparent to-transparent"></div>
      
      <div className="container-studio relative z-10">
        {/* Enhanced Section Title */}
        <div className="text-center mb-20">
          <div ref={titleRef} className={`transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold text-studio-gold mb-6 relative">
              Featured Works
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-studio-gold rounded-full"></div>
            </h2>
            <p className="text-xl text-studio-bone/70 max-w-2xl mx-auto leading-relaxed">
              A curated selection of projects showcasing creativity, technical expertise, and artistic vision across various mediums.
            </p>
          </div>
        </div>

        {/* Modern Category Filters */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Filter size={20} className="text-studio-gold" />
            <span className="text-studio-bone/70 font-medium">Filter by category</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 overflow-hidden ${
                  selectedCategory === category.id
                    ? 'bg-studio-gold text-studio-charcoal shadow-lg shadow-studio-gold/25'
                    : 'bg-studio-taupe/50 text-studio-bone hover:bg-studio-taupe backdrop-blur-sm border border-studio-gold/20'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {category.label}
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id 
                      ? 'bg-studio-charcoal/20 text-studio-charcoal' 
                      : 'bg-studio-gold/20 text-studio-gold'
                  }`}>
                    {category.count}
                  </span>
                </span>
                
                {selectedCategory !== category.id && (
                  <div className="absolute inset-0 bg-studio-gold/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-2xl"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Masonry Grid */}
        <div ref={gridRef} className={`transition-all duration-1000 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            <MasonryGrid items={filteredWorks} />
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-studio-gold/20 rounded-full blur-sm"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-studio-gold/10 rounded-full blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
