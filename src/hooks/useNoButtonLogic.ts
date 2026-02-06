// hooks/useNoButtonLogic.ts
import { useState, useRef, useEffect, RefObject } from "react";

export function useNoButtonLogic(containerRef: RefObject<HTMLDivElement>) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showEncouragement, setShowEncouragement] = useState(false);
  const [escapeCount, setEscapeCount] = useState(0);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const encouragementTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const moveButton = () => {
    if (!containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const buttonWidth = 160;
    const buttonHeight = 60;

    const maxX = container.width - buttonWidth - 100;
    const maxY = container.height - buttonHeight - 100;

    const minDistance = 120;
    const maxDistance = 250;

    const angle = Math.random() * Math.PI * 2;
    const distance = minDistance + Math.random() * (maxDistance - minDistance);

    let newX = Math.cos(angle) * distance;
    let newY = Math.sin(angle) * distance;

    newX = Math.max(-maxX / 2, Math.min(maxX / 2, newX));
    newY = Math.max(-maxY / 2, Math.min(maxY / 2, newY));

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

      const threshold = 120;

      if (distance < threshold) {
        setEscapeCount((prev) => prev + 1);
        moveButton();

        if (encouragementTimeoutRef.current) {
          clearTimeout(encouragementTimeoutRef.current);
        }

        setShowEncouragement(true);

        encouragementTimeoutRef.current = setTimeout(() => {
          setShowEncouragement(false);
        }, 2500);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (encouragementTimeoutRef.current) {
        clearTimeout(encouragementTimeoutRef.current);
      }
    };
  }, []);

  const handleNoClick = () => {
    setEscapeCount((prev) => prev + 1);
    moveButton();

    if (encouragementTimeoutRef.current) {
      clearTimeout(encouragementTimeoutRef.current);
    }

    setShowEncouragement(true);

    encouragementTimeoutRef.current = setTimeout(() => {
      setShowEncouragement(false);
    }, 2500);
  };

  return {
    noButtonRef,
    noButtonPosition,
    showEncouragement,
    clickCount: escapeCount,
    handleNoClick,
  };
}
