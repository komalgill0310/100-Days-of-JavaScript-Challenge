function highestPair(cards) {
  const sortArr = cards.sort((a, b) => b - a);
  if (new Set(cards).size === cards.length) {
    return false;
  } else {
    for (let i = 0; i < sortArr.length; i++) {
      if (sortArr.indexOf(sortArr[i]) != sortArr.lastIndexOf(sortArr[i])) {
        return [true, sortArr[i]];
      }
    }
  }
}

// Problem link: https://edabit.com/challenge/Joj2RJJ4WyxRmkfxv
