/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */

export const textAnimation = (direction, type = "words") => {
  //a custom function with framer-motion attributes for translation animations
  switch (type) {
    case "spring":
      return {
        initial: { opacity: 0, scale: 0 },
        animate: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            type,
            stiffness: 400,
            ease: "easeInOut",
          },
        },
        exit: {
          opacity: 0,
          scale: 0,
          transition: { duration: 0.5, type, ease: "easeInOut" },
        },
      };
    default:
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
              : "200%",
          transition: { delay: 0, duration: type === "words" ? 0.5 : 0.1 },
        },
        transition: { type: "spring", duration: 0.5 },
      };
  }
};

export const opacityAnimation = () => {
  //a custom function with framer-motion attributes for opacity animations
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };
};
