/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
// import React from 'react'
import { useSnapshot } from "valtio";
import { Suspense, useState } from "react";
import { Preload } from "@react-three/drei";

import { state } from "../store";
import Animate from "./utils/Animate";

import ModelItem from "./ModelItem";
import { modelList } from "../utils/models";

const Models = ({ props }) => {
  const [models] = useState([...modelList]);
  const snap = useSnapshot(state);

  return (
    <group {...props} dispose={null}>
      <Suspense fallback={null}>
        {
          <Animate //a custom component to animate the models when sliding through products
          >
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
      </Suspense>
      <Preload all />
    </group>
  );
};

export default Models;
