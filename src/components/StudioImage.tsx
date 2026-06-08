"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type StudioImageProps = {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

export function StudioImage({
  src,
  fallbackSrc,
  alt,
  className,
  imgClassName
}: StudioImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <div className={cn("overflow-hidden", className)}>
      <img
        src={currentSrc}
        alt={alt}
        className={cn("h-full w-full object-cover", imgClassName)}
        loading="lazy"
        onError={() => {
          if (currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
          }
        }}
      />
    </div>
  );
}
