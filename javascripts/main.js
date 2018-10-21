import { getMovieData } from "./data/movieData.js";
import { getLocationData } from "./data/locationData.js";
import { inputEvents } from "./events.js";

const initApp = () => {
  getMovieData();
  getLocationData();
  inputEvents();
};

initApp();
