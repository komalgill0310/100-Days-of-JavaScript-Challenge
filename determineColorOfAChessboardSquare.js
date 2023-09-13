var squareIsWhite = function (coordinates) {
  const first = ["a", "c", "e", "g"];
  const second = ["b", "d", "f", "h"];
  const firstCoordinate = coordinates[0];
  const secondCoordinate = Number(coordinates[1]);
  if (
    (first.includes(firstCoordinate) && secondCoordinate % 2 != 0) ||
    (second.includes(firstCoordinate) && secondCoordinate % 2 === 0)
  ) {
    return false;
  } else if (
    (first.includes(firstCoordinate) && secondCoordinate % 2 === 0) ||
    (second.includes(firstCoordinate) && secondCoordinate % 2 != 0)
  ) {
    return true;
  }
};

// Problem link: https://leetcode.com/problems/determine-color-of-a-chessboard-square/
