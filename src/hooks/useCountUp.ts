import { useState, useEffect, useRef } from 'react';

export function useCountUp(
  target: number,
  duration = 1800,
  startTrigger = true
): number {
  const [count, setCount] = useState<number>(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startTrigger) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(easeProgress * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration, startTrigger]);

  return count;
}

