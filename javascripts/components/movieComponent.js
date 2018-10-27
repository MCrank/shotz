import { getMoviesData } from "../data/movieData.js";

const displayMovies = myMovies => {
  let newString = "";
  myMovies.forEach(movie => {
    let releaseDate = moment(movie.releaseDate).format("MMMM Do YYYY");
    newString += `
    <div class="col-md-4">
      <div class="mov-card${movie.id} card mb-4 shadow-sm">
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
  $("#movie-tron").append(newString);
};

const initMoviesCards = () => {
  getMoviesData()
    .then(movies => {
      displayMovies(movies);
    })
    .catch(error => {
      console.error();
    });
};

export { initMoviesCards };
