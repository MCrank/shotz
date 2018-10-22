import {
  userInputFilter,
  userBtnFilter
} from "./components/locationComponent.js";

const inputEvents = () => {
  $("#filter-input").on("keyup", evt => {
    userInputFilter(evt.target.value);
  });
};

const buttonEvents = () => {
  $(".btn").on("click", evt => {
    userBtnFilter(evt.target);
  });
};

const addEvents = () => {
  inputEvents();
  buttonEvents();
};

export { addEvents };
