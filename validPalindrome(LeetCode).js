var isPalindrome = function (s) {
  const alphaNumericRegex = /[a-zA-Z0-9]/;
  if (!alphaNumericRegex.test(s)) {
    return true;
  } else {
    const regex = /[a-zA-Z0-9]/g;
    const alphaNumericArr = s.match(regex);
    console.log(alphaNumericArr);
    const reverseAlphaNumericStr = [...alphaNumericArr]
      .map((str) => Array.from(str).reverse().join("").toLowerCase())
      .reverse()
      .join("");
    const alphaNumericStr = alphaNumericArr.join("").toLowerCase();
    if (alphaNumericStr.length != reverseAlphaNumericStr.length) {
      return false;
    } else {
      for (let i = 0; i < alphaNumericStr.length; i++) {
        if (alphaNumericStr[i] != reverseAlphaNumericStr[i]) {
          return false;
        }
      }
      return true;
    }
  }
};

// Problem link: https://leetcode.com/problems/valid-palindrome/description/
