import { getMovieData } from "./data/movieData.js";
import { getLocationData } from "./data/locationData.js";
import { addEvents } from "./events.js";

const initApp = () => {
  getMovieData();
  getLocationData();
  addEvents();
};

initApp();
