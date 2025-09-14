import { Variants } from "framer-motion";

// Check for reduced motion preference
const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// Create motion-safe variants that respect user preferences
const createMotionSafeVariants = (variants: Variants): Variants => {
  if (prefersReducedMotion()) {
    return {
      initial: { opacity: 0 },
      animate: { 
        opacity: 1,
        transition: { duration: 0.01 } // Minimal transition for accessibility
      },
    };
  }
  return variants;
};

// Fade animations
export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const fadeInDown: Variants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Slide animations
export const slideInFromLeft: Variants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const slideInFromRight: Variants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Scale animations
export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Stagger container
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Stagger item
export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Text reveal animation
export const textReveal: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: "easeInOut",
  },
};

export const hoverRotate = {
  rotate: 5,
  transition: {
    duration: 0.2,
    ease: "easeInOut",
  },
};

// Page transition
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

// Motion-safe variants that respect user preferences
export const fadeInSafe = createMotionSafeVariants(fadeIn);
export const fadeInUpSafe = createMotionSafeVariants(fadeInUp);
export const fadeInDownSafe = createMotionSafeVariants(fadeInDown);
export const slideInFromLeftSafe = createMotionSafeVariants(slideInFromLeft);
export const slideInFromRightSafe = createMotionSafeVariants(slideInFromRight);
export const scaleInSafe = createMotionSafeVariants(scaleIn);
export const textRevealSafe = createMotionSafeVariants(textReveal);

// Viewport options for scroll animations
export const viewportOptions = {
  once: true,
  amount: 0.3,
};

// Custom easing functions
export const customEasing = {
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutCubic: [0.645, 0.045, 0.355, 1],
  easeInOutQuart: [0.77, 0, 0.175, 1],
};

// Utility to check if motion should be reduced
export const shouldReduceMotion = prefersReducedMotion;

