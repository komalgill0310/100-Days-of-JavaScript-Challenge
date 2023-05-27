// Breakdown:
// 1. Create an empty array and store it in a variable called diffOfArr
// 2. Use filter for the nums1 to find out the elements which does not exist in the second array and store it in a variable called answer1
// 3. Use filter for the nums2 to find out the elements which does not exist in the first array and store it in a variabel called answer2
// 4. Push answer1 and answer2 into diffOfArr
// 5. return diffOfArr

var findDifference = function (nums1, nums2) {
  const diffOfArr = [];
  nums1 = [...new Set(nums1)];
  nums2 = [...new Set(nums2)];
  let answer1 = nums1.filter((num) => !nums2.includes(num));
  let answer2 = nums2.filter((num) => !nums1.includes(num));

  diffOfArr.push(answer1, answer2);
  return diffOfArr;
};

// Problem link: https://leetcode.com/problems/find-the-difference-of-two-arrays/
