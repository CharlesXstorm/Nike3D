/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */

export const textAnimation = (direction, type = "words") => {
  return {
    initial: {
      x: direction === "left" ? "-120%" : "120%",
    },
    animate: {
      x: 0,
    },
    exit: {
      x:
        direction === "left" && type === "words"
          ? "120%"
          : direction === "right" && type === "words"
          ? "-120%"
          : direction === "left" && type === "card"
          ? "-120%"
          : "160%",
      transition: { delay: 0 },
    },
    transition: { type: "spring", duration: 0.5 },
  };
};
