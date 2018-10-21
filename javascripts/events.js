import { userInputFilter } from "./components/locationComponent.js";

const inputEvents = () => {
  $("#filter-input").on("keyup", evt => {
    // console.log(evt.key);
    userInputFilter(evt.target.value);
  });
};

export { inputEvents };
