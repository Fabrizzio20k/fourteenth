// app/page.tsx
"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import QuestionView from "@/components/QuestionView";
import AcceptanceView from "@/components/AcceptanceView";

export default function Home() {
  const [accepted, setAccepted] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!accepted ? (
        <QuestionView onAccept={() => setAccepted(true)} />
      ) : (
        <AcceptanceView />
      )}
    </AnimatePresence>
  );
}
