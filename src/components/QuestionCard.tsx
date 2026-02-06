// components/QuestionCard.tsx
import { motion } from "motion/react";

export default function QuestionCard() {
  return (
    <motion.div
      className="relative mb-16 mx-auto max-w-2xl"
      initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
      animate={{ scale: 1, opacity: 1, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.7,
        type: "spring",
        stiffness: 100,
        damping: 12,
      }}
      style={{ perspective: "1000px" }}
    >
      {/* Corazón flotante */}
      <motion.div
        className="absolute -top-16 left-1/2 -translate-x-1/2 text-7xl"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        💖
      </motion.div>

      <div
        className="bg-white/90 backdrop-blur-sm p-10 md:p-16 relative"
        style={{
          borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
          border: "3px solid #f43f5e",
          boxShadow:
            "8px 8px 0px rgba(244, 63, 94, 0.2), 0 10px 40px rgba(244, 63, 94, 0.1)",
        }}
      >
        <motion.p
          className="text-4xl md:text-5xl text-rose-600 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          ¿Quieres pasar conmigo este 14 de febrero?
        </motion.p>

        {/* Decoraciones */}
        <div className="absolute top-3 right-3 text-rose-300 text-2xl">✨</div>
        <div className="absolute bottom-3 left-3 text-rose-300 text-2xl">
          ✨
        </div>
      </div>
    </motion.div>
  );
}
