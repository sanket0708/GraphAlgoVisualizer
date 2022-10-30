import * as constant from "./constants.js";
import Search, { Cell } from "./search.js";
import Graph from "./graph.js";
import * as helper from "./helper_functions.js";

let search, graph, mouse_is_down, requestId;
let game_active = false;
let game_animation = false;
let fps = 50;
let interval = 1000 / fps;
let last = 0;
let width = 30,
  height = 30;
setup();
initialize();


