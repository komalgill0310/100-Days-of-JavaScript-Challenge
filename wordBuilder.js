function wordBuilder(letters, positions) {
  let str = "";
  for (let i = 0; i < positions.length; i++) {
    str += letters[positions[i]];
  }
  return str;
}

// Problem link: https://edabit.com/challenge/nhcFHFHDYGwyAFNSy
