
import { useEffect, useRef, useState } from 'react';

interface CircularProgressProps {
  percentage: number;
  label: string;
  size?: number;
  strokeWidth?: number;
  delay?: number;
}

const CircularProgress = ({ 
  percentage, 
  label, 
  size = 120, 
  strokeWidth = 8,
  delay = 0 
}: CircularProgressProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (currentPercentage / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = percentage / steps;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        setCurrentPercentage(Math.min(step * increment, percentage));
        
        if (step >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible, percentage]);

  return (
    <div ref={elementRef} className="flex flex-col items-center group">
      <div className="relative">
        <svg
          width={size}
          height={size}
          className="transform -rotate-90 transition-transform duration-300 group-hover:scale-110"
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-studio-taupe"
          />
          
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="text-studio-gold transition-all duration-1000 ease-out"
          />
        </svg>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-studio-gold">
            {Math.round(currentPercentage)}%
          </span>
        </div>
      </div>
      
      {/* Label */}
      <p className="mt-4 text-studio-bone font-medium text-center">
        {label}
      </p>
    </div>
  );
};

export default CircularProgress;
