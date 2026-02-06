// components/ConfettiHearts.tsx
import { useState } from "react";
import { motion } from "motion/react";

const HEARTS = ["💕", "💖", "💗", "💝", "❤️", "💓"];

export default function ConfettiHearts() {
  const [confettiData] = useState(() =>
    [...Array(12)].map(() => ({
      xOffset: Math.random() * 100 - 50,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 0.3,
      leftPosition: Math.random() * 100,
    })),
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {confettiData.map((data, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl"
          style={{ left: `${data.leftPosition}%`, top: -20 }}
          initial={{ y: -20, opacity: 0, rotate: 0 }}
          animate={{
            y: ["0vh", "110vh"],
            opacity: [0, 1, 1, 0],
            rotate: [0, 360],
            x: [0, data.xOffset],
          }}
          transition={{
            duration: data.duration,
            repeat: Infinity,
            delay: data.delay * i,
            ease: "linear",
          }}
        >
          {HEARTS[i % HEARTS.length]}
        </motion.div>
      ))}
    </div>
  );
}
