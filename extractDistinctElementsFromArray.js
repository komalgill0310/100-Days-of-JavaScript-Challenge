function returnUnique(arr) {
  return arr.filter((num, i) => arr.indexOf(num) === arr.lastIndexOf(num));
}

// Problem link: https://edabit.com/challenge/TyX7xfsAPfJZxfaZq
