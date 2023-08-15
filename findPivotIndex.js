function pivotIndex(nums) {
  let totalSum = nums.reduce((acc, current) => acc + current, 0);
  let leftSum = 0; //Keeps tracks of the sum of left side numbers

  for (let i = 0; i < nums.length; i++) {
    const rightSum = totalSum - nums[i] - leftSum; //keeps tracks of the right side numbers
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
}

// Problem link: https://leetcode.com/problems/find-pivot-index/description/
