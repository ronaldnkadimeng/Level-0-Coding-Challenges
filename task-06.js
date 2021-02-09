let number1 = 1;
let number2 = 22;
let number3 = 3;
let number4 = 62;

function calculateMaximum(number1, number2, number3, number4) {
  let max = 0;
  if (number1 >= number2 && number1 >= number3 && number1 >= number4) {
    max = number1;
  } else if (number2 >= number1 && number2 >= number3 && number2 >= number4) {
    max = number2;
  } else if (number3 >= number1 && number3 >= number2 && number3 >= number4) {
    max = number3;
  } else {
    max = number4;
  }
  return max;
}

console.log(calculateMaximum(number1, number2, number3, number4));
