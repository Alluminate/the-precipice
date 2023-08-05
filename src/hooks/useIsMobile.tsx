"use client"

import { useEffect, useState } from "react";

const useIsMobile = (size: number = 768): boolean => {
  const [width, setWidth] = useState(window.innerWidth);

  // create an event listener
  useEffect(() => {
    setWidth(prev => prev + window.innerWidth);
    let timeoutId: NodeJS.Timeout | undefined = undefined;
    //choose the screen size 
    const handleResize = () => {
       // prevent execution of previous setTimeout
       clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => setWidth(window.innerWidth), 150);
    }
  
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (width <= size);
}

export { useIsMobile };


