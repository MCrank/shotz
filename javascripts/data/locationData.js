const getLocationData = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/locations.json')
      .done(locationData => {
        resolve(locationData.locations);
      })
      .fail(error => {
        reject(error);
      });
  });
};

const loadMovieLocations = movieLocationArr => {
  return new Promise((resolve, reject) => {
    $.get('../db/locations.json')
      .done(locationData => {
        let filteredMovLoc = [];
        const myMovLoc = movieLocationArr.forEach(movieLoc => {
          const filteredLoc = locationData.locations.filter(location => {
            return parseInt(location.id) === movieLoc;
          });
          filteredMovLoc.push(filteredLoc[0]);
        });
        resolve(filteredMovLoc);
      })
      .fail(error => {
        reject(error);
      });
  });
};

export { getLocationData, loadMovieLocations };
