import "../scss/main.scss";

require("isomorphic-fetch");

import $ from "jquery";
window.$ = $;

import loader from "./modules/loader";
import openMenu from "./modules/openMenu";
import menuScrollable from "./modules/menuScrollable";
import manageSlider from "./modules/slider";
import fetchApis from "./modules/fetchApis";

$(document).ready(() => {
  loader(true);
  openMenu();
  manageSlider();
  fetchApis();
  setTimeout(() => {
    menuScrollable();
    loader(false);
  }, 500);
});
