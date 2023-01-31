function numberPairs(str) {
  const strToArr = str.split(" ").slice(1);
  const duplicateNum = strToArr.filter(
    (num) => strToArr.indexOf(num) != strToArr.lastIndexOf(num)
  );
  return duplicateNum.length % 2 === 0
    ? [...new Set(duplicateNum)].length
    : duplicateNum.slice(1).length / 2;
}

// Problem link: https://edabit.com/challenge/fpHGmHoKX5RyD3wjQ
