import { motion } from 'framer-motion';

interface HighlightedTextProps {
  text: string;
  isActive: boolean;
}

const HighlightedText = ({ text, isActive }: HighlightedTextProps) => {
  return (
    <motion.span
      className="relative inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.7 }}
      transition={{ duration: 0.3 }}
    >
      {isActive && (
        <motion.span
          className="absolute inset-0 bg-purple-200/30 rounded-lg -z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10
          }}
        />
      )}
      {isActive && (
        <>
          <motion.span
            className="absolute -left-3 -right-3 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.5 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute -left-6 top-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-purple-400/50" />
          </motion.div>
          <motion.div
            className="absolute -right-6 top-1/2 -translate-y-1/2"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-purple-400/50" />
          </motion.div>
        </>
      )}
      <span className={`relative ${isActive ? 'text-purple-700 font-medium' : ''}`}>
        {text}
      </span>
    </motion.span>
  );
};

export default HighlightedText;
