"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface SponsorGroup {
  logos: string[];
  designation: string;
}

export const InfiniteMovingCards = ({
  data,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  data: SponsorGroup[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate data for infinite loop
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }

      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }

      setStart(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-6",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {data.map((group, idx) => (
          <li
            key={idx}
            className="relative shrink-0 rounded-2xl border border-yellow-200 bg-gradient-to-b from-yellow-50 to-orange-50 px-8 py-6 shadow-md w-fit flex flex-col items-center"
          >
            {/* Logos in one row */}
            <div className="flex items-center justify-center gap-6 px-4">
              {group.logos.map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`Sponsor ${i}`}
                  className="h-12 md:h-16 w-auto object-contain"
                />
              ))}
            </div>

            {/* Sponsor designation */}
            <div className="mt-4 text-center text-lg font-semibold text-red-600">
              {group.designation}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
