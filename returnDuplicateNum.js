function duplicateNums(nums) {
  const duplicateNumArr = [...new Set(nums)].filter(
    (num) => nums.indexOf(num) != nums.lastIndexOf(num)
  );
  return duplicateNumArr.length ? duplicateNumArr.sort((a, b) => a - b) : null;
}

// Problem link: https://edabit.com/challenge/WYNfvyd5NRfAgtcqZ
