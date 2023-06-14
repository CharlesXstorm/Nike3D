/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */

import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { state } from "../store";
import { useSnapshot } from "valtio";
import * as THREE from "three";

import { Icons } from "./Icons";

const ModelItem = ({ id, url, price, data }) => {
  const { nodes, materials } = useGLTF(url); //load gltf dynamically
  const snap = useSnapshot(state);

  const mesh = Object.keys(nodes).slice(2); //extract the required nodes
  const material = Object.keys(materials); //extract the required materials
  const color = snap.isClicked[id] ? "red" : "black"; //changing the hearticon color onclick

  const decalTexture = useTexture(snap.decalTextures[id]);

  decalTexture.wrapS = THREE.RepeatWrapping;
  decalTexture.wrapT = THREE.RepeatWrapping;
  decalTexture.repeat.set(3, 3);

  useGLTF.preload(url); //preload gltf for caching

  return (
    <group rotation={[-Math.PI / 2, Math.PI, Math.PI / 2]}>
      {mesh.map((item, index) =>
        index === 0 || material[1] === "runnerTex2" ? ( //creating geometry nodes conditionally. A specific geometry will have a decal texture attached, while others will be created normally.
          <mesh
            key={index}
            geometry={nodes[item].geometry}
            material={materials[material[index]]}
            castShadow
            receiveShadow
            dispose={null}
          >
            {
              //creating the decal texture for a specific geometry node. This decal texture will be used by the AI at the backend. Decals a simply projection maps.
              snap.decalVisibility[snap.index] && (
                <Decal
                  position={[-0.25, -0.1, -0.4]}
                  scale={3.1}
                  map={decalTexture}
                  depthTest
                  depthWrite={false}
                />
              )
            }
          </mesh>
        ) : (
          <mesh //creating a mesh without decal.
            key={index}
            geometry={nodes[item].geometry}
            material={materials[material[index]]}
          />
        )
      )}

      <Icons //bringing in the icon Component and passing the required props.
        color={color}
        id={id}
        price={price}
        data={data}
      />
    </group>
  );
};

export default ModelItem;
