const displayLocations = myLocations => {
  let newString = '';
  myLocations.forEach(location => {
    newString += `
        <div class="card col-md-3 px-0 mx-2 mb-3 text-white bg-dark shadow rounded" id="${
          location.id
        }">
            <img class="card-img-top" src="${location.img}" alt="${
      location.name
    }">
            <div class="card-body">
                <h5 class="card-title"><em>${location.name}</em></h5>
                <p class="card-text m-0"><u>Address:</u></p>
                <p class="card-text">${location.address}</p>
            </div>
            <div class="card-footer">
                <p class="m-0">Shoot Time: <span class="badge badge-light">${
                  location.shootTime
                }</span></p>
            </div>
        </div>
        `;
  });
  $('#location-cards').append(newString);
};

export { displayLocations };
