import { proxy } from "valtio";

import { modelList } from "../utils/models";
// import { img } from "../../public/img";

export const state = proxy({
  heartColor: "black",
  cartColor: "black",
  changePos: 0,
  direction: "left",
  index: 0,
  indexLen: modelList.length,
  isClicked: [false, false, false],
  isTech: false,
  decalTextures: ["/threejs.png", "/threejs.png", "/threejs.png"],
  decalVisibility: [false, false, false],
  favourite: [],
  cart: [],
});
