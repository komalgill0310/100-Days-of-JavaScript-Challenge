// Notes:
// 1. convert the string into an array of intergers
// 2. Output array's length === given string length

// charCodeAt:
// h = 104
// e = 101
// l = 108
// l = 108
// o = 111

// w =119
// o =111
// n=110
// d=100
// e=101
// r=114
// f=102
// u=117
// l=108

// Add the first two digit of ascii value to the last digit and push it into an array

// Steps:
// 1. Create an array to store the ascii values of each character
// 2. loop through a string using for loop and find each String character ASCII value, Convert the ASCII value to string, use split method to split the string number into an array and push it into an array from Step#1
// 3. Perform addition on each sub array
// 4. Return the array

function decode(str) {
  const asciiStrValuesArr = [];
  for (let i = 0; i < str.length; i++) {
    asciiStrValuesArr.push(String(str.charCodeAt(i)).split(""));
  }
  const asciiValuesSum = asciiStrValuesArr.map((asciiValue) =>
    asciiValue.reduce((a, c) => a + Number(c), 0)
  );
  return asciiValuesSum;
}
