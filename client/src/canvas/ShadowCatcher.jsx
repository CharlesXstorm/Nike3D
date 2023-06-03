/* eslint-disable react/no-unknown-property */
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useRef } from "react";

const ShadowCatcher = () => {
  const shadow = useRef();
  return (
    <group rotation={[0, 0, 0]} position={[0, 0, -0.5]}>
      <AccumulativeShadows
        ref={shadow}
        temporal
        frames={50}
        alphaTest={0.65}
        opacity={0.85}
        scale={10}
        // position={[0, 0, -5]}
      >
        <RandomizedLight
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={1.5}
          position={[0, 0, -5]}
          bias={0.001}
        />
      </AccumulativeShadows>
    </group>
  );
};

export default ShadowCatcher;
