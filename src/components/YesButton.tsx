// components/YesButton.tsx
import { motion } from "motion/react";

interface YesButtonProps {
  onClick: () => void;
}

export default function YesButton({ onClick }: YesButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 1.5,
      }}
      whileHover={{
        scale: 1.1,
        rotate: 2,
        transition: { duration: 0.3, type: "spring", stiffness: 300 },
      }}
      whileTap={{ scale: 0.95 }}
      className="bg-rose-500 text-white px-10 py-4 text-2xl md:text-3xl font-bold relative z-10 hover:bg-rose-600 transition-colors duration-300"
      style={{
        borderRadius: "225px 15px 225px 15px/15px 225px 15px 225px",
        border: "4px solid #be123c",
        boxShadow:
          "6px 6px 0px rgba(190, 18, 60, 0.4), 0 10px 30px rgba(244, 63, 94, 0.3)",
      }}
    >
      Sí! 💕
    </motion.button>
  );
}
