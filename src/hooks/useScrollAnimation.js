import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Intersection Observer options
 * @returns {[React.RefObject, boolean]} - Ref to attach to element and visibility state
 */
export function useScrollAnimation(options = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing
          observer.unobserve(element);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return [elementRef, isVisible];
}

/**
 * Custom hook for staggered animations on multiple children
 * @param {number} itemCount - Number of items to animate
 * @param {Object} options - Intersection Observer options
 * @returns {[React.RefObject, boolean[], number]} - Ref, visibility array, and base delay
 */
export function useStaggerAnimation(itemCount, options = {}) {
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(Array(itemCount).fill(false));
  const [isContainerVisible, setIsContainerVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContainerVisible(true);
          // Stagger the visibility of items
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const newState = [...prev];
                newState[i] = true;
                return newState;
              });
            }, i * (options.staggerDelay || 100));
          }
          observer.unobserve(container);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    observer.observe(container);

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [itemCount, options.staggerDelay, options.threshold, options.rootMargin]);

  return [containerRef, visibleItems, isContainerVisible];
}

export default useScrollAnimation;
