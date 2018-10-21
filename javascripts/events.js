import { userInputFilter } from "./components/locationComponent.js";

const inputEvents = () => {
  $("#filter-input").on("keyup", evt => {
    userInputFilter(evt.target.value);
  });
};

export { inputEvents };
