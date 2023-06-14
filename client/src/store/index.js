import { proxy } from "valtio";

import { modelList } from "../utils/models";

export const state = proxy({
  //proxy for valtio state management tool
  heartColor: "black",
  cartColor: "black",
  changePos: 0,
  direction: "left",
  index: 0,
  indexLen: modelList.length,
  isClicked: [],
  isAdded: [],
  alertBox: [],
  isTech: false,
  decalTextures: ["/threejs.png", "/threejs.png", "/threejs.png"],
  decalVisibility: [],
  favourite: [],
  cart: [],
});
