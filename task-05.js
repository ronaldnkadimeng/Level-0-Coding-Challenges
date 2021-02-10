function calculateArea(side1, side2, side3) {
  var perimeter = (side1 + side2 + side3) * (1 / 2);
  var area = Math.sqrt(
    perimeter *
      ((perimeter - side1) * (perimeter - side2) * (perimeter - side3))
  );
  return area;
}
