// components/AcceptanceView.tsx - Aparece instantáneamente
"use client";

import { motion } from "motion/react";
import ConfettiHearts from "./ConfettiHearts";
import AnimatedHearts from "./AnimatedHearts";

export default function AcceptanceView() {
  return (
    <motion.div
      // Aparece inmediatamente (ya está el fondo rosa cubriendo)
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-rose-600 via-pink-500 to-red-500 flex items-center justify-center p-8"
    >
      <motion.div
        // El contenido aparece gradualmente mientras se revela
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          delay: 0.5, // Delay para sincronizar con revelación
        }}
        className="text-center bg-white rounded-3xl p-16 shadow-2xl max-w-4xl w-full relative overflow-hidden"
        style={{
          borderRadius: "255px 25px 225px 25px/25px 225px 25px 255px",
          border: "5px solid rgba(255, 255, 255, 0.8)",
          boxShadow:
            "12px 12px 0px rgba(255, 255, 255, 0.2), 0 20px 60px rgba(0, 0, 0, 0.3)",
        }}
      >
        <ConfettiHearts />

        <motion.h1
          className="font-parisienne text-6xl md:text-8xl text-rose-600 mb-12 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 1,
          }}
        >
          Sabía que aceptarías mi amor
        </motion.h1>

        <motion.p
          className="font-parisienne text-4xl text-rose-500 mb-12 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        >
          Te amo mucho ❤️✨
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 2,
            duration: 1,
            ease: "easeOut",
          }}
          className="mt-8 relative z-10"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWHw4sEC9W-N7BOIudWJRniNA0YkQtWLIU8Q&s"
            alt="Amor"
            className="mx-auto max-w-md w-full"
            style={{
              borderRadius: "225px 15px 225px 15px/15px 225px 15px 225px",
              border: "4px solid #f43f5e",
              boxShadow: "10px 10px 0px rgba(244, 63, 94, 0.3)",
            }}
          />
        </motion.div>

        <AnimatedHearts />
      </motion.div>
    </motion.div>
  );
}
