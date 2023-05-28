// Breakdown:
// 1. Create an empty array and store it in a variable called answer
// 2. Use filter for the nums1 to find out the elements which does not exist in the second array
// 3. Use filter for the nums2 to find out the elements which does not exist in the first array
// 4. return answer

var findDifference = function (nums1, nums2) {
  const answer = Array(2);
  nums1 = [...new Set(nums1)];
  nums2 = [...new Set(nums2)];
  answer[0] = nums1.filter((num) => !nums2.includes(num));
  answer[1] = nums2.filter((num) => !nums1.includes(num));
  return answer;
};

// Problem link: https://leetcode.com/problems/find-the-difference-of-two-arrays/
