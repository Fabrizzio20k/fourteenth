// components/QuestionView.tsx
"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import FloatingHearts from "./FloatingHearts";
import QuestionCard from "./QuestionCard";
import ActionButtons from "./ActionButtons";
import BottomMessage from "./BottomMessage";
import { useNoButtonLogic } from "@/hooks/useNoButtonLogic";

interface QuestionViewProps {
  onAccept: () => void;
}

export default function QuestionView({ onAccept }: QuestionViewProps) {
  const containerRef = useRef<HTMLDivElement>(null!);
  const {
    noButtonRef,
    noButtonPosition,
    showEncouragement,
    clickCount,
    handleNoClick,
  } = useNoButtonLogic(containerRef);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="h-screen bg-gradient-to-br from-pink-50 via-red-50 to-rose-100 flex items-center justify-center p-4 md:p-8 overflow-hidden relative"
    >
      <FloatingHearts />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        className="text-center relative z-10 max-w-4xl w-full flex flex-col justify-center items-center max-h-[90vh]"
      >
        <motion.h1
          className="font-parisienne text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-rose-600 mb-4 md:mb-8 px-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          Hola mi amor ❤️
        </motion.h1>

        <DecorativeLine />
        <QuestionCard />
        <ActionButtons
          onYesClick={onAccept}
          onNoClick={handleNoClick}
          noButtonRef={noButtonRef}
          noButtonPosition={noButtonPosition}
          showEncouragement={showEncouragement}
          clickCount={clickCount}
        />
        <BottomMessage />
      </motion.div>
    </motion.div>
  );
}

function DecorativeLine() {
  return (
    <motion.div
      className="w-3/4 mx-auto mb-6 md:mb-12 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
    />
  );
}
