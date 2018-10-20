import { displayMovies } from '../components/movieComponent.js';
const getMovieData = () => {
  $.get('../db/movie.json')
    .done(movieData => {
      displayMovies(movieData.movies);
    })
    .fail(error => {
      console.error({ error });
    });
};

export { getMovieData };
