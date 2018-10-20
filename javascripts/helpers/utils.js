console.log('Utils.js');

const printToDom = (stringToPrint, elementId) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML = stringToPrint;
};

const getCurrentTime = () => {
  return moment().format();
};

export { printToDom, getCurrentTime };
