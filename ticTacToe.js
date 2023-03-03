// Winning condition:
// 1. if any of the sub-array's all rows elements have either X or O
// 2. If any of the sub-array's all column elements have either X or O
// 3. If any of the diagonal elements have all X or O

// Draw Condition;
// 1. If none of the winning condition satisfy

// Steps:
// 1. Loop through the given 2D array
// 2. For Rows:
// => 1. For each sub-array -> check any of the array's row have all the same elements either X or O
// ===> if it has then return the first element of that row
// 3. For Columns:
// => 1. For each Sub-Array's column element -> Check if all of the column elements are same
// ===> If it has then return the first element of that column
// 4. For Diagonal:
// => If any of the diagonal's elements are same -> Return the first element of the diagonal
// 2. Otherwise, return "Draw"

function ticTacToe(board) {
  const winTests = [
    checkRowsWinTest(board),
    checkColumnsWinTest(board),
    checkRightDiagonalForWin(board),
    checkLeftDiagonalForWin(board),
  ];

  for (let winTest of winTests) {
    const result = winTest;
    if (result) {
      return result;
    }
  }
  return "Draw";
}

// For Rows
function checkRowsWinTest(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i].every((ticTac) => ticTac === board[i][0])) {
      return board[i][0];
    }
  }
  return false;
}

// For Column
function checkColumnsWinTest(board) {
  let matchingElementsCount = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] === board[0][i]) {
        matchingElementsCount++;
      }
    }
    if (matchingElementsCount === board.length) {
      return board[0][i];
    } else {
      matchingElementsCount = 0;
    }
  }
  return false;
}

// For Right Diagonal
function checkRightDiagonalForWin(board) {
  let matchingElementsCount = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[i][i] === board[0][0]) {
      matchingElementsCount++;
    }
  }
  return matchingElementsCount === board.length ? board[0][0] : false;
}

// For Left Diagonal
function checkLeftDiagonalForWin(board) {
  let matchingElementsCount = 0;
  for (let i = board.length - 1, j = 0; i >= 0; i--, j++) {
    if (board[i][j] === board[0][board.length - 1]) {
      matchingElementsCount++;
    }
  }
  return matchingElementsCount === board.length
    ? board[0][board.length - 1]
    : false;
}

// Problem link: https://edabit.com/challenge/jsukwFKLKJx2qLs5b
