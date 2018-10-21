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

const userInputFilter = inputValue => {
  $(".card-title").each(function() {
    if (
      $(this)
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

//   if ($("input")[0].value === "") {
//     $(".card").show();
//   } else if (
//     $(".card-title").each((index, card) => {
//       $(card).not(":icontains('" + inputValue + "')");
//     })
//   ) {
//     $(".card-title")
//       .closest(".loc-card")
//       .hide();
//   } else {
//     $(".card-title").each((index, card) => {
//       $($("card:icontains('" + inputValue + "')"))
//         .closest(".loc-card")
//         .show("#" + index);
//     });
//   }
// };

// const userInputFilter = inputValue => {
//   if ($("input")[0].value === "") {
//     $(".card").show();
//   } else if (
//     $(".card-title").each((index, card) => {
//       console.log(index);
//       $(card).not(":icontains('" + inputValue + "')");
//     })
//   ) {
//     $(".card")[index].hide();
//   } else if (
//     $(".loc-adx").each((index, card) => {
//       $(card).not(":icontains('" + inputValue + "')");
//     })
//   ) {
//     $(".card")[index].hide();
//   } else {
//     $(".card")[index].show();
//   }

//else {
//   $(".card").each((index, card) => {
//     $(card)
//       .not(":icontains('" + inputValue + "')")
//       .hide();
//   });
// }
// };

export { displayLocations, userInputFilter };
