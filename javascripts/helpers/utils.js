const getCurrentTime = () => {
  return moment().format();
};

// Generate unique ID for our messages
// May not need it for this exercise but have it just incase
const getUniqueId = () => {
  return Math.random()
    .toString(36)
    .substr(2, 16);
};

// Create a case incensitive :contains because jquery doesn't have one for some damn reason
// Found this in the internet and it seems to work
$.expr[":"].icontains = $.expr.createPseudo(function(arg) {
  return function(elem) {
    return (
      $(elem)
        .text()
        .toUpperCase()
        .indexOf(arg.toUpperCase()) >= 0
    );
  };
});

export { getCurrentTime, getUniqueId };
