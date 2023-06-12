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

export const opacityAnimation = () => {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };
};

export const speech = (setSpeech) => {
  const list = ["Hi, I'm Eve.. ", "your personal AI design assistant.."];

  for (let words in list) {
    // console.log(list[words]);
    setSpeech(list[words]);
  }
};
