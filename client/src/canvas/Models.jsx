/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import React from 'react'
// import { useGLTF } from "@react-three/drei";
// import { Suspense } from "react";
import { useSnapshot } from "valtio";
import { useState } from "react";
// import { motion } from "framer-motion-3d";
// import { AnimatePresence } from "framer-motion";
// import Nike from "./Nikegltf";
// import Models from "./N_Nikegltf";
import { state } from "../store";
import Animate from "./utils/Animate";
// import { modelList } from "../utils/models";
import ModelItem from "./ModelItem";
import { modelList } from "../utils/models";
// import { textAnimation } from "../utils/animationUtil";

const Models = ({ props }) => {
  const [models] = useState([...modelList]);
  const snap = useSnapshot(state);

  // console.log(models[0].id);

  // const modelList = [
  //   <>
  //     <Nike />
  //   </>,
  //   <>
  //     <ModelItem />
  //   </>,
  // ];

  // const models = () => {
  //   switch (snap.index) {
  //     case snap.index:
  //       return modelList[snap.index];

  //     default:
  //       return;
  //   }
  // };

  return (
    <group {...props} dispose={null}>
      {/* <Suspense fallback={null}> */}

      {
        <Animate>
          {models.map(
            (item) =>
              snap.index === item.id && (
                <ModelItem
                  key={item.id}
                  id={item.id}
                  url={item.url}
                  price={item.price}
                  data={item}
                />
              )
          )}
        </Animate>
      }

      {/* </Suspense> */}
    </group>
  );
};

export default Models;
