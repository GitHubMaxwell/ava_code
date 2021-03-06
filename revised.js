function hexLetter(num) {
  // change large amount of if/else blocks to an array of letters and select letter for replacement
  // via the second digit derived from the passed in "num" argument
  let letterArr = ["A", "B", "C", "D", "E", "F"];
  return letterArr[num - 10];
}

function intToHex(int1, int2, int3) {
  // ensure all arguments have values
  if (arguments.length < 3) {
    return "Missing Values";
  }
  // ensure all integers are in correct range
  if (
    int1 < 0 ||
    int1 > 255 ||
    int2 < 0 ||
    int2 > 255 ||
    int3 < 0 ||
    int3 > 255
  ) {
    return "All numbers must be between 0 - 255";
  }
  let str = "#";
  let firstChar, secondChar;

  // we have access to the "arguments" object allowing us to
  // iterate over arguments in a for loop
  for (int of arguments) {
    firstChar = Math.floor(int / 16);
    secondChar = int % 16;

    // shorten if/else blocks to ternaries
    str += firstChar >= 10 ? hexLetter(firstChar) : JSON.stringify(firstChar);
    str +=
      secondChar >= 10 ? hexLetter(secondChar) : JSON.stringify(secondChar);
  }
  return str;
}
module.exports = intToHex;
