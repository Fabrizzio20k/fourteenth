// components/AcceptanceView.tsx
"use client";

import { motion } from "motion/react";
import ConfettiHearts from "./ConfettiHearts";
import AnimatedHearts from "./AnimatedHearts";

export default function AcceptanceView() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-rose-600 via-pink-500 to-red-500 flex items-center justify-center p-4 md:p-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          delay: 0.5,
        }}
        className="text-center bg-white rounded-3xl p-6 md:p-12 shadow-2xl w-full max-w-4xl relative overflow-hidden flex flex-col justify-center"
        style={{
          borderRadius: "255px 25px 225px 25px/25px 225px 25px 255px",
          border: "5px solid rgba(255, 255, 255, 0.8)",
          boxShadow:
            "12px 12px 0px rgba(255, 255, 255, 0.2), 0 20px 60px rgba(0, 0, 0, 0.3)",
        }}
      >
        <ConfettiHearts />

        <motion.h1
          className="font-gochihand text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-rose-600 mb-4 md:mb-6 relative z-10"
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
          className="font-gochihand text-xl sm:text-2xl md:text-3xl text-rose-500 mb-4 md:mb-6 relative z-10"
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
          className="flex-shrink-0 relative z-10 flex justify-center items-center"
        >
          <img
            src="/photo.JPG"
            alt="Amor"
            className="w-full h-auto max-h-[45vh] object-cover"
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
