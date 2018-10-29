const getMoviesData = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/movie.json')
      .done(movieData => {
        resolve(movieData.movies);
      })
      .fail(error => {
        reject(error);
      });
  });
};

const getMoviesLocationsData = movieId => {
  return new Promise((resolve, reject) => {
    $.get('../db/movie.json')
      .done(response => {
        // Retunr the movieLocations array from the clicked movoe
        const selectedMovie = response.movies.find(movie => {
          return movie.id === movieId;
        }).movieLocations;
        resolve(selectedMovie);
      })
      .fail(error => {
        reject(error);
      });
  });
};

export { getMoviesData, getMoviesLocationsData };
