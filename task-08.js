function convertToTime(number) {
  let stringMinute = "";
  let stringHour = "";
  let hour = Math.floor(number / 60);
  let minute = number % 60;

  if (hour === 1) {
    stringHour = "hour";
  } else {
    stringHour = "hours";
  }
  if (minute === 1) {
    stringMinute = "minute";
  } else {
    stringMinute = "minutes";
  }
  return hour + " " + stringHour + ", " + minute + " " + stringMinute;
}
