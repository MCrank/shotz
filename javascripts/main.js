import { getMovieData } from './data/movieData.js';
import { getLocationData } from './data/locationData.js';

const initApp = () => {
  getMovieData();
  getLocationData();
};

initApp();
