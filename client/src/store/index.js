import { proxy } from "valtio";

import { modelList } from "../utils/models";

export const state = proxy({
  heartColor: "black",
  cartColor: "black",
  changePos: 0,
  direction: "left",
  index: 0,
  indexLen: modelList.length,
  isClicked: [false, false],
  isTech: false,
});
