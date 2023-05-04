// Breakdown:
// 1. RETURN TRUE ONLY WHEN
// ===> 1. str.toUpperCase() === str || str.toLowerCase() === str || str[0].toUpperCase() === str[0]

function isStringCorrectCapitalized(str) {
  return (
    str.toUpperCase() === str ||
    str.toLowerCase() === str ||
    str[0].toUpperCase() === str[0]
  );
}

// Problem: Given a string, return whether or not it uses capitalization correctly. A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.

// Ex: Given the following strings...

// "USA", return true
// "Calvin", return true
// "compUter", return false
// "coding", return true
