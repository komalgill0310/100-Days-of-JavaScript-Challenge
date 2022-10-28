function scaleTip(arr) {
  const indexOfI = arr.indexOf("I");
  const leftArrSum = arr.slice(0, indexOfI).reduce((acc, curr) => acc + curr);
  const rightArrSum = arr.slice(indexOfI + 1).reduce((acc, curr) => acc + curr);
  return leftArrSum > rightArrSum
    ? "left"
    : leftArrSum < rightArrSum
    ? "right"
    : "balanced";
}

//Given an array with an odd number of elements, return whether the scale will tip "left" or "right" based on the sum of the numbers. The scale will tip on the direction of the largest total. If both sides are equal, return "balanced".

//Notes:
//The middle element will always be "I" so you can just ignore it.
// Assume the numbers all represent the same unit.
// Both sides will have the same number of elements.
// There are no such things as negative weights in both real life and the tests!
