// components/NoButton.tsx
import { forwardRef } from "react";
import { motion } from "motion/react";

interface NoButtonProps {
  onClick: () => void;
  position: { x: number; y: number };
}

const NoButton = forwardRef<HTMLButtonElement, NoButtonProps>(
  ({ onClick, position }, ref) => {
    return (
      <motion.button
        ref={ref}
        onClick={onClick}
        initial={{ scale: 0, rotate: 180 }}
        animate={{
          x: position.x,
          y: position.y,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          x: { type: "spring", stiffness: 150, damping: 25 },
          y: { type: "spring", stiffness: 150, damping: 25 },
          scale: { type: "spring", stiffness: 200, damping: 15, delay: 1.5 },
          rotate: { type: "spring", stiffness: 200, damping: 15, delay: 1.5 },
        }}
        whileHover={{
          scale: 1.05,
          rotate: -2,
          transition: { duration: 0.3 },
        }}
        className="bg-gray-400 text-white px-10 py-4 text-2xl md:text-3xl font-bold cursor-pointer relative hover:bg-gray-500 transition-colors duration-300"
        style={{
          borderRadius: "15px 225px 15px 225px/225px 15px 225px 15px",
          border: "4px solid #6b7280",
          boxShadow:
            "6px 6px 0px rgba(107, 114, 128, 0.4), 0 10px 30px rgba(107, 114, 128, 0.2)",
        }}
      >
        No
      </motion.button>
    );
  },
);

NoButton.displayName = "NoButton";

export default NoButton;
