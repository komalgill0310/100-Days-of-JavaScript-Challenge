function getFrequencies(arr) {
  const uniqueArrValues = [...new Set(arr)];
  const subArrOfUniqueValuesInArr = uniqueArrValues.map((ch) =>
    arr.filter((num) => num === ch)
  );
  return Object.fromEntries(
    subArrOfUniqueValuesInArr.map((subArr) => [subArr[0], subArr.length])
  );
}

//Problem link: https://edabit.com/challenge/uScx6aGXmNu27NYWz
