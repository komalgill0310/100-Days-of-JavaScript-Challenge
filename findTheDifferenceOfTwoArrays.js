// Breakdown:
// 1. Create an empty array and store it in a variable called diffOfArr
// 2. Use map for the nums1 to find out the elements which does not exist in the second array and store it in a variable called answer1
// 3. Use map for the nums2 to find out the elements which does not exist in the first array and store it in a variabel called answer2
// 4. diffOfArr(answer1.slice(0,2))
// 5. diffOfArr(answer2.slice(0,2))
// 6. return diffOfArr

var findDifference = function (nums1, nums2) {
  const diffOfArr = [];
  const answer1 = nums1.map((num) => nums2.findIndex(num) === -1 && num);
  const answer2 = nums2.map((num) => !nums1.findIndex(num) === -1 && num);
  console.log(answer1, answer2);
  diffOfArr.push(answer1.slice(0, 2));
  diffOfArr.push(answer2.slice(0, 2));
  return diffOfArr;
};

// Problem link: https://leetcode.com/problems/find-the-difference-of-two-arrays/
