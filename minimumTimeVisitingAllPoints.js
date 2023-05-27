// Breakdown:
// 1. Flatten the given array using flatMap method
// 2. Use reduce on flatten array, to perform the addition operation.
// 3. return the output from reduce

var minTimeToVisitAllPoints = function (points) {
  return [...new Set(points.flat())].reduce(
    (totalTime, point) => totalTime + point,
    0
  );
};

// Problem link: https://leetcode.com/problems/minimum-time-visiting-all-points/
