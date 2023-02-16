// Given: A string of words

// Return: a word from a string whose addition is higher than the rest of the words.

// NOTES:
// 1. Alphabet position are as:
// => a = 1, b = 2 and so on

// QUESTION: How to tell the computer the numeric value of each alphabat character?
// 1. Use the CharCodeAt to get the unicode value
// 2. unicodeValue of the given char - unicode value of a + 1 => will give the result value as if the alphabatic numeric value of characters start from 1 and so on.

//BREAKDOWN:
// 1. Exclude the non alphabatic character from a string
// STEPS:
// ==> 1. Use string's replace() method to exclude the non alphabatic character from a string and store the result in a variable called "alphabaticStr"
// Parameters for Replace method: Regex to check for the nonalphabatic character, and the ch to replace the nonalphabatic character with
// => Regex = /[^a-z]/gi
// => str to replace with = " "
// ==> const alphabaticStr = str.replace(/[^a-z]/gi, " ")

// 2. Use split() method to split each word of a string into an array and store it in a variable called "splitStr"
// => const spltiStr = alphabaticStr.split(" ")

// 3. Use Array's filter method to map through each word of the string to return only alphabats and store it in a variable called splitStrAlphabats
// =====> const splitStrAlphabats = splitStr.filter(word => {
//   if(word) return word
// })

// 4. Use map method to map through splitWordArr and split the each word into an array and then store the output in a variable called splitWordArr
// const splitWordArr = splitStrAlphabats.map(word => word.split(""))

// 5. store the charactercode for "a" in a variable called "charCodeForA"
// const charCodeForA = "a".charCodeAt(0)

// 6. use Array's map method again on splitWordArr to map through each word and then use reduce on each wordArr and store the result in a variable called "strWordTotalSum"
// ==> 1. Logic for reduce: Find out the total sum for the characters inside a word Arr and return the sum for each word in an array.
// REMEMBER: charCodeAt works for only string so make sure to convert the wordArr into string before using the charCodeAt() method on each character inside wordArr and also use toLowerCase() to convert the string into lowercase
// ===> const strWordTotalSum = splitWordArr.map(wordArr =>
// wordArr.reduce((sum, currCh, i) =>
// sum + (wordArr.join("").toLowerCase().charCodeAt(i) - charCodeForA + 1),0))

// 7. Find out the maxNum from strWordTotalSum using Math.max and then find the index for the maxNum from the array and store the result in a variable called "maxNumIndex"
// => const maxNumIndex = strWordTotalSum.indexOf(Math.max(...strWordTotalSum))

// 8. find out the word from an array called "splitStrAlphabats" by using the maxNumIndex and then return the result
// => return splitStrAlphabats[maxNumIndex]

function wordRank(str) {
  const alphabaticStr = str.replace(/[^a-z]/gi, " ");
  const splitStr = alphabaticStr.split(" ");

  // Remove any empty strings from the array of words
  const splitStrAlphabats = splitStr.filter((word) => word);
  const splitWordArr = splitStrAlphabats.map((word) => word.split(""));
  const charCodeForA = "a".charCodeAt(0);
  const strWordTotalSum = splitWordArr.map((wordArr) =>
    wordArr.reduce(
      (sum, _, i) =>
        sum + (wordArr.join("").toLowerCase().charCodeAt(i) - charCodeForA + 1),
      0
    )
  );

  const maxNumIndex = strWordTotalSum.indexOf(Math.max(...strWordTotalSum));
  return splitStrAlphabats[maxNumIndex];
}
