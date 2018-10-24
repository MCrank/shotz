import { getLocationData } from "./data/locationData.js";
import { addEvents } from "./events.js";
import { initMoviesCards } from "./components/movieComponent.js";

const initApp = () => {
  initMoviesCards();
  getLocationData();
  addEvents();
};

initApp();
