function findVowels(string) {
  let vowelList = "aeiouAEIOU";
  for (var begin = 0; begin < string.length; begin++) {
    if (vowelList.indexOf(string[begin]) !== -1) {
      console.log(string[begin]);
    }
  }
}
