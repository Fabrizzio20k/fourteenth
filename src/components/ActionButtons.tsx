// components/ActionButtons.tsx
import YesButton from "./YesButton";
import NoButton from "./NoButton";
import { RefObject } from "react";

interface ActionButtonsProps {
  onYesClick: () => void;
  onNoClick: () => void;
  noButtonRef: RefObject<HTMLDivElement | null>;
  noButtonPosition: { x: number; y: number };
  showEncouragement: boolean;
  clickCount: number;
}

export default function ActionButtons({
  onYesClick,
  onNoClick,
  noButtonRef,
  noButtonPosition,
  showEncouragement,
  clickCount,
}: ActionButtonsProps) {
  return (
    <div className="flex gap-12 items-center justify-center mt-16">
      <YesButton onClick={onYesClick} />

      <NoButton
        ref={noButtonRef}
        onClick={onNoClick}
        position={noButtonPosition}
        showEncouragement={showEncouragement}
        clickCount={clickCount}
      />
    </div>
  );
}
