import { proxy } from "valtio";

import { modelList } from "../utils/models";

export const state = proxy({
  heartColor: "black",
  cartColor: "black",
  changePos: 0,
  index: 0,
  indexLen: modelList.length,
});
