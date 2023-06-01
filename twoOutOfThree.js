// Breakdown:
// High Level Overview: A value would be a distinct if it is present in either of two arrays.

// Step by Step:
// 1. Create an empty array called distinct array
// 2. First comparison: nums1 & nums2
// ===> values from nums1 are included in nums2, push that values into distinct array.
// 3. Second Comparison: nums2 & nums3
// ===> Values from nums2 are includes in nums3, push that values into distinct array.
// 4. Third Comparison: nums3 & nums1
// ===> Values from nums3 are included in nums1, push that values into distinct array.
// 5. Use Set to remove the duplicated
// 6. return distinct array.

var twoOutOfThree = function (nums1, nums2, nums3) {
  const distinctArr = [];
  distinctArr.push(...getTwoOfThreeValues(nums1, nums2));
  distinctArr.push(...getTwoOfThreeValues(nums2, nums3));
  distinctArr.push(...getTwoOfThreeValues(nums3, nums1));
  return [...new Set(distinctArr)];
};

function getTwoOfThreeValues(arr1, arr2) {
  return arr1.filter((num) => arr2.includes(num));
}

// Problem link: https://leetcode.com/problems/two-out-of-three/
