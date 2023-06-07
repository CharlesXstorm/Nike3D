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

  //   console.log(snap.changePos);

  useFrame((state, delta) => {
    // const target =
    //   window.innerWidth < 600
    //     ? [-0.5, 4.5, 15]
    //     : window.innerWidth < 1024
    //     ? [-0.5, 3.2, 10]
    //     : [-0.8, 2, 6];
    // console.log(animate.current);
    easing.dampE(animate.current.position, [0, snap.changePos, 0], 0.25, delta);
  });

  return <group ref={animate}>{children}</group>;
};

export default Animate;
