function findCommonCharacters(string1, string2) {
  let commonCharacters = [];
  for (let begin = 0; begin < string1.length; begin++) {
    for (let letter = 0; letter < string2.length; letter++) {
      if (string1[begin] == string2[letter])
        commonCharacters.push(string2[letter]);
    }
  }
  console.log(commonCharacters.join(","));
}
