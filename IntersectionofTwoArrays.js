var intersection = function (nums1, nums2) {
  if (nums1.length < nums2.length) {
    return [...new Set(nums1.filter((num, i) => nums2.includes(num)))];
  } else {
    return [...new Set(nums2.filter((num, i) => nums1.includes(num)))];
  }
};

// Problem link: https://leetcode.com/problems/intersection-of-two-arrays/description/
