import { useEffect, useState } from "react";
export default function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };
    checkIsMobile(); // Check on initial load
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [breakpoint]);
  return isMobile;
}
