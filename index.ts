console.log('Hello World');

const hashTriangle = (size: number) => {
  let stringy = '';
  for (let i = 0; i < size; i++) {
    stringy += '#';
    console.log(stringy);
  }
};

const fizzBuzz = (maxNum: number) => {
  for (let i = 1; i <= maxNum; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

const chessBoard = (boardSize: number) => {
  let board = '';
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if ((i + j) % 2 === 0) {
        board += ' ';
      } else {
        board += '#';
      }
    }
    board += '\n';
  }
  console.log(board);
};

const smallestArg = (num1: number, num2: number): number => {
  if (num1 > num2) {
    return num2;
  }
  return num1;
};

const isEven = (num: number): boolean => {
  if (num < 0) {
    num *= -1;
  }
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
};

const countChar = (word: string, char: string): number => {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == char) {
      count += 1;
    }
  }
  return count;
};

// hashTriangle(7);
// fizzBuzz(15);
// chessBoard(8);
// console.log(smallestArg(5,10));
// console.log(smallestArg(50,5));
// console.log(isEven(-8));
// console.log(countChar("kakkerlak", "k"));
