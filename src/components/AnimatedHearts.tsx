// components/AnimatedHearts.tsx
import { motion } from "motion/react";

const HEARTS = ["💕", "💖", "💗", "💝"];

export default function AnimatedHearts() {
  return (
    <motion.div
      className="mt-12 flex justify-center gap-6 relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.3, duration: 1 }}
    >
      {HEARTS.map((heart, i) => (
        <motion.span
          key={i}
          className="text-5xl md:text-6xl"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        >
          {heart}
        </motion.span>
      ))}
    </motion.div>
  );
}
