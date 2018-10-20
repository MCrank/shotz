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

export { getCurrentTime, getUniqueId };
