import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  words: string[];
  className?: string;
}

const TypewriterText = ({ words, className = '' }: TypewriterTextProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFullyTyped, setIsFullyTyped] = useState(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 2000; // Increased pause time to make it more readable

    const type = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        setIsFullyTyped(false);
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
        if (currentText === currentWord) {
          setIsFullyTyped(true);
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, words]);

  return (
    <motion.div 
      className={`inline-flex items-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        className="relative px-4 py-2"
        animate={{
          backgroundColor: isFullyTyped ? "rgba(168, 85, 247, 0.1)" : "transparent",
          scale: isFullyTyped ? 1.05 : 1
        }}
        transition={{ duration: 0.3 }}
        style={{ 
          borderRadius: '8px',
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          fontWeight: isFullyTyped ? 500 : 400
        }}
      >
        {currentText}
        {/* Animated underline */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isFullyTyped ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.span>
      <motion.span
        className="ml-1 inline-block w-[3px] h-8 bg-purple-500"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
      />
    </motion.div>
  );
};

export default TypewriterText;
