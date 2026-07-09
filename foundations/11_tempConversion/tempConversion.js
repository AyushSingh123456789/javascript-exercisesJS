const convertToCelsius = function (n1) {
  let convertedTemp1 = parseFloat(((n1 - 32) / 1.8).toFixed(1));
  return convertedTemp1;
};

const convertToFahrenheit = function (n2) {
  let convertedTemp2 = parseFloat(((1.8 * n2) + 32).toFixed(1));
  return convertedTemp2;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
