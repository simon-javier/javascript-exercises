const convertToCelsius = function(val) {
  let celsius = (val - 32) * (5 / 9);
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(val) {
  let fahrenheit = val * (9 / 5) + 32;
  return Number(fahrenheit.toFixed(1));
};

convertToCelsius(100);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// I actually prefer my code because it is more readable although it is slower
// than the actual solution because of String conversion to Number.
