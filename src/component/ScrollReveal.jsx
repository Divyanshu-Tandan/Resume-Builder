"use client";
import { useEffect, useRef } from "react";

const ANIMATIONS = {
  slideLeft: "opacity-0 translate-x-64",
  slideRight: "opacity-0 -translate-x-64",
  slideDown: "opacity-0 -translate-y-64",
  slideUp: "opacity-0 translate-y-64",
  fadeSlideLeft: "opacity-0 translate-x-64 scale-95",
  fadeSlideRight: "opacity-0 -translate-x-64 scale-95",
  fadeSlideDown: "opacity-0 -translate-y-64 scale-95",
  fadeSlideUp: "opacity-0 translate-y-64 scale-95",
  slightLeft: "opacity-0 translate-x-16",
  slightRight: "opacity-0 -translate-x-16",
  slightUp: "opacity-0 translate-y-16",
  slightDown: "opacity-0 -translate-y-16",
  fadeIn: "opacity-0 scale-95",
  scaleUp: "opacity-0 scale-75",
  flipIn: "opacity-0 rotateX-90",
  slideBottomLeft: "opacity-0 translate-x-32 translate-y-32",
  slideBottomRight: "opacity-0 -translate-x-32 translate-y-32",
  slightBottomLeft: "opacity-0 translate-x-16 translate-y-16",
  slightBottomRight: "opacity-0 -translate-x-16 translate-y-16",
  spinIn: "opacity-0 rotate-180 scale-90",
  spinFromLeft: "opacity-0 -translate-x-64 rotate-180 scale-90",
  spinFromRight: "opacity-0 translate-x-64 rotate-180 scale-90",
  slightspinFromLeft: "opacity-0 -translate-x-16 rotate-90 scale-90",
  spinRollLeft: "opacity-0 -translate-x-64 rotate-360 scale-90",
  spinRollRight: "opacity-0 translate-x-64 rotate-360 scale-90",
};

const EASINGS = {
  smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  bouncy: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  gentle: "cubic-bezier(0.34, 1.56, 0.64, 1)",
};

const ScrollReveal = ({
  children,
  className = "",
  animation = "slideLeft",
  duration = 800,
  delay = 0,
  easing = "smooth",
  index = 0,
  stagger = 0,
  disableBelow = null,
}) => {
  const elementRef = useRef(null);
  const animationCompleted = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if disabled on mobile
    let isDisabled = false;
    if (disableBelow) {
      const breakpoints = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
      };
      const breakpointWidth = breakpoints[disableBelow] || 0;
      isDisabled = window.innerWidth < breakpointWidth;
    }

    // If disabled, show element immediately without animation
    if (isDisabled) {
      element.style.opacity = "1";
      element.style.transform = "none";
      element.style.transition = "none";
      return;
    }

    // Set initial state based on animation type - using JavaScript instead of CSS classes
    element.style.opacity = "0";
    element.style.transition = `all ${duration}ms ${EASINGS[easing]}`;
    
    // Apply initial transform based on animation type
    switch (animation) {
      case "slideLeft":
        element.style.transform = "translateX(16rem)";
        break;
      case "slideRight":
        element.style.transform = "translateX(-16rem)";
        break;
      case "slideDown":
        element.style.transform = "translateY(-16rem)";
        break;
      case "slideUp":
        element.style.transform = "translateY(16rem)";
        break;
      case "fadeSlideLeft":
        element.style.transform = "translateX(16rem) scale(0.95)";
        break;
      case "fadeSlideRight":
        element.style.transform = "translateX(-16rem) scale(0.95)";
        break;
      case "fadeSlideDown":
        element.style.transform = "translateY(-16rem) scale(0.95)";
        break;
      case "fadeSlideUp":
        element.style.transform = "translateY(16rem) scale(0.95)";
        break;
      case "slightLeft":
        element.style.transform = "translateX(4rem)";
        break;
      case "slightRight":
        element.style.transform = "translateX(-4rem)";
        break;
      case "slightUp":
        element.style.transform = "translateY(4rem)";
        break;
      case "slightDown":
        element.style.transform = "translateY(-4rem)";
        break;
      case "fadeIn":
        element.style.transform = "scale(0.95)";
        break;
      case "scaleUp":
        element.style.transform = "scale(0.75)";
        break;
      case "spinIn":
        element.style.transform = "rotate(180deg) scale(0.9)";
        break;
      case "spinFromLeft":
        element.style.transform = "translateX(-16rem) rotate(180deg) scale(0.9)";
        break;
      case "spinFromRight":
        element.style.transform = "translateX(16rem) rotate(180deg) scale(0.9)";
        break;
      case "spinRollLeft":
        element.style.transform = "translateX(-16rem) rotate(360deg) scale(0.9)";
        break;
      case "spinRollRight":
        element.style.transform = "translateX(16rem) rotate(360deg) scale(0.9)";
        break;
      default:
        element.style.transform = "translateX(4rem)";
    }

    // Handle resize
    const handleResize = () => {
      if (!disableBelow) return;
      const breakpoints = {
        sm: 640,
        md: 768,
        lg: 1024,  
        xl: 1280,
        "2xl": 1536,
      };
      const breakpointWidth = breakpoints[disableBelow] || 0;
      if (window.innerWidth < breakpointWidth) {
        element.style.opacity = "1";
        element.style.transform = "none";
        element.style.transition = "none";
      }
    };

    window.addEventListener("resize", handleResize);

    // Handle intersection for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationCompleted.current) {
            const totalDelay = delay + index * stagger;
            setTimeout(() => {
              element.style.opacity = "1";
              element.style.transform = "translate(0, 0) rotate(0) scale(1)";
              animationCompleted.current = true;
            }, totalDelay);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [animation, delay, duration, easing, index, stagger, disableBelow]);

  // Don't apply any CSS classes - let JavaScript handle everything
  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;