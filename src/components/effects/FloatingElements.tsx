import { motion } from 'framer-motion';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Geometric shapes */}
      <motion.div
        className="absolute w-24 h-24 border border-purple-200 rounded-lg"
        style={{ 
          left: '15%',
          top: '20%',
          background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(196, 181, 253, 0.1))'
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-32 h-32"
        style={{ 
          right: '20%',
          bottom: '25%',
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
          borderRadius: '60% 40% 50% 70% / 60% 50% 70% 40%'
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Glowing orbs */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-purple-400/30 blur-sm"
        style={{ left: '25%', top: '35%' }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-4 h-4 rounded-full bg-purple-300/40 blur-sm"
        style={{ right: '30%', top: '45%' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
};

export default FloatingElements;
