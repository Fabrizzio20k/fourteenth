// components/HeartsBubblesTransition.tsx
"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface HeartBubble {
  id: number;
  size: number;
  leftPosition: number;
  duration: number;
  delay: number;
  rotation: number;
  xOffset: number;
}

export default function HeartsBubblesTransition() {
  const [heartBubbles] = useState<HeartBubble[]>(() =>
    [...Array(40)].map((_, i) => ({
      id: i,
      size: 30 + Math.random() * 80, // Entre 30px y 110px
      leftPosition: Math.random() * 100,
      duration: 3 + Math.random() * 2, // Entre 3 y 5 segundos
      delay: Math.random() * 1.5, // Escalonado hasta 1.5 segundos
      rotation: Math.random() * 360,
      xOffset: (Math.random() - 0.5) * 100, // Movimiento horizontal aleatorio
    })),
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-pink-50 via-red-50 to-rose-100 overflow-hidden"
    >
      {/* Corazones burbujeantes */}
      {heartBubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute"
          style={{
            left: `${bubble.leftPosition}%`,
            bottom: -100,
            fontSize: `${bubble.size}px`,
          }}
          initial={{
            y: 0,
            x: 0,
            opacity: 0,
            scale: 0.5,
            rotate: bubble.rotation,
          }}
          animate={{
            y: [0, -window.innerHeight - 200],
            x: [0, bubble.xOffset, -bubble.xOffset / 2, bubble.xOffset / 3],
            opacity: [0, 0.8, 0.9, 0.7, 0],
            scale: [0.5, 1.2, 1, 0.8],
            rotate: [bubble.rotation, bubble.rotation + 180],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            ease: "easeOut",
            x: {
              duration: bubble.duration,
              ease: "easeInOut",
            },
          }}
        >
          <HandDrawnHeart color="#f43f5e" />
        </motion.div>
      ))}

      {/* Mensaje durante la transición */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
      >
        <motion.h2
          className="font-parisienne text-6xl md:text-8xl text-rose-600 drop-shadow-lg"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          💕
        </motion.h2>
      </motion.div>
    </motion.div>
  );
}

// Componente de corazón dibujado a mano con SVG
function HandDrawnHeart({ color = "#f43f5e" }: { color?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full filter drop-shadow-md"
      style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))" }}
    >
      {/* Corazón con efecto dibujado a mano */}
      <motion.path
        d="M50,85 C50,85 15,65 15,40 C15,25 25,15 35,15 C42,15 47,20 50,25 C53,20 58,15 65,15 C75,15 85,25 85,40 C85,65 50,85 50,85 Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          filter: "url(#roughPaper)",
        }}
      />

      {/* Filtro para efecto rugoso/dibujado */}
      <defs>
        <filter id="roughPaper">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04"
            numOctaves="5"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="2"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
