/* eslint-disable react/no-unknown-property */
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useRef } from "react";

const ShadowCatcher = () => {
  const shadow = useRef();
  return (
    <group
      // className={"z-2"}
      // rotation={[-Math.PI / 2, 0, 0]}
      rotation={[0, 0, 0]}
      position={[0, 0, -0.5]}
    >
      {/* <mesh receiveShadow>
        <circleGeometry args={[10]} />
        <meshStandardMaterial color={"white"} />
      </mesh> */}
      <AccumulativeShadows
        ref={shadow}
        temporal
        frames={100}
        alphaTest={0.85}
        opacity={0.85}
        scale={10}
      >
        <RandomizedLight
          amount={8}
          radius={6}
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
