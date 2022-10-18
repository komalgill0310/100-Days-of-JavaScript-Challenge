//Create a function that determines if there is an upward trend.
//Example: upwardTrend([1,2,3,4]) => true
//         upwardTrend([1,2,6,5,7,8]) => false
//Notes:
//If there is a string element in the array, return "Strings not permitted!".
//The numbers don't have to be consecutive (e.g. [1, 3, 5] should still return true).

function upwardTrend(arr) {
  if (arr.some((num) => typeof num === "string"))
    return "Strings not permitted!";
  const updateArrayFromIndexOne = arr.slice(1);
  return arr
    .slice(0, -1)
    .every((num, index) => updateArrayFromIndexOne[index] > num);
}

//Time to Solve: 40Min
