//Practice:
//template Literals
//toLowerCase() and toUpperCase() method
//Learn that the strings are also 0 based index.

function createID(firstname, lastname) {
  return `${firstname[0].toLowerCase()}${lastname[0].toUpperCase()}${lastname
    .slice(1, 3)
    .toLowerCase()}`;
}

//Problem Link: https://edabit.com/challenge/Ht67uJXACq4hWrC2i
