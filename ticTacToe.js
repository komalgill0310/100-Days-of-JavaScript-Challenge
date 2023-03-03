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
  for (let i = 0; i < board.length; i++) {
    let win = "";
    // For Rows
    if (board[i].slice(1).every((ticTacToe) => board[i][0] === ticTacToe)) {
      win = board[i][0];
      return win;
    }
    // For Column
    for (let j = 0; j < i + 1; j++) {
      if (board[j][i] === board[0][i]) {
        win = board[0][i];
      }
    }
    // For Right - Diagonal
    for (let j = 0; j < i + 1; j++) {
      if (board[j][i] === board[0][i]) {
        console.log("Diagonal: ", board[0][i]);
        win = board[0][i];
      }
      i + 1;
    }
    return win;
  }
  return "Draw";
}

// Yet to Solve

// Problem link: https://edabit.com/challenge/jsukwFKLKJx2qLs5b
