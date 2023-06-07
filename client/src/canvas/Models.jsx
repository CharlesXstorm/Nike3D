/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import React from 'react'
// import { useGLTF } from "@react-three/drei";
// import { Suspense } from "react";
import { useSnapshot } from "valtio";
import { useState } from "react";
import { motion } from "framer-motion-3d";
// import { AnimatePresence } from "framer-motion";
// import Nike from "./Nikegltf";
// import Models from "./N_Nikegltf";
import { state } from "../store";
import Animate from "./utils/Animate";
// import { modelList } from "../utils/models";
import Nike from "./Nikegltf";
import Nike2 from "./N_Nikegltf";
// import { textAnimation } from "../utils/animationUtil";

const Models = ({ props }) => {
  // const [models] = useState([...modelList]);
  const snap = useSnapshot(state);
  // console.log(snap.index);

  // console.log(snap.models(snap.index));
  const modelList = [
    <>
      <Nike />
    </>,
    <>
      <Nike2 />
    </>,
  ];

  const models = () => {
    switch (snap.index) {
      case snap.index:
        return modelList[snap.index];

      default:
        return;
    }
  };

  return (
    <group {...props} dispose={null}>
      {/* <Suspense fallback={null}> */}

      {<Animate>{models()}</Animate>}

      {/* </Suspense> */}
    </group>
  );
};

export default Models;
