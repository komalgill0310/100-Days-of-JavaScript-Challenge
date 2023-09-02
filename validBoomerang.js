var isBoomerang = function (points) {
  const [x1, y1] = points[0];
  const [x2, y2] = points[1];
  const [x3, y3] = points[2];
  return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) != 0;
};

// Problem link: https://leetcode.com/problems/valid-boomerang/description/
