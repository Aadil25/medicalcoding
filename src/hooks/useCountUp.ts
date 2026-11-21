import { useState, useEffect, useRef } from 'react';

export function useCountUp(
  target: number,
  duration = 1800,
  startTrigger = true,
  decimals = 0
): string {
  const [val, setVal] = useState<number>(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startTrigger) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeProgress * target;
      setVal(currentVal);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setVal(target);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration, startTrigger]);

  if (!startTrigger) {
    return target.toFixed(decimals);
  }

  return val.toFixed(decimals);
}
