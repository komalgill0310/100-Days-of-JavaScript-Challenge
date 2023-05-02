// Breakdown:
// 1. Create a function called reverseString, pass a string parameter
// 2. Split the string and store it in a variable called splitStr
// 3. call array's reverse method to reverse the string and store the output in a variable called reverseStr
// 4. return reverseStr

function reverseString(str) {
  const splitStr = str.split("");
  const reverseStr = splitStr.reverse();
  return reverseStr.join("");
}

// USING FOR LOOP WITHOUT ANY REVERSE's METHOD
// breakdown:
// 1. Create an empty string called reverseStr
// 2. use for loop to loop over the given str
// ==> 1. reverseStr += i!=0 ? str.slice(-i-1,-i) : str.slice(-i-1)
// 3. return reverseStr

function reverseString(str) {
  let reverseStr = "";
  for (let i = 0; i <= str.length - 1; i++) {
    reverseStr += i != 0 ? str.slice(-i - 1, -i) : str.slice(-i - 1);
  }
  return reverseStr;
}

// Problem: Given the following strings...
// EXAMPLES:
// “Cat”, return “taC”
// “The Daily Byte”, return "etyB yliaD ehT”
// “civic”, return “civic”
