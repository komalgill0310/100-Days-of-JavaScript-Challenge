// Breakdown:
// 1. create a variable to store the string character value from specific index and assign it a value of empty string
// 2. run a for loop => parameters for for loop => i = 0; i<givenArrayOfIndex.length; i++
// 2.1 Inside for loop =>
// if(the value inside an array is < 0)
// => use slice method to extract the character from the end of the string.
//  => e.g.: givenString.slice(arrayValue[i], arrayValue[i]+1)
// the reason for second value is => we only need to get the string character from arraValue[i] and the slice method will exclude the second parameter. However, if we do not provide a second value, then the slice method will extract the string till the end of the string/till length of the given string. In result, we will be able to fetch that one value from a string.
// NOTE: IF arrayValue[i] === -1, then we do not need to use the second parameter in slice method.
// REASON: Because, if you are extracting the string value from the end, then KEEP IN MIND THAT string from the end starts with an index of -1, THE REASON IT DOES NOT START WITH -0 because -0 does not exist.
// once we have that value => add it to the variable which will store the string characters
// else
// str[arrayValue[i]] and also add it to the variable which we created to store string characters

// => once the loop is finished, returned the variable which holds the specific string characters, and convert the returned result to lowercase as well using toLowerCase() method

function indexFilter(idx, str) {
  let filterStr = "";
  for (let i = 0; i < idx.length; i++) {
    if (idx[i] < 0) {
      if (idx[i] === -1) {
        filterStr += str.slice(idx[i]);
      }
      filterStr += str.slice(idx[i], idx[i] + 1);
    } else {
      filterStr += str[idx[i]];
    }
  }
  return filterStr.toLowerCase();
}

//MODIFIED CODE:
function indexFilter(idx, str) {
  let filterStr = "";
  for (let i = 0; i < idx.length; i++) {
    if (idx[i] < 0) {
      filterStr +=
        idx[i] === -1 ? str.slice(idx[i]) : str.slice(idx[i], idx[i] + 1);
    } else {
      filterStr += str[idx[i]];
    }
  }
  return filterStr.toLowerCase();
}

// Problem link: https://edabit.com/challenge/q5N9n3ZjKq5Fn2hzg
