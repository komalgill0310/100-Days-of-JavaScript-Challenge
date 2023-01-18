function isPositiveDominant(a) {
  const removeDuplicates = [...new Set(a)];
  const positiveArrValues = removeDuplicates.filter((num) => num > 0);
  const negativeArrValues = removeDuplicates.filter((num) => num < 0);
  return positiveArrValues.length > negativeArrValues.length;
}

//Problem link: https://edabit.com/challenge/7pkKPYtTJzpxRMckZ
