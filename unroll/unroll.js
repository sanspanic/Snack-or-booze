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
  /*   const rest = [];
  const len = squareArray.length;
  console.log(len);
  console.log(squareArray[1]);

  //1st turn - right
  let i = 0;
  while (i < len) {
    rest.push(squareArray[0][i]);
    i++;
  }

  //2nd turn - down
  i = 1;
  while (i < len) {
    rest.push(squareArray[i][len - 1]);
    i++;
  }

  //3rd turn - left
  i = len - 2;
  while (i >= 0) {
    rest.push(squareArray[len - 1][i]);
    i--;
  }

  //4th turn - up
  i = len - 2;
  while (i >= 1) {
    rest.push(squareArray[i][0]);
    i--;
  }

  //1.2 turn - right
  i = 1;
  while (i < len - 1) {
    rest.push(squareArray[1][i]);
    i++;
  }

  //2.2 turn - down
  i = 2;
  while (i < len - 1) {
    rest.push(squareArray[i][len - 2]);
    i++;
  }

  //2.3 turn - left
  i = len - 3;
  while (i >= 1) {
    rest.push(squareArray[len - 2][i]);
    i--;
  }

  //2.4 turn - up
  i = len - 3;
  while (i >= 2) {
    rest.push(squareArray[i][1]);
    i--;
  }

  return rest; */
}

unroll([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);

unroll([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]);

//module.exports = unroll;
