const displayLocations = myLocations => {
  let newString = '';
  myLocations.forEach(location => {
    newString += `
        <div class="card col-md-3 px-0 mx-2 mb-3 text-white bg-dark" id="${
          location.id
        }">
            <img class="card-img-top" src="${location.img}" alt="${
      location.name
    }">
            <div class="card-body">
                <h5 class="card-title">${location.name}</h5>
                <p class="card-text">${location.address}</p>
            </div>
            <div class="card-footer">
                <small class="">Shoot Time: ${location.shootTime}</small>
            </div>
        </div>
        `;
  });
  $('#location-cards').append(newString);
};

export { displayLocations };
