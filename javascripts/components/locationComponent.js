const movieLocations = [];

const setMovieLocation = locationsArray => {
  movieLocations = locationsArray;
};

const getMovieLocations = () => {
  return movieLocations;
};

const displayLocations = myLocations => {
  let newString = "";
  myLocations.forEach(location => {
    newString += `
      <div class="loc-card card col-md-3 px-0 mx-2 mb-3 text-white bg-dark shadow rounded" id="${
        location.id
      }">
        <img class="card-img-top" src="${location.img}" alt="${location.name}">
          <div class="card-body">
            <h5 class="card-title"><em>${location.name}</em></h5>
            <p class="card-text m-0"><u>Address:</u></p>
            <p class="loc-adx card-text">${location.address}</p>
          </div>
          <div class="card-footer">
            <p class="m-0">Shoot Time: <span class="badge badge-light">${
              location.shootTime
            }</span></p>
          </div>
      </div>
      `;
  });
  $("#location-cards").append(newString);
};

// This was a MOTHERFUCKER.  This made me not like JQuery at all mostly because this is teh first
// time that I have done anythign complex with it.  Maybe it will get better, maybe not
const userInputFilter = inputValue => {
  $(".loc-card").each(function() {
    if (
      $(this)
        .find(".card-title em")
        .not(":icontains('" + inputValue + "')")
        .html() &&
      $(this)
        .find(".loc-adx")
        .not(":icontains('" + inputValue + "')")
        .html()
    ) {
      $(this)
        .closest(".loc-card")
        .hide();
    } else {
      $(this)
        .closest(".loc-card")
        .show();
    }
  });
};

export { displayLocations, userInputFilter };
