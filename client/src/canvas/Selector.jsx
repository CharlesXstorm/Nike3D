/* eslint-disable react/prop-types */
// import React from 'react'
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const Selector = ({ children }) => {
  const group = useRef();

  useFrame((state, delta) => {
    const target =
      window.innerWidth < 600
        ? [-0.2, 4.5, 15]
        : window.innerWidth < 1024
        ? [-0.2, 3.2, 10]
        : [-0.8, 2, 6];
    easing.damp3(state.camera.position, target, 0.25, delta);
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 4.5, -state.pointer.x / 2, 0],
      0.25,
      delta
    );
  }, []);

  return <group ref={group}>{children}</group>;
};

export default Selector;
