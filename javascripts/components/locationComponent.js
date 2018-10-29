import { getLocationData } from '../data/locationData.js';

const displayLocations = myLocations => {
  $('#location-cards').empty();
  let newString = '';
  myLocations.forEach(location => {
    newString += `
      <div class="loc-card card col-md-3 px-0 mx-2 mb-3 text-white bg-dark shadow rounded" id="${location.id}">
        <img class="card-img-top px-2 pt-2" src="${location.img}" alt="${location.name}">
          <div class="card-body">
            <h5 class="card-title"><em>${location.name}</em></h5>
            <p class="card-text m-0"><u>Address:</u></p>
            <p class="loc-adx card-text">${location.address}</p>
          </div>
          <div class="card-footer">
            <p class="loc-time m-0">Shoot Time: <span class="badge badge-light">${location.shootTime}</span></p>
          </div>
      </div>
      `;
  });
  $('#location-cards').append(newString);
};

const userInputFilter = inputValue => {
  $('.loc-card').each(function() {
    if (
      $(this)
        .find('.card-title em')
        .not(`:icontains(${inputValue})`)
        .html() &&
      $(this)
        .find('.loc-adx')
        .not(`:icontains(${inputValue})`)
        .html()
    ) {
      $(this)
        .closest('.loc-card')
        .fadeOut(800);
    } else {
      $(this)
        .closest('.loc-card')
        .fadeIn(800);
    }
  });
};

const userBtnFilter = evtTarget => {
  if (evtTarget.innerHTML === 'Show All') {
    $('.loc-card').fadeIn(800);
    return;
  }
  $('.loc-card').each(function() {
    if (
      $(this)
        .find('.loc-time span')
        .not(`:icontains(${evtTarget.innerHTML})`)
        .html()
    ) {
      $(this)
        .closest('.loc-card')
        .hide();
    } else {
      $(this)
        .closest('.loc-card')
        .show();
    }
  });
};

const initLocationCards = () => {
  getLocationData()
    .then(locations => {
      displayLocations(locations);
    })
    .catch(error => {
      console.error(error);
    });
};

export { initLocationCards, userInputFilter, userBtnFilter, displayLocations };
