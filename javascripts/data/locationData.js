const getLocationData = () => {
  return new Promise((resolve, reject) => {
    $.get("../db/locations.json")
      .done(locationData => {
        resolve(locationData.locations);
      })
      .fail(error => {
        reject(error);
      });
  });
};

export { getLocationData };
