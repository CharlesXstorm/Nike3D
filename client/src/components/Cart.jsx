/* eslint-disable react/prop-types */
// import React from 'react'
import { state } from "../store";
import { useSnapshot } from "valtio";

import ButtonIncrement from "./UI/ButtonIncrement";
import Card from "./UI/Card";
import CustomButton from "./UI/CustomButton";
import { textAnimation } from "../utils/animationUtil";

const Cart = ({ setIsCart }) => {
  const snap = useSnapshot(state);
  return (
    <Card position={"right"} p="default">
      <>
        {snap.cart.map((item) => (
          <div
            {...textAnimation("default", "spring")}
            key={JSON.parse(item).name}
            className="flex flex-row gap-4 text-white items-center border rounded-md p-4"
          >
            <button
              onClick={() => {
                let cart = [...snap.cart];
                let index = cart.indexOf(item);
                cart.splice(index, 1);
                state.cart = [...cart];
              }}
            >
              <span className="material-symbols-outlined">close</span>
            </button>{" "}
            <p className="text-white" style={{ fontFamily: "montserrat" }}>
              {JSON.parse(item).name}
            </p>
            <span className="text-orange-400">{JSON.parse(item).price}</span>
            <ButtonIncrement />
          </div>
        ))}
      </>
      {snap.cart.length === 0 && (
        <div
          {...textAnimation("default", "spring")}
          key={"empty"}
          className="flex flex-row gap-4 text-white items-center border rounded-md p-4"
        >
          <p className="text-white" style={{ fontFamily: "montserrat" }}>
            There are no items in cart
          </p>
          <span className="material-symbols-outlined text-red-500">error</span>
        </div>
      )}
      {snap.cart.length > 0 && (
        <CustomButton
          text={"check out"}
          width={"full"}
          onClick={() => {
            setIsCart(false);
            state.alertBox.text = "checked out";
            state.alertBox.progress = true;
            state.alertBox.error = false;
            state.isAdded[snap.index] = true;
            setTimeout(() => {
              state.isAdded[snap.index] = false;
            }, [2100]);
          }}
        />
      )}
    </Card>
  );
};

export default Cart;
