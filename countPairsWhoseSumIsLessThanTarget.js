var countPairs = function (nums, target) {
  let totalNumOfPairs = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) {
        totalNumOfPairs++;
      }
    }
  }
  return totalNumOfPairs;
};

// Problem link: Count Pairs Whose Sum is Less than Target
