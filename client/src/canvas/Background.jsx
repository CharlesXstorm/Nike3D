/* eslint-disable react/no-unknown-property */
// import React from "react";

const Background = () => {
  return (
    <group>
      {/* <mesh position-z={[-12]}>
        <circleGeometry args={[10]} />
        <meshStandardMaterial color={"red"} />
      </mesh> */}
      <mesh position={[-1, 0, -8]}>
        <sphereGeometry args={[10, 20, 20]} />
        <meshStandardMaterial wireframe color={"black"} />
      </mesh>
    </group>
  );
};

export default Background;
