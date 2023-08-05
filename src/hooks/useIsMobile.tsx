"use client"

import { useEffect, useState } from "react";
import { useIsClient } from "@/context/is-client-ctx";

const useIsMobile = (size: number = 768): boolean => {
  const isClient = useIsClient();
  const [width, setWidth] = useState(isClient ? window?.innerWidth : 0);

  // create an event listener
  useEffect(() => {
    isClient ? setWidth(prev => prev + window?.innerWidth) : null;
    let timeoutId: NodeJS.Timeout | undefined = undefined;
    //choose the screen size 
    const handleResize = () => {
      // prevent execution of previous setTimeout
      if (isClient) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => setWidth(window.innerWidth), 150);
      }
    }

    isClient ? window.addEventListener("resize", handleResize) : null;

    return () => {
      isClient ? window.removeEventListener('resize', handleResize) : null;
    }
  }, [isClient])

  return (width <= size);
}

export { useIsMobile };


