var mergeArrays = function (nums1, nums2) {
  const result = [];
  const idOf1 = nums1.map((num) => num[0]);
  const idOf2 = nums2.map((num) => num[0]);
  // ADD & PUSH COMMON/NON-COMMON VALUES FOR NUMS1
  for (let i = 0; i < nums1.length; i++) {
    if (idOf2.includes(idOf1[i])) {
      const indexOf2 = idOf2.indexOf(idOf1[i]);
      result.push([idOf1[i], nums1[i][1] + nums2[indexOf2][1]]);
    } else {
      result.push(nums1[i]);
    }
  }
  // PUSH NON COMMON VALUES FOR NUMS2
  for (let i = 0; i < nums2.length; i++) {
    if (!idOf1.includes(idOf2[i])) {
      result.push(nums2[i]);
    }
  }
  result.sort((a, b) => a[0] - b[0]);
  return result;
};

// Problem link: https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/
