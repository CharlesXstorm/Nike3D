/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import { Text3D, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";
import { state } from "../store";
import { useSnapshot } from "valtio";
import { motion } from "framer-motion-3d";
import * as THREE from "three";

export function Icons({ color, id, price, data }) {
  const { nodes } = useGLTF("/iconss.gltf");
  const snap = useSnapshot(state);
  const [scale, setScale] = useState(1);
  const cart = useRef();
  const heart = useRef();

  useFrame((state, delta) => {
    //The content of this hook will create smooth transitions when some values change.
    easing.dampC(heart.current.material.color, color, 0.25, delta); //drive the hearticon color attribute with the colorProp value
    easing.dampC(cart.current.material.color, snap.cartColor, 0.25, delta); //drive the carticon color attribute with the cartcolor state
    easing.dampE(cart.current.scale, [scale, scale, scale], 0.05, delta); //drive the carticon scale attribute with the scale state
  });

  const addToCart = () => {
    //a function that runs when adding to cart
    setScale(1.1); //scale the cart icon a bit
    setTimeout(() => {
      setScale(1); //wait 50ms, then scale the icon back to its original size
    }, [50]);
    let jsondata = JSON.stringify(data); //convert the dataprop to json, which is simply a stringified version of an object

    if (!snap.cart.includes(jsondata)) {
      //check if the cartList does not contain this data
      state.cart = [...snap.cart, jsondata]; //if true, add the data to the previous value of cartList and reassign it to thesame cartList
      state.alertBox.text = "Added to cart"; //Assign some properties to the alertBox object
      state.alertBox.progress = true;
      state.alertBox.error = false;
      state.isAdded[snap.index] = true; //display the custom alertBox created with the provided properties.
      setTimeout(() => {
        //wait 2.1s then remove the alertBox display
        state.isAdded[snap.index] = false;
      }, [2100]);
    } else {
      //if the cartList has this data
      state.alertBox.text = "Already added"; //Assign some properties to the alertBox object
      state.alertBox.progress = false;
      state.alertBox.error = true;
      state.isAdded[snap.index] = true; //display the custom alertBox created with the provided properties.
      setTimeout(() => {
        //wait 1.5s then remove the alertBox display
        state.isAdded[snap.index] = false;
      }, [1500]);
    }
  };

  return (
    <group rotation={[0, 0, 0]} position={[0, -0.3, 0]}>
      {
        //creating the cart icon
        <motion.mesh geometry={nodes.heartcart_1.geometry} onClick={addToCart}>
          {/*created a transparent plane at the center of the cart icon to provide wider clickable area*/}
          <meshStandardMaterial
            attach="material"
            color={"lime"}
            blending={THREE.AdditiveBlending}
            roughness={1}
            opacity={0.2}
            envMapIntensity={2}
            transparent
            depthWrite={false}
          />
        </motion.mesh>
      }
      {
        //creating the cart icon outline
        <motion.mesh
          ref={cart}
          geometry={nodes.heartcart_3.geometry}
          onClick={addToCart}
        >
          <meshStandardMaterial />
        </motion.mesh> //cart icon created
      }

      {
        //creating 3D heartIcon
        <motion.mesh
          ref={heart}
          geometry={nodes.heartcart_4.geometry}
          whileTap={{ scale: 1.1 }}
          onTap={() => {
            //toggle heartIcon click state
            state.isClicked[id] = !state.isClicked[id];

            //converting the dataprop to string. It's easier to deal with in an Array
            let jsondata = JSON.stringify(data);

            if (state.isClicked[id]) {
              //if heartIcon toggle state is true
              state.favourite = [...state.favourite, jsondata]; //add data to the favourite Array
            } else {
              //if heartIcon toggle state is false
              if (snap.favourite.includes(jsondata)) {
                //check if the data exist in the favourite Array
                let favourite = [...snap.favourite]; //assign the proxy array to an operatable variable
                let index = favourite.indexOf(jsondata); //get the index of the existing data

                favourite.splice(index, 1); //remove the data
                state.favourite = favourite; //assign the new array to favourite
              }
            }
          }}
        >
          <meshStandardMaterial />
        </motion.mesh>
        //3D heartIcon created
      }

      {
        //creating icon plane
        <mesh position={[0, -0.4, -1.2]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.5, 1, 0.05]} />
          <meshStandardMaterial
            attach="material"
            color={"lime"}
            blending={THREE.AdditiveBlending}
            roughness={0.2}
            opacity={0.8}
            envMapIntensity={2}
            transparent
          />
        </mesh>
        //Icon plane created
      }
      <Text3D
        size={0.12}
        scale-z={0.2}
        curveSegments={32}
        bevelEnabled
        bevelSize={0.006}
        bevelThickness={0.06}
        rotation-x={[-Math.PI / 2]}
        rotation-y={[-Math.PI / 2]}
        position-z={-0.9}
        position-y={-0.8}
        font={"../../fonts/inter_Bold.json"}
      >
        {price}
        <meshPhysicalMaterial color={"orange"} />
      </Text3D>
    </group>
  );
}

useGLTF.preload("/iconss.gltf");
