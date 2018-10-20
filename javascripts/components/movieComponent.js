const displayMovies = myMovies => {
  let newString = '';
  myMovies.forEach(movie => {
    let releaseDate = moment(movie.releaseDate).format('MMMM Do YYYY');
    newString = `
        <h1 class="display-4">${movie.name}</h1>
        <h3 class="text-capitalize"><strong>Genre: </strong>${movie.genre}</h3>
        <h5>Release Date: ${releaseDate}</h5>
        <hr class="my-4">
        <p>${movie.description}</p>
        `;
  });
  $('#movie-tron').append(newString);
};

export { displayMovies };
