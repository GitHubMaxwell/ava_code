function hexLetter(num) {
  // change large amount of if/else blocks to an array of letters and select letter for replacement
  // via the second digit derived from the passed in "num" argument
  let letterArr = ["A", "B", "C", "D", "E", "F"];
  return letterArr[num - 10];
}

function intToHex(int1, int2, int3) {
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
  return str; //?
}

intToHex(9, 208, 194);
