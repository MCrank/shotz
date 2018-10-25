import { initMoviesCards } from "./components/movieComponent.js";
import { initLocationCards } from "./components/locationComponent.js";
import { addEvents } from "./events.js";

const initApp = () => {
  initMoviesCards();
  initLocationCards();
  addEvents();
};

initApp();
