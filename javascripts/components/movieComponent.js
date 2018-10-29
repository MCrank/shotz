import { getMoviesData, getMoviesLocationsData } from '../data/movieData.js';
import { loadMovieLocations } from '../data/locationData.js';
import { movieCardEvents } from '../events.js';
import { displayLocations } from '../components/locationComponent.js';
// import { movieCardLocFilter } from '../components/locationComponent.js';

const displayMovies = myMovies => {
  let newString = '';
  myMovies.forEach(movie => {
    let releaseDate = moment(movie.releaseDate).format('MMMM Do YYYY');
    newString += `
    <div class="mov-card col-md-4" id="${movie.id}">
      <div class="card mb-4 shadow-sm">
        <h3 class="card-title text-center pt-2"><em>${movie.name}</em></h3>
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="text-capitalize"><strong>Genre:</h6>
            <h6></strong>${movie.genre}</h6>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <h6>Release Date:</h6>
            <h6><em>${releaseDate}</em></h6>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <h6>Number of Locations:</h6>
            <h6>${movie.movieLocations.length}</h6>
          </div>
          <hr>
          <p class="card-text">${movie.description}</p>
        </div>
      </div>
    </div>
    `;
  });
  $('#movie-tron').append(newString);
};

// When I click on a card only show the card that I clicked
// Pass the MovieId to get the array of lcations
// Filter the locations
const movieSelectFilter = movieId => {
  $('.mov-card').each((index, movie) => {
    if (movie.id !== movieId) {
      $(movie).hide();
    } else {
      $(movie).show();
    }
  });
  // Okay now that we have hidden non clicked movies let's get
  getMoviesLocationsData(movieId) // Returns the Array of Locations for this movie
    .then(movieLocations => {
      return loadMovieLocations(movieLocations);
      //return movieLocFilter(movieLocations); //Hide all locations not a part of this movie
    })
    .then(filteredLocations => {
      console.log('My single movie Locs: ', filteredLocations);
      displayLocations(filteredLocations);
    })
    .catch(error => {
      console.error(error);
    });
};

// const getMovieLocationArray

const initMoviesCards = () => {
  getMoviesData()
    .then(movies => {
      displayMovies(movies);
      // Wire up the Movie Card Click events
      // TODO: Ask the instructors about this?  I thought with JQuery could use .on() to handl eit different
      movieCardEvents();
    })
    .catch(error => {
      console.error();
    });
};

export { initMoviesCards, movieSelectFilter };
