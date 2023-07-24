var findMiddleIndex = function (nums) {
  let leftSideSum = 0;
  let rightSideSum = nums.reduce((total, num) => total + num, 0);
  let middleIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    rightSideSum -= nums[i];

    if (leftSideSum === rightSideSum) {
      middleIndex = i;
      break;
    }

    leftSideSum += nums[i];
  }

  return middleIndex;
};

// Problem link: https://leetcode.com/problems/find-the-middle-index-in-array/
