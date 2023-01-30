function toBoolArray(word) {
  return word
    .split("")
    .map((ch, i) => (word.charCodeAt(i) % 2 != 0 ? true : false));
}

// Problem link: https://edabit.com/challenge/9JcSwa4dN5PEmdBEg
