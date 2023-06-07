/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */

export const textAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? "-120%" : "120%",
    },
    animate: {
      x: 0,
    },
    transition: { type: "spring", duration: 0.5 },
  };
};
