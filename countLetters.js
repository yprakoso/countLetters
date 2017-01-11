var myString = "lighthouse in the house";

var count = function (input) {
  var text = input.split(' ').join("");
  var countLetters = {};

  for (var i = 0; i < text.length - 1; i++) {
    if (!countLetters[text[i]]) {
      countLetters[text[i]] = 1;
    } else {
      countLetters[text[i]] += 1;
    }
  }
  return countLetters;
}

console.log(count(myString));