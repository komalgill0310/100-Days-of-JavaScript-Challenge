// Breakdown:
// 1. Sort the given seats and students array in descending order.
// 2. Use reduce on the seats array
// ===> 1. Math.abs(seats[i] - students[i]), add that to the total of the reduce function.
// 3. return the output of the reduce

var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => b - a);
  students.sort((a, b) => b - a);
  return seats.reduce(
    (totalMoves, seat, i) => totalMoves + Math.abs(seat - students[i]),
    0
  );
};

// Problem link: https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/
