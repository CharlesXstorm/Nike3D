/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { motion } from "framer-motion-3d";

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
      <motion.mesh
        initial={{ scale: [0, 0, 0] }}
        animate={{ scale: [1, 1, 1] }}
        transition={{ duration: 2, ease: "easeInOut" }}
        position={[-1, 0, -11]}
        receiveShadow={false}
      >
        <sphereGeometry args={[10, 20, 20]} />
        <meshStandardMaterial wireframe color={"lime"} opacity={0} />
      </motion.mesh>
    </group>
  );
};

export default Background;
