var nextGreaterElement = function (nums1, nums2) {
  return nums1.map((num) => {
    const nextElementIndex = nums2.indexOf(num) + 1;
    for (let i = nextElementIndex; i < nums2.length; i++) {
      const nextElement = nums2[i];
      if (nextElement > num) {
        return nextElement;
      }
    }
    return -1;
  });
};

// Problem link: https://leetcode.com/problems/next-greater-element-i/
