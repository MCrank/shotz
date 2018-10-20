import { displayLocations } from '../components/locationComponent.js';

const getLocationData = () => {
  $.get('../db/locations.json')
    .done(locationData => {
      //   console.log(locationData.locations);
      displayLocations(locationData.locations);
    })
    .fail(error => {
      console.log({ error });
    });
};

export { getLocationData };
