// components/EncouragementTooltip.tsx
import { motion, AnimatePresence } from "motion/react";

const ENCOURAGEMENT_MESSAGES = [
  "Vamos, puedes decir que no...",
  "Enserio? Intentas rechazarme? 🥺",
  "Sabes que quieres decir que sí...",
  "Por favor mi amor... ❤️",
];

interface EncouragementTooltipProps {
  show: boolean;
  clickCount: number;
}

export default function EncouragementTooltip({
  show,
  clickCount,
}: EncouragementTooltipProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute -top-28 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-8 py-4 whitespace-nowrap z-20 border-2 border-rose-300"
          style={{
            borderRadius: "15px 225px 15px 225px/225px 15px 225px 15px",
            boxShadow: "4px 4px 0px rgba(251, 113, 133, 0.3)",
          }}
        >
          <div className="text-rose-600 text-2xl">
            {
              ENCOURAGEMENT_MESSAGES[
                Math.min(clickCount, ENCOURAGEMENT_MESSAGES.length - 1)
              ]
            }
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border-r-2 border-b-2 border-rose-300 rotate-45" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
