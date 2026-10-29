"use client";

import { getLenis } from "@/hooks/scroll/useLenisScroll";
import { useEffect, useRef } from "react";

let lockCount = 0;
let originalOverflow = "";
let originalPaddingRight = "";

export function useScrollLock(isVisible: boolean) {
  const isLockedRef = useRef(false);

  useEffect(() => {
    if (isVisible && !isLockedRef.current) {
      lockCount++;
      isLockedRef.current = true;

      if (lockCount === 1) {
        getLenis()?.stop();

        const scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth;

        originalOverflow = document.body.style.overflow;
        originalPaddingRight = document.body.style.paddingRight;
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    }

    if (!isVisible && isLockedRef.current) {
      lockCount = Math.max(0, lockCount - 1);
      isLockedRef.current = false;

      if (lockCount === 0) {
        getLenis()?.start();
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      }
    }

    return () => {
      if (isLockedRef.current) {
        lockCount = Math.max(0, lockCount - 1);
        isLockedRef.current = false;

        if (lockCount === 0) {
          getLenis()?.start();
          document.body.style.overflow = originalOverflow;
          document.body.style.paddingRight = originalPaddingRight;
        }
      }
    };
  }, [isVisible]);
}
