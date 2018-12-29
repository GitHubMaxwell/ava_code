function hexLetter(value) {
  if (value === 10) {
    return "A";
  }
  if (value === 11) {
    return "B";
  }
  if (value === 12) {
    return "C";
  }
  if (value === 13) {
    return "D";
  }
  if (value === 14) {
    return "E";
  }
  if (value === 15) {
    return "F";
  }
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

  for (int of arguments) {
    firstChar = Math.floor(int / 16);
    if (firstChar >= 10) {
      str += hexLetter(firstChar);
    } else {
      str += JSON.stringify(firstChar);
    }

    secondChar = int % 16;
    if (secondChar >= 10) {
      str += hexLetter(secondChar);
    } else {
      str += JSON.stringify(secondChar);
    }
  }
  return str;
}
module.exports = intToHex;
