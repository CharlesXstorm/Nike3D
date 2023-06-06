/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const Background = () => {
  const backdrop = useRef();
  useFrame((state, delta) => {
    // console.log(backdrop.current);
    easing.damp3(
      backdrop.current.rotation,
      [state.pointer.y / 40, state.pointer.x / 6, 0],
      0.25,
      delta
    );
  });
  return (
    <group ref={backdrop}>
      {/* <mesh position-z={[-12]}>
        <circleGeometry args={[10]} />
        <meshStandardMaterial color={"red"} />
      </mesh> */}
      <mesh position={[-1, 0, -11]} receiveShadow={false}>
        <sphereGeometry args={[10, 20, 20]} />
        <meshStandardMaterial wireframe color={"black"} opacity={0} />
      </mesh>
    </group>
  );
};

export default Background;
