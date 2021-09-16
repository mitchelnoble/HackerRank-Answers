//Original Solution:
// function vowelsAndConsonants(s) {
//   let vowels = [];
//   let consonants = [];
//   let newArr = [...s];

//   for (let i = 0; i < newArr.length; i++) {
//     if (
//       newArr[i] == "a" ||
//       newArr[i] == "e" ||
//       newArr[i] == "i" ||
//       newArr[i] == "o" ||
//       newArr[i] == "u"
//     ) {
//       vowels.push(newArr[i]);
//     } else {
//       consonants.push(newArr[i]);
//     }
//   }
//   let newArr2 = vowels.concat(consonants);
//   return newArr2;
// }

// console.log(vowelsAndConsonants("javascriptloops"));

//HackerRank Test Accepted Solution:
function vowelsAndConsonants(s) {
  let vowels = [];
  let consonants = [];
  let newArr = [...s];

  for (let i = 0; i < newArr.length; i++) {
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
  //join method using RegEx creates individual characters and prints each on new line
  return newArr2.join("\r\n");
}

console.log(vowelsAndConsonants("javascriptloops"));
//HackerRank has a bug in the console.log portion? or I don't know how to write a console.log that it likes.