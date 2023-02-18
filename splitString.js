// Given: A string and an integer
// => Integer is the length of the split string array

// Output:
// 1. SPLIT THE string into given integer.
// 2. However, if string can't be splitted into equal length, then return ["Error"]

// High Level Overview:
// 1. Check the length of the string and see if the length is divisible by given integer
// => 1. if it is divisible then split the string
// else(meaning string cannot be divisible of equal length)
// => return ["Error"]

// BREAKDOWN:
// 1. check IF string.length % cases != 0
// => return ["Error"]
// 2. else
// => 1. Divide the string.length / cases and store the result in a variable called "splitStrNum"
// => 2. Create an empty array and store it in a variable called "splitStrArr"
// => 3. use for loop to loop through the string
// PARAMETERS: i  = 0; i < string.length; i = i+splitStrNum
// ==> slice the string and push it into splitStrArr
// ==> If i = 0
// ===> Parameters for slice would be: start Index = i & endIndex = splitStrNum
// ==> else
// ====> Parameters for slice: startIndex = i and endIndex = i + splitStrNum
// WHY: because endIndex should always be greater than start Index, and that is only when we will get the difference of string between start and end Index
// RETURN

// Question: How to split the string?
// 1. Using Slice method

function splitNCases(str, cases) {
  if (str.length % cases != 0) return ["Error"];
  else {
    const splitStrNum = str.length / cases;
    const splitStrArr = [];
    for (let i = 0; i < str.length; i = i + splitStrNum) {
      if (i === 0) {
        splitStrArr.push(str.slice(i, splitStrNum));
      } else {
        splitStrArr.push(str.slice(i, splitStrNum + i));
      }
    }
    return splitStrArr;
  }
}
