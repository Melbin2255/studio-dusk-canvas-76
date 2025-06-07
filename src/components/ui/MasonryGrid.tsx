
import { useState, useEffect, ReactNode } from 'react';

interface WorkItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

interface MasonryGridProps {
  items: WorkItem[];
  columns?: number;
  gap?: number;
  className?: string;
}

const MasonryGrid = ({ items = [], columns = 3, gap = 20, className = '' }: MasonryGridProps) => {
  const [columnHeights, setColumnHeights] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setColumnHeights(new Array(columns).fill(0));
    setIsLoaded(true);
  }, [columns]);

  if (!isLoaded || !items || items.length === 0) return null;

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap}px`,
      }}
    >
      {items.map((item, index) => (
        <div
          key={item.id}
          className="transition-all duration-500 ease-out overflow-hidden rounded-lg group cursor-pointer"
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          <div className="relative overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-studio-charcoal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-studio-bone font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-studio-gold text-sm uppercase tracking-wider">{item.category}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
