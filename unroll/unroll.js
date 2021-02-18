function unroll(squareArray) {
  const newArr = [];
  const len = squareArray.length;
  let round = 0;
  let i = 0;

  while (len * len > newArr.length) {
    //right
    i = round;
    while (i < len - round) {
      newArr.push(squareArray[round][i]);
      i++;
    }
    //down
    i = round + 1;
    while (i < len - round) {
      newArr.push(squareArray[i][len - round - 1]);
      i++;
    }
    //left
    i = len - 2 - round;
    while (i >= round) {
      newArr.push(squareArray[len - 1 - round][i]);
      i--;
    }
    //up
    i = len - 2 - round;
    while (i >= round + 1) {
      newArr.push(squareArray[i][round]);
      i--;
    }
    round++;
  }

  return newArr;
}

module.exports = unroll;
