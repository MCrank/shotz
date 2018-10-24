const getMoviesData = () => {
  return new Promise((resolve, reject) => {
    $.get("../db/movie.json")
      .done(movieData => {
        resolve(movieData.movies);
      })
      .fail(error => {
        reject(error);
      });
  });
};

export { getMoviesData };
