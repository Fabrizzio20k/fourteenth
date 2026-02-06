// app/page.tsx
"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import QuestionView from "@/components/QuestionView";
import AcceptanceView from "@/components/AcceptanceView";
import HeartsBubblesTransition from "@/components/HeartsBubblesTransition";

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  const handleAccept = () => {
    setShowTransition(true);
    setTimeout(() => {
      setAccepted(true);
      setShowTransition(false);
    }, 4000);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!accepted && !showTransition && (
          <QuestionView onAccept={handleAccept} />
        )}
        {accepted && <AcceptanceView />}
      </AnimatePresence>

      {showTransition && <HeartsBubblesTransition />}
    </>
  );
}
