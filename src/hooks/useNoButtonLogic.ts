// hooks/useNoButtonLogic.ts
import { useState, useRef, useEffect, RefObject } from "react";

export function useNoButtonLogic(containerRef: RefObject<HTMLDivElement>) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showEncouragement, setShowEncouragement] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isNearCursor, setIsNearCursor] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const moveButton = () => {
    if (!containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const buttonWidth = 200;
    const buttonHeight = 80;

    const maxX = container.width - buttonWidth - 100;
    const maxY = container.height - buttonHeight - 100;

    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;

    setNoButtonPosition({ x: newX, y: newY });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!noButtonRef.current) return;

      const button = noButtonRef.current;
      const buttonRect = button.getBoundingClientRect();
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;

      const distance = Math.sqrt(
        Math.pow(e.clientX - buttonCenterX, 2) +
          Math.pow(e.clientY - buttonCenterY, 2),
      );

      const threshold = 180;

      if (distance < threshold) {
        setIsNearCursor(true);
        moveButton();
      } else {
        setIsNearCursor(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleNoClick = () => {
    setShowEncouragement(true);
    setClickCount((prev) => prev + 1);
    moveButton();

    setTimeout(() => {
      setShowEncouragement(false);
    }, 2500);
  };

  return {
    noButtonRef,
    noButtonPosition,
    showEncouragement,
    clickCount,
    isNearCursor,
    handleNoClick,
  };
}
