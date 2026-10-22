"use client";

import { useLenisScroll } from "@/hooks/scroll/useLenisScroll";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useLenisScroll();

  return <>{children}</>;
}
