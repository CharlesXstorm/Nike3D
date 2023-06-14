// import React from 'react'
import { state } from "../store";
import { useSnapshot } from "valtio";

import Card from "./UI/Card";
// import CustomButton from "./UI/CustomButton";
// import { AnimatePresence, motion } from "framer-motion";
import { textAnimation } from "../utils/animationUtil";

const Favourite = () => {
  const snap = useSnapshot(state);
  return (
    <Card position={"right"} p="default">
      <>
        {snap.favourite.map((item) => (
          <div
            {...textAnimation("default", "spring")}
            key={JSON.parse(item).name}
            className="flex flex-row gap-4 text-white items-center border rounded-md p-4"
          >
            <button
              onClick={() => {
                let favourite = [...snap.favourite];
                let index = favourite.indexOf(item);
                favourite.splice(index, 1);
                state.favourite = [...favourite];
                state.isClicked[JSON.parse(item).id] =
                  !state.isClicked[JSON.parse(item).id];
              }}
            >
              <span className="material-symbols-outlined">close</span>
            </button>{" "}
            <p className="text-white" style={{ fontFamily: "montserrat" }}>
              {JSON.parse(item).name}
            </p>
            <span className="text-orange-400">{JSON.parse(item).price}</span>
          </div>
        ))}
      </>
      {snap.favourite.length === 0 && (
        <div
          {...textAnimation("default", "spring")}
          key={"empty"}
          className="flex flex-row gap-4 text-white items-center border rounded-md p-4"
        >
          <p className="text-white" style={{ fontFamily: "montserrat" }}>
            There are no favourites
          </p>
          <span className="material-symbols-outlined text-red-500">error</span>
        </div>
      )}
      {/* {snap.cart.length > 0 && (
    <CustomButton
      text={"check out"}
      width={"full"}
      onClick={() => {
        state.alertBox.text = "checked out";
        state.alertBox.progress = true;
        state.alertBox.error = false;
        state.isAdded[snap.index] = true;
        setTimeout(() => {
          state.isAdded[snap.index] = false;
        }, [2100]);
      }}
    />
  )} */}
    </Card>
  );
};

export default Favourite;
