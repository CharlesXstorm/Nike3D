import { proxy } from "valtio";
// import { useSnapshot } from "valtio";

export const state = proxy({
  heartColor: "black",
  cartColor: "black",
});

// export const ToggleState = (dispatch) => {
//   const snap = useSnapshot(state);

//   switch (dispatch) {
//     case "heartColor":
//       state.heartColor = snap.heartColor === "black" ? "red" : "black";
//       break;
//     default:
//       return;
//   }
// };
