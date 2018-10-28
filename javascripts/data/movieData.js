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
        const selectedMovie = response.movies.filter(movie => {
          return movie.id === movieId;
        });
        resolve(selectedMovie[0].movieLocations);
      })
      .fail(error => {
        reject(error);
      });
  });
};

export { getMoviesData, getMoviesLocationsData };
