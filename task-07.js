let temperature = 30;

function celsiusToFahrenheit(temperature) {
  return (temperature * 9) / 5 + 32;
}
function fahrenheitToCelsius(temperature) {
  return ((temperature - 32) * 5) / 9;
}

console.log(celsiusToFahrenheit(temperature));
console.log(fahrenheitToCelsius(temperature));
