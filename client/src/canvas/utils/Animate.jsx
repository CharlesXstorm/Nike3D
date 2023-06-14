/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import { easing } from "maath";
import { state } from "../../store";

const Animate = ({ children, ...props }) => {
  const snap = useSnapshot(state);
  const animate = useRef();

  useFrame((state, delta) => {
    //animating the Ypositon of the model when sliding through products.
    easing.dampE(animate.current.position, [0, snap.changePos, 0], 0.25, delta);
  });

  return <group ref={animate}>{children}</group>;
};

export default Animate;
