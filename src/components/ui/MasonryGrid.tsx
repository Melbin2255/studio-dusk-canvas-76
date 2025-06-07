
import { useState, useEffect, ReactNode } from 'react';

interface MasonryGridProps {
  children: ReactNode[];
  columns?: number;
  gap?: number;
  className?: string;
}

const MasonryGrid = ({ children, columns = 3, gap = 20, className = '' }: MasonryGridProps) => {
  const [columnHeights, setColumnHeights] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setColumnHeights(new Array(columns).fill(0));
    setIsLoaded(true);
  }, [columns]);

  const getNextColumn = () => {
    return columnHeights.indexOf(Math.min(...columnHeights));
  };

  if (!isLoaded) return null;

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap}px`,
      }}
    >
      {children.map((child, index) => (
        <div
          key={index}
          className="transition-all duration-500 ease-out"
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
