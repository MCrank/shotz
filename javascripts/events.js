import { userInputFilter, userBtnFilter } from './components/locationComponent.js';
import { movieSelectFilter } from './components/movieComponent.js';

const inputEvents = () => {
  $('#filter-input').on('keyup', evt => {
    userInputFilter(evt.target.value);
  });
};

const buttonEvents = () => {
  $('.btn').on('click', evt => {
    userBtnFilter(evt.target);
  });
};

const movieCardEvents = () => {
  $('#movie-tron').on('click', '.mov-card', evt => {
    const movieCardId = $(evt.target)
      .closest('.mov-card')
      .attr('id');
    movieSelectFilter(movieCardId);
  });
};

const addEvents = () => {
  inputEvents();
  buttonEvents();
};

export { addEvents, movieCardEvents };
