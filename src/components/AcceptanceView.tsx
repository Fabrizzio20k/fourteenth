// components/AcceptanceView.tsx
"use client";

import { motion } from "motion/react";
import ConfettiHearts from "./ConfettiHearts";
import AnimatedHearts from "./AnimatedHearts";

export default function AcceptanceView() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 100, damping: 15 }}
      className="min-h-screen bg-gradient-to-br from-rose-600 via-pink-500 to-red-500 flex items-center justify-center p-8"
    >
      <motion.div
        initial={{ y: 50, opacity: 0, rotateX: 90 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{
          delay: 0.5,
          duration: 1,
          type: "spring",
          stiffness: 100,
          damping: 15,
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
          className="text-6xl md:text-8xl text-rose-600 mb-12 relative z-10"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 150,
            damping: 12,
            delay: 0.8,
          }}
        >
          Sabía que aceptarías mi amor
        </motion.h1>

        <motion.p
          className="text-4xl text-rose-500 mb-12 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
        >
          Te amo mucho ❤️✨
        </motion.p>

        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            delay: 1.8,
            type: "spring",
            stiffness: 150,
            damping: 12,
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
