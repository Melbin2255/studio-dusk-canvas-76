
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import MasonryGrid from '../ui/MasonryGrid';

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

  const categories = ['all', 'branding', 'web', 'ui/ux', 'photography'];

  const filteredWorks = selectedCategory === 'all'
    ? works
    : works.filter(work => work.category === selectedCategory);

  return (
    <section id="works" className="py-24 bg-studio-charcoal">
      <div className="container-studio">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 ref={titleRef} className={`text-4xl md:text-5xl font-bold text-studio-bone transition-opacity duration-1000 ${titleVisible ? 'opacity-100' : 'opacity-0'}`}>
            Our Recent Works
          </h2>
          <p className="mt-4 text-studio-bone/70">Showcasing our passion and expertise through diverse projects.</p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${selectedCategory === category
                ? 'bg-studio-gold text-studio-charcoal'
                : 'text-studio-bone hover:bg-studio-taupe'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div ref={gridRef} className={`transition-opacity duration-1000 ${gridVisible ? 'opacity-100' : 'opacity-0'}`}>
          <MasonryGrid items={filteredWorks} />
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
