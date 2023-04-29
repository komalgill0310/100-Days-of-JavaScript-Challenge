// Breakdown:
// 1. Use map to map over each sub image array, store the output in a variable called "imageFlipped"
// ===> 1. Reverse the sub image array
// =====> 1. use map again on sub image array and for each value of the reversed sub image array, invert the value

var flipAndInvertImage = function (image) {
  const flippedImage = image.map((subImage) => {
    const reverseSubImg = subImage.reverse();
    return reverseSubImg.map((img) => !img);
  });
  return flippedImage;
};

// Problem link: https://leetcode.com/problems/flipping-an-image/
