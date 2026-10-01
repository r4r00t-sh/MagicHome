"use client";

import { useEffect, useState } from "react";

/** Avoid Framer Motion SSR/client style mismatches */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
