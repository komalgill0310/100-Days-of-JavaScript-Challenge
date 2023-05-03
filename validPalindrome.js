// Breakdown:
// 1. convert the given string into lowercase and split the string in a variable called splitStr
// 2. use array's filter method on splitStr, for each ch check if the charactercode is > 96 and charactercode < 123, store the filtered array in a variable called alphabatsStr
// 3. return alphabatsStr.reverse().join("") === alphabatsStr.join("")

function validPalindrome(str) {
  const splitStr = str.toLowerCase().split("");
  const alphabetsStr = splitStr.filter(
    (ch) =>
      (ch.charCodeAt(0) > 96 && ch.charCodeAt(0) < 123) ||
      (ch.charCodeAt(0) > 47 && ch.charCodeAt(0) < 58)
  );
  return alphabetsStr.reverse().join("") === alphabetsStr.join("");
}

validPalindrome("level");

// Problem:Given a string, return whether or not it forms a palindrome ignoring case and non-alphabetical characters.

// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

// Ex: Given the following strings...

// "level", return true
// "algorithm", return false
// "A man, a plan, a canal: Panama.", return true
