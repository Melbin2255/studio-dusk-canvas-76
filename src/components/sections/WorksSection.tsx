import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import MasonryGrid from '../ui/MasonryGrid';
import { Filter, Play } from 'lucide-react';
import GradientBlobs from '../effects/GradientBlobs';

interface WorkItem {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  splashUrl: string;
  videoUrl?: string;
  client?: string;
  year: string;
}

const WorksSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>({ threshold: 0.3 });
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('all');

  const works: WorkItem[] = [
    {
      id: 1,
      title: 'Cosmic Journey',
      category: 'branding',
      description: 'A mesmerizing 3D animation exploring space and time.',
      imageUrl: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=60',
      splashUrl: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=60',
      videoUrl: 'https://vimeo.com/example1',
      client: 'SpaceCorp',
      year: '2023'
    },
    {
      id: 2,
      title: 'Urban Motion',
      category: 'web',
      description: 'VFX integration in urban landscapes.',
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=60',
      splashUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=60',
      videoUrl: 'https://vimeo.com/example2',
      client: 'CityVibes',
      year: '2023'
    },
    {
      id: 3,
      title: 'Project 3',
      category: 'branding',
      description: 'A stunning display of brand evolution through 3D design.',
      imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=60',
      splashUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=60',
      client: 'Brandify',
      year: '2022'
    },
    {
      id: 4,
      title: 'Project 4',
      category: 'ui/ux',
      description: 'Revolutionary UI/UX design for enhanced user engagement.',
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      splashUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=60',
      client: 'WebInnovate',
      year: '2023'
    },
    {
      id: 5,
      title: 'Project 5',
      category: 'web',
      description: 'Cutting-edge web development with a focus on performance.',
      imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
      splashUrl: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d9d?auto=format&fit=crop&w=800&q=60',
      client: 'DevStudio',
      year: '2023'
    },
    {
      id: 6,
      title: 'Project 6',
      category: 'photography',
      description: 'Captivating photography that tells a story.',
      imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
      splashUrl: 'https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?auto=format&fit=crop&w=800&q=60',
      client: 'PhotoGenics',
      year: '2022'
    },
    {
      id: 7,
      title: 'Project 7',
      category: 'ui/ux',
      description: 'Intuitive and user-friendly interface designs.',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      splashUrl: 'https://images.unsplash.com/photo-1517445312882-959a2a1c7e0e?auto=format&fit=crop&w=800&q=60',
      client: 'UXPerfect',
      year: '2023'
    },
    {
      id: 8,
      title: 'Project 8',
      category: 'photography',
      description: 'Stunning visuals captured through the lens.',
      imageUrl: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=800&q=80',
      splashUrl: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=60',
      client: 'SnapStudio',
      year: '2022'
    },
    {
      id: 9,
      title: 'Project 9',
      category: 'branding',
      description: 'Innovative branding solutions for modern businesses.',
      imageUrl:'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&fit=crop&w=800&q=60',
      splashUrl: 'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&fit=crop&w=800&q=60',
      client: 'BrandLab',
      year: '2023'
    },
  ];

  const categories = [
    { id: 'all',     label: 'All Projects',      count: works.length },
    { id: 'branding',label: '3D Animation',     count: works.filter(w => w.category === 'branding').length },
    { id: 'web',     label: 'VFX',              count: works.filter(w => w.category === 'web').length },
    { id: 'ui/ux',   label: 'Color Grading',    count: works.filter(w => w.category === 'ui/ux').length },
    { id: 'photography', label: 'Motion Graphics', count: works.filter(w => w.category === 'photography').length },
  ];

  const filteredWorks = selectedCategory === 'all'
    ? works
    : works.filter(work => work.category === selectedCategory);

  return (
    <section id="works" className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-[#f8f5ff] via-[#f3e6ff] to-[#ede0ff]">
      <GradientBlobs intensity="light" className="opacity-90" />
      
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work) => (
              <div
                key={work.id}
                className="group relative overflow-hidden rounded-2xl bg-studio-taupe/20 border border-studio-gold/10 hover:border-studio-gold/30 transition-all duration-500"
              >
                {/* Main Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Splash Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img
                      src={work.splashUrl}
                      alt={`${work.title} splash`}
                      className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                    />
                  </div>

                  {/* Play Button for Video */}
                  {work.videoUrl && (
                    <a
                      href={work.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-studio-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    >
                      <Play className="text-studio-charcoal w-6 h-6" />
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-studio-gold mb-2">{work.title}</h3>
                  <p className="text-studio-bone/70 text-sm mb-4">{work.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-studio-gold/60">{work.client} • {work.year}</span>
                    <span className="text-xs text-studio-bone/50 px-3 py-1 bg-studio-charcoal/50 rounded-full">
                      {work.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
