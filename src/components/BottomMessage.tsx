// components/BottomMessage.tsx
import { motion } from "motion/react";
import { RoughNotation } from "react-rough-notation";

export default function BottomMessage() {
  return (
    <motion.div
      className="mt-20 text-rose-400 text-3xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1, ease: "easeOut" }}
    >
      <RoughNotation
        type="circle"
        show={true}
        color="#fda4af"
        strokeWidth={2}
        animationDelay={3000}
        animationDuration={1500}
        padding={[15, 25]}
      >
        Con todo mi amor 💖
      </RoughNotation>
    </motion.div>
  );
}
