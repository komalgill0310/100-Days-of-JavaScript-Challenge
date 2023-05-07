// Breakdown:
// 1. First part: Divide the given string into pairs of given k length.
// HOW TO:
// ====> 1. Create an empty array called subStrArr
// ====> 2. Use a for loop to loop over the given string
// =======> 1. Parameters: i = 0; i < s.length - 2; i++
// ==========> 1. Use split method to extract the part of the string from index i till i+k, and store it in a variable called subStr.
// ==========> 2. Push subStrArr.push(subStr)

// SECOND PART: Get the total number of vowels in each subString of subStrArr
// HOW TO:
// ===> 1. Store all the vowles in an array called vowles
// ===> 2. Use map to loop over the each subString of subStrArr, and store the output in a variable called numOfVowelsInSubStrArr
// ======> 1. Use filter on each subString.split("")
// =============> 1. Check for each character in substring, if the ch exists in vowels
// =============> 2. return the length of the filteredArray
// ===> 3. return the maximum number from the numOfVowelsInSubStrArr

var maxVowels = function (s, k) {
  const subStrArr = [];
  for (let i = 0; i < s.length - 2; i++) {
    const subStr = s.slice(i, i + k);
    subStrArr.push(subStr);
  }
  const vowels = ["a", "e", "i", "o", "u"];
  const numOfVowelsInSubStrArr = subStrArr.map((subStr) => {
    return subStr.split("").filter((ch) => vowels.includes(ch)).length;
  });
  return Math.max(...numOfVowelsInSubStrArr);
};

// ISSUE: some test cases failed, due to time issues.

//Problem link: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
