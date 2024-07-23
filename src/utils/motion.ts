export const motionFadeUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const motionFadeRight = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const motionFadeLeft = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const motionFadeDown = {
  initial: { y: -60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const motionZoomIn = {
  initial: { scale: 0.7, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const motionZoomInUp = {
  initial: { scale: 0.7, y: 60, opacity: 0 },
  animate: { scale: 1, y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const motionZoomInRight = {
  initial: { scale: 0.7, x: -60, opacity: 0 },
  animate: { scale: 1, x: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const motionZoomInLeft = {
  initial: { scale: 0.7, x: 60, opacity: 0 },
  animate: { scale: 1, x: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export const motionFlipUp = {
  initial: { rotateX: -90, opacity: 0 },
  animate: { rotateX: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
};
