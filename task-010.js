let string1 = "house";
let string2 = "computer";

function findCommonCharacters(string1, string2) {
  let wordLength = Math.max(string1.length, string2.length);
  let commonCharacters = [];
  let count = 0;
  for (let begin = 0; begin < wordLength; begin++) {
    if (string1.indexOf(string2[begin]) !== -1) {
      commonCharacters[count] = string2[begin];
      count++;
    }
  }
  console.log(commonCharacters.join());
}
findCommonCharacters(string1, string2);
