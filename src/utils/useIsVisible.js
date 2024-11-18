import { useState, useEffect } from "react";
export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.intersectionRatio >= 0.7), { threshold: 0.7 });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
