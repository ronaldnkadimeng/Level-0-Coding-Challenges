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
