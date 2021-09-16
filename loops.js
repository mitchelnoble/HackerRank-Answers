function vowelsAndConsonants(s) {
  let vowels = [];
  let consonants = [];
  let newArr = [...s];

  for (i = 0; i < newArr.length; i++) {
    if (
      newArr[i] == "a" ||
      newArr[i] == "e" ||
      newArr[i] == "i" ||
      newArr[i] == "o" ||
      newArr[i] == "u"
    ) {
      vowels.push(newArr[i]);
    } else {
      consonants.push(newArr[i]);
    }
  }
  let newArr2 = vowels.concat(consonants);
  return newArr2;
}

console.log(vowelsAndConsonants("javascriptloops"));
