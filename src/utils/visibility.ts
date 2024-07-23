import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const useVisibility = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return { ref, isVisible };
};
