var countGoodRectangles = function (rectangles) {
  const sideLengthArr = rectangles.map((rectangle) => Math.min(...rectangle));
  const maxLen = Math.max(...sideLengthArr);
  return sideLengthArr.filter((sideLength) => sideLength === maxLen).length;
};

// Problem link: https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/description/
