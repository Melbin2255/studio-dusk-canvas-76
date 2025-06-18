import { motion } from 'framer-motion';

interface GradientBlobsProps {
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
}

const GradientBlobs = ({ 
  className = '', 
  intensity = 'medium'
}: GradientBlobsProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Large dark purple mesh blob */}
      <motion.div
        className="absolute"
        style={{
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle at 50% 50%, rgba(88, 28, 135, 0.45), transparent 70%)',
          filter: 'blur(100px)',
          top: '5%',
          left: '0%',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Large pure white mesh blob */}
      <motion.div
        className="absolute"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.7), transparent 70%)',
          filter: 'blur(90px)',
          top: '20%',
          right: '5%',
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Medium dark purple mesh blob */}
      <motion.div
        className="absolute"
        style={{
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.4), transparent 70%)',
          filter: 'blur(85px)',
          bottom: '15%',
          left: '20%',
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 25, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Medium pure white mesh blob */}
      <motion.div
        className="absolute"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.65), transparent 70%)',
          filter: 'blur(75px)',
          top: '40%',
          left: '35%',
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Small dark purple accent blob */}
      <motion.div
        className="absolute"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle at 50% 50%, rgba(88, 28, 135, 0.35), transparent 70%)',
          filter: 'blur(70px)',
          bottom: '30%',
          right: '25%',
        }}
        animate={{
          scale: [1, 1.05, 1],
          x: [0, -10, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
};

export default GradientBlobs;
