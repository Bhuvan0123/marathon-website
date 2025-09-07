import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import type { LottieRefCurrentProps } from "lottie-react";
import runningman from "../assets/Running_man.json"; // your lottie

const ScrollBar = () => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  let timeoutId: NodeJS.Timeout;

  // padding from left and right (in px)
  const sidePadding = 100;
  const runnerWidth = 80;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;

      setScrollProgress(progress);

      // detect movement
      setIsMoving(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMoving(false), 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMoving) {
      lottieRef.current?.play();
    } else {
      lottieRef.current?.pause();
    }
  }, [isMoving]);

  const updateScrollFromPosition = (x: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clampedX = Math.min(
      Math.max(x - rect.left - sidePadding, 0),
      rect.width - 2 * sidePadding
    );
    const progress = clampedX / (rect.width - 2 * sidePadding);

    setScrollProgress(progress);
    window.scrollTo({
      top:
        progress *
        (document.documentElement.scrollHeight - window.innerHeight),
      behavior: "auto",
    });
  };

  // --- Mouse + Touch handlers ---
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    e.preventDefault();
  };
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) updateScrollFromPosition(e.clientX);
  };
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  const handleTouchStart = () => setIsDragging(true);
  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging) updateScrollFromPosition(e.touches[0].clientX);
  };
  const handleTouchEnd = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-10 left-0 w-full h-24 flex items-center"
    >
      {/* Pathway line */}
      <div
        className="absolute bottom-2 left-0 w-full h-1 bg-orange-300 border-amber-200 border-10 rounded-full"
        style={{
          marginLeft: sidePadding,
          marginRight: sidePadding,
          width: `calc(100% - ${sidePadding * 2}px)`,
        }}
      />

      {/* Running woman */}
      <div
        className="absolute"
        style={{
          transform: `translateX(${
            scrollProgress *
              (window.innerWidth - 2 * sidePadding - runnerWidth) +
            sidePadding
          }px)`,
          cursor: "grab",
          width: `${runnerWidth}px`,
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={runningman}
          loop={true}
          autoplay={false}
        />
      </div>
    </div>
  );
};

export default ScrollBar;
