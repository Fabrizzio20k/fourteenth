// components/ActionButtons.tsx
import YesButton from "./YesButton";
import NoButton from "./NoButton";
import EncouragementTooltip from "./EncouragementTooltip";
import { RefObject } from "react";

interface ActionButtonsProps {
  onYesClick: () => void;
  onNoClick: () => void;
  noButtonRef: RefObject<HTMLButtonElement | null>;
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
    <div className="flex gap-12 md:gap-16 justify-center items-center relative">
      <YesButton onClick={onYesClick} />

      <div className="relative">
        <EncouragementTooltip
          show={showEncouragement}
          clickCount={clickCount}
        />
        <NoButton
          ref={noButtonRef}
          onClick={onNoClick}
          position={noButtonPosition}
        />
      </div>
    </div>
  );
}
