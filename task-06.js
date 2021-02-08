let number1 = 117;
let number2 = 9;
let number3 = 3;
let number4 = 42;

function calculateMaximum(...number) {
  let max = -Infinity;
  for (var min = 0; min < number.length; min++) {
    if (number[min] > max) {
      max = number[min];
    }
  }
  return max;
}

console.log(calculateMaximum(number1, number2, number3, number4, 500));
