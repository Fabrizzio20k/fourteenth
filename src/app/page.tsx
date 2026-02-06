"use client";

import { useState } from "react";
import QuestionView from "@/components/QuestionView";
import AcceptanceView from "@/components/AcceptanceView";
import HeartsBubblesTransition from "@/components/HeartsBubblesTransition";

export default function Home() {
  const [accepted, setAccepted] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [showAcceptanceView, setShowAcceptanceView] = useState(false);

  const handleAccept = () => {
    setShowTransition(true);

    setTimeout(() => {
      setShowAcceptanceView(true);
    }, 2500);

    setTimeout(() => {
      setAccepted(true);
    }, 500);

    setTimeout(() => {
      setShowTransition(false);
    }, 9000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {!showAcceptanceView && (
        <div className="absolute inset-0 z-0">
          <QuestionView onAccept={handleAccept} />
        </div>
      )}

      {showAcceptanceView && (
        <div className="absolute inset-0 z-0">
          <AcceptanceView />
        </div>
      )}

      {showTransition && (
        <div className="absolute inset-0 z-10">
          <HeartsBubblesTransition />
        </div>
      )}
    </div>
  );
}
