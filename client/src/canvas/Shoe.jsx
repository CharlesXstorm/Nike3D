/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import React from 'react'
// import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Nikegltf";

const Shoe = ({ props }) => {
  return (
    <group {...props} dispose={null}>
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </group>
  );
};

export default Shoe;
