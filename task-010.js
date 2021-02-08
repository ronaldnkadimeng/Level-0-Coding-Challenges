let string1 = "house";
let string2 = "computers";

function findCommonCharacters(string1, string2) {
  const MAX_CHAR = 26;
  for (var begin = 0; begin < MAX_CHAR; begin++) {
    if (string1.indexOf(string2[begin]) !== -1) {
      console.log(string2[begin] + ",");
    }
  }
}

findCommonCharacters(string1, string2);
