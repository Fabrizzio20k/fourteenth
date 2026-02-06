"use client";

import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import rough from "roughjs";

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
  const [dimensions, setDimensions] = useState({
    height: typeof window !== "undefined" ? window.innerHeight : 1000,
    width: typeof window !== "undefined" ? window.innerWidth : 1000,
  });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const heartBubbles = useGenerateHearts(dimensions.width, dimensions.height);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
    >
      {heartBubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute will-change-transform"
          style={{
            left: `${bubble.leftPosition}%`,
            bottom: -300,
            fontSize: `${bubble.size}px`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
          }}
          initial={{
            y: 0,
            x: 0,
            opacity: 1,
            scale: 0.8,
            rotate: bubble.rotation,
          }}
          animate={{
            y: -dimensions.height - 500,
            x: [0, bubble.xOffset * 0.3, bubble.xOffset * 0.7, bubble.xOffset],
            opacity: 1,
            scale: [0.8, 1.1, 1.15, 1.1, 0.9],
            rotate: bubble.rotation + 180,
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            ease: "easeInOut",
          }}
        >
          <RoughHeart color="#f43f5e" />
        </motion.div>
      ))}
    </motion.div>
  );
}

function useGenerateHearts(
  screenWidth: number,
  screenHeight: number,
): HeartBubble[] {
  return useState<HeartBubble[]>(() => {
    const hearts: HeartBubble[] = [];
    const heartSize = 300;
    const overlapFactor = 0.45;
    const spacing = heartSize * overlapFactor;

    const numCols = Math.ceil(screenWidth / spacing) + 6;
    const numRows = Math.ceil((screenHeight + 2000) / spacing) + 6;

    let id = 0;
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const leftPercent = ((col * spacing) / screenWidth) * 100 - 15;
        const sizeVariation = heartSize + (Math.random() - 0.5) * 120;

        hearts.push({
          id: id++,
          size: sizeVariation,
          leftPosition: leftPercent,
          duration: 3 + Math.random() * 2,
          delay: (row * numCols + col) * 0.006,
          rotation: Math.random() * 360,
          xOffset: (Math.random() - 0.5) * 80,
        });
      }
    }

    return hearts;
  })[0];
}

function RoughHeart({ color = "#f43f5e" }: { color?: string }) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const isDrawnRef = useRef(false);

  useEffect(() => {
    if (svgRef.current && !isDrawnRef.current) {
      svgRef.current.innerHTML = "";

      const rc = rough.svg(svgRef.current);

      const heartPath =
        "M 50,85 C 50,85 15,65 15,40 C 15,25 25,15 35,15 C 42,15 47,20 50,25 C 53,20 58,15 65,15 C 75,15 85,25 85,40 C 85,65 50,85 50,85 Z";

      const heart = rc.path(heartPath, {
        fill: color,
        fillStyle: "solid",
        stroke: "#991b1b",
        strokeWidth: 3,
        roughness: 1.2,
        bowing: 1,
      });

      svgRef.current.appendChild(heart);
      isDrawnRef.current = true;
    }
  }, [color]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 100 100"
      className="w-full h-full"
      style={{
        filter: "drop-shadow(2px 2px 4px rgba(244, 63, 94, 0.3))",
      }}
    />
  );
}
