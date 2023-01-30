function threeLetterCollection(s) {
  const splitStr = s.split("");
  const groupLetters = splitStr.slice(0, splitStr.length - 1).map((ch, i) => {
    if (s.slice(i + 1).length >= 2) return s.slice(i, i + 3);
  });
  return groupLetters.filter((word) => word).sort();
}

// Problem link: https://edabit.com/challenge/LoBo2DoWQuuzSr6Ft
