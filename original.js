function hexLetter(value) {
  if (value === 10) {
    return "a";
  }
  if (value === 11) {
    return "b";
  }
  if (value === 12) {
    return "c";
  }
  if (value === 13) {
    return "d";
  }
  if (value === 14) {
    return "e";
  }
  if (value === 15) {
    return "f";
  }
}

function intToHex(int1, int2, int3) {
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

// should be #09D0C2
intToHex(9, 208, 194);
