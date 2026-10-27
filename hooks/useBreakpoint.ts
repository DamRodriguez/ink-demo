import breakpoints from "@/config/breakpoints";
import { useEffect, useState } from "react";

const useBreakpoint = (breakpoint = breakpoints.md) => {
  const getQuery = (breakpoint: number) => `(max-width: ${breakpoint}px)`;

  const [isMobile, setIsMobile] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia(getQuery(breakpoint)).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(getQuery(breakpoint));

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useBreakpoint;
