function celsiusToFahrenheit(temperature) {
  return (temperature * 9) / 5 + 32;
}
function fahrenheitToCelsius(temperature) {
  return ((temperature - 32) * 5) / 9;
}
console.log(celsiusToFahrenheit(30));
console.log(fahrenheitToCelsius(30));
