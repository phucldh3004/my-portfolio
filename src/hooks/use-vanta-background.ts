"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

interface VantaEffect {
  destroy: () => void;
}

interface VantaWindow extends Window {
  VANTA?: { NET?: (options: Record<string, unknown>) => VantaEffect };
}

const VANTA_OPTIONS = {
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x0c4a6e,
  backgroundColor: 0x0a0a0a,
  points: 16.0,
  maxDistance: 31.0,
  spacing: 21.0,
};

/** The background is decorative but heavy (three.js ~600 KB + WebGL loop): skip it on small/low-motion/data-saver devices. */
function canRunHeavyBackground(): boolean {
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return (
    window.matchMedia("(min-width: 768px)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    !connection?.saveData
  );
}

function runWhenIdle(callback: () => void) {
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(callback, { timeout: 3000 });
  } else {
    setTimeout(callback, 1500);
  }
}

/** True once the device qualifies AND the page has finished loading and is idle. */
function useEnabledWhenIdle(): boolean {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!canRunHeavyBackground()) return;

    const enable = () => runWhenIdle(() => setEnabled(true));
    if (document.readyState === "complete") {
      enable();
      return;
    }
    window.addEventListener("load", enable, { once: true });
    return () => window.removeEventListener("load", enable);
  }, []);

  return enabled;
}

/** Creates the Vanta NET effect on `ref` once its scripts are ready, and destroys it on cleanup. */
function useVantaEffect(ref: RefObject<HTMLElement | null>, ready: boolean) {
  useEffect(() => {
    const NET = (window as VantaWindow).VANTA?.NET;
    if (!ready || !ref.current || !NET) return;

    let effect: VantaEffect | null = null;
    try {
      effect = NET({ el: ref.current, ...VANTA_OPTIONS });
    } catch (err) {
      console.error("Failed to initialize Vanta.js NET:", err);
    }
    // Destroy on cleanup to avoid WebGL memory leaks
    return () => effect?.destroy();
  }, [ref, ready]);
}

/**
 * Lazily enables the Vanta background. Render the three.js script when `enabled`, the
 * Vanta script when `threeLoaded` (so window.THREE always exists), and wire the two callbacks.
 */
export function useVantaBackground(ref: RefObject<HTMLElement | null>) {
  const enabled = useEnabledWhenIdle();
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [vantaLoaded, setVantaLoaded] = useState(false);

  useVantaEffect(ref, threeLoaded && vantaLoaded);

  return {
    enabled,
    threeLoaded,
    onThreeLoad: () => setThreeLoaded(true),
    onVantaLoad: () => setVantaLoaded(true),
  };
}
